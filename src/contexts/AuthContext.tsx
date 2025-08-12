import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User, AccessToken, FeatureFlag } from '../types/auth';
import { AVAILABLE_FEATURES } from '../types/auth';
import axios from "axios";
import.meta.env.VITE_DOMAIN


interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  hasFeature: (feature: string) => boolean;
  isAuthenticated: boolean;
  enabledFeatures: string[];
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// Pseudo API data - replace with actual API call later
const mockFeatureFlags: FeatureFlag[] = [
  {
    Id: '1',
    OrgId: 'org-123',
    FeatureFlagId: 'email_campaigns',
    State: true,
    CreatedDate: '2024-01-01T00:00:00Z',
    ModifiedDate: '2024-01-15T00:00:00Z'
  },
  {
    Id: '2',
    OrgId: 'org-123',
    FeatureFlagId: 'lead_management',
    State: true,
    CreatedDate: '2024-01-01T00:00:00Z',
    ModifiedDate: '2024-01-15T00:00:00Z'
  },
  {
    Id: '3',
    OrgId: 'org-123',
    FeatureFlagId: 'analytics_dashboard',
    State: true,
    CreatedDate: '2024-01-01T00:00:00Z',
    ModifiedDate: '2024-01-15T00:00:00Z'
  },
  {
    Id: '4',
    OrgId: 'org-123',
    FeatureFlagId: 'chat_support',
    State: true,
    CreatedDate: '2024-01-01T00:00:00Z',
    ModifiedDate: '2024-01-15T00:00:00Z'
  },
  {
    Id: '5',
    OrgId: 'org-123',
    FeatureFlagId: 'custom_reports',
    State: false,
    CreatedDate: '2024-01-01T00:00:00Z',
    ModifiedDate: '2024-01-15T00:00:00Z'
  },
  {
    Id: '6',
    OrgId: 'org-123',
    FeatureFlagId: 'social_media_management',
    State: true,
    CreatedDate: '2024-01-01T00:00:00Z',
    ModifiedDate: '2024-01-15T00:00:00Z'
  },
  {
    Id: '7',
    OrgId: 'org-123',
    FeatureFlagId: 'task_automation',
    State: true,
    CreatedDate: '2024-01-01T00:00:00Z',
    ModifiedDate: '2024-01-15T00:00:00Z'
  },
  {
    Id: '8',
    OrgId: 'org-123',
    FeatureFlagId: 'customer_support',
    State: true,
    CreatedDate: '2024-01-01T00:00:00Z',
    ModifiedDate: '2024-01-15T00:00:00Z'
  },
  {
    Id: '9',
    OrgId: 'org-123',
    FeatureFlagId: 'sales_forecasting',
    State: true,
    CreatedDate: '2024-01-01T00:00:00Z',
    ModifiedDate: '2024-01-15T00:00:00Z'
  }
];

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [enabledFeatures, setEnabledFeatures] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const decodeToken = (token: string): AccessToken | null => {
    try {
      // Simple JWT decode (for demo purposes - in production use proper JWT library)
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload as AccessToken;
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  };

  const fetchFeatureFlags = async (): Promise<string[]> => {
    try {
      setIsLoading(true);
      // TODO: Replace with actual API call
      // const response = await fetch('/api/feature-flags', {
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      //   }
      // });
      // const featureFlags: FeatureFlag[] = await response.json();
      
      // Using mock data for now
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      const featureFlags = mockFeatureFlags;
      
      const enabled = featureFlags
        .filter(flag => flag.State === true)
        .map(flag => flag.FeatureFlagId);
      
      return enabled;
    } catch (error) {
      console.error('Failed to fetch feature flags:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (token: string) => {
    const decoded = decodeToken(token);
    if (decoded) {
      const userData: User = {
        id: decoded.sub,
        email: decoded.email,
        name: decoded.name,
        features: decoded.features || []
      };
      setUser(userData);
      localStorage.setItem('accessToken', token);
      
      // Fetch feature flags after login
      const features = await fetchFeatureFlags();
      setEnabledFeatures(features);
    }
  };

  const logout = () => {
    // TODO: Add actual logout API call here
    // if (window.LoginRadiusSDK) {
    //   window.LoginRadiusSDK.logout();
    // }
    axios
      .get(`https://${import.meta.env.VITE_DOMAIN}/ssologin/logout`, {
        withCredentials: true,
      })
      .then(() => {
        // this.props.logoutAction(true);
        // this.props.i18nAction();
        setUser(null);
        setEnabledFeatures([]);
        localStorage.removeItem('accessToken');
        window.location.href = "/login";
      });
  };

  const hasFeature = (feature: string): boolean => {
    return enabledFeatures.includes(feature);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const decoded = decodeToken(token);
        if (decoded && decoded.exp * 1000 > Date.now()) {
          await login(token);
        } else {
          logout();
        }
      } else {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Demo login function for testing
  const demoLogin = async () => {
    // Create a demo JWT token with all features
    const demoPayload = {
      sub: 'demo-user-123',
      email: 'demo@example.com',
      name: 'Demo User',
      features: Object.values(AVAILABLE_FEATURES),
      exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour
      iat: Math.floor(Date.now() / 1000)
    };
    
    // Simple base64 encoding for demo (not secure)
    const header = btoa(JSON.stringify({ typ: 'JWT', alg: 'HS256' }));
    const payload = btoa(JSON.stringify(demoPayload));
    const signature = btoa('demo-signature');
    const token = `${header}.${payload}.${signature}`;
    
    await login(token);
  };

  // Auto demo login for hackathon demo
  useEffect(() => {
    if (!user && !isLoading) {
      demoLogin();
    }
  }, [user, isLoading]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        hasFeature,
        isAuthenticated: !!user,
        enabledFeatures,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};