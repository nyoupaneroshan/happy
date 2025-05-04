import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Award, Target, Users, Globe, CheckCircle } from 'lucide-react';
import NewsletterCTA from '../components/sections/NewsletterCTA';

const About: React.FC = () => {
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
              About White Happydent
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our story, mission, and commitment to creating the best dental care products for your family.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="White Happydent Laboratory"
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <div>
              <SectionHeading
                title="Our Story"
                withLine
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-600 mb-6">
                  Founded in 2000, White Happydent began with a simple mission: to create effective, 
                  science-backed oral care products that people would actually enjoy using every day.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founder, Dr. Emily Richards, a practicing dentist for over 15 years, was frustrated 
                  with the gap between clinical dental care and the products people used at home. She 
                  envisioned a brand that would bridge this gap, bringing professional-grade oral care into 
                  daily routines.
                </p>
                <p className="text-gray-600">
                  Today, White Happydent has grown from a small startup to a trusted name in dental care, 
                  available in over 50 countries worldwide. Despite our growth, we remain committed to our 
                  original mission: developing innovative products that combine cutting-edge science with 
                  natural ingredients to promote oral health for everyone.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="The principles that guide everything we do at White Happydent"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Target className="w-12 h-12 text-primary-500" />,
                title: "Mission",
                description: "To promote oral health through innovative, effective, and enjoyable dental care products accessible to everyone."
              },
              {
                icon: <Award className="w-12 h-12 text-primary-500" />,
                title: "Quality",
                description: "We never compromise on the quality of our ingredients or the effectiveness of our formulations."
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-primary-500" />,
                title: "Integrity",
                description: "We're honest about what goes into our products and the results you can expect from them."
              },
              {
                icon: <Globe className="w-12 h-12 text-primary-500" />,
                title: "Sustainability",
                description: "We're committed to environmentally responsible practices across our entire production process."
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate experts behind White Happydent's innovative dental care products"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Dr. Emily Richards",
                position: "Founder & Chief Dental Officer",
                bio: "With over 20 years of clinical experience, Dr. Richards leads product innovation and ensures all formulations meet our high standards.",
                image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Dr. James Wilson",
                position: "Head of Research",
                bio: "Dr. Wilson oversees our research team, focusing on developing new technologies that improve oral health outcomes.",
                image: "https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Sarah Johnson",
                position: "Chief Sustainability Officer",
                bio: "Sarah ensures our products and packaging meet the highest environmental standards without compromising on quality.",
                image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years of experience" },
              { number: "50+", label: "Countries worldwide" },
              { number: "100+", label: "Dental professionals" },
              { number: "10M+", label: "Happy customers" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </motion.div>
  );
};

export default About;