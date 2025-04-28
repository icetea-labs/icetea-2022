import React, { useEffect, useState } from "react"
import clsx from "clsx"
import {
  ProductTypes,
  inHouseProducts,
  SubProductTypes,
  subsidiaryProducts,
  ventureProducts
} from "../../../utils/constants"
import CardProduct from "../../Base/CardProduct"
import Link from "next/link"
import Image from "next/image"
import cardStyles from "../../Base/CardProduct/cardProduct.module.scss"

const productValue = {
  IN_HOUSE: 1,
  VENTURE: 2,
  SUBSIDIARY: 3
}

const navProduct = [
  {
    value: productValue.IN_HOUSE,
    label: "in house"
  },
  // {
  //   value: productValue.VENTURE,
  //   label: "joint ventures"
  // },
  {
    value: productValue.SUBSIDIARY,
    label: "subsidiary"
  }
]

const Product = () => {
  const [activedNavId, setActivedNavId] = useState<number>(productValue.IN_HOUSE)
  const [productData, setProductData] = useState<Array<ProductTypes | SubProductTypes>>([])

  useEffect(() => {
    const getData = () => {
      let newData = []
      switch (activedNavId) {
        // case productValue.VENTURE:
        //   newData = [...ventureProducts]
        //   break
        case productValue.SUBSIDIARY:
          newData = [...subsidiaryProducts]
          break
        case productValue.IN_HOUSE:
        default:
          newData = [...inHouseProducts]
          break
      }
      setProductData(newData)
    }
    getData()
  }, [activedNavId])

  return (
    <div className="w-full flex mt-[120px]">
      <div
        className={clsx(
          "flex flex-col w-full max-w-screen-main mx-auto px-8 items-center",
          "md:px-20 xl:px-[140px]"
        )}
      >
        <div className="flex flex-col max-w-[720px] items-center text-center">
          <p className="md:text-40/32 text-32/40">Products</p>
          <span className="text-teaGray mt-3 text-16/20 md:text-20/28">
            The only Web3 gaming company building a complete suite of infrastructure-related
            products
          </span>
        </div>
        <div className="mt-5 md:mt-10 flex flex-col w-full">
          <div className="flex space-x-2 mx-auto">
            {navProduct.map((item: any) => (
              <div
                className={clsx(
                  "flex items-center rounded px-3 py-[6px] uppercase font-bevn font-bold cursor-pointer text-center text-14/18 md:text-16/20",
                  activedNavId === item?.value ? "bg-teaBlue text-black" : "bg-teaBlack text-white"
                )}
                key={item.value}
                onClick={() => setActivedNavId(item?.value)}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap w-full pt-10 gap-[60px] justify-center">
            {productData.map((product: ProductTypes | SubProductTypes, index: number) => (
              <div className="flex" key={index}>
                {!!product?.bgUri ? (
                  <CardProduct dataCard={product} />
                ) : (
                  <div className="flex w-[275px] h-[130px] bg-teaBlack rounded-sm" key={index}>
                    <Link
                      href={product.url}
                      target="_blank"
                      className={clsx(cardStyles.cardPartner, "flex w-full h-full")}
                    >
                      <div className="w-full h-full flex justify-center items-center px-5">
                        <Image src={product.imageUri} alt="" />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
