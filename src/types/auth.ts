export interface User {
  id: string;
  email: string;
  name: string;
  features: string[];
}

export interface AccessToken {
  sub: string;
  email: string;
  name: string;
  features: string[];
  exp: number;
  iat: number;
}

export const AVAILABLE_FEATURES = {
  EMAIL_CAMPAIGNS: 'email_campaigns',
  LEAD_MANAGEMENT: 'lead_management',
  ANALYTICS_DASHBOARD: 'analytics_dashboard',
  CHAT_SUPPORT: 'chat_support',
  CUSTOM_REPORTS: 'custom_reports'
} as const;

export type FeatureType = typeof AVAILABLE_FEATURES[keyof typeof AVAILABLE_FEATURES];