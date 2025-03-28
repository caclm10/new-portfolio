import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/classname";

const buttonVariants = cva(
    "focus-visible:border-primary focus-visible:ring-primary/50 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[2px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-on-primary hover:bg-primary/90 shadow-xs",
                outline:
                    "text-primary hover:bg-primary/8 border-primary border",
                ghost: "text-primary hover:bg-primary/10",
            },
            size: {
                md: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 gap-1.5 rounded-lg px-3 has-[>svg]:px-2.5",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    },
);
type ButtonVariants = VariantProps<typeof buttonVariants>;

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    ButtonVariants & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
