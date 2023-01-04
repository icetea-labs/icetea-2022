import clsx from "clsx"
import Image from "next/image"
import { routes, RouteTypes } from "../../../utils/constants"
import GradientBorder from "../GradientBorder"
import styles from "./footer.module.scss"

import logoText from "/public/images/logo-text.svg"
import arrowRight from "/public/images/arrow-right-blue.svg"
import Link from "next/link"
import Accelerator from "./Accelerator"
import Subcribe from "./Subcribe"

const buyPkfExchanges = [
  {
    name: "Uniswap",
    url: "https://app.uniswap.org/#/swap?outputCurrency=0x8B39B70E39Aa811b69365398e0aACe9bee238AEb"
  },
  {
    name: "Ascendex",
    url: "https://ascendex.com/en/basic/cashtrade-spottrading/usdt/pkf"
  },
  {
    name: "Gate.io",
    url: "https://www.gate.io/trade/pkf_usdt"
  },
  {
    name: "Kucoin",
    url: "https://www.kucoin.com/trade/PKF-USDT"
  }
]

const FooterDefaultLayout = () => {
  // const handleScrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // }

  return (
    <div className="bg-black text-white w-full font-bevn flex flex-col">
      <Subcribe />

      <Accelerator />

      <div
        className={clsx(
          "flex flex-col relative w-full max-w-screen-main mx-auto px-7 text-center pt-[60px] mb-3 box-border",
          "md:px-[140px] md:pt-24 md:text-left"
        )}
      >
        <div className="w-full flex">
          <div className="flex flex-col max-w-full w-full md:max-w-[400px] items-center md:items-start">
            <div className="flex">
              <Image src={logoText} alt="" />
            </div>
            <p className="text-sm mt-3">68 Circular Road, #02-01, Singapore 049422</p>
            <div className="flex gap-3 mt-3">
              <Link href={"/"} className="flex">
                <GradientBorder className="rounded-[40px] h-10 px-5 flex items-center">
                  <div className={styles.textGradientBottom}>eg@icetea.io</div>
                  <Image src={arrowRight} alt="" className="ml-1" />
                </GradientBorder>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex mt-auto ml-auto">
            <div className="flex flex-col max-w-[250px]">
              <p className="font-semibold uppercase">Sitemap</p>
              <div className="flex flex-col space-y-3 mt-5 text-teaGray">
                {routes.map((item: RouteTypes, index: number) => (
                  <a
                    key={index + 100}
                    href={item.uri}
                    rel="noreferrer"
                    className="w-full max-w-[120px] hover:text-white hover:underline"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col max-w-[250px] ml-40">
              <p className="font-semibold uppercase">Follow Us</p>
              <div className="flex flex-col space-y-3 mt-5 text-teaGray">
                {buyPkfExchanges.map((item: any, index: number) => (
                  <a
                    href={item.url}
                    key={index + 100}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full max-w-[120px] hover:text-white hover:underline"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center md:mt-16 mt-3">Copyright © 2022 . All rights reserved.</p>
      </div>
    </div>
  )
}

export default FooterDefaultLayout
