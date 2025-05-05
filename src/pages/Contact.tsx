import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/whitehappydentnepal@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions or feedback? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionHeading
                title="Get in Touch"
                subtitle="Our team is here to help with any questions about our products or services."
              />
              
              <div className="mt-8 space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Address</h3>
                    <p className="mt-1 text-gray-600">
                     Lokanthali- 1, Bhaktapur<br />
                      Bagmati, Nepal
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-primary-500 transition-colors">
                        Sales: (+977) 970-9011011
                      </a><br />
                      <a href="tel:+1234567891" className="hover:text-primary-500 transition-colors">
                        Support: (+977) 970-9011011
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:whitehappydentnepal@gmail.com" className="hover:text-primary-500 transition-colors">
                        whitehappydentnepal@gmail.com
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Business Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Sunday - Friday: 10:00 AM - 5:00 PM<br />
                      {/* Saturday: 10:00 AM - 4:00 PM<br /> */}
                      Saturday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary-100 p-3 rounded-full transition"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12.073C22 6.505 17.523 2 12 2S2 6.505 2 12.073c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.2 22 17.064 22 12.073z" />
    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary-100 p-3 rounded-full transition"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.72 9.72 0 0 1-3.17 1.21A4.48 4.48 0 0 0 16.6 0c-2.63 0-4.5 2.37-4.5 4.47 0 .35.04.7.12 1.03-3.74-.2-7.04-1.96-9.25-4.67a4.56 4.56 0 0 0-.6 2.26c0 1.56.79 2.94 2.04 3.75a4.5 4.5 0 0 1-2.04-.56v.06c0 2.18 1.6 4 3.7 4.43a4.52 4.52 0 0 1-2.03.08 4.52 4.52 0 0 0 4.21 3.13A9.05 9.05 0 0 1 1 19.54 12.76 12.76 0 0 0 7.29 21c8.39 0 12.98-6.91 12.98-12.91 0-.2 0-.41-.02-.61A9.18 9.18 0 0 0 23 3z"/>
    </svg>

                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary-100 p-3 rounded-full transition"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.248 2.43.417.59.207 1.01.455 1.45.895.44.44.688.86.895 1.45.17.46.36 1.26.417 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.248 1.97-.417 2.43a3.725 3.725 0 0 1-.895 1.45 3.726 3.726 0 0 1-1.45.895c-.46.17-1.26.36-2.43.417-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.248-2.43-.417a3.726 3.726 0 0 1-1.45-.895 3.725 3.725 0 0 1-.895-1.45c-.17-.46-.36-1.26-.417-2.43C2.212 15.585 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.248-1.97.417-2.43a3.724 3.724 0 0 1 .895-1.45A3.725 3.725 0 0 1 5.032 2.69c.46-.17 1.26-.36 2.43-.417C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.12 0-3.48.012-4.7.068-1.07.052-1.65.23-2.03.38a2.1 2.1 0 0 0-.76.5 2.1 2.1 0 0 0-.5.76c-.15.38-.328.96-.38 2.03C4.012 8.52 4 8.88 4 12c0 3.12.012 3.48.068 4.7.052 1.07.23 1.65.38 2.03.11.27.26.5.5.76.26.26.49.39.76.5.38.15.96.328 2.03.38 1.22.056 1.58.068 4.7.068s3.48-.012 4.7-.068c1.07-.052 1.65-.23 2.03-.38a2.1 2.1 0 0 0 .76-.5 2.1 2.1 0 0 0 .5-.76c.15-.38.328-.96.38-2.03.056-1.22.068-1.58.068-4.7s-.012-3.48-.068-4.7c-.052-1.07-.23-1.65-.38-2.03a2.1 2.1 0 0 0-.5-.76 2.1 2.1 0 0 0-.76-.5c-.38-.15-.96-.328-2.03-.38-1.22-.056-1.58-.068-4.7-.068zm0 3.3a6.5 6.5 0 1 1 0 13.001 6.5 6.5 0 0 1 0-13zm0 1.8a4.7 4.7 0 1 0 0 9.401 4.7 4.7 0 0 0 0-9.4zm5.8-2.3a1.3 1.3 0 1 1 0 2.601 1.3 1.3 0 0 1 0-2.6z"/>
    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-primary-100 p-3 rounded-full transition"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.5-.7-1.5-1.5s.5-1.5 1.5-1.5 1.5.7 1.5 1.5-.5 1.5-1.5 1.5zm13.5 11.3h-3v-5.6c0-1.4-.5-2.3-1.8-2.3-1 0-1.6.7-1.9 1.3-.1.3-.1.7-.1 1v5.6h-3s.04-9 0-10h3v1.4c.4-.7 1.2-1.8 3-1.8 2.2 0 3.8 1.5 3.8 4.7v5.7z"/>
    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              {submitted ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="mx-auto mb-4 bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Please select</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Support">Order Support</option>
                      <option value="General Question">General Question</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="primary" fullWidth size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Find Us"
            subtitle="Visit our headquarters or contact a regional office near you."
            centered
          />
          
          <div className="mt-8 bg-white rounded-lg overflow-hidden shadow-lg h-96">
            
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.1162842819011!2d85.35593452629699!3d27.67404502682627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b005fff4ce1%3A0x9860a383bca12841!2sHungry%20pizza!5e0!3m2!1sen!2snp!4v1746350311159!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.1162842819011!2d85.35593452629699!3d27.67404502682627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b005fff4ce1%3A0x9860a383bca12841!2sHungry%20pizza!5e0!3m2!1sen!2snp!4v1746350311159!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;