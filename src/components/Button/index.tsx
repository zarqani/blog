import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: ReactNode;
  // Add additional props here
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "default";
  className?: string;
  fullWidth?: boolean;
};

export default function Button({
  variant = "primary",
  className,
  label,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const variants: { primary: string; default: string } = {
    primary:
      "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    default: "text-sm font-semibold leading-6 text-gray-900",
  };
  const fullWidthClasses = "flex w-full justify-center";
  return (
    <button
      type="button"
      className={`${className || ""} ${fullWidth && fullWidthClasses} ${
        variants[variant]
      }`}
      {...props}
    >
      {label}
    </button>
  );
}
