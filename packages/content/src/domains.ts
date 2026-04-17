import type { DomainMeta } from './types';

export const DOMAINS: DomainMeta[] = [
  {
    id: 'cyber',
    label: 'Cybersecurity',
    icon: '🔐',
    color: '#EF4444',
    description: 'Threats, defenses, and security engineering',
  },
  {
    id: 'devops',
    label: 'DevOps',
    icon: '⚙️',
    color: '#F97316',
    description: 'CI/CD, containers, and platform engineering',
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: '☁️',
    color: '#3B82F6',
    description: 'AWS, Azure, GCP, and cloud-native patterns',
  },
  {
    id: 'networking',
    label: 'Networking',
    icon: '🌐',
    color: '#10B981',
    description: 'Protocols, routing, and network architecture',
  },
  {
    id: 'data',
    label: 'Data',
    icon: '🗄️',
    color: '#8B5CF6',
    description: 'Databases, pipelines, and data engineering',
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: '🤖',
    color: '#EC4899',
    description: 'Machine learning, LLMs, and AI infrastructure',
  },
];
