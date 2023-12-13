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

  const scrollIntoViewById = (id: any) => {
    if (typeof document !== "undefined") {
      document?.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      if (open) {
        setOpen(false)
      }
    }
  }

  const renderHeaderMobile = () => {
    if (!open) return <></>

    return (
      <div className="bg-[#04060C] flex w-full h-screen">
        <div
          className={clsx(
            styles.bgHeaderMobile,
            "fixed top-0 left-0 w-full h-full overflow-y-auto flex flex-col p-5 pb-8 z-50"
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
              <div
                key={index}
                onClick={() => scrollIntoViewById(item?.target)}
                className="hover:tracking-wider duration-500 cursor-pointer"
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <nav
        className={clsx(
          "fixed -translate-x-1/2 left-1/2 h-20 w-full flex items-center justify-between max-w-screen-main text-white",
          "lg:px-[140px] backdrop-blur-xl z-20 rounded-2xl",
          "md:px-20",
          "xs:px-[60px]",
          "pl-5 pr-6 z-[1]"
        )}
      >
        <Link href={URLS.HOME}>
          <Image src={logo} width={192} height={42} alt="" />
        </Link>

        <div className={clsx("space-x-6 lg:space-x-[60px] hidden", "md:flex")}>
          {routes.map((item: RouteTypes, index: number) => (
            <div
              key={index}
              onClick={() => scrollIntoViewById(item?.target)}
              className="hover:tracking-wider duration-500 cursor-pointer"
            >
              {item.label}
            </div>
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
