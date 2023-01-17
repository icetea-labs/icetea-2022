import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { displayDateTimeFormat } from "../../../utils"
import { blogs, BlogTypes } from "../../../utils/blogConstants"
import { blogTypes, URLS } from "../../../utils/constants"
import Accelerator from "../../Base/Accelerator"
import Subcribe from "../../Base/Subcribe"
import styles from "./blog.module.scss"
import BlogItemInList from "./blogListItem"
import BlogTypeTag from "./blogTypeTag"

interface BlogItemProps {
  data?: BlogTypes
}

const BlogHighLight = ({ data }: BlogItemProps) => {
  return (
    <Link href={`${URLS?.BLOG}/${data?.slug}`}>
      <div className={clsx(styles.blogItem, "md:flex cursor-pointer gap-[30px] mt-10")}>
        <div
          className={clsx(
            styles.blogItemImg,
            "relative w-full md:w-[350px] md:min-w-[350px] h-[200px] xl:w-[520px] xl:min-w-[520px] xl:h-[340px]"
          )}
        >
          <Image src={data?.image ? data?.image : "/images/blog/default.png"} alt="" fill />
          <BlogTypeTag type={data?.type} />
        </div>
        <div className="pt-5">
          <h2 className="text-20/28 xl:text-28/36 font-bevn600">{data?.title}</h2>
          <p className="mt-[6px] uppercase text-14/24 xl:text-16/20 font-bevn700 tracking-widest xl:mt-3 text-teaGray">
            {displayDateTimeFormat(data?.date)}
          </p>
          <p className="mt-[6px] text-14/24 xl:text-16/28 xl:mt-5 text-teaGray">{data?.intro}</p>
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
      <div className="max-w-[760px] xl:max-w-[1200px] px-5 mx-auto pb-[120px]">
        <div className="font-bevn500 text-40/52 xl:text-60/72 text-center">Insight</div>
        <BlogHighLight data={blogHighLight} />
        <div className="my-5 xl:my-10 h-[1px] bg-white opacity-20" />
        <div className="flex gap-2 flex-wrap justify-center uppercase tracking-widest md:justify-start">
          {blogTypesTypes?.map((type: string, index: number) => {
            return (
              <div
                key={index}
                className={clsx(
                  "px-3 py-[6px] text-14/18 xl:text-16/20 bg-[#1A1F27] rounded font-bold hover:bg-[#00C7F4] hover:text-black cursor-pointer",
                  {
                    "bg-teaBlue text-black": tagSelect === type
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

      <Subcribe />

      <Accelerator />
    </div>
  )
}

export default BlogPage
