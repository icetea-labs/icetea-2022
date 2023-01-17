import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import {
  inHouseProducts,
  ProductTypes,
  SubProductTypes,
  subsidiaryProducts,
  ventureProducts
} from "../../../utils/constants"
import Accelerator from "../../Base/Accelerator"
import CardProduct from "../../Base/CardProduct"
import Subcribe from "../../Base/Subcribe"
import styles from "./product.module.scss"

const ProductPage = () => {
  return (
    <div className={clsx(styles.bgProduct, "flex flex-col w-full items-center justify-center")}>
      <div className={clsx(styles.bgBanner, "flex w-full items-center justify-center")}>
        <p className="font-bevn500 text-60/72 text-center">Products</p>
      </div>

      <div
        className={clsx(
          styles.bgInfo,
          "w-full mx-auto flex justify-center pt-[60px] md:pt-[160px] pb-[60px]"
        )}
      >
        <div className="flex flex-col items-center px-8">
          <p className="text-32/40 md:text-36/40 lg:text-40/52 text-center max-w-[1000px]">
            The only Web3 gaming company is building a complete suite of infrastructure-related
            products
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-screen-main items-center px-8 pb-[120px] md:px-20 lg:px-[140px]">
        <div className="flex flex-col w-full items-center">
          <div className="flex w-fit px-3 py-[6px] rounded bg-teaBlue text-black uppercase tracking-widest font-bevn700">
            in house
          </div>
          <div className="flex flex-wrap w-full mt-10 gap-[60px] justify-center">
            {inHouseProducts.map((product: ProductTypes, index: number) => (
              <CardProduct dataCard={product} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full items-center mt-[60px]">
          <div className="flex w-fit px-3 py-[6px] rounded bg-teaBlue text-black uppercase tracking-widest font-bevn700">
            joint ventures
          </div>
          <div className="flex flex-wrap w-full mt-10 gap-[60px] justify-center">
            {ventureProducts.map((product: ProductTypes, index: number) => (
              <CardProduct dataCard={product} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full items-center mt-[60px]">
          <div className="flex w-fit px-3 py-[6px] rounded bg-teaBlue text-black uppercase tracking-widest font-bevn700">
            Subsidiary
          </div>
          <div className="flex flex-wrap w-full mt-10 gap-[60px] justify-center">
            {subsidiaryProducts.map((product: SubProductTypes, index: number) => (
              <div className="flex w-[275px] h-[130px] bg-teaBlack rounded-sm" key={index}>
                <Link href={product.url} target="_blank" className={clsx("flex w-full h-full")}>
                  <div className="w-full h-full flex justify-center items-center">
                    <Image src={product.imageUri} alt="" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Subcribe />

      <Accelerator />
    </div>
  )
}

export default ProductPage
