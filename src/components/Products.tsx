import { Fragment, useState } from "react";
import { dataApi, formInputsList } from "../api/DataApi";
import Button from "./ui/Button";
import Product from "./Product";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Input from "./ui/Input";
import { IProps } from "../types/Types";
import { productValidation } from "../validation/Index";
import ErrorMsg from "./ErrorMsg";

const initialProduct = {
  title: "",
  price: "",
  colors: [],
  description: "",
  category: {
    name: "",
    imageUrl: "",
  },
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};
const Products = () => {
  const [product, setProduct] = useState<IProps>(initialProduct);
  const [errorsState, setErrorsState] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
    setProduct(initialProduct);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });

    setErrorsState({
      ...errorsState,
      [name]: "",
    });
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    // const { title, description, image, price } = product;
    e.preventDefault();
    const errors = productValidation({
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
    });
    setErrorsState(errors);
    // Check if any property has a value of "" && Check if all properties have a value of ""
    const hasErrorsMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === ""); // return (True or False)

    if (!hasErrorsMsg) {
      return;
    }

    console.log("SEND DATA TO SERVER");
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-[85%] max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-gray-900"
                  >
                    ADD A NEW PRODUCT{" "}
                  </DialogTitle>
                  {/* Modal Form */}
                  <form onSubmit={onSubmitHandler} className="mt-2">
                    {/* Form Input List */}
                    {formInputsList.map((input, index) => (
                      <div key={index} className="py-2">
                        <label
                          htmlFor={input.id}
                          className="block text-sm font-medium text-gray-700"
                        >
                          {input.label}
                        </label>

                        <Input
                          type={input.type}
                          id={input.id}
                          name={input.name}
                          value={product[input.name]}
                          onChange={onChangeHandler}
                        />
                        <ErrorMsg msg={errorsState[input.name]} />
                      </div>
                    ))}
                    {/* Modal Button Components */}
                    <div className="flex gap-2 mt-4">
                      <Button
                        onClick={onClose}
                        className="flex-1 bg-red-600 hover:bg-red-700  rounded-md text-white text-md sm:text-md px-3 py-2"
                      >
                        Cancel{" "}
                      </Button>
                      <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700  rounded-md text-white text-md sm:text-md px-3 py-2">
                        Submit{" "}
                      </Button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="container mx-auto mt-12 flex justify-between items-center">
        <h1 className="font-bold text-2xl sm:text-3xl">
          Latest <span className="text-indigo-600">Products</span>
        </h1>
        <Button
          onClick={openModal}
          className="bg-indigo-600 hover:bg-indigo-700  rounded-md text-white text-md sm:text-md px-3 py-2"
        >
          Build a Product
        </Button>
      </div>
      <div className="container mt-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dataApi.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Products;
