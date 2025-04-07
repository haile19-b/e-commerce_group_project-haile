"use client";
import { useState } from 'react';
import { Card, Button, Badge, Avatar } from 'flowbite-react';
import { FiUser, FiShoppingBag, FiSettings, FiLogOut } from 'react-icons/fi';
import AccountSettings from './AccountSetting';
import AccountTabs from './AccountTabs';

export default function AccountProfile({ onSettingsClick }) {
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    memberSince: 'January 2023',
    avatar: 'https://t3.ftcdn.net/jpg/02/83/12/98/360_F_283129831_MTTjxBv6zrcSREEsmLgvLQJFU0HyW2ui.jpg',
    rewardsPoints: 1250
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const handleSettingsClick = () => {
    setShowSettings(true);
    setShowDropdown(false);
    onSettingsClick?.();
  };

  return (
    <Card className="mb-6 relative">
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Avatar 
          img={userData.avatar} 
          alt="User profile" 
          size="xl" 
          rounded 
          className="shadow-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{userData.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{userData.email}</p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Badge color="purple" icon={FiUser}>
              Member since {userData.memberSince}
            </Badge>
            <Badge color="yellow" icon={FiShoppingBag}>
              {userData.rewardsPoints} Rewards Points
            </Badge>
          </div>
        </div>
        
        {/* Functional Dropdown */}
        <div className="absolute top-4 right-4">
          <div className="relative inline-block">
            <Button onClick={toggleDropdown}>Account</Button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 z-10 border border-gray-200 dark:border-gray-700">
                <div className="py-1">
                  <button 
                    onClick={handleSettingsClick}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left"
                  >
                    <FiSettings className="inline mr-2" /> Settings
                  </button>
                  <button className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left">
                    <FiLogOut className="inline mr-2" /> Logout
                  </button>
                  <button className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left">
                    <FiLogOut className="inline mr-2" /> Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showSettings && <AccountSettings onClose={() => setShowSettings(false)} />}
      <AccountTabs/>
    </Card>
  );
}