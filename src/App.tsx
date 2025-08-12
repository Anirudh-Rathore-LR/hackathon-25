import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import LoginPage from './components/Login/LoginPage';
import Dashboard from './pages/Dashboard';
import EmailCampaigns from './pages/EmailCampaigns';
import LeadManagement from './pages/LeadManagement';
import Analytics from './pages/Analytics';
import CustomReports from './pages/CustomReports';
import SocialMediaManagement from './pages/SocialMediaManagement';
import TaskAutomation from './pages/TaskAutomation';
import CustomerSupport from './pages/CustomerSupport';
import SalesForecasting from './pages/SalesForecasting';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="email-campaigns" element={<EmailCampaigns />} />
            <Route path="lead-management" element={<LeadManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="reports" element={<CustomReports />} />
            <Route path="social-media" element={<SocialMediaManagement />} />
            <Route path="automation" element={<TaskAutomation />} />
            <Route path="support" element={<CustomerSupport />} />
            <Route path="forecasting" element={<SalesForecasting />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;