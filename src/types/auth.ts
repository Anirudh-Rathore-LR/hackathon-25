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

export interface FeatureFlag {
  Id: string;
  OrgId: string;
  FeatureFlagId: string;
  State: boolean;
  CreatedDate: string;
  ModifiedDate: string;
}

export const AVAILABLE_FEATURES = {
  EMAIL_CAMPAIGNS: 'email_campaigns',
  LEAD_MANAGEMENT: 'lead_management',
  ANALYTICS_DASHBOARD: 'analytics_dashboard',
  CHAT_SUPPORT: 'chat_support',
  CUSTOM_REPORTS: 'custom_reports',
  SOCIAL_MEDIA_MANAGEMENT: 'social_media_management',
  TASK_AUTOMATION: 'task_automation',
  CUSTOMER_SUPPORT: 'customer_support',
  INVENTORY_MANAGEMENT: 'inventory_management',
  SALES_FORECASTING: 'sales_forecasting',
  DOCUMENT_MANAGEMENT: 'document_management',
  TEAM_COLLABORATION: 'team_collaboration',
  API_INTEGRATIONS: 'api_integrations'
} as const;

export type FeatureType = typeof AVAILABLE_FEATURES[keyof typeof AVAILABLE_FEATURES];