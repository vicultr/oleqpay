"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Copy, Check } from "lucide-react";

export default function APIDocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      id: "initialize",
      title: "Initialize Transaction",
      method: "POST",
      endpoint: "/api/v1/transaction/initialize",
      description: "Initialize a payment transaction and receive an authorization URL to complete the payment.",
      parameters: [
        { name: "email", type: "string", required: true, description: "Customer's email address" },
        { name: "amount", type: "integer", required: true, description: "Amount in cents (e.g., 10000 = $100)" },
        { name: "reference", type: "string", required: false, description: "Unique transaction reference" },
        { name: "callback_url", type: "string", required: false, description: "URL to redirect after payment" },
      ],
      curlExample: `curl https://api.oleqpay.com/api/v1/transaction/initialize \\
  -H "Authorization: Bearer YOUR_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "customer@email.com",
    "amount": 10000,
    "reference": "TXN_123456"
  }'`,
      response: `{
  "status": true,
  "message": "Authorization URL created",
  "data": {
    "authorization_url": "https://checkout.oleqpay.com/pay/abc123",
    "access_code": "abc123xyz",
    "reference": "TXN_123456"
  }
}`,
    },
    {
      id: "verify",
      title: "Verify Transaction",
      method: "GET",
      endpoint: "/api/v1/transaction/verify/:reference",
      description: "Verify the status of a transaction using its unique reference.",
      parameters: [
        { name: "reference", type: "string", required: true, description: "Transaction reference to verify" },
      ],
      curlExample: `curl https://api.oleqpay.com/api/v1/transaction/verify/TXN_123456 \\
  -H "Authorization: Bearer YOUR_SECRET_KEY"`,
      response: `{
  "status": true,
  "message": "Verification successful",
  "data": {
    "reference": "TXN_123456",
    "amount": 10000,
    "status": "success",
    "paid_at": "2025-01-15T10:30:00.000Z",
    "customer": {
      "email": "customer@email.com"
    }
  }
}`,
    },
    {
      id: "charge",
      title: "Charge Authorization",
      method: "POST",
      endpoint: "/api/v1/transaction/charge",
      description: "Charge a customer using a saved authorization code from a previous transaction.",
      parameters: [
        { name: "email", type: "string", required: true, description: "Customer's email address" },
        { name: "amount", type: "integer", required: true, description: "Amount in cents" },
        { name: "authorization_code", type: "string", required: true, description: "Authorization code from previous transaction" },
      ],
      curlExample: `curl https://api.oleqpay.com/api/v1/transaction/charge \\
  -H "Authorization: Bearer YOUR_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "customer@email.com",
    "amount": 5000,
    "authorization_code": "AUTH_xyz789"
  }'`,
      response: `{
  "status": true,
  "message": "Charge attempted",
  "data": {
    "reference": "CHG_456789",
    "status": "success",
    "amount": 5000
  }
}`,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f4ed]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#a3e635] to-[#84cc16] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <Code className="w-16 h-16 mx-auto mb-4 text-gray-900" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            API Documentation
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Build amazing payment experiences with the OleqPay API. RESTful endpoints, comprehensive documentation, and easy integration.
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              The OleqPay API is organized around REST principles. Our API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Authentication</h3>
            <p className="text-gray-700 mb-4">
              Authenticate your API requests by including your secret key in the Authorization header. Your API keys can be found in your dashboard. Keep your secret key secure and never expose it in client-side code.
            </p>
            
            <Card className="bg-gray-900 text-white p-4 mb-6">
              <code className="text-sm">
                Authorization: Bearer YOUR_SECRET_KEY
              </code>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Base URL</h3>
            <Card className="bg-gray-900 text-white p-4 mb-6">
              <code className="text-sm">
                https://api.oleqpay.com
              </code>
            </Card>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Currency Format</h3>
            <p className="text-gray-700 mb-4">
              All amounts should be sent in the smallest currency unit (cents). For example, $100 USD should be sent as 10000 (100 × 100).
            </p>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-12 sm:py-16 bg-[#f5f4ed]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8">API Reference</h2>
          
          <div className="space-y-8">
            {endpoints.map((endpoint) => (
              <Card key={endpoint.id} className="overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  {/* Endpoint Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      endpoint.method === "POST" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}>
                      {endpoint.method}
                    </span>
                    <div className="flex-1">
                      <code className="text-sm text-gray-900 font-mono">
                        {endpoint.endpoint}
                      </code>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{endpoint.title}</h3>
                  <p className="text-gray-700 mb-6">{endpoint.description}</p>

                  {/* Parameters */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Parameters</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold">Name</th>
                            <th className="px-4 py-3 text-left font-semibold">Type</th>
                            <th className="px-4 py-3 text-left font-semibold">Required</th>
                            <th className="px-4 py-3 text-left font-semibold">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {endpoint.parameters.map((param, idx) => (
                            <tr key={idx} className="border-t">
                              <td className="px-4 py-3 font-mono text-xs">{param.name}</td>
                              <td className="px-4 py-3 text-gray-600">{param.type}</td>
                              <td className="px-4 py-3">
                                <span className={`px-2 py-1 rounded text-xs ${
                                  param.required ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-600"
                                }`}>
                                  {param.required ? "Yes" : "No"}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-gray-700">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* cURL Example */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">cURL Example</h4>
                      <button
                        onClick={() => copyToClipboard(endpoint.curlExample, `curl-${endpoint.id}`)}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                      >
                        {copiedCode === `curl-${endpoint.id}` ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <Card className="bg-gray-900 text-white p-4">
                      <pre className="text-xs sm:text-sm overflow-x-auto">
                        <code>{endpoint.curlExample}</code>
                      </pre>
                    </Card>
                  </div>

                  {/* Response */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">Response</h4>
                      <button
                        onClick={() => copyToClipboard(endpoint.response, `response-${endpoint.id}`)}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                      >
                        {copiedCode === `response-${endpoint.id}` ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <Card className="bg-gray-900 text-white p-4">
                      <pre className="text-xs sm:text-sm overflow-x-auto">
                        <code>{endpoint.response}</code>
                      </pre>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-700 mb-6">
            Our developer support team is here to help you integrate OleqPay into your application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:developers@oleqpay.com"
              className="px-6 py-3 bg-[#a3e635] hover:bg-[#84cc16] text-gray-900 font-medium rounded-full"
            >
              Contact Support
            </a>
            <a
              href="/help-center"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-full"
            >
              Visit Help Center
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}