import clsx from "clsx";
import { type ReactNode } from "react";

type Props = {
  children: string | ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  type = "button",
  className,
  title,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        "transition-opacity duration-300 hover:opacity-80",
        className && className
      )}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
