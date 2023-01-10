import type { NextPage } from "next"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import PortfolioPage from "../../components/Pages/PortfolioPage"
import styles from "../../styles/Home.module.css"

const Portfolio: NextPage = () => {
  return (
    <div className={styles.container}>
      <DefaultLayout title="Icetea Labs">
        <PortfolioPage />
      </DefaultLayout>
    </div>
  )
}

export default Portfolio
