const FavoriteCard = ({phone}) => {
  const { id, brand_name, image, phone_name, price, rating } = phone;
  return (
    <div>
      <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover " />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {brand_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              $ {price}
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              {rating}
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default FavoriteCard;
