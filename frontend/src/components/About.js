'use client';

import { MapPinIcon, PhoneIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { contactInfo } from '../lib/contactData';

export default function ContactAbout() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Find <span className="text-orange-500">Us</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our factory or get in touch—we&apos;d love to serve you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Card 1 - Location */}
          <div className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 p-4 rounded-full">
              <MapPinIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900 text-center">Our Location</h3>
            <p className="mt-4 text-gray-600 text-center">
              {contactInfo.location.address}
            </p>
            <div className="mt-6">
              <a 
                  href={contactInfo.location.mapLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-2 px-4 bg-transparent border border-orange-500 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white text-center font-medium transition-colors shadow-md hover:shadow-lg"
                >
                  View on Map
                </a>
            </div>
          </div>

          {/* Contact Card 2 - Hours */}
          <div className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 p-4 rounded-full">
              <ClockIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900 text-center">Opening Hours</h3>
            <div className="mt-4 space-y-2 text-gray-600">
              {contactInfo.openingHours.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.day}</span>
                  <span className="font-medium">{item.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
                <button 
                onClick={() => window.location.href = '/order'}
                className="w-full py-2 px-4 bg-transparent border border-orange-500 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white text-center font-medium transition-colors shadow-md hover:shadow-lg"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Contact Card 3 - Contact */}
          <div className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 p-4 rounded-full">
              <PhoneIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900 text-center">Contact Us</h3>
            <div className="mt-4 space-y-3 text-gray-600">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-orange-500 mr-3" />
                <a href={`tel:${contactInfo.phone.sales}`} className="hover:text-orange-500">{contactInfo.phone.sales}</a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-orange-500 mr-3" />
                <a href={`mailto:${contactInfo.email.general}`} className="hover:text-orange-500">{contactInfo.email.general}</a>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 px-4 bg-transparent border border-orange-500 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white text-center font-medium transition-colors shadow-md hover:shadow-lg flex items-center justify-center">
                {/* Facebook Icon SVG */}
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0"/>
                </svg>
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}