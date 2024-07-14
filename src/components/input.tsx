import { ComponentProps, ElementType } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const inputVariants = tv({
  slots: {
    input:
      'h-full w-full rounded-lg pr-4 text-base leading-[140%] text-zinc-100 placeholder-zinc-400 outline-none',
    icon: 'pointer-events-none absolute top-1/2 size-5 -translate-y-1/2 text-zinc-400',
  },

  variants: {
    variant: {
      primary: {
        input:
          'h-14 border border-zinc-800 bg-zinc-950 pl-[2.875rem] focus:border-lime-300',
        icon: 'left-4',
      },
      transparent: {
        input: 'bg-transparent pl-7',
        icon: 'left-0',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof inputVariants> {
  icon: ElementType
}

export function Input({
  icon: Icon,
  className,
  variant,
  ...props
}: InputProps) {
  const { input, icon } = inputVariants({ variant })

  return (
    <div className="relative h-full">
      <Icon className={icon()} />
      <input
        {...props}
        autoComplete="off"
        className={input({ class: className })}
      />
    </div>
  )
}
