import clsx from "clsx"
import Link from "next/link"
import { HTMLAttributeAnchorTarget } from "react"
import styles from "./buttonLink.module.scss"

type ButtonProps = {
  className?: string
  href: string
  target?: HTMLAttributeAnchorTarget
  children: any
}

const ButtonLink = (props: ButtonProps) => {
  const { className = "", children, href, target } = props

  return (
    <Link
      href={href}
      className={clsx(
        styles.btnLink,
        "duration-500 hover:tracking-wide",
        "flex w-fit px-8 h-14 rounded-[40px] items-center tracking-normal text-lg font-bevn font-semibold cursor-pointer",
        className
      )}
      target={target ?? "_self"}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
