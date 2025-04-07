"use client";
import { Card, Button, TextInput } from 'flowbite-react';

export default function AccountSettings({ onClose }) {
  return (
    <Card className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Account Settings</h2>
        <Button color="gray" onClick={onClose}>Close</Button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Name</label>
          <TextInput defaultValue="Alex Johnson" />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <TextInput defaultValue="alex.johnson@example.com" />
        </div>
        <Button color="blue">Save Changes</Button>
      </div>
    </Card>
  );
}