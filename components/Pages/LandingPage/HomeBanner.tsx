import clsx from "clsx"
import { URLS } from "../../../utils/constants"
import ButtonLink from "../../Base/ButtonLink"
import styles from "./landing.module.scss"

const HomeBanner = () => {
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
          "max-w-screen-main w-full mx-auto px-12 justify-center z-[1]",
          "md:px-20 lg:pl-[140px]"
        )}
      >
        <p
          className={clsx(
            "text-40/52 font-bevn500 text-center m-0 md:max-w-[500px]",
            "md:text-left lg:text-60/72 lg:max-w-[720px]"
          )}
        >
          Bring the true benefit of blockchain technology to everyone
        </p>
        <ButtonLink href={URLS.ILAP} className="mt-8 mx-auto md:mx-0" target="_blank">
          Join Accelerator
        </ButtonLink>
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
          <source src="/videos/BG_Mobile_1.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          playsInline
          muted
          className={clsx(styles.videoDesktop, "")}
          poster="/images/home/video_preview.png"
        >
          <source src="/videos/BG_PC_1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default HomeBanner
