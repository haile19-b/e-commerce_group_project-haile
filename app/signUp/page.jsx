"use client"
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaCheck } from 'react-icons/fa';
import { Button, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';


function SignupPage() {

const router = useRouter();


  // State to store form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Validate terms agreement
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and privacy policy");
      return;
    }

    console.log('Form submitted:', {
      username: formData.username,
      email: formData.email,
      password: formData.password
    });

      router.push('/customer-facing/products');

    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    }); 


    
    // Here you would typically send the data to your backend
    // Example: registerUser(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username" value="Username" />
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <TextInput
                  id="username"
                  name="username"
                  type="text"
                  placeholder='User Name '
                  autoComplete="username"
                  required
                  className="pl-10 w-full"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" value="Email address" />
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder='example@gmail.com'
                  autoComplete="email"
                  required
                  className="pl-10 w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" value="Password" />
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder='password'
                  autoComplete="new-password"
                  required
                  className="pl-10 w-full"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Must be at least 8 characters
              </p>
            </div>

            <div>
              <Label htmlFor="confirmPassword" value="Confirm Password" />
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCheck className="h-5 w-5 text-gray-400" />
                </div>
                <TextInput
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder='confirm-password'
                  autoComplete="new-password"
                  required
                  className="pl-10 w-full"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
                I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
              </label>
            </div>

            <div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Create Account
              </Button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default SignupPage;