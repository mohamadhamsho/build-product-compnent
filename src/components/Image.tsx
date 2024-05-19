interface IPropsImg {
  image: string;
  alt: string;
  className: string;
}
const Image = ({ image, alt, className }: IPropsImg) => {
  return (
    <>
      <img src={image} alt={alt} className={className} />
    </>
  );
};

export default Image;
