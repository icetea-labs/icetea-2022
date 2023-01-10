import clsx from "clsx"
import React, { useEffect, useState } from "react"
import styles from "./blog.module.scss"
import { blogs, BlogTypes } from "../../../utils/blogConstants"
import Image from "next/image"
import { blogTypes } from "../../../utils/constants"
import Link from "next/link"
import { URLS } from "../../../utils/constants"
import BlogTypeTag from "./blogTypeTag"
import BlogItemInList from "./blogListItem"

interface BlogItemProps {
  data?: BlogTypes
}

const BlogHighLight = ({ data }: BlogItemProps) => {
  return (
    <Link href={`${URLS?.BLOG}/${data?.slug}`}>
      <div
        className={clsx(
          styles.blogItem,
          "md:flex hover:bg-[#1A1F27] cursor-pointer gap-[30px] mt-[40px]"
        )}
      >
        <div
          className={clsx(
            styles.blogItemImg,
            "relative w-full md:w-[350px] md:min-w-[350px] h-[200px] xl:w-[520px] xl:min-w-[520px] xl:h-[340px]"
          )}
        >
          <Image src={data?.image ? data?.image : "/images/blog/default.png"} alt="" fill />
          <BlogTypeTag type={data?.type} />
        </div>
        <div>
          <h2 className="text-[20px] xl:text-[28px]">{data?.title}</h2>
          <p className="mt-[6px] text-[14px] xl:text-[16px] xl:mt-[12px] opacity-[0.6]">
            {data?.date}
          </p>
          <p className="mt-[6px] text-[14px] xl:text-[16px] xl:mt-[20px] opacity-[0.6]">
            {data?.intro}
          </p>
        </div>
      </div>
    </Link>
  )
}

const BlogPage = () => {
  const [blogHighLight, setBlogHighLight] = useState<BlogTypes>()
  const [blogList, setBlogList] = useState<BlogTypes[]>()
  const [tagSelect, setTagSelect] = useState<string>(blogTypes.all)
  const blogTypesTypes = [
    blogTypes.all,
    blogTypes.announcement,
    blogTypes.rd,
    blogTypes.partnership
  ]

  useEffect(() => {
    const resultHighLight = blogs.find((blog: BlogTypes) => blog.highlight)
    setBlogHighLight(resultHighLight)
  }, [])

  useEffect(() => {
    const resultBlogs =
      tagSelect === blogTypes.all
        ? blogs
        : blogs.filter((blog: BlogTypes) => blog?.type === tagSelect)
    setBlogList(resultBlogs)
  }, [tagSelect])

  return (
    <div className={clsx(styles.blogBg, "pt-[120px] xl:pt-[180px]")}>
      <div className="max-w-[760px] xl:max-w-[1200px] px-[20px] mx-auto">
        <div className="font-bevn500 text-60/72 text-center">Insight</div>
        <BlogHighLight data={blogHighLight} />
        <div className="my-[20px] xl:my-[40px] h-[1px] bg-white opacity-[0.2]" />
        <div className="flex gap-[8px] flex-wrap justify-center md:justify-start">
          {blogTypesTypes?.map((type: string, index: number) => {
            return (
              <div
                key={index}
                className={clsx(
                  "px-[12px] py-[6px] text-[14px] xl:text-[16px] bg-[#1A1F27] rounded-[4px] font-bold hover:bg-[#00C7F4] hover:text-black cursor-pointer",
                  {
                    "bg-[#00C7F4] text-black": tagSelect === type
                  }
                )}
                onClick={() => setTagSelect(type)}
              >
                {type}
              </div>
            )
          })}
        </div>
        {blogList && !!(blogList.length > 0) && (
          <div className={styles.blogList}>
            {blogList?.map((blog: BlogTypes, index: number) => {
              return <BlogItemInList key={index} data={blog} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPage
