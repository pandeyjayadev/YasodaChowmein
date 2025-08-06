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
                className="block w-full py-2 px-4 border border-orange-500 rounded-md text-orange-500 hover:bg-orange-50 text-center font-medium transition-colors"
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
              <button className="w-full py-2 px-4 bg-orange-500 rounded-md text-white hover:bg-orange-600 text-center font-medium transition-colors">
                Make Reservation
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
              <button className="w-full py-2 px-4 bg-gray-900 rounded-md text-white hover:bg-gray-800 text-center font-medium transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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