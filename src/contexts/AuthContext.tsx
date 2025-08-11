import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User, AccessToken } from '../types/auth';
import { AVAILABLE_FEATURES } from '../types/auth';
import { enabledFeatures } from '../config';

interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  hasFeature: (feature: string) => boolean;
  isAuthenticated: boolean;
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

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

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

  const login = (token: string) => {
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
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('accessToken');
  };

  const hasFeature = (feature: string): boolean => {
    return enabledFeatures.includes(feature);
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decoded = decodeToken(token);
      if (decoded && decoded.exp * 1000 > Date.now()) {
        login(token);
      } else {
        logout();
      }
    }
  }, []);

  // Demo login function for testing
  const demoLogin = () => {
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
    
    login(token);
  };

  // Auto demo login for hackathon demo
  useEffect(() => {
    if (!user) {
      demoLogin();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        hasFeature,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};