import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Smile, 
  GraduationCap, 
  Leaf 
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="p-3 mb-4 bg-primary-100 rounded-full w-fit">
        <div className="text-primary-500 w-8 h-8">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeatureBlocks: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-full h-full" />,
      title: "Clinically Proven",
      description: "Our formulas are backed by scientific research and clinical studies to ensure effectiveness and safety."
    },
    {
      icon: <Smile className="w-full h-full" />,
      title: "Long-lasting Freshness",
      description: "Experience breath that stays fresh all day with our advanced mint technology."
    },
    {
      icon: <GraduationCap className="w-full h-full" />,
      title: "Dentist Recommended",
      description: "Trusted and recommended by dental professionals worldwide for optimal oral health."
    },
    {
      icon: <Leaf className="w-full h-full" />,
      title: "Natural Ingredients",
      description: "We blend nature's best ingredients with advanced science for effective, gentle formulas."
    }
  ];
  
  return (
    <section className="section bg-gray-100">
      <div className="container">
        <SectionHeading
          title="Why Choose White Happydent?"
          subtitle="Discover what sets our toothpaste apart and why customers trust us for their dental care needs."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;