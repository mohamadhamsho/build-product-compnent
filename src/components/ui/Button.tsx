interface IProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ className, children, ...rest }: IProps) => {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
