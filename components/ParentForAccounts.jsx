"use client";
import { useState } from 'react';
import AccountProfile from './Account';
import AccountSettings from './AccountSetting';
import AccountTabs from './AccountTabs';


export default function UserAccountPage() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <AccountProfile onSettingsClick={() => setShowSettings(true)} />
        
        {showSettings ? (
          <AccountSettings onClose={() => setShowSettings(false)} />
        ) : (
          <AccountTabs />
        )}
      </div>
    </div>
  );
}