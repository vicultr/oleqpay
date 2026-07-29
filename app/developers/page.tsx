"use client";

import React, { useState } from "react";
import { Info, AlertTriangle, Zap, Lock, Globe, Webhook } from "lucide-react";

/* ---------------------------------------------------------- */
/* Shared building blocks                                      */
/* ---------------------------------------------------------- */

function CodeBlock({ children, label }: { children: string; label?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900 my-4">
      {label && (
        <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-800">
          {label}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-xs sm:text-sm text-gray-100 leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "warning";
  children: React.ReactNode;
}) {
  const isWarning = type === "warning";
  return (
    <div
      className={`flex gap-3 rounded-lg border p-4 text-sm my-4 ${
        isWarning
          ? "bg-amber-50 border-amber-200 text-amber-900"
          : "bg-blue-50 border-blue-200 text-blue-900"
      }`}
    >
      {isWarning ? (
        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
      ) : (
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
      )}
      <div>{children}</div>
    </div>
  );
}

type Row = { field: string; type: string; required?: string; desc: string };

function ParamTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="text-left font-semibold px-4 py-2.5 text-gray-700">Field</th>
            <th className="text-left font-semibold px-4 py-2.5 text-gray-700">Type</th>
            {rows.some((r) => r.required) && (
              <th className="text-left font-semibold px-4 py-2.5 text-gray-700">Required</th>
            )}
            <th className="text-left font-semibold px-4 py-2.5 text-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-2.5 font-mono text-xs text-brand-green">{r.field}</td>
              <td className="px-4 py-2.5 text-gray-500">{r.type}</td>
              {rows.some((rr) => rr.required) && (
                <td className="px-4 py-2.5 text-gray-500">{r.required || "—"}</td>
              )}
              <td className="px-4 py-2.5 text-gray-600">{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SimpleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((h, i) => (
              <th key={i} className="text-left font-semibold px-4 py-2.5 text-gray-700">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-2.5 ${j === 0 ? "font-mono text-xs text-brand-green" : "text-gray-600"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28 mb-14">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}

function SideNav({
  items,
  activeSection,
}: {
  items: { id: string; label: string }[];
  activeSection: string;
}) {
  return (
    <nav className="hidden lg:block sticky top-28 self-start w-56 flex-shrink-0">
      <ul className="space-y-1 text-sm border-l border-gray-200">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block pl-4 py-1.5 -ml-px border-l-2 transition ${
                activeSection === item.id
                  ? "border-brand-green text-brand-green font-medium"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------------------------------------------------------- */
/* TAB 1 — Checkout (Iframe, double-base64)                   */
/* ---------------------------------------------------------- */

const checkoutNav = [
  { id: "checkout-overview", label: "Overview" },
  { id: "checkout-auth", label: "Authentication" },
  { id: "checkout-integration", label: "Checkout integration" },
  { id: "checkout-callbacks", label: "Handling callbacks" },
  { id: "checkout-status", label: "Payment status" },
  { id: "checkout-reference", label: "API reference" },
  { id: "checkout-errors", label: "Error codes" },
];

function CheckoutTab() {
  return (
    <>
      <Section id="checkout-overview" title="Overview">
        <p className="mb-4">
          The Oleq Pay API is a REST API. All requests are made to{" "}
          <code className="text-brand-green">https://my.oleqpay.com</code> and all responses
          are JSON.
        </p>
        <p className="mb-4">
          Checkout sessions are initiated by encoding a payment payload in base64 twice and
          appending it as a query parameter to the iframe URL. Callbacks are delivered as POST
          requests to your configured webhook endpoint.
        </p>
        <SimpleTable
          headers={["Setting", "Value"]}
          rows={[
            ["Base URL", "https://my.oleqpay.com"],
            ["Checkout path", "/p?qp={encoded_data}"],
            ["Auth method", "API key (double base64)"],
            ["Currency", "KES (others on request)"],
          ]}
        />
      </Section>

      <Section id="checkout-auth" title="Authentication">
        <p className="mb-4">
          Every API call requires your API key. Set it via environment variables on your
          server — never expose it client-side. Oleq Pay validates the key inside the encoded
          payment payload.
        </p>
        <CodeBlock label=".env">{`OLEQPAY_API_KEY=your_live_api_key_here
OLEQPAY_BASE_URL=https://my.oleqpay.com
CALLBACK_URL=https://yourapp.com/api/payments/callback
WEB_URL=https://yourapp.com`}</CodeBlock>
        <Callout type="warning">
          Never commit <code>OLEQPAY_API_KEY</code> to version control. Use environment secrets
          in production (AWS Secrets Manager, Vercel env vars, Railway secrets, etc.).
        </Callout>
      </Section>

      <Section id="checkout-integration" title="Checkout integration">
        <p className="mb-4">
          The checkout flow works by encoding a payment payload, constructing an iframe URL, and
          rendering it for your customer. When the customer completes payment, Oleq Pay POSTs to
          your callback URL and redirects to your return URL.
        </p>

        <h3 className="font-semibold text-gray-800 mb-2">Step 1 — Build the payment payload</h3>
        <ParamTable
          rows={[
            { field: "apikey", type: "string", desc: "Your Oleq Pay API key" },
            { field: "orderid", type: "string", desc: "Your internal order / transaction ID" },
            { field: "amount", type: "number", desc: "Payment amount in KES (e.g. 1500)" },
            { field: "reference", type: "string", desc: "Pass empty string — Oleq Pay auto-generates" },
            { field: "callbackurl", type: "string", desc: "HTTPS URL Oleq Pay will POST the result to" },
            { field: "returnurl", type: "string", desc: "URL to redirect the customer after payment" },
          ]}
        />

        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Step 2 — Double-encode the payload</h3>
        <p className="mb-2">Serialize the payload to JSON then apply base64 encoding twice:</p>
        <CodeBlock label="TypeScript">{`function encodePaymentData(data: {
  apikey: string;
  orderid: string;
  amount: number;
  reference: string;
  callbackurl: string;
  returnurl: string;
}): string {
  const jsonString   = JSON.stringify(data);
  const firstEncode  = Buffer.from(jsonString,  'utf-8').toString('base64');
  const doubleEncode = Buffer.from(firstEncode, 'utf-8').toString('base64');
  return doubleEncode;
}`}</CodeBlock>

        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Step 3 — Construct the iframe URL</h3>
        <CodeBlock>{`https://my.oleqpay.com/p?qp={double_base64_encoded_payload}`}</CodeBlock>

        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Step 4 — Render the checkout iframe</h3>
        <CodeBlock label="TSX">{`export function CheckoutModal({ iframeUrl }: { iframeUrl: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
           style={{ background: 'hsl(var(--card))' }}>
        <iframe
          src={iframeUrl}
          className="w-full"
          style={{ height: 520, border: 'none' }}
          title="Oleq Pay Checkout"
        />
      </div>
    </div>
  );
}`}</CodeBlock>

        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Full server-side service example</h3>
        <CodeBlock label="NestJS service">{`async initiatePayment(orderId: string): Promise<{
  iframeUrl: string;
  paymentId: string;
  orderId:   string;
  amount:    number;
}> {
  const order = await this.db.order.findUniqueOrThrow({ where: { id: orderId } });

  const payment = await this.db.payment.create({
    data: { orderId, method: 'MPESA', status: 'initiated', currency: 'KES', checkoutId: orderId },
  });

  const paymentData = {
    apikey:      this.config.apiKey,
    orderid:     orderId,
    amount:      order.totalAmount,
    reference:   '',
    callbackurl: this.config.callbackUrl,
    returnurl:   \`\${this.config.webUrl}/payment/success\`,
  };

  const encoded   = encodePaymentData(paymentData);
  const iframeUrl = \`\${this.config.baseUrl}/p?qp=\${encoded}\`;

  return { iframeUrl, paymentId: payment.id, orderId, amount: order.totalAmount };
}`}</CodeBlock>
        <Callout type="info">
          Always derive amount from your server-side order record. Never accept an amount from
          client requests — this prevents tampering and ensures the charge matches the order
          total.
        </Callout>
      </Section>

      <Section id="checkout-callbacks" title="Handling callbacks">
        <p className="mb-4">
          After a payment completes (or fails), Oleq Pay sends a POST request to your{" "}
          <code className="text-brand-green">CALLBACK_URL</code>. Your endpoint must respond
          with HTTP 200 within 10 seconds.
        </p>
        <CodeBlock label="Callback payload (JSON)">{`{
  "reference":  "TL91P0MHPM",
  "statuscode": "200",
  "status":     "COMPLETED",
  "timestamp":  "2025-12-09T05:57:38.6057355Z"
}`}</CodeBlock>
        <ParamTable
          rows={[
            { field: "reference", type: "string", desc: "Oleq Pay's unique transaction reference — persist as transactionCode" },
            { field: "statuscode", type: "string", desc: '"200" = success; anything else = failure' },
            { field: "status", type: "string", desc: '"COMPLETED" = success. Verify BOTH statuscode and status.' },
            { field: "timestamp", type: "string", desc: "ISO 8601 UTC timestamp of when the payment was processed" },
          ]}
        />
        <Callout type="warning">
          Oleq Pay does not return your <code>orderid</code> in the callback. Match first by{" "}
          <code>transactionCode</code>, then fall back to the most recent initiated payment.
          Always implement idempotency checks to prevent double-processing.
        </Callout>
        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Callback handler example</h3>
        <CodeBlock label="NestJS">{`@Post('callback')
async handleCallback(@Body() body: OleqPaymentCallback) {
  const isSuccess =
    body.status.toUpperCase() === 'COMPLETED' &&
    body.statuscode === '200';

  let payment = await this.db.payment.findFirst({
    where: { transactionCode: body.reference },
  });

  if (!payment) {
    payment = await this.db.payment.findFirst({
      where:   { status: 'initiated', method: 'MPESA' },
      orderBy: { createdAt: 'desc' },
    });
  }

  if (!payment) return { success: false, message: 'Payment not found' };

  if (isSuccess) {
    await this.db.payment.update({
      where: { id: payment.id },
      data:  { status: 'completed', transactionCode: body.reference, paidAt: new Date() },
    });
    await this.db.order.update({
      where: { id: payment.orderId },
      data:  { status: 'PAID' },
    });
    this.eventEmitter.emit('order.paid', payment.orderId);
    return { success: true };
  }

  await this.db.payment.update({
    where: { id: payment.id },
    data:  { status: 'failed', transactionCode: body.reference },
  });
  return { success: false };
}`}</CodeBlock>
      </Section>

      <Section id="checkout-status" title="Payment status">
        <p className="mb-4">
          Poll your own database for payment status rather than calling Oleq Pay repeatedly.
          Expose a status endpoint your frontend can poll every 2–3 seconds until a terminal
          state is reached.
        </p>
        <CodeBlock label="GET /payments/status/:orderId">{`async getPaymentStatus(orderId: string) {
  const payment = await this.db.payment.findFirst({
    where:   { orderId },
    orderBy: { createdAt: 'desc' },
  });

  if (!payment) throw new NotFoundException('Payment not found');

  return {
    orderId,
    paymentStatus:   payment.status,           // 'initiated' | 'completed' | 'failed'
    transactionCode: payment.transactionCode,
    paidAt:          payment.paidAt,
    message:         \`Payment status: \${payment.status}\`,
  };
}`}</CodeBlock>
        <SimpleTable
          headers={["Status", "Meaning"]}
          rows={[
            ["initiated", "Payment link generated; customer has not yet paid"],
            ["completed", "Callback received with COMPLETED + statuscode 200"],
            ["failed", "Callback received with non-200 statuscode"],
          ]}
        />
      </Section>

      <Section id="checkout-reference" title="API reference">
        <div className="mb-8">
          <p className="font-mono text-sm mb-2">
            <span className="text-brand-green font-semibold">POST</span> /api/payments/initiate
          </p>
          <p className="mb-3">
            Create a checkout session for an order. Returns an iframe URL to render for the
            client.
          </p>
          <CodeBlock label="Request body">{`{ "orderId": "order_abc123" }`}</CodeBlock>
          <CodeBlock label="Response">{`{
  "iframeUrl": "https://my.oleqpay.com/p?qp=...",
  "paymentId": "pay_xyz789",
  "orderId":   "order_abc123",
  "amount":    1500,
  "reference": ""
}`}</CodeBlock>
        </div>

        <div className="mb-8">
          <p className="font-mono text-sm mb-2">
            <span className="text-brand-green font-semibold">POST</span> /api/payments/callback
          </p>
          <p className="mb-3">
            Webhook receiver — posted by Oleq Pay after payment completes or fails. Not called
            by your frontend.
          </p>
          <CodeBlock label="Request body">{`{
  "reference":  "TL91P0MHPM",
  "statuscode": "200",
  "status":     "COMPLETED",
  "timestamp":  "2025-12-09T05:57:38Z"
}`}</CodeBlock>
          <CodeBlock label="Response">{`{ "success": true, "orderId": "order_abc123" }`}</CodeBlock>
        </div>

        <div>
          <p className="font-mono text-sm mb-2">
            <span className="text-brand-green font-semibold">GET</span> /api/payments/status/:orderId
          </p>
          <p className="mb-3">
            Get the current payment status for an order. Poll this from your frontend until
            status is terminal.
          </p>
          <CodeBlock label="Response">{`{
  "orderId":         "order_abc123",
  "paymentStatus":   "completed",
  "transactionCode": "TL91P0MHPM",
  "paidAt":          "2025-12-09T05:57:40Z",
  "message":         "Payment status: completed"
}`}</CodeBlock>
        </div>
      </Section>

      <Section id="checkout-errors" title="Error codes">
        <SimpleTable
          headers={["Code", "Status", "Description"]}
          rows={[
            ["400", "Bad Request", "Order already has a completed payment"],
            ["401", "Unauthorized", "Missing or invalid OLEQPAY_API_KEY"],
            ["404", "Not Found", "Order ID does not exist in the database"],
            ["422", "Unprocessable", "Encoded payload is malformed or fails validation"],
            ["500", "Server Error", "Internal error — retry with exponential back-off"],
          ]}
        />
      </Section>
    </>
  );
}

/* ---------------------------------------------------------- */
/* TAB 2 — Gateway (BAUTH / SHA-512)                           */
/* ---------------------------------------------------------- */

const bauthNav = [
  { id: "bauth-overview", label: "Overview" },
  { id: "bauth-auth", label: "Authentication" },
  { id: "bauth-session", label: "Get Session" },
  { id: "bauth-c2b", label: "C2B — Collections" },
  { id: "bauth-b2c", label: "B2C — Disbursements" },
  { id: "bauth-query", label: "Query status" },
  { id: "bauth-status", label: "Status codes" },
];

function BauthTab() {
  return (
    <>
      <Section id="bauth-overview" title="Overview">
        <p className="mb-4">
          The Payment Gateway API is a unified REST API for integrating mobile money, bank
          transfers, and multi-currency payment flows. It supports C2B collections, B2C
          disbursements, and real-time payment status queries — all over a single endpoint.
        </p>
        <SimpleTable
          headers={["Setting", "Value"]}
          rows={[
            ["Base URL", "https://…"],
            ["Endpoint", "POST /bpi/send"],
            ["Auth header", "BAUTH (SHA-512)"],
            ["Format", "application/json"],
          ]}
        />
        <Callout type="info">
          Every request is a POST to <code>/bpi/send</code>. The <code>operation</code> field in
          the request body determines the action (session, c2b, b2c, query).
        </Callout>
      </Section>

      <Section id="bauth-auth" title="Authentication">
        <p className="mb-4">
          Every API request must include a <code>BAUTH</code> header computed using SHA-512
          hashing. The value is derived from four concatenated fields.
        </p>
        <CodeBlock label="Formula">{`BAUTH = SHA512(operation + authkey + sourcePublicIP + reference)`}</CodeBlock>
        <Callout type="warning">
          <code>sourcePublicIP</code> must be the outgoing public IP of the server making the
          request. The <code>reference</code> must match the unique transaction reference in the
          request body.
        </Callout>
        <SimpleTable
          headers={["Header", "Type", "Description"]}
          rows={[
            ["BAUTH", "string", "SHA-512 hash of concatenated operation + authkey + sourcePublicIP + reference"],
            ["Content-Type", "string", "Must be application/json"],
          ]}
        />
      </Section>

      <Section id="bauth-session" title="Get Session">
        <p className="mb-4">
          Obtain a session token that must be included in all subsequent API calls. Sessions are
          time-limited — refresh when they expire.
        </p>
        <p className="font-mono text-sm mb-3">
          <span className="text-brand-green font-semibold">POST</span> /bpi/send
        </p>
        <ParamTable
          rows={[
            { field: "publickey", type: "string", required: "required", desc: "Your account public key" },
            { field: "password", type: "string", required: "required", desc: "SHA-512 hash of your login password (uppercase)" },
            { field: "operation", type: "string", required: "required", desc: 'Must be "session"' },
            { field: "reference", type: "string", required: "required", desc: "Unique reference for this request" },
          ]}
        />
        <CodeBlock label="Request body">{`{
  "publickey":  "your_public_key_here",
  "password":   "sha512_of_your_password(UPPER)",
  "operation":  "session",
  "reference":  "unique_request_reference"
}`}</CodeBlock>
        <CodeBlock label="Response body">{`{
  "status":   200,
  "message":  "successful",
  "session":  "jsdjhsjdsd..."  // store this for subsequent requests
}`}</CodeBlock>
      </Section>

      <Section id="bauth-c2b" title="C2B — Customer to Business">
        <p className="mb-4">
          Initiate a payment collection from a customer's mobile money wallet or bank account
          into your business account. The API is asynchronous — the final result is delivered to
          a <code>callbackurl</code> inside <code>paymentdata</code>.
        </p>
        <p className="font-mono text-sm mb-3">
          <span className="text-brand-green font-semibold">POST</span> /bpi/send
        </p>
        <ParamTable
          rows={[
            { field: "clientkey", type: "string", required: "required", desc: "Your client key" },
            { field: "publickey", type: "string", required: "required", desc: "Your account public key" },
            { field: "countrycode", type: "string", required: "required", desc: 'ISO country code, e.g. "ke"' },
            { field: "operation", type: "string", required: "required", desc: 'Must be "c2b"' },
            { field: "mode", type: "string", required: "required", desc: 'Payment channel, e.g. "MOBILEMONEY"' },
            { field: "bank", type: "string", required: "required", desc: 'Payment provider, e.g. "MPESAKENA"' },
            { field: "account", type: "string", required: "required", desc: 'Customer phone / account, e.g. "+254700100100"' },
            { field: "session", type: "string", required: "required", desc: "Active session token from Get Session" },
            { field: "currency", type: "string", required: "required", desc: 'ISO currency code, e.g. "KES"' },
            { field: "amount", type: "number", required: "required", desc: "Amount to collect from the customer" },
            { field: "paymentdata", type: "object", required: "required", desc: "Custom payload posted to your callbackurl" },
          ]}
        />
        <Callout type="info">
          Add any fields you need to <code>paymentdata</code> — invoice number, order ID, user
          ID, etc. The entire object is posted back to your callbackurl alongside the payment
          result.
        </Callout>
        <CodeBlock label="Request body">{`{
  "clientkey":    "your_client_key",
  "publickey":    "your_public_key",
  "countrycode":  "ke",
  "operation":    "c2b",
  "mode":         "MOBILEMONEY",
  "bank":         "MPESAKENA",
  "account":      "+254700100100",
  "session":      "your_session_token",
  "currency":     "KES",
  "amount":       500,
  "paymentdata": {
    "callbackurl": "https://yourdomain.com/callback",
    "invoice":     "INV-0042"
  }
}`}</CodeBlock>
        <CodeBlock label="Response body">{`{
  "status":            200,
  "message":           "successful",
  "paymentreference":  "jsdjhsjdsd..."  // use this to query payment status
}`}</CodeBlock>
      </Section>

      <Section id="bauth-b2c" title="B2C — Business to Customer">
        <p className="mb-4">
          Disburse funds from your business account to one or more recipients. Supports batch
          payouts in a single request via the <code>recipients</code> array.
        </p>
        <p className="font-mono text-sm mb-3">
          <span className="text-brand-green font-semibold">POST</span> /bpi/send
        </p>
        <ParamTable
          rows={[
            { field: "clientkey", type: "string", required: "required", desc: "Your client key" },
            { field: "publickey", type: "string", required: "required", desc: "Your account public key" },
            { field: "countrycode", type: "string", required: "required", desc: 'ISO country code, e.g. "ke"' },
            { field: "session", type: "string", required: "required", desc: "Active session token" },
            { field: "currency", type: "string", required: "required", desc: 'ISO currency code, e.g. "KES"' },
            { field: "operation", type: "string", required: "required", desc: 'Must be "b2c"' },
            { field: "recipients", type: "array", required: "required", desc: "Array of recipient objects" },
            { field: "paymentdata", type: "object", required: "required", desc: "Custom payload posted to your callbackurl" },
          ]}
        />
        <h3 className="font-semibold text-gray-800 mb-2 mt-4">Recipient object fields</h3>
        <ParamTable
          rows={[
            { field: "mode", type: "string", required: "required", desc: 'Payment channel, e.g. "MOBILEMONEY"' },
            { field: "bank", type: "string", required: "required", desc: 'Payment provider, e.g. "MPESAKENA"' },
            { field: "account", type: "string", required: "required", desc: "Recipient phone number / account" },
            { field: "amount", type: "number", required: "required", desc: "Amount to disburse to this recipient" },
          ]}
        />
        <CodeBlock label="Request body">{`{
  "clientkey":    "your_client_key",
  "publickey":    "your_public_key",
  "countrycode":  "ke",
  "session":      "your_session_token",
  "currency":     "KES",
  "operation":    "b2c",
  "recipients": [
    {
      "mode":     "MOBILEMONEY",
      "bank":     "MPESAKENA",
      "account":  "+254700100100",
      "amount":   10
    }
  ],
  "paymentdata": {
    "callbackurl": "https://yourdomain.com/callback",
    "invoice":     "INV-0043"
  }
}`}</CodeBlock>
        <CodeBlock label="Response body">{`{
  "status":            200,
  "message":           "successful",
  "paymentreference":  "jsdjhsjdsd..."  // use this to query payment status
}`}</CodeBlock>
      </Section>

      <Section id="bauth-query" title="Query Payment Status">
        <p className="mb-4">
          Check the current status of any C2B or B2C payment using the{" "}
          <code>paymentreference</code> returned at initiation. Poll this endpoint if your
          callback has not yet been received.
        </p>
        <p className="font-mono text-sm mb-3">
          <span className="text-brand-green font-semibold">POST</span> /bpi/send
        </p>
        <ParamTable
          rows={[
            { field: "clientkey", type: "string", required: "required", desc: "Your client key" },
            { field: "publickey", type: "string", required: "required", desc: "Your account public key" },
            { field: "session", type: "string", required: "required", desc: "Active session token" },
            { field: "paymentreference", type: "string", required: "required", desc: "Reference returned from C2B or B2C initiation" },
            { field: "paymentoperation", type: "string", required: "required", desc: 'The payment type being queried: "C2B" or "B2C"' },
            { field: "operation", type: "string", required: "required", desc: 'Must be "query"' },
          ]}
        />
        <CodeBlock label="Request body">{`{
  "clientkey":         "your_client_key",
  "publickey":         "your_public_key",
  "session":           "your_session_token",
  "paymentreference":  "jsdjhsjdsd...",
  "paymentoperation":  "B2C",
  "operation":         "query"
}`}</CodeBlock>
        <CodeBlock label="Response body">{`{
  "status":         "200",
  "paymentstatus":  "206",  // 200 = successful, 206 = pending
  "paymentdata":    {},     // original paymentdata object
  "message":        "Successful"
}`}</CodeBlock>
      </Section>

      <Section id="bauth-status" title="Status codes">
        <p className="mb-4">
          The API uses two layers of status codes: the top-level status for the request outcome,
          and paymentstatus for the payment transaction state.
        </p>
        <h3 className="font-semibold text-gray-800 mb-2">API response status</h3>
        <SimpleTable
          headers={["Code", "Meaning"]}
          rows={[
            ["200", "Request successful"],
            ["4xx", "Client error / bad request"],
            ["5xx", "Server error"],
          ]}
        />
        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Payment transaction status</h3>
        <SimpleTable
          headers={["paymentstatus", "Meaning"]}
          rows={[
            ["200", "Payment successful"],
            ["206", "Payment pending"],
          ]}
        />
        <Callout type="info">
          When <code>paymentstatus</code> is 206 (pending), continue polling the Query endpoint
          at reasonable intervals (e.g. every 5–10 seconds) until the status changes to 200 or a
          final failure code is returned.
        </Callout>
      </Section>
    </>
  );
}

/* ---------------------------------------------------------- */
/* TAB 3 — Gateway (AUTH-SQROOL / SHA-256)                     */
/* ---------------------------------------------------------- */

const sqroolNav = [
  { id: "sqrool-overview", label: "Overview" },
  { id: "sqrool-auth", label: "Authentication" },
  { id: "sqrool-c2b", label: "C2B — STK Push" },
  { id: "sqrool-b2c", label: "B2C — Disbursements" },
  { id: "sqrool-b2b", label: "B2B — Business" },
  { id: "sqrool-query", label: "Transaction query" },
  { id: "sqrool-callbacks", label: "Callbacks & Salt" },
  { id: "sqrool-status", label: "Status codes" },
  { id: "sqrool-errors", label: "Error handling" },
];

function SqroolTab() {
  return (
    <>
      <Section id="sqrool-overview" title="Overview">
        <p className="mb-4">
          The Oleq Payment Gateway API integrates mobile money payments into your application via
          a single REST endpoint. It supports C2B STK Push collections, B2C disbursements, B2B
          business transfers, and transaction status queries, including full callback handling
          and Salt verification.
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
          <span className="px-3 py-1.5 rounded-full bg-gray-100">Your App</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded-full bg-gray-100">Oleq API</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded-full bg-gray-100">M-Pesa Operator</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded-full bg-gray-100">Your Server (Callback)</span>
        </div>
        <SimpleTable
          headers={["Setting", "Value"]}
          rows={[
            ["Version", "v1.0"],
            ["Protocol", "REST / JSON"],
            ["Base URL", "https://{host}/api/payment"],
            ["Method", "POST (all endpoints)"],
          ]}
        />
        <Callout type="info">
          Every request is a POST to <code>/api/payment</code>. The <code>Action</code> field in
          the request body determines the operation (C2B, B2C, B2B, QUERY).
        </Callout>
      </Section>

      <Section id="sqrool-auth" title="Authentication">
        <p className="mb-4">
          Every API request must include the <code>AUTH-SQROOL</code> header. The value is a
          SHA-256 signature constructed from your credentials and request metadata. Concatenate
          the values as plain strings before hashing — the result is a lowercase hex-encoded
          SHA-256 digest.
        </p>
        <CodeBlock label="Formula">{`AUTH-SQROOL = sha256(AuthKey + Timestamp + ShortCode + IP)`}</CodeBlock>
        <SimpleTable
          headers={["Component", "Description"]}
          rows={[
            ["AuthKey", "Your secret authentication key provided during onboarding"],
            ["Timestamp", "Request timestamp in yyyyMMddHHmmss format — must match the body Timestamp"],
            ["ShortCode", "Your registered merchant short code — must match the body ShortCode"],
            ["IP", "The public IP address of your server making the request"],
          ]}
        />
        <Callout type="warning">
          The Timestamp and ShortCode values used in the signature must exactly match those in
          the request body. Mismatches will result in an authentication failure.
        </Callout>
      </Section>

      <Section id="sqrool-c2b" title="C2B — STK Push">
        <p className="mb-4">
          Initiates an STK Push prompt to a customer's mobile number, requesting payment to your
          short code. The customer receives a PIN prompt on their phone to authorize the
          transaction.
        </p>
        <p className="font-mono text-sm mb-3">
          <span className="text-brand-green font-semibold">POST</span> https://{"{host}"}/api/payment
        </p>
        <ParamTable
          rows={[
            { field: "CountryCode", type: "string", required: "required", desc: 'ISO 3166-1 alpha-2 country code. e.g. "ke"' },
            { field: "ApiKey", type: "string", required: "required", desc: "Your API key for this short code" },
            { field: "Action", type: "string", required: "required", desc: 'Must be "C2B"' },
            { field: "Timestamp", type: "string", required: "required", desc: 'Format: yyyyMMddHHmmss, e.g. "20260305162936"' },
            { field: "Operator", type: "string", required: "optional", desc: "Mobile operator identifier. Leave empty to auto-detect." },
            { field: "ShortCode", type: "string", required: "required", desc: 'Your merchant short code. e.g. "12345"' },
            { field: "Mobile", type: "string", required: "required", desc: 'Customer phone in international format. e.g. "254710111222"' },
            { field: "Account", type: "string", required: "required", desc: "Account or reference identifier" },
            { field: "Amount", type: "string", required: "required", desc: 'Transaction amount. e.g. "10"' },
            { field: "Description", type: "string", required: "required", desc: "Transaction description shown to the customer" },
            { field: "Reciever", type: "string", required: "required", desc: 'Receiver type identifier. Use "SHORTCODE"' },
            { field: "PartyB", type: "string", required: "required", desc: "Destination short code (typically same as ShortCode)" },
            { field: "CallbackUrl", type: "string", required: "required", desc: "HTTPS URL to receive the payment result callback" },
          ]}
        />
        <CodeBlock label="Example request">{`{
  "CountryCode":   "ke",
  "ApiKey":        "sjdsdksdsd",
  "Action":        "C2B",
  "Timestamp":     "20260305162936",
  "Operator":      "",
  "ShortCode":     "12345",
  "Mobile":        "254710111222",
  "Account":       "zcepacaj2buc",
  "Amount":        "10",
  "Description":   "Funds deposit",
  "Reciever":      "SHORTCODE",
  "PartyB":        "12345",
  "CallbackUrl":   "https://yourdomain.com/callbacks/c2b"
}`}</CodeBlock>
        <CodeBlock label="Response">{`{
  "status":            "0",
  "message":           "Success. Request accepted for processing",
  "checkoutRequestID": "ws_CO_05032026...",
  "merchantRequestID": "29115-..."
}`}</CodeBlock>
        <SimpleTable
          headers={["Field", "Description"]}
          rows={[
            ["status", '"0" or "200" = accepted. Any other value indicates an error.'],
            ["message", "Human-readable status description"],
            ["checkoutRequestID", "Unique identifier for this checkout session. Use to match callbacks."],
            ["merchantRequestID", "Merchant-side request identifier for reconciliation"],
          ]}
        />
      </Section>

      <Section id="sqrool-b2c" title="B2C — Disbursements">
        <p className="mb-4">
          Initiates a disbursement from your business short code to a customer's mobile wallet.
          Commonly used for withdrawals, payouts, refunds, and salary payments.
        </p>
        <ParamTable
          rows={[
            { field: "CountryCode", type: "string", required: "required", desc: 'ISO 3166-1 alpha-2 country code. e.g. "ke"' },
            { field: "ApiKey", type: "string", required: "required", desc: "Your API key for this short code" },
            { field: "Action", type: "string", required: "required", desc: 'Must be "B2C"' },
            { field: "Timestamp", type: "string", required: "required", desc: 'Format: yyyyMMddHHmmss, e.g. "20260305163822"' },
            { field: "Mobile", type: "string", required: "required", desc: "Recipient phone in international format" },
            { field: "Amount", type: "string", required: "required", desc: 'Amount to disburse. e.g. "100"' },
            { field: "Description", type: "string", required: "required", desc: "Payment description" },
            { field: "Reference", type: "string", required: "required", desc: "Unique transaction reference from your system" },
            { field: "ShortCode", type: "string", required: "required", desc: "Your sending short code" },
            { field: "Occassion", type: "string", required: "optional", desc: "Additional context. Often set to the Reference value." },
            { field: "CallbackUrl", type: "string", required: "required", desc: "HTTPS endpoint to receive the disbursement result" },
          ]}
        />
        <CodeBlock label="Example request">{`{
  "CountryCode":  "ke",
  "ApiKey":       "yftubezboduk",
  "Action":       "B2C",
  "Timestamp":    "20260305163822",
  "Mobile":       "254710111222",
  "Amount":       "100",
  "Description":  "Withdrawal to Mpesa",
  "Reference":    "ZCEPALVKJA13",
  "ShortCode":    "12345",
  "Occassion":    "ZCEPALVKJA13",
  "CallbackUrl":  "https://yourdomain.com/callbacks/b2c"
}`}</CodeBlock>
        <CodeBlock label="Response">{`{
  "status":                   "0",
  "message":                  "Accept the service request successfully.",
  "ConversationID":           "AG_20260305_...",
  "OriginatorConversationID": "15743-..."
}`}</CodeBlock>
      </Section>

      <Section id="sqrool-b2b" title="B2B — Business">
        <p className="mb-4">
          Transfers funds from your business short code to another business paybill or till
          number. Commonly used for supplier payments, inter-account transfers, and merchant
          settlements.
        </p>
        <ParamTable
          rows={[
            { field: "Action", type: "string", required: "required", desc: 'Must be "B2B"' },
            { field: "Timestamp", type: "number", required: "required", desc: "Unix epoch timestamp in milliseconds. e.g. 1779013110951" },
            { field: "Reference", type: "string", required: "required", desc: "Unique transaction reference" },
            { field: "ApiKey", type: "string", required: "required", desc: "Your API key for this short code" },
            { field: "CountryCode", type: "string", required: "required", desc: "ISO 3166-1 alpha-2 country code" },
            { field: "Operator", type: "string", required: "optional", desc: 'e.g. "AIRTEL"' },
            { field: "ShortCode", type: "string", required: "required", desc: "Your sending merchant short code" },
            { field: "RecipientType", type: "string", required: "required", desc: 'Type of recipient. e.g. "paybill" or "till"' },
            { field: "Recipient", type: "string", required: "required", desc: "Destination paybill or till number" },
            { field: "Mobile", type: "string", required: "required", desc: "Phone number associated with the sending account" },
            { field: "Amount", type: "string", required: "required", desc: "Amount to transfer" },
            { field: "CallbackUrl", type: "string", required: "required", desc: "HTTPS endpoint to receive the transfer result" },
          ]}
        />
        <CodeBlock label="Example request">{`{
  "Action":        "B2B",
  "Timestamp":     1779013110951,
  "Reference":     "9E1MH6SIAVZH96KC7VQ4",
  "ApiKey":        "yflaqbc5k321",
  "CountryCode":   "KE",
  "Operator":      "AIRTEL",
  "ShortCode":     "123456",
  "RecipientType": "paybill",
  "Recipient":     "211223",
  "Mobile":        "254700000000",
  "Amount":        "100",
  "CallbackUrl":   "https://yourdomain.com/callbacks/b2b"
}`}</CodeBlock>
        <CodeBlock label="Response">{`{
  "status":   "0",
  "message2": "request completed successfully"
}`}</CodeBlock>
        <Callout type="info">
          The Timestamp for B2B uses a Unix epoch in milliseconds (a 13-digit number), unlike
          C2B/B2C which use a yyyyMMddHHmmss string. The final transfer confirmation arrives via
          callback to your CallbackUrl.
        </Callout>
      </Section>

      <Section id="sqrool-query" title="Transaction Query">
        <p className="mb-4">
          Checks the status of a previously submitted transaction by reference. Use this to poll
          for a result when a callback has not been received, or to reconcile transactions after
          the fact.
        </p>
        <ParamTable
          rows={[
            { field: "Action", type: "string", required: "required", desc: 'Must be "QUERY"' },
            { field: "Timestamp", type: "number", required: "required", desc: "Unix epoch timestamp in milliseconds" },
            { field: "Reference", type: "string", required: "required", desc: "Your original transaction reference" },
            { field: "ApiKey", type: "string", required: "required", desc: "Your API key for this short code" },
            { field: "CountryCode", type: "string", required: "required", desc: "ISO 3166-1 alpha-2 country code" },
            { field: "Operator", type: "string", required: "optional", desc: 'e.g. "AIRTEL"' },
            { field: "ShortCode", type: "string", required: "required", desc: "Your merchant short code" },
            { field: "BillRefNumber", type: "string", required: "optional", desc: "Account/bill reference from the original transaction" },
            { field: "TelcoReference", type: "string", required: "optional", desc: "Telco-issued transaction reference" },
            { field: "TrxType", type: "string", required: "required", desc: 'Original transaction type: "C2B", "B2C", or "B2B"' },
          ]}
        />
        <CodeBlock label="Example request">{`{
  "Action":         "QUERY",
  "Timestamp":      1779013110951,
  "Reference":      "9E1MH6SIAVZH96KC7VQ4",
  "ApiKey":         "yflaqbc5k321",
  "CountryCode":    "KE",
  "Operator":       "AIRTEL",
  "ShortCode":      "123456",
  "BillRefNumber":  "E2363G237237283122",
  "TelcoReference": "SWAAASSSSSDF",
  "TrxType":        "C2B"
}`}</CodeBlock>
        <CodeBlock label="Response — transaction found">{`{
  "status":            "200",
  "transactionstatus": "SUCCESSFUL",
  "BusinessShortCode": "12345",
  "TransType":         "C2B",
  "TelcoReference":    "SWAAASSSSSDF",
  "TransTime":         "200",
  "TransAmount":       "200",
  "BillRefNumber":     "E2363G237237283122",
  "message":           "Request accepted successfully",
  "message2":          "request completed successfully"
}`}</CodeBlock>
        <CodeBlock label="Response — no record found">{`{
  "status":  "203",
  "message": "No Records found"
}`}</CodeBlock>
        <Callout type="info">
          Provide as many identifiers as available (Reference, BillRefNumber, TelcoReference) to
          improve lookup accuracy. A 203 status means no matching record was found — this may
          indicate the transaction is still pending. Wait and retry before concluding a failure.
        </Callout>
      </Section>

      <Section id="sqrool-callbacks" title="Callbacks & Salt">
        <p className="mb-4">
          After each transaction is processed, Oleq sends a POST request to your{" "}
          <code>CallbackUrl</code>. Always verify the Salt signature before crediting accounts or
          updating records. Your callback endpoint must respond with HTTP 200 OK promptly.
        </p>

        <h3 className="font-semibold text-gray-800 mb-2">C2B callback payload</h3>
        <CodeBlock>{`{
  "RefID":             "263022",
  "BankCode":          "KE_MPESA",
  "Reference":         "AADFW39GL8WRA",
  "AccountCode":       "12345",
  "TransType":         "STKPUSH",
  "TransID":           "UC5R484D2P",
  "TransTime":         "03/05/2026 16:30:12",
  "TransAmount":       "50.0000",
  "BusinessShortCode": "261074",
  "BillRefNumber":     "zcepadk25ogx",
  "OrgAccountBalance": "0.0000",
  "MSISDN":            "254710111222",
  "FirstName":         "",
  "LastName":          "",
  "Narration":         "Success. Request accepted for processing",
  "Salt":              "cc1ba133b381ca4a067b34cc0be1e1dd..."
}`}</CodeBlock>
        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Salt verification — C2B</h3>
        <CodeBlock label="Formula">{`Salt = sha256(AuthKey + MSISDN + TransAmount + Reference)`}</CodeBlock>
        <CodeBlock label="C# — Salt verification">{`// Verify C2B callback Salt
string raw = authKey + msisdn + transAmount + reference;
string computed = ComputeSha256(raw);

bool isValid = string.Equals(computed, callbackSalt,
    StringComparison.OrdinalIgnoreCase);

static string ComputeSha256(string input) {
    using var sha = SHA256.Create();
    var bytes = sha.ComputeHash(Encoding.UTF8.GetBytes(input));
    return BitConverter.ToString(bytes)
        .Replace("-", "").ToLower();
}`}</CodeBlock>

        <h3 className="font-semibold text-gray-800 mb-2 mt-6">B2C callback payload</h3>
        <CodeBlock>{`{
  "RefID":             "ZCEPALVKJA13",
  "BankCode":          "KE_MPESA",
  "AccountCode":       "12345",
  "Occasion":          "ZCEPALVKJA13",
  "TransType":         "B2C",
  "TransID":           "UC5R484EMS",
  "BillRefNumber":     "ZCEPALVKJA13",
  "UReference":        "ZCEPALVKJA13",
  "Reference":         "UC5R484EMS",
  "TransTime":         "3/5/2026 4:38:24 PM",
  "TransAmount":       "100.00",
  "BusinessShortCode": "12345",
  "OrgAccountBalance": "10",
  "MSISDN":            "254710814935",
  "FirstName":         "JOHN",
  "LastName":          "DOE",
  "Salt":              "c87852c2bda148af7a3c7d0602dce6e9..."
}`}</CodeBlock>
        <CodeBlock label="Expected callback acknowledgment response">{`{ "status": "00", "message": "Callback recieved successfully." }`}</CodeBlock>
        <h3 className="font-semibold text-gray-800 mb-2 mt-6">Salt verification — B2C</h3>
        <CodeBlock label="Formula">{`Salt = sha256(AuthKey + MSISDN + TransAmount + TransID)`}</CodeBlock>
        <Callout type="warning">
          In B2C callbacks, the <code>Reference</code> field contains the M-Pesa{" "}
          <code>TransID</code> (e.g. UC5R484EMS), not your original reference. Use this value
          when computing the Salt.
        </Callout>
      </Section>

      <Section id="sqrool-status" title="Status Codes">
        <p className="mb-4">
          The status field in all API responses uses string codes, not HTTP status codes.
        </p>
        <SimpleTable
          headers={["Status", "Meaning"]}
          rows={[
            ['"0" / "200"', "Request accepted or record found successfully"],
            ["other values", "Request failed or not found — check message for details"],
            ['"203"', "QUERY specific — no matching transaction record found"],
            ["transactionstatus", "QUERY only — final state: SUCCESSFUL or FAILED"],
          ]}
        />
        <Callout type="info">
          A <code>status: "0"</code> or <code>status: "200"</code> response only means the
          request was accepted, not that the transaction has completed. For C2B and B2C, final
          confirmation comes via the callback. For QUERY, inspect the{" "}
          <code>transactionstatus</code> field for the definitive result.
        </Callout>
      </Section>

      <Section id="sqrool-errors" title="Error Handling">
        <p className="mb-4">Common integration issues and how to resolve them.</p>
        <SimpleTable
          headers={["Issue", "Likely Cause", "Resolution"]}
          rows={[
            ["Auth failure", "Incorrect AUTH-SQROOL header", "Ensure Timestamp and ShortCode in header match the request body exactly"],
            ["Salt mismatch", "Wrong field used for Reference in Salt computation", "For B2C, use the Reference field (M-Pesa TransID), not your original reference"],
            ["No callback received", "Callback URL unreachable or returning non-200", "Ensure CallbackUrl is a public HTTPS endpoint returning HTTP 200 immediately. Use QUERY to reconcile missed callbacks."],
            ["Timestamp rejection", "Clock drift or wrong format", "C2B/B2C use yyyyMMddHHmmss string; B2B/QUERY use Unix epoch milliseconds. Sync server time with NTP."],
            ["QUERY returns 203", "Transaction pending or wrong reference", "Wait and retry. Verify Reference, BillRefNumber, and TelcoReference match the original submission exactly."],
          ]}
        />
        <Callout type="info">
          Best practice: store the <code>checkoutRequestID</code> (C2B) or{" "}
          <code>ConversationID</code> (B2C) from the initial response. Use QUERY as a fallback
          reconciliation mechanism when callbacks are delayed or missed. Handle all responses
          idempotently.
        </Callout>
      </Section>
    </>
  );
}

/* ---------------------------------------------------------- */
/* Page                                                        */
/* ---------------------------------------------------------- */

type TabId = "checkout" | "bauth" | "sqrool";

export default function DevelopersPage() {
  const [activeTab, setActiveTab] = useState<TabId>("checkout");
  const [activeSection, setActiveSection] = useState<string>("checkout-overview");

  const tabs: { id: TabId; label: string }[] = [
    { id: "checkout", label: "Checkout (Iframe)" },
    { id: "bauth", label: "Gateway (BAUTH)" },
    { id: "sqrool", label: "Gateway (AUTH-SQROOL)" },
  ];

  const navFor: Record<TabId, { id: string; label: string }[]> = {
    checkout: checkoutNav,
    bauth: bauthNav,
    sqrool: sqroolNav,
  };

  function handleTabChange(id: TabId) {
    setActiveTab(id);
    setActiveSection(navFor[id][0].id);
  }

  return (
    <main className="min-h-screen bg-[#f5f4ed] text-gray-800">
      {/* ---------- HERO ---------- */}
      <section className="pt-6 sm:pt-10 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-green-dark rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Developer Documentation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Integrate payments, checkout, and payroll disbursements into your application in
            minutes. REST-based, developer-friendly, and built for production scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: <Zap className="w-3.5 h-3.5" />, label: "Instant settlement" },
              { icon: <Lock className="w-3.5 h-3.5" />, label: "Encrypted authentication" },
              { icon: <Globe className="w-3.5 h-3.5" />, label: "190+ countries" },
              { icon: <Webhook className="w-3.5 h-3.5" />, label: "Webhook callbacks" },
            ].map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full px-3.5 py-1.5"
              >
                <span className="text-brand-green">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TAB SWITCHER ---------- */}
      <div className="sticky top-[88px] z-30 bg-[#f5f4ed]/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-brand-green text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex gap-12">
          <SideNav items={navFor[activeTab]} activeSection={activeSection} />
          <div className="flex-1 min-w-0">
            {activeTab === "checkout" && <CheckoutTab />}
            {activeTab === "bauth" && <BauthTab />}
            {activeTab === "sqrool" && <SqroolTab />}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-brand-green to-brand-green-dark text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to integrate?
          </h2>
          <p className="text-white/90 mb-6">Get your API key and start building in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-brand-green px-8 py-3.5 rounded-full font-medium transition hover:bg-gray-100"
            >
              Get API key
            </a>
            <a
              href="/contact"
              className="border border-white/60 text-white px-8 py-3.5 rounded-full font-medium transition hover:bg-white/10"
            >
              Talk to a developer
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
