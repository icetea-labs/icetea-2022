import clsx from "clsx"
import React from "react"
import { blogTypes } from "../../../utils/constants"

const getTypeColor = (type: string | undefined) => {
  switch (type) {
    case blogTypes?.announcement:
      return "bg-[#0046F9]"
    case blogTypes?.partnership:
      return "bg-[#F9C200] text-black"
    case blogTypes?.rd:
      return "bg-[#8717FF]"
    default:
      return "bg-[#0046F9]"
  }
}

const BlogTypeTag = ({ type, className }: any) => {
  return (
    <div
      className={clsx(
        getTypeColor(type),
        "absolute top-[12px] left-[12px] font-[14px] px-[12px] py-[6px] rounded-[4px]",
        className
      )}
    >
      {type}
    </div>
  )
}

export default BlogTypeTag
