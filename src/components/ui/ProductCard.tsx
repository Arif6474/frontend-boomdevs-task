import React from 'react';
import { Product } from '../../types';
import { MapPin } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md group transition-all duration-200">

      {product.isFeatured && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-secondary rounded-full">
          FEATURED
          <MapPin size={12} />
        </div>
      )}

      <div className="aspect-square overflow-hidden w-full h-[300px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 w-full bg-secondary/50 text-white p-4">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-lg font-bold">${product.salePrice.toLocaleString()}</p>
      </div>
    </div>
  );
};
