import axios from "axios";
import React, { useEffect } from "react";


import { useNavigate } from 'react-router-dom';
// Extend the Window interface to include LoginRadiusSDK
declare global {
  interface Window {
    LoginRadiusSDK?: any;
  }
}

// Define or import InitLoginSchema type
// Replace the below definition with the correct one if it exists elsewhere
export interface InitLoginSchema {
  isSuccess: boolean;
  isLoading: boolean;
  // Add other properties as needed
}

export interface LoginProps {
}

const Login: React.FC<LoginProps> = () => {
    const navigate = useNavigate();
  
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://auth-dev.lrinternal.com/LoginRadiusV3.css';
    link.id = 'loginradius-css';
    document.head.appendChild(link);

    // Initialize LoginRadius SDK or any other necessary setup
    axios
      .get(`https://${import.meta.env.VITE_DOMAIN}/ssologin/login`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data && res.data.token) {
          //redirect to dashboard
          localStorage.setItem('accessToken', res.data.token);
          navigate('/dashboard', { replace: true });
        } else {
          if (window.LoginRadiusSDK) {
            const commonOptions = {
              apiKey:"f48e819b-3860-4184-94fd-f60400dca5d4",
            };
            const LRObject = new window.LoginRadiusSDK(commonOptions);
            LRObject.init("login", {
              container: "auth-container",
              isForgotpassword: false,
              onSuccess: function (response : any) {
                //redirect to dashboard
                localStorage.setItem('accessToken', response.access_token);
                 navigate('/dashboard', { replace: true });
                // axios.post('http://localhost:8080/login', null, {
                //   params: {
                //     access_token: response.access_token,
                //     uid: response.Profile.Uid
                //   }
                // })
                //   .then((res:any) => {
                //     localStorage.setItem('loginResponse',res.Data)

                   
                //   })
                //   .catch((error) => {
                //     console.error("Error during login:", error);
                //   });
              },
            });
          }
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
      return () => {
          document.getElementById("loginradius-css")?.remove();
      };
  }, []);

  // useEffect(() => {
  //   if (login.isSuccess) {
  //     window.location.href = "/dashboard";
  //   }
  // }, [login.isLoading]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div id="auth-container"></div>
    </div>
  );
};

export default Login

// const LoginPage: React.FC = () => {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/dashboard');
//     }
//   }, [isAuthenticated, navigate]);

//   useEffect(() => {
//     // LoginRadius script loading
//     const script = document.createElement('script');
//     script.src = 'https://auth.lrcontent.com/v2/js/LoginRadiusV2.js';
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       // Initialize LoginRadius (replace with your actual API key)
//       if ((window as any).LoginRadiusV2) {
//         const lrv2 = new (window as any).LoginRadiusV2({
//           apikey: 'your-loginradius-api-key-here',
//           appName: 'your-app-name',
//           hashTemplate: true,
//           sott: 'your-sott-here',
//           verificationUrl: window.location.origin + '/auth.aspx',
//           resetPasswordUrl: window.location.origin + '/auth.aspx',
//           formValidationMessage: true
//         });

//         // Initialize login form
//         lrv2.util.ready(() => {
//           lrv2.init('login', {
//             onSuccess: (response: any) => {
//               console.log('LoginRadius Success:', response);
//               // Handle successful login
//             },
//             onError: (error: any) => {
//               console.log('LoginRadius Error:', error);
//             },
//             container: 'login-container'
//           });
//         });
//       }
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
//       <div className="max-w-6xl w-full">
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           <div className="flex flex-col lg:flex-row">
//             {/* Left Side - Branding */}
//             <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 flex flex-col justify-center">
//               <div className="text-white">
//                 <div className="flex items-center space-x-3 mb-8">
//                   <Building2 className="h-12 w-12" />
//                   <h1 className="text-4xl font-bold">V2V CRM</h1>
//                 </div>
//                 <h2 className="text-2xl font-light mb-6">
//                   Your Complete Customer Relationship Management Solution
//                 </h2>
//                 <p className="text-blue-100 mb-8">
//                   Streamline your business processes with our comprehensive CRM platform featuring advanced analytics, lead management, and automated campaigns.
//                 </p>
                
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <Shield className="h-6 w-6 text-blue-200" />
//                     <span>Enterprise-grade security</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <Users className="h-6 w-6 text-blue-200" />
//                     <span>Advanced lead management</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <BarChart3 className="h-6 w-6 text-blue-200" />
//                     <span>Real-time analytics</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Login Form */}
//             <div className="lg:w-1/2 p-12">
//               <div className="max-w-md mx-auto">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h3>
//                 <p className="text-gray-600 mb-8">Sign in to your account to continue</p>

//                 {/* Demo Login Button */}
//                 <div className="mb-6">
//                   <button
//                     onClick={() => window.location.reload()}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
//                   >
//                     Demo Login (Auto-login enabled)
//                   </button>
//                 </div>

//                 <div className="relative mb-6">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t border-gray-300" />
//                   </div>
//                   <div className="relative flex justify-center text-sm">
//                     <span className="px-2 bg-white text-gray-500">Or continue with LoginRadius</span>
//                   </div>
//                 </div>

//                 {/* LoginRadius Integration Container */}
//                 <div id="login-container" className="space-y-4">
//                   <div className="bg-gray-50 p-6 rounded-lg text-center">
//                     <p className="text-sm text-gray-600 mb-4">
//                       LoginRadius integration placeholder
//                     </p>
//                     <p className="text-xs text-gray-500">
//                       Replace 'your-loginradius-api-key-here' with your actual API key in the code
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-8 text-center">
//                   <p className="text-sm text-gray-600">
//                     Don't have an account?{' '}
//                     <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
//                       Sign up for free
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

//export default LoginPage;