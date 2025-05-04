import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  withLine?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  withLine = true,
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {withLine && (
          <span className="inline-block relative">
            <span className="inline-block">
              {title}
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 h-1 bg-primary-500"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </span>
        )}
        {!withLine && title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;