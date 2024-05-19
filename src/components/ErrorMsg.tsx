interface IErrorMsg {
  msg: string;
}

const ErrorMsg = ({ msg }: IErrorMsg) => {
  return msg ? (
    <span className="text-red-600 text-xs block">* {msg}</span>
  ) : null;
};

export default ErrorMsg;
