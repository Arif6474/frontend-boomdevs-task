import React from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:shadow-md group">
      {product.featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-[#414FF4] text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
            FEATURED
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </span>
        </div>
      )}
      
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-gray-900 dark:text-white">
          {product.price}
        </p>
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-xl"></div>
    </div>
  );
};