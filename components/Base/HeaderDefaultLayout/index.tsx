import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { routes, RouteTypes, URLS } from "../../../utils/constants"
import styles from "./header.module.scss"

import iconClose from "/public/images/icon-close.svg"
import iconMenu from "/public/images/icon-menu.svg"
import logo from "/public/images/logo-text.svg"

const HeaderDefaultLayout = () => {
  const { asPath } = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenHeader = () => {
    setOpen((prevState) => !prevState)
  }

  const renderHeaderMobile = () => {
    if (!open) return <></>

    return (
      <div
        className={clsx(
          styles.bgHeaderMobile,
          "fixed top-0 left-0 w-full h-screen overflow-y-auto bg-[#04060C] flex flex-col p-5 pb-8 z-50"
        )}
      >
        <div className="flex justify-between">
          <Link href={URLS.HOME}>
            <Image src={logo} alt="" width={192} height={42} />
          </Link>
          <Image src={iconClose} alt="" onClick={handleOpenHeader} className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-8 text-white justify-center w-full text-center mt-20">
          {routes.map((item: RouteTypes, index: number) => (
            <Link
              key={index}
              href={item.uri}
              className={clsx("hover:tracking-wider duration-500 font-bevn600 text-20/28", {
                "text-main": asPath === item.uri
              })}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <nav
        className={clsx(
          "absolute -translate-x-1/2 left-1/2 h-20 w-full flex items-center justify-between max-w-screen-main text-white",
          "md:px-[140px]",
          "xs:px-[60px]",
          "pl-5 pr-6"
        )}
      >
        <Link href={URLS.HOME}>
          <Image src="/images/logo-text.svg" width={192} height={42} alt="" />
        </Link>
        <div className={clsx("space-x-[60px] hidden", "md:flex")}>
          {routes.map((item: RouteTypes, index: number) => (
            <Link
              key={index}
              href={item.uri}
              className={clsx("hover:tracking-wider duration-500", {
                "text-main": asPath === item.uri
              })}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className={clsx("block cursor-pointer", "md:hidden")} onClick={handleOpenHeader}>
          <Image src={iconMenu} alt="" width={25} />
        </div>
      </nav>

      {renderHeaderMobile()}
    </>
  )
}

export default HeaderDefaultLayout
