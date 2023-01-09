/* eslint-disable react-hooks/exhaustive-deps */
import type { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import BlogDetailPage from "../../components/Pages/BlogPage/blogDetail"
import styles from "../../styles/Home.module.css"
import { blogs, BlogTypes } from "../../utils/blogConstants"

const BlogDetail: NextPage = ({ host }) => {
  const router = useRouter()
  const [blogDetail, setBlogDetail] = useState<BlogTypes>()
  const [lastestNews, setLastestNews] = useState<BlogTypes[]>()
  const { slug } = router.query

  useEffect(() => {
    const resultBlog = blogs.find((blog: BlogTypes) => blog?.slug === slug)
    setBlogDetail(resultBlog)
    let count = 0
    const resultLastest = blogs.filter((blog: BlogTypes) => {
      if (count < 3 && blog.slug !== slug) {
        count++
        return true
      }
      return false
    })
    setLastestNews(resultLastest)
  }, [slug])

  return (
    <div className={styles.container}>
      <DefaultLayout title="Icetea Labs">
        <BlogDetailPage data={blogDetail} lastestNews={lastestNews} host={host} />
      </DefaultLayout>
    </div>
  )
}

type Props = { host: string | null }

export const getServerSideProps: GetServerSideProps<Props> = async (context) => ({
  props: { host: context.req.headers.host || null }
})

export default BlogDetail
