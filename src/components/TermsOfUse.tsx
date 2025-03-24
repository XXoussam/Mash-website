import React from 'react';
import { Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl font-bold gradient-text mb-8">Terms of Use of Chat Bots</h1>
          <p className="text-gray-400 mb-12">
            Welcome to MASH AUTOMATION's WhatsApp chatbot service ("Service"). By using our Service, you agree to the following terms and conditions ("Terms of Use"). Please read them carefully.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          <ScrollReveal>
            <section className="chrome-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Use of Service</h2>
              <div className="space-y-4 text-gray-400">
                <p>a. Our Service allows you to interact with chatbots via WhatsApp to obtain information, perform tasks, or access various features we provide.</p>
                <p>b. You must be at least 13 years old to use our Service.</p>
                <p>c. You are responsible for providing accurate and up-to-date information when using our Service.</p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="chrome-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Acceptable Use</h2>
              <div className="space-y-4 text-gray-400">
                <p>a. You agree to use our Service only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict or inhibit their use of the Service.</p>
                <p>b. You will not transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of privacy, or hateful.</p>
                <p>c. You will not attempt to gain unauthorised access to our systems or interfere with the proper operation of our Service.</p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="chrome-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Privacy & Intellectual Property</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-white mb-3">Privacy</h3>
                  <div className="space-y-4 text-gray-400">
                    <p>a. We take your privacy seriously. Our Privacy Policy, which is found on our homepage, explains how we collect, use, and protect your information.</p>
                    <p>b. By using our Service, you consent to the collection and use of your information as outlined in our Privacy Policy.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-3">Intellectual Property</h3>
                  <div className="space-y-4 text-gray-400">
                    <p>a. Our Service, including all content, features, and functionality, is owned by MASH AUTOMATION and protected by intellectual property laws.</p>
                    <p>b. You may not modify, copy, distribute, transmit, display, reproduce, publish, license, create derivative works from, transfer, or sell any content or information obtained from our Service.</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="chrome-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Legal Matters</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-white mb-3">Limitation of Liability</h3>
                  <div className="space-y-4 text-gray-400">
                    <p>a. Our Service is provided on an "as-is" and "as-available" basis without warranties of any kind, either express or implied.</p>
                    <p>b. MASH AUTOMATION shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use our Service.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-3">Governing Law</h3>
                  <p className="text-gray-400">
                    These Terms of Use shall be governed by and construed in accordance with the laws of India.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="chrome-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Contact Us</h2>
              <p className="text-gray-400 mb-4">
                If you have any questions or concerns about these Terms of Use or our Service, please contact us at:
              </p>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-white" />
                <span>work@mashautomation.in</span>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-gray-400 text-sm">
              <p>Effective Date: 5 July 2024</p>
              <p className="mt-2">
                By using our WhatsApp chatbot Service, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not use our Service.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;