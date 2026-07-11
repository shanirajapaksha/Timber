export interface Project {
  id: string;
  client: string;
  title: string;
  description: string;
  period: string;
}

export interface Specification {
  key: string;
  value: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Client {
  id: string;
  name: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  points: string[];
}
