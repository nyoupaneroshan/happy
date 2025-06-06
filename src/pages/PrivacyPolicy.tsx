import React from "react";


const PrivacyPolicy = () => {
  return (
    <>
     
      <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10 text-center">
          Last updated: June 6, 2025
        </p>

        <section className="space-y-8 text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>
              When you fill out our contact form or communicate with us, we may collect:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message or subject details</li>
            </ul>
            <p className="mt-2">
              We do not collect sensitive personal data like credit card details or passwords.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p>
              We use your information to respond to your queries, provide support, and improve our services. Your data is never sold or shared with third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. How We Store and Protect Your Information</h2>
            <p>
              Your submissions are securely handled through FormSubmit and sent directly to our official email: <strong>whitehappydentnepal@gmail.com</strong>. We implement reasonable security measures, but no method of transmission is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
            <p>
              We use services like:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>FormSubmit.co – for secure form handling</li>
              <li>Social media platforms – for engagement</li>
            </ul>
            <p className="mt-2">Each service has its own privacy policies.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
            <p>
              You may request to access, update, or delete your personal data by contacting us at:
            </p>
            <p className="mt-2 font-medium">
              📧 whitehappydentnepal@gmail.com<br />
              ☎️ (+977) 985-1069197
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Cookies and Tracking</h2>
            <p>
              We currently do not use cookies or tracking technologies. If this changes, we will update this policy accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
            <p>
              Our site is not intended for children under 13. We do not knowingly collect data from minors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy at any time. Please review this page for the latest information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-2">
              For any questions about this Privacy Policy, contact us at:
            </p>
            <p className="font-medium">
              📍 Lokanthali-1, Bhaktapur, Bagmati, Nepal<br />
              📧 whitehappydentnepal@gmail.com<br />
              ☎️ (+977) 985-1069197
            </p>
          </div>
        </section>
      </main>
   
    </>
  );
};

export default PrivacyPolicy;
