import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl font-bold gradient-text mb-8">Privacy Policy</h1>
            <p className="text-gray-400 mb-12">
              At MASH Automation, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide to us when using our chatbot services.
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal>
              <section className="chrome-effect rounded-xl p-8">
                <h2 className="text-2xl font-bold gradient-text mb-6">Information We Collect</h2>
                <p className="text-gray-400 mb-4">
                  We collect the minimum amount of information necessary to provide our chatbot services effectively. This may include:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Your WhatsApp phone number or associated identifier</li>
                  <li>Messages you send to our chatbot</li>
                  <li>Analytics data related to your chatbot interactions (e.g., session duration, user flows)</li>
                </ul>
                <p className="text-gray-400 mt-4">
                  We do not collect any other personal information such as your name, email address, or location data unless you voluntarily provide it.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="chrome-effect rounded-xl p-8">
                <h2 className="text-2xl font-bold gradient-text mb-6">Use of Information</h2>
                <p className="text-gray-400 mb-4">
                  We use the information we collect solely for the purpose of operating and improving our chatbot services.
                </p>
                <p className="text-gray-400 mb-4">Specifically, we may use your information to:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Respond to your messages and queries</li>
                  <li>Analyze usage patterns to enhance chatbot functionality</li>
                  <li>Maintain and secure our systems and infrastructure</li>
                </ul>
                <p className="text-gray-400 mt-4">
                  We do not sell, rent, or share your personal information with any third parties for marketing or advertising purposes.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="chrome-effect rounded-xl p-8">
                <h2 className="text-2xl font-bold gradient-text mb-6">Data Security & Retention</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl text-white mb-3">Security Measures</h3>
                    <p className="text-gray-400">
                      We implement robust security measures to protect your information from unauthorised access, disclosure, alteration, or destruction. This includes industry-standard encryption protocols, access controls, and regular security audits.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-3">Data Retention</h3>
                    <p className="text-gray-400">
                      We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section className="chrome-effect rounded-xl p-8">
                <h2 className="text-2xl font-bold gradient-text mb-6">Your Rights & Contact</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl text-white mb-3">Your Rights</h3>
                    <p className="text-gray-400">
                      You have the right to access, rectify, or delete your personal information held by us. You may also object to or restrict the processing of your information in certain circumstances.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-3">Contact Us</h3>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Mail className="h-5 w-5 text-white" />
                      <span>work@mashautomation.in</span>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-gray-400 text-sm">
                <p>Effective Date: 11 April 2024</p>
                <p className="mt-2">
                  By using our chatbot services, you consent to the collection, use, and processing of your information as described in this Privacy Policy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage; 