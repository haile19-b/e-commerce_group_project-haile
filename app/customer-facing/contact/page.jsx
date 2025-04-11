import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions? We're here to help! Reach out to our team and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaEnvelope className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">support@ecommerce.com</p>
              <p className="text-gray-600">sales@ecommerce.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FaPhone className="text-green-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Mon-Fri: 9am-5pm</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaMapMarkerAlt className="text-purple-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Visit Us</h3>
              <p className="text-gray-600">123 Ecommerce Street</p>
              <p className="text-gray-600">San Francisco, CA 94107</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <FaClock className="text-yellow-600 text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
              <p className="text-gray-600">Saturday: 10am - 2pm</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-sky-500 hover:text-sky-700">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" value="Your Name" />
              <TextInput id="name" type="text" required />
            </div>
            <div>
              <Label htmlFor="email" value="Your Email" />
              <TextInput id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="subject" value="Subject" />
              <TextInput id="subject" type="text" required />
            </div>
            <div>
              <Label htmlFor="message" value="Your Message" />
              <Textarea id="message" rows={5} required />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default ContactPage;