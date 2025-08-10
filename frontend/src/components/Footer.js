'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/products', label: 'Products' },
        { href: '/gallery', label: 'Gallery' },
      ],
    },
    {
      title: 'Support',
      links: [
        { href: '/faq', label: 'FAQ' },
        { href: '/order', label: 'Order' },
        { href: '/returns', label: 'Returns' },
        { href: '/contact', label: 'Contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://www.facebook.com/people/Yasoda-Chumin-Tatha-Sauce-Udyog/61578874444509/?rdid=2kU8nfnsVT8m42OI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Qj47duB5v%2F', label: 'Instagram' },
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/people/Yasoda-Chumin-Tatha-Sauce-Udyog/61578874444509/?rdid=2kU8nfnsVT8m42OI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Qj47duB5v%2F', label: 'Facebook' },
    { icon: <FaYoutube />, href: 'https://www.facebook.com/people/Yasoda-Chumin-Tatha-Sauce-Udyog/61578874444509/?rdid=2kU8nfnsVT8m42OI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Qj47duB5v%2F', label: 'YouTube' },
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: '+977 9804583067' },
    { icon: <FaEnvelope />, text: 'yasodachumintathasauceudyog@gmail.com' },
    { icon: <FaMapMarkerAlt />, text: 'Madhuban, 06, Sanoshree, Bardiya, Nepal' },
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white">
      {/* Wave divider */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-current text-white w-full h-16"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-full p-2">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 w-10 h-10 rounded-full" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Yasoda Chowmein</h2>
            </div>
            <p className="text-orange-100 max-w-xs">
              Authentic flavors crafted with passion. Bringing you the best noodle experience since 2076 B.S.
            </p>
            
            {/* Social media */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-5">
              <h3 className="text-lg font-semibold tracking-wide border-b border-orange-400/30 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-orange-100 hover:text-white transition-colors duration-300 flex items-start group"
                    >
                      <span className="bg-orange-500 group-hover:bg-amber-400 h-1 w-1 rounded-full mt-2.5 mr-3 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold tracking-wide border-b border-orange-400/30 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-300 mt-0.5 mr-3">{item.icon}</span>
                  <span className="text-orange-100">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-500/30 my-10" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 pb-8">
          <p className="text-orange-200 text-sm">
            &copy; {currentYear} Yasoda Chowmein. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-orange-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-orange-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-orange-200 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
         <div className="border-t border-orange-500/30 my-10" />

        {/* Made by */}
<div className="flex justify-center pt-1 pb-2">
  <p className="text-sm text-center text-orange-200/90 hover:text-orange-100 transition-all duration-300">
    Crafted with ❤️ by {' '}
    <a 
      href="https://pandeyj.com.np" 
      className="font-medium text-orange-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 decoration-amber-400/60"
    >
      JAYADEV PANDEY
    </a>
  </p>
</div>

      </div>
    </footer>
  );
}