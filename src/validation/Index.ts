// Product object === Validation Object {title, description, image, price}
export const productValidation = (product: {
  title: string;
  description: string;
  image: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    image: string;
    price: string;
  } = {
    title: "",
    description: "",
    image: "",
    price: "",
  };
  const validURL = /^(ftp|http|https):\/\/[^."]+$/.test(product.image);
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title =
      "Title must be between 10 and 80 characters long and cannot contain spaces";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description =
      "Product description must be  between 10 and 900 characters";
  }
  if (!product.image.trim() || !validURL) {
    errors.image = "Image must be a valid URL";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Price must be a number and requird";
  }
  // erturns an object
  return errors;
};
