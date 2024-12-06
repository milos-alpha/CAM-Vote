"use client"

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const VoteNow = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  
  const [formData, setFormData] = useState({
    full_names: '',
    username: '',
    email: '',
    phone_number: '',
    birthdate: '',
    placeBirth: '',
    residence: '',
    password: '',
    confirm_password: '',
    profile_picture: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }
      // Validate file size (e.g., 5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

      setFormData(prevState => ({
        ...prevState,
        profile_picture: file
      }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    // Validate phone number (basic format)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone_number)) {
      setError('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const formDataToSend = new FormData();
    
    // Append all form fields
    Object.keys(formData).forEach(key => {
      if (key === 'profile_picture' && formData[key]) {
        formDataToSend.append(key, formData[key]);
      } else if (key !== 'profile_picture') {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch('http://127.0.0.1:8000/auth/register/', {
        method: 'POST',
        body: formDataToSend,
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        router.push('/vote');
      } else {
        setError(data.error || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center w-full min-h-[90vh] py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Create Your Voter's Account</h1>
        
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Picture Preview */}
            {previewImage && (
              <div className="mb-4 flex justify-center">
                <img 
                  src={previewImage} 
                  alt="Profile Preview" 
                  className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
                />
              </div>
            )}

            {/* Form Fields */}
            <div>
              <label htmlFor="full_names" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                id="full_names"
                name="full_names"
                type="text"
                value={formData.full_names}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Choose a username"
                pattern="^[\w.@+-]+$"
                title="Letters, digits and @/./+/-/_ only"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                id="phone_number"
                name="phone_number"
                type="tel"
                value={formData.phone_number}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <Input
                id="birthdate"
                name="birthdate"
                type="date"
                value={formData.birthdate}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="placeBirth" className="block text-sm font-medium text-gray-700 mb-1">
                Place of Birth
              </label>
              <Input
                id="placeBirth"
                name="placeBirth"
                type="text"
                value={formData.placeBirth}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your place of birth"
              />
            </div>

            <div>
              <label htmlFor="residence" className="block text-sm font-medium text-gray-700 mb-1">
                Current Location
              </label>
              <Input
                id="residence"
                name="residence"
                type="text"
                value={formData.residence}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your current location"
              />
            </div>

            <div>
              <label htmlFor="profile_picture" className="block text-sm font-medium text-gray-700 mb-1">
                Profile Picture
              </label>
              <Input
                id="profile_picture"
                name="profile_picture"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Enter your password"
                minLength={8}
              />
            </div>

            <div>
              <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <Input
                id="confirm_password"
                name="confirm_password"
                type="password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed mt-6"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VoteNow;