export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}
