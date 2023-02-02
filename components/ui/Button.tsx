import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

interface IButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href?: string;
  classNames?: string;
  onClick?: () => void;
}

const buttonClasses = cva(
  "rounded-md inline-flex items-center text-off-white",
  {
    variants: {
      variant: {
        primary: [
          "bg-mint-green text-black hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow]",
          "[&_.highlight]:ml-2",
        ],
        secondary: "",
        tertiary: "",
        web3: "bg-mint-green text-black hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow]",
      },
      size: {
        small: "text-sm py-2 px-4",
        medium: "text-md py-2 px-6",
        large: "text-lg py-4 px-8",
      },
      defaultVariants: {
        variant: "primary",
        size: "medium",
      },
    },
  }
);

export const Button = ({
  children,
  href,
  variant,
  classNames,
  size,
  onClick,
}: IButtonProps) => {
  return (
    <Link
      href={href || ""}
      className={`${buttonClasses({ variant, size })} ${classNames}`}
    >
      <button onClick={onClick}>{children}</button>
    </Link>
  );
};
