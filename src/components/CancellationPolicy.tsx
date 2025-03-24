import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl font-bold gradient-text mb-8">Cancellation & Refund Policy</h1>
          <p className="text-gray-400 mb-12">
            At AI Automation Agency, our priority is your satisfaction. This policy outlines your rights for cancellations and refunds.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          <ScrollReveal>
            <section className="chrome-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Cancellation Policy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-white mb-3">Requesting Cancellation</h3>
                  <p className="text-gray-400">
                    To cancel a service, contact us in writing by email. Include the order details and reason for cancellation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-3">Processing Cancellation</h3>
                  <p className="text-gray-400">
                    We'll confirm receipt of your request and process the cancellation within 3 business days.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-3">Cancellation Fees</h3>
                  <p className="text-gray-400">
                    If you cancel within 24 hours of purchase, you receive a full refund. Cancellations after 24 hours may incur a fee.
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="chrome-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Refund Policy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-white mb-3">What is Refundable?</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Services not yet started</li>
                    <li>Cases of service delivery failure</li>
                    <li>Breach of contract from our side</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-3">What is Non-Refundable?</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Completed services</li>
                    <li>Services in progress</li>
                    <li>Customized solutions already developed</li>
                  </ul>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="chrome-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Procedure for Cancellation and Refunds</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="chrome-effect p-6 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">1</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Request in Writing</h3>
                  <p className="text-gray-400">Submit a clear cancellation request to us by email.</p>
                </div>
                <div className="chrome-effect p-6 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">2</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Verification and Processing</h3>
                  <p className="text-gray-400">We verify the request and process it within 3 business days.</p>
                </div>
                <div className="chrome-effect p-6 rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">3</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Refund Processing</h3>
                  <p className="text-gray-400">If eligible, your refund will be processed within 7 business days to the original payment method.</p>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="chrome-effect rounded-xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-white flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-400">+918178490194</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-white flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400">work@mashautomation.in</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageSquare className="h-6 w-6 text-white flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                    <p className="text-gray-400">Chat with our support team on our website.</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;