const ProductCardSkeleton = () => {
    return (
      <div className="animate-pulse bg-gray-100 dark:bg-gray-700 p-4 rounded-lg h-[300px] w-[300px]">
        <div className="bg-gray-300 dark:bg-gray-600 h-40 rounded-md mb-4" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
      </div>
    );
  };
  
  export default ProductCardSkeleton;
  