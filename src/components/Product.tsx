import { IProps } from "../types/Types";
import Button from "./ui/Button";
import Image from "./Image";

const Product = ({
  id,
  title,
  image,
  price,
  description,
}: // category,
IProps) => {
  return (
    <div className="border-2 bg-white max-w-sm mx-auto border-gray-200 py-4 rounded-md">
      <Image
        image={image}
        alt={`image${id}`}
        className="w-32 h-32 object-cover mx-auto"
      />
      <div className="p-3">
        <h2 className="text-md font-semibold line-clamp-1">{title}</h2>
        <p className="text-sm leading-4	text-gray-500 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center pt-6">
          <span className="font-bold text-lg">${price}</span>
          <span className="text-xs font-normal text-gray-500 border border-yellow-300 p-1 rounded-lg shadow-md">
            {/* {category.name} */}
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-2 px-3">
        <Button className="bg-indigo-600 hover:bg-indigo-700 flex-1 font-semibold text-white p-2 rounded-md">
          Edit
        </Button>
        <Button className="bg-red-600 hover:bg-red-700 flex-1 font-semibold text-white p-2 rounded-md">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Product;
