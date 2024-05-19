interface Iprops extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: Iprops) => {
  return (
    <input
      {...rest}
      className="w-full border-[1px] border-gray-300 px-2 py-1 rounded-md focus-within:outline-[1px] outline-indigo-500"
    />
  );
};

export default Input;
