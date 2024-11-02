import React from 'react';
import clsx from 'clsx';
import { cva, type VariantProps } from "class-variance-authority"

//不同的button变体有不同的样式
const buttonVariants = cva(
    "button transition-colors",
    {
      variants: {
        variant: {
            default:"button--default", 
            outline:"button--outline",
        },
        size: {
            default: "",
            small: "",
            large: "",
            icon: "",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // 组件的实现
        //const Comp = asChild ? Slot : "button"
        return (
            <>
                <button
                    className={clsx(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}
                />
                <style jsx>{`
                    .button{
                        display: inline-flex;
                        box-sizing: border-box;
                        flex-shrink: 0;
                        position: relative;
                        align-items: center;
                        justify-content: center;
                        border-radius:6px;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 600;
                        min-height: 34px;
                        cursor: pointer;
                    }
                    .button--default {
                        background: var(--main-default);
                        color: var(--background-1);
                        border: .5px solid var(--line-2);
                        padding: 0.5rem 1rem;
                        box-shadow: 0 2px 0 rgba(0, 202, 224, 0.1);
                    }
                    .button--default:hover {
                        background: var(--main-hover);
                    }

                    .button--outline {
                        background: var(--block-default);
                        border: .5px solid var(--line-2);
                        color: var(--text-primary);
                        padding: 0.5rem 1rem;
                        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
                    }
                    .button--outline:hover {
                        background: var(--block-hover);
                    }
                `}</style>
            </>
        )
    }
)

Button.displayName = "Button"
export { Button, buttonVariants }