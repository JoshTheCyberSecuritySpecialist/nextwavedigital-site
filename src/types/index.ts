export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export interface PackagePlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  color: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  details: string[];
  tools: string[];
  outcome: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export interface VideoContent {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  date: string;
}

export interface Tool {
  name: string;
  icon: string;
  description: string;
}