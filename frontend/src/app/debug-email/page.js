'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailDebugTest() {
  const [debugInfo, setDebugInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState({
    serviceId: 'service_9temu0w',
    customerTemplateId: 'template_ga091vx', 
    adminTemplateId: 'template_9dnum39',
    publicKey: 'YiSBRLxXUr9r3J_Vb'
  });

  useEffect(() => {
    try {
      emailjs.init(config.publicKey);
      setDebugInfo(prev => prev + '✅ EmailJS initialized successfully\n');
    } catch (error) {
      setDebugInfo(prev => prev + `❌ EmailJS init failed: ${error.message}\n`);
    }
  }, [config.publicKey]);

  const testEmailJSConfig = async () => {
    setIsLoading(true);
    setDebugInfo('🔍 Starting EmailJS test...\n');

    try {
      // Test parameters
      const testParams = {
        customer_name: 'Test Customer',
        customer_email: 'test@example.com',
        order_id: 'TEST-123456',
        order_total: 'Rs. 150',
        cart_items: 'Test Product x1 - Rs. 100',
        order_date: new Date().toLocaleString(),
        payment_method: 'Cash on Delivery',
        customer_phone: '+977-9800000000',
        customer_address: 'Test Address, Kathmandu',
        delivery_address: 'Test Address, Kathmandu',
        special_instructions: 'Test order'
      };

      setDebugInfo(prev => prev + '📤 Testing customer email...\n');
      
      const customerResult = await emailjs.send(
        config.serviceId,
        config.customerTemplateId,
        testParams
      );
      
      setDebugInfo(prev => prev + `✅ Customer email SUCCESS: ${customerResult.status}\n`);

    } catch (error) {
      setDebugInfo(prev => prev + `❌ ERROR: ${error.text || error.message}\n`);
      console.error('Full error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">📧 EmailJS Debug Tool</h1>
        
        {/* Config Form */}
        <div className="mb-6 p-4 bg-blue-500 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Configuration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Service ID</label>
              <input
                type="text"
                value={config.serviceId}
                onChange={(e) => setConfig({...config, serviceId: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Public Key</label>
              <input
                type="text"
                value={config.publicKey}
                onChange={(e) => setConfig({...config, publicKey: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Customer Template ID</label>
              <input
                type="text"
                value={config.customerTemplateId}
                onChange={(e) => setConfig({...config, customerTemplateId: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Admin Template ID</label>
              <input
                type="text"
                value={config.adminTemplateId}
                onChange={(e) => setConfig({...config, adminTemplateId: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Test Button */}
        <button
          onClick={testEmailJSConfig}
          disabled={isLoading}
          className={`px-6 py-3 rounded-lg font-medium mb-6 ${
            isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          {isLoading ? '🔄 Testing...' : '🧪 Test Email Sending'}
        </button>

        {/* Debug Output */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Debug Output</h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm h-64 overflow-y-auto">
            <pre>{debugInfo || 'Click test button to start...'}</pre>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">How to Get Your EmailJS Credentials:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-700">
            <li>Go to <a href="https://dashboard.emailjs.com" className="underline">EmailJS Dashboard</a></li>
            <li><strong>Service ID:</strong> Go to &quot;Email Services&quot; → Click your service → Copy Service ID</li>
            <li><strong>Public Key:</strong> Go to &quot;Account&quot; → &quot;General&quot; → Copy Public Key</li>
            <li><strong>Template IDs:</strong> Go to &quot;Email Templates&quot; → Copy each Template ID</li>
            <li>Make sure templates are &quot;Published&quot; not &quot;Draft&quot;</li>
          </ol>
        </div>
      </div>
    </div>
  );
}