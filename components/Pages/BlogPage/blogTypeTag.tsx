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
        "absolute top-3 uppercase text-16/20 font-bevn font-bold tracking-widest left-3 px-3 py-[6px] rounded",
        className
      )}
    >
      {type}
    </div>
  )
}

export default BlogTypeTag
