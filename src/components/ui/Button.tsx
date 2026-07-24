import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
}

type LinkButtonProps = BaseProps & {
  href: string
} & Omit<HTMLMotionProps<'a'>, 'children' | 'href'>

type NativeButtonProps = BaseProps & {
  href?: undefined
} & Omit<HTMLMotionProps<'button'>, 'children'>

type ButtonProps = LinkButtonProps | NativeButtonProps

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-accent text-brand-dark hover:bg-brand-accent-hover shadow-lg shadow-brand-accent/20',
  secondary: 'glass text-white hover:bg-white/10',
  ghost: 'text-brand-muted hover:text-white hover:bg-white/5',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/25',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...(props as HTMLMotionProps<'a'>)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(props as HTMLMotionProps<'button'>)}
    >
      {children}
    </motion.button>
  )
}
