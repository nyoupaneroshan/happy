import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Product, ProductVariant } from '../../data/products';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const [selectedVariant, setSelectedVariant] = React.useState<ProductVariant>(
    product.variants[0]
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: { 
      y: -10, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`bg-white rounded-lg overflow-hidden shadow-md ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-4' : ''
      }`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className={`relative ${featured ? 'lg:h-full' : 'h-48 sm:h-64'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.featured && !featured && (
          <div className="absolute top-2 right-2 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>
        
        <div className="mb-4">
          <label htmlFor={`variant-${product.id}`} className="block text-sm font-medium text-gray-700 mb-1">
            Size
          </label>
          <select
            id={`variant-${product.id}`}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={selectedVariant.id}
            onChange={(e) => {
              const variantId = parseInt(e.target.value);
              const variant = product.variants.find(v => v.id === variantId);
              if (variant) setSelectedVariant(variant);
            }}
          >
            {product.variants.map((variant) => (
              <option key={variant.id} value={variant.id} disabled={!variant.inStock}>
                {variant.size} {!variant.inStock && '(Out of Stock)'}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            {selectedVariant.discountPrice ? (
              <div className="flex items-center">
                <span className="text-xl font-bold text-primary-600">NRs.{selectedVariant.discountPrice.toFixed(2)}</span>
                <span className="ml-2 text-gray-500 line-through">NRs.{selectedVariant.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-xl font-bold text-gray-800">NRs.{selectedVariant.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4 fill-current text-yellow-500"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 ml-1">(42)</span>
          </div>
        </div>
        
        {/* <Button 
          variant="primary" 
          fullWidth 
          disabled={!selectedVariant.inStock}
          icon={<ShoppingCart size={16} />}
          iconPosition="left"
        >
          {selectedVariant.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button> */}
      </div>
    </motion.div>
  );
};

export default ProductCard;