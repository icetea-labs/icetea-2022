import React, { useState } from "react"
import clsx from "clsx"

const navProduct = [
  {
    value: 1,
    label: "in house"
  },
  {
    value: 2,
    label: "joint ventures"
  },
  {
    value: 3,
    label: "subsidiary"
  }
]

const Product = () => {
  const [activedNavId, setActivedNavId] = useState<number>(1)

  return (
    <div className="w-full flex">
      <div className="flex flex-col max-w-screen-main mx-auto px-[140px] items-center">
        <div className="flex flex-col max-w-[720px] items-center text-center">
          <p className="text-40/32">Product</p>
          <span className="text-teaGray mt-2 text-20/28">
            The only Web3 gaming company is building a complete suite of infrastructure-related
            products.
          </span>
        </div>
        <div className="mt-10 flex space-x-2">
          {navProduct.map((item: any) => (
            <div
              className={clsx(
                "rounded px-3 py-[6px] uppercase font-bevn700 cursor-pointer",
                activedNavId === item?.value ? "bg-teaBlue text-black" : "bg-teaBlack text-white"
              )}
              key={item.value}
              onClick={() => setActivedNavId(item?.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
