
export interface Experience {
  company: string;
  role: string;
  duration: string;
  points: string[];
}

export interface Skill {
  name: string;
  category: 'Professional' | 'Technical' | 'Soft Skills';
}

export interface Project {
  title: string;
  description: string;
  tag: string;
  image: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl?: string;
}
