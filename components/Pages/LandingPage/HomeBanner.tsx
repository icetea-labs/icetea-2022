import clsx from "clsx"
import styles from "./landing.module.scss"

const HomeBanner = () => {
  const scrollIntoViewById = () => {
    if (typeof document !== "undefined") {
      document?.getElementById("statictics")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div
      className={clsx(
        styles.bgStats,
        styles.banner,
        "flex pt-[120px] relative",
        "md:pt-20 md:items-center"
      )}
    >
      <div
        className={clsx(
          "max-w-screen-main w-full mx-auto px-5 lg:px-12 justify-center z-[1]",
          "md:px-20 lg:pl-[140px]"
        )}
      >
        <p
          className={clsx(
            "text-28/40 sm:text-40/52 font-bevn500 text-center m-0 md:max-w-[500px]",
            "md:text-left lg:text-60/72 lg:max-w-[720px]"
          )}
        >
          We are a mature web3 venture builder for product-onchain-fit.
        </p>
        <button
          style={{ background: "linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%)" }}
          className={clsx(
            styles.btnLink,
            "duration-500 hover:tracking-wide",
            "flex w-fit px-8 h-14 rounded-[40px] items-center tracking-normal text-lg font-bevn600 cursor-pointer",
            "mt-8 mx-auto md:mx-0"
          )}
          onClick={() => scrollIntoViewById()}
        >
          Learn More
        </button>
      </div>

      <div className="absolute z-0 top-0 left-0 pointer-events-none">
        <video
          autoPlay
          loop
          playsInline
          muted
          className={clsx(styles.videoMobile, "")}
          poster="/images/home/video_preview_mobile.png"
        >
          <source
            src="https://d1j2c9jkfhu70p.cloudfront.net/icetea/videos/BG_Mobile_1.mp4"
            type="video/mp4"
          />
        </video>
        <video
          autoPlay
          loop
          playsInline
          muted
          className={clsx(styles.videoDesktop, "")}
          poster="/images/home/video_preview.png"
        >
          <source
            src="https://d1j2c9jkfhu70p.cloudfront.net/icetea/videos/BG_PC_1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  )
}

export default HomeBanner
