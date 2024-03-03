import { forwardRef } from "react";
import { VariantProps, tv } from "tailwind-variants";

const style = tv({
  base: "inline-flex items-center gap-x-2 text-sm font-semibold border rounded-lg disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
  variants: {
    size: {
      sm: "py-2 px-3",
      md: "py-3 px-4",
      lg: "p-4 sm:p-5",
    },
    color: {
      primary: "",
    },
    variant: {
      solid: "",
      outline: "",
      ghost: "",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "solid",
      className:
        "border-transparent bg-primary text-primary-foreground hover:bg-primary-700",
    },
    {
      color: "primary",
      variant: "outline",
      className:
        "border-primary-600 text-primary-600 hover:border-primary-500 hover:text-primary-500 disabled:opacity-50 disabled:pointer-events-none dark:border-primary-600 dark:text-primary-600 dark:hover:text-primary-500 dark:hover:border-primary-500",
    },
    {
      color: "primary",
      variant: "ghost",
      className:
        "text-primary-600 hover:bg-primary-100 hover:text-primary-800 dark:text-primary-500 dark:hover:bg-primary-800/30 dark:hover:text-primary-400",
    },
  ],
});

type BaseProps<T extends React.ElementType = React.ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & VariantProps<typeof style>;

type Props<T extends React.ElementType> = BaseProps<T> &
  Omit<PropsOf<T>, "className" | "children">;

const Button = forwardRef(
  (
    {
      as,
      color = "primary",
      variant = "solid",
      size = "md",
      className,
      children,
      ...props
    }: BaseProps,
    ref: React.Ref<Element>
  ) => {
    const Element = as || "button";

    return (
      <Element
        ref={ref}
        type="button"
        {...props}
        className={style({
          color,
          variant,
          size,
          className,
        })}
      >
        {children}
      </Element>
    );
  }
) as <T extends React.ElementType = "button">(props: Props<T>) => JSX.Element;

export default Button;
