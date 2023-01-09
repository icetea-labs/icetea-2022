import type { NextPage } from "next"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import BlogPage from "../../components/Pages/BlogPage"
import styles from "../../styles/Home.module.css"

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <DefaultLayout title="Icetea Labs">
        <BlogPage />
      </DefaultLayout>
    </div>
  )
}

export default Blog
