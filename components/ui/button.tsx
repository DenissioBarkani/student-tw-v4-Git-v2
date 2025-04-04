"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from '@/lib/utils';
import { Loader } from "lucide-react";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md active:translate-y-[1px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/80",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline:
                    "border border-primary text-primary bg-transparent hover:bg-primary/5",
                secondary: "bg-secondary text-primary hover:bg-secondary/50",
                ghost: "hover:bg-secondary hover:text-secondary-foreground",
                link: "text-primary underline-offset-6 hover:underline decoration-2", // Изменено здесь
            },
            size: {
                default: "h-11 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                lgx2: "h-15 rounded-md px-12",
                icon: "h-10 w-10",
                link: "py-1",
            },
            textSize: {
                sm: "text-sm",
                base: "text-base",
                lg: "text-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            textSize: "sm",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            textSize,
            asChild = false,
            children,
            disabled,
            loading,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                disabled={disabled || loading}
                className={cn(buttonVariants({ variant, size, textSize, className }))}
                ref={ref}
                {...props}
            >
                {!loading ? (
                    children
                ) : (
                    <Loader className="w-5 h-5 animate-spin" />
                )}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };