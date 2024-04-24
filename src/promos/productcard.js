const ProductCard = ({ imageUrl, title,discountType , discountAmount }) => (
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <img src={imageUrl} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
    <div className="px-4 py-3 w-72">
      <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
      <div className="flex items-center">
        <del className="text-gray-500 mr-2">${discountAmount}</del>
        <p className="text-lg font-semibold text-black cursor-auto my-3">${discountType}</p>
      </div>
    </div>
  </div>
);

export default ProductCard;