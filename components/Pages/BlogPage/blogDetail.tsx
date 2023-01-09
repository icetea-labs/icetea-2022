/* eslint-disable react-hooks/exhaustive-deps */
import clsx from "clsx"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { BlogTypes } from "../../../utils/blogConstants"
import { URLS } from "../../../utils/constants"
import styles from "./blog.module.scss"
import BlogItemInList from "./blogListItem"
import BlogTypeTag from "./blogTypeTag"
import { Facebook, LinkedIn, LinkIcon, Telegram, Twitter } from "./social"

interface Props {
  host: any
  data: BlogTypes | undefined
  lastestNews: BlogTypes[] | undefined
}

const BlogDetailPage = ({ host, data, lastestNews }: Props) => {
  const router = useRouter()
  const [content, setContent] = useState<string>("")

  const CopyClipboard = dynamic(() => import("./social").then((mod) => mod.LinkIcon), {
    ssr: false
  })

  useEffect(() => {
    let contentResult = ""
    if (data?.content && data?.content?.length > 0) {
      data?.content?.map((item: string) => {
        contentResult += item
      })
      setContent(contentResult)
    }
  }, [data?.content])
  console.log(host)

  return (
    <div className={clsx(styles.blogBg, "pt-[120px] xl:pt-[180px]")}>
      <div className="max-w-[1040px] mx-auto px-[20px]">
        <div className="relative h-[36px] w-full">
          <BlogTypeTag type={data?.type} className="left-[50%] top-[0px] translate-x-[-50%]" />
        </div>
        <h2 className="mt-[20px] text-center text-[30px] xl:text-[40px]">{data?.title}</h2>
        <p className="mt-[20px] xl:mt-[32px] text-[14px] xl:text-[16px] text-center opacity-[0.6]">
          {data?.date}
        </p>
        <div className="relative">
          <div className="max-w-[800px] mx-auto mt-[30px] xl:mt-[56px]">
            <div className="lg:absolute flex mb-[20px] flex-wrap lg:grid gap-[20px] left-0 top-0">
              <Telegram className={styles.social} />
              <Link
                href={`https://twitter.com/intent/tweet?text=Hashed%20and%20Icetea%20Labs%20forge%20a%20strategic%20partnership%20https%3A%2F%2Ficetea.io%2Fnew%2${data?.slug}`}
                title="Share on Facebook"
                target={"_blank"}
              >
                <Twitter className={styles.social} />
              </Link>
              <LinkedIn className={styles.social} />
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ficetea.io%2Fnew%2${data?.slug}`}
                title="Share on Facebook"
                target={"_blank"}
              >
                <Facebook className={styles.social} />
              </Link>
              <CopyClipboard
                className={styles.social}
                content={`${host}${URLS.BLOG}/${data?.slug}`}
              />
            </div>
            <div className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: content }} />
            <div className="mt-[30px] flex gap-[8px] uppercase items-center flex-wrap">
              <span className="pr-[20px]">Tags</span>
              {data?.tags &&
                data?.tags?.map((item: string, index: number) => {
                  return (
                    <div key={index} className="px-[12px] py-[6px] bg-[#1A1F27] rounded-[4px]">
                      {item}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mt-[100px] text-center text-[40px]">Latest News</h2>
        <div className="max-w-[760px] xl:max-w-[1200px] px-[20px] mx-auto">
          {lastestNews && !!(lastestNews.length > 0) && (
            <div className={styles.blogList}>
              {lastestNews?.map((blog: BlogTypes, index: number) => {
                return <BlogItemInList key={index} data={blog} />
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPage
