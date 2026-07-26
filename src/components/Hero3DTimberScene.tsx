import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function createWoodTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  const gradient = ctx.createLinearGradient(0, 0, 256, 0);
  gradient.addColorStop(0, '#6f4326');
  gradient.addColorStop(0.35, '#b87942');
  gradient.addColorStop(0.65, '#8c5730');
  gradient.addColorStop(1, '#d19a5d');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  for (let i = 0; i < 34; i += 1) {
    const y = i * 8 + Math.sin(i * 1.7) * 3;
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (let x = 0; x <= 256; x += 16) {
      ctx.lineTo(x, y + Math.sin(x * 0.04 + i) * 4);
    }
    ctx.strokeStyle = i % 3 === 0 ? 'rgba(48, 25, 13, 0.22)' : 'rgba(255, 226, 176, 0.16)';
    ctx.lineWidth = i % 5 === 0 ? 2 : 1;
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2.5, 1);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export default function Hero3DTimberScene() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.4, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const woodTexture = createWoodTexture();
    const group = new THREE.Group();
    scene.add(group);

    const timberMaterial = new THREE.MeshStandardMaterial({
      map: woodTexture ?? undefined,
      color: 0xb87942,
      roughness: 0.52,
      metalness: 0.04,
    });
    const darkTimberMaterial = new THREE.MeshStandardMaterial({
      map: woodTexture ?? undefined,
      color: 0x7a4a2a,
      roughness: 0.64,
      metalness: 0.02,
    });
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0xc49a62,
      roughness: 0.42,
      metalness: 0.18,
      transparent: true,
      opacity: 0.72,
    });

    const slats: THREE.Mesh[] = [];
    const slatGeometry = new THREE.BoxGeometry(0.34, 4.8, 0.16);
    for (let i = 0; i < 18; i += 1) {
      const slat = new THREE.Mesh(slatGeometry, i % 3 === 0 ? darkTimberMaterial : timberMaterial);
      slat.position.set((i - 8.5) * 0.42, Math.sin(i * 0.9) * 0.18, Math.sin(i * 0.45) * 0.35);
      slat.rotation.set(0.18 + Math.sin(i) * 0.08, -0.62 + i * 0.055, (i - 9) * 0.015);
      slat.castShadow = false;
      group.add(slat);
      slats.push(slat);
    }

    const frameGeometry = new THREE.BoxGeometry(5.8, 0.16, 0.18);
    const verticalGeometry = new THREE.BoxGeometry(0.16, 3.7, 0.18);
    const framePieces = [
      { geometry: frameGeometry, position: [0, 2.1, -0.55], rotation: [0.15, -0.42, 0.02] },
      { geometry: frameGeometry, position: [0, -2.1, -0.55], rotation: [0.15, -0.42, 0.02] },
      { geometry: verticalGeometry, position: [-2.98, 0, -0.55], rotation: [0.15, -0.42, 0.02] },
      { geometry: verticalGeometry, position: [2.98, 0, -0.55], rotation: [0.15, -0.42, 0.02] },
    ];

    framePieces.forEach((piece) => {
      const mesh = new THREE.Mesh(piece.geometry, edgeMaterial);
      mesh.position.fromArray(piece.position);
      mesh.rotation.set(piece.rotation[0], piece.rotation[1], piece.rotation[2]);
      group.add(mesh);
    });

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xc49a62,
      size: 0.028,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    });
    const pointPositions = new Float32Array(140 * 3);
    for (let i = 0; i < 140; i += 1) {
      pointPositions[i * 3] = (Math.random() - 0.5) * 13;
      pointPositions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      pointPositions[i * 3 + 2] = -2 - Math.random() * 5;
    }
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    const dust = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(dust);

    scene.add(new THREE.HemisphereLight(0xfff1d6, 0x2f251d, 1.7));
    const keyLight = new THREE.DirectionalLight(0xffd49a, 3.2);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0xc49a62, 8, 18);
    rimLight.position.set(-4, -1, 4);
    scene.add(rimLight);

    const pointer = new THREE.Vector2(0, 0);
    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    host.addEventListener('pointermove', onPointerMove);

    const resize = () => {
      const width = Math.max(host.clientWidth, 1);
      const height = Math.max(host.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    let animationFrame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        group.rotation.y = Math.sin(elapsed * 0.22) * 0.08 + pointer.x * 0.08;
        group.rotation.x = pointer.y * 0.035;
        dust.rotation.y = elapsed * 0.025;
        slats.forEach((slat, index) => {
          slat.position.y += Math.sin(elapsed * 0.9 + index * 0.7) * 0.0018;
          slat.rotation.z += Math.sin(elapsed * 0.7 + index) * 0.0005;
        });
      }

      camera.position.x += (pointer.x * 0.4 - camera.position.x) * 0.035;
      camera.position.y += (0.4 + pointer.y * 0.2 - camera.position.y) * 0.035;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      host.removeEventListener('pointermove', onPointerMove);
      renderer.dispose();
      slatGeometry.dispose();
      frameGeometry.dispose();
      verticalGeometry.dispose();
      timberMaterial.dispose();
      darkTimberMaterial.dispose();
      edgeMaterial.dispose();
      pointsMaterial.dispose();
      pointsGeometry.dispose();
      woodTexture?.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="absolute inset-0 pointer-events-auto opacity-70"
      aria-hidden="true"
      id="hero-3d-timber-scene"
    />
  );
}
