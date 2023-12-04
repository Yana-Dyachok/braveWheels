// import { ReactNode } from "react";

type ButtonProps = {
  classNames: string;
  btnType?: 'button' | 'submit';
  children: string;
  onClick?: () => void;
}

const Button = ({ classNames, btnType = 'button', children, onClick }: ButtonProps) => {
  const btnClassName = `btn ${classNames}`;
  return (
    <button className={btnClassName} type={btnType}>
      {children}
    </button>
  );
}

export default Button;