import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

/*
 * Contact form using EmailJS to send messages directly to Gmail
 * - EmailJS account: https://www.emailjs.com/
 * - Service: Gmail (service_fi2ghac)
 * - Template: template_2qa25f3
 * - Public Key: MAf50pIvDXZHi3wV1
 *
 * NOTE: Free plan has a limit of 200 emails per month
 * Current usage: 3 emails sent (197 remaining)
 * Last updated: June 2024
 */

// Initialize EmailJS with your public key
emailjs.init("MAf50pIvDXZHi3wV1");

// Sample FAQ data
const faqs = [
  {
    question: "Are you available for freelance work?",
    answer: "Yes, I'm open to freelance opportunities. Feel free to contact me with details about your project."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in frontend development with React, Tailwind CSS, and modern JavaScript. I'm also familiar with responsive design principles and creating user-friendly interfaces."
  },
  {
    question: "Can you help with an existing project?",
    answer: "Absolutely! I can help improve, debug, or add features to existing projects. Just provide me with the details and requirements."
  },
  {
    question: "How quickly do you respond to inquiries?",
    answer: "I typically respond to all inquiries within 24-48 hours. For urgent matters, please indicate so in your message."
  }
];

// Contact information component
const ContactInfo = ({ icon, title, value, link }) => {
  return (
    <div className="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:translate-x-1 group">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 mr-4 transition-all duration-300 group-hover:scale-110">
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <h3 className="font-medium text-gray-800 dark:text-gray-200 text-sm">{title}</h3>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 font-medium"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-300 font-medium">{value}</p>
        )}
      </div>
    </div>
  );
};

const ContactPage = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });

  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Handle escape key press to close modals
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (showModal) setShowModal(false);
        if (showErrorModal) setShowErrorModal(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    // Prevent scrolling when any modal is open
    if (showModal || showErrorModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [showModal, showErrorModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all required fields.',
        loading: false
      });

      // Show error modal for validation errors
      setShowErrorModal(true);
      return;
    }

    // Set loading state
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Sending your message...',
      loading: true
    });

    // EmailJS service and template IDs
    const serviceId = 'service_fi2ghac';
    const templateId = 'template_2qa25f3';

    // Prepare template parameters
    const templateParams = {
      to_name: 'Ian Angelo Valmores',
      to_email: 'vianangelo.14@gmail.com',
      from_name: formData.name,
      from_email: formData.email || 'no-reply@portfolio.com',
      subject: formData.subject ? `[Portfolio Contact] ${formData.subject}` : `[Portfolio Contact] Message from ${formData.name}`,
      message: `This message was sent from your portfolio contact form:\n\nName: ${formData.name}\n${formData.email ? `Email: ${formData.email}\n` : ''}${formData.message ? `\nMessage:\n${formData.message}` : ''}\n\n---\n${formData.email ? `You can reply directly to ${formData.name} at ${formData.email}` : 'The sender did not provide an email address for replies.'}`
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);

        // Show success message in modal
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! It has been sent as a notification to my Gmail inbox. I\'ll review it and get back to you soon.',
          loading: false
        });

        // Show the modal
        setShowModal(true);

        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);

        // Show error message in modal
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Sorry, there was an error sending your message. Please try again later.',
          loading: false
        });

        // Show the error modal
        setShowErrorModal(true);
      });
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-10 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 h-full border-t-4 border-blue-500">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Get In Touch</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                I'm currently looking for new opportunities to apply my skills and learn from experienced professionals.
                Feel free to reach out if you have any questions or just want to say hello!
              </p>

              <div className="space-y-4">
                <ContactInfo
                  icon="📧"
                  title="Email"
                  value="vianangelo.14@gmail.com"
                  link="mailto:vianangelo.14@gmail.com"
                />
                <ContactInfo
                  icon="🔗"
                  title="LinkedIn"
                  value="Ian Angelo Valmores"
                  link="https://ph.linkedin.com/in/ian-angelo-valmores-89aa8423a"
                />
                <ContactInfo
                  icon="💻"
                  title="GitHub"
                  value="veth14"
                  link="https://github.com/veth14"
                />
                <ContactInfo
                  icon="📍"
                  title="Location"
                  value="Quezon City, Metro Manila"
                />
              </div>
            </div>
          </div>

          <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 border-t-4 border-blue-500">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Send a Message</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-5 flex items-center">
                <span className="mr-2">Your message will be sent directly to:</span>
                <span className="font-medium text-blue-500 dark:text-blue-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                  vianangelo.14@gmail.com
                </span>
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="transition-all duration-300 transform hover:translate-y-[-2px]">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      required
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="transition-all duration-300 transform hover:translate-y-[-2px]">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email <span className="text-gray-500 text-xs font-normal">(optional - so I can reply to you)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="transition-all duration-300 transform hover:translate-y-[-2px]">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div className="transition-all duration-300 transform hover:translate-y-[-2px]">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      required
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 font-medium flex items-center justify-center transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    disabled={formStatus.loading}
                  >
                    {formStatus.loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 mb-12 border-t-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md transform hover:translate-y-[-2px]"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full mx-4 transform transition-all duration-500 animate-modalFadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Message Sent
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                Thank you for your message! It has been sent as a notification to my Gmail inbox. I'll review it and get back to you soon.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          onClick={() => setShowErrorModal(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full mx-4 transform transition-all duration-500 animate-modalFadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Error
              </h3>
              <button
                onClick={() => setShowErrorModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                {formStatus.message === 'Please fill out all required fields.'
                  ? 'Please fill out all required fields. Name and message are required to send your message.'
                  : 'Sorry, there was an error sending your message. This could be due to network issues or the monthly email limit (200 emails) being reached. Please try again later or contact me directly at vianangelo.14@gmail.com.'}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowErrorModal(false)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
