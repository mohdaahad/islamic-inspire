
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, User, AlertCircle } from 'lucide-react';

const StudentPortal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    // In a real application, this would connect to a backend for authentication
    setError('');
    alert('Login functionality would connect to backend in a real application');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="py-16 bg-islamic-pattern min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card className="border-islamic-lightGreen shadow-lg">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-islamic-lightGreen rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-islamic-darkGreen" />
                  </div>
                  <CardTitle className="text-2xl text-islamic-darkGreen">Student Portal</CardTitle>
                  <CardDescription>
                    Sign in to access your courses, assignments, and grades
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-red-600 text-sm">{error}</span>
                    </div>
                  )}
                  
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="username" className="block text-sm font-medium text-islamic-navy">
                        Student ID / Username
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-islamic-navy/50" />
                        </div>
                        <Input
                          id="username"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="pl-10 border-islamic-lightGreen focus:border-islamic-green"
                          placeholder="Enter your student ID or username"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="password" className="block text-sm font-medium text-islamic-navy">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-islamic-navy/50" />
                        </div>
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 border-islamic-lightGreen focus:border-islamic-green"
                          placeholder="Enter your password"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-islamic-green focus:ring-islamic-green border-islamic-lightGreen rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-islamic-navy">
                          Remember me
                        </label>
                      </div>
                      
                      <div className="text-sm">
                        <a href="#" className="font-medium text-islamic-green hover:text-islamic-darkGreen">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-islamic-green hover:bg-islamic-darkGreen text-white py-6">
                      Sign in
                    </Button>
                  </form>
                </CardContent>
                
                <CardFooter className="flex flex-col space-y-4 px-6 pt-0 pb-6">
                  <div className="text-center text-sm text-islamic-navy">
                    <p>Need assistance? Contact the IT Help Desk at:</p>
                    <p className="font-medium">helpdesk@alhikma-college.org</p>
                  </div>
                </CardFooter>
              </Card>
              
              <div className="mt-8 text-center">
                <p className="text-islamic-navy text-sm">
                  First time accessing the portal? <a href="#" className="text-islamic-green font-medium">Activate your account</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentPortal;
