import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { PartnerTypes } from "../../../utils/constants"
import Accelerator from "../../Base/Accelerator"
import Subcribe from "../../Base/Subcribe"
import styles from "./portfolio.module.scss"

// partner logo
import logoAspo from "/public/images/portfolio/aspo.png"
import logoBlocktopia from "/public/images/portfolio/blocktopia.png"
import logoDarkFrontiers from "/public/images/portfolio/dark-frontiers.png"
import logoDerace from "/public/images/portfolio/derace.png"
import logoDreamsQuest from "/public/images/portfolio/dreams-quest.png"
import logoErtha from "/public/images/portfolio/ertha.png"
import logoFaraLand from "/public/images/portfolio/fara-land.png"
import logoFroyo from "/public/images/portfolio/froyo.png"
import logoFtribe from "/public/images/portfolio/ftribe.png"
import logoFury from "/public/images/portfolio/fury.png"
import logoGoldFever from "/public/images/portfolio/gold-fever.png"
import logoGunstar from "/public/images/portfolio/gunstar.png"
import logoHeroesEmpire from "/public/images/portfolio/heroes-empire.png"
import logoKryptomoon from "/public/images/portfolio/kryptomoon.png"
import logoLabel from "/public/images/portfolio/label.png"
import logoMetagods from "/public/images/portfolio/metagods.png"
import logoMetawars from "/public/images/portfolio/metawars.png"
import logoMonkeyBall from "/public/images/portfolio/monkey-ball.png"
import logoMyMasterWar from "/public/images/portfolio/my-master-war.png"
import logoNftTrade from "/public/images/portfolio/nft-trade.png"
import logoPlacewar from "/public/images/portfolio/placewar.png"
import logoPlanetSandbox from "/public/images/portfolio/planetsandbox.png"
import logoProjectSeed from "/public/images/portfolio/project-seed.png"
import logoRog from "/public/images/portfolio/rog.png"
import logoShopnext from "/public/images/portfolio/shopnext.png"
import logoSidus from "/public/images/portfolio/sidus.png"
import logoSinVerse from "/public/images/portfolio/sin-verse.png"
import logoSolice from "/public/images/portfolio/solice.png"
import logoTitanHunters from "/public/images/portfolio/titan-hunters.png"
import logoUnfettered from "/public/images/portfolio/unfettered.png"
import logoWam from "/public/images/portfolio/wam.png"
import logoWarena from "/public/images/portfolio/warena.png"
import logoWonderHero from "/public/images/portfolio/wonder-hero.png"
import logoMonsterra from "/public/images/portfolio/monsterra.png"

const partners: Array<PartnerTypes> = [
  {
    imgUri: logoFury,
    url: "https://www.eof.gg/"
  },
  {
    imgUri: logoUnfettered,
    url: "https://theunfettered.io/"
  },
  {
    imgUri: logoErtha,
    url: "https://ertha.io/"
  },
  {
    imgUri: logoFroyo,
    url: "https://froyo.games/"
  },
  {
    imgUri: logoSolice,
    url: "https://solice.io/"
  },
  {
    imgUri: logoBlocktopia,
    url: "https://www.bloktopia.com/"
  },
  {
    imgUri: logoSidus,
    url: "https://sidusheroes.com/"
  },
  {
    imgUri: logoMonsterra,
    url: "https://monsterra.io/"
  },
  {
    imgUri: logoRog,
    url: "https://rmg.io/"
  },
  {
    imgUri: logoLabel,
    url: "https://label.community/"
  },
  {
    imgUri: logoMonkeyBall,
    url: "https://www.monkeyball.com/"
  },
  {
    imgUri: logoGoldFever,
    url: "https://goldfever.io/"
  },
  {
    imgUri: logoMetawars,
    url: "https://metawars.gg/"
  },
  {
    imgUri: logoMetagods,
    url: "https://metagods.gg/"
  },
  {
    imgUri: logoWonderHero,
    url: "https://www.wonderhero.io/"
  },
  {
    imgUri: logoProjectSeed,
    url: "https://projectseed.io/"
  },
  {
    imgUri: logoDreamsQuest,
    url: "https://dreams.quest/"
  },
  {
    imgUri: logoDerace,
    url: "https://derace.com/"
  },
  {
    imgUri: logoDarkFrontiers,
    url: "https://www.darkfrontiers.com/"
  },
  {
    imgUri: logoNftTrade,
    url: "https://nftrade.com/"
  },
  {
    imgUri: logoFaraLand,
    url: "https://faraland.io/"
  },
  {
    imgUri: logoWarena,
    url: "https://www.warena.io/"
  },
  {
    imgUri: logoTitanHunters,
    url: "https://www.titanhunters.io/"
  },
  {
    imgUri: logoMyMasterWar,
    url: "https://mymasterwar.com/"
  },
  {
    imgUri: logoSinVerse,
    url: "https://www.sin-city.io/home"
  },
  {
    imgUri: logoWam,
    url: "https://wam.app/"
  },
  {
    imgUri: logoAspo,
    url: "https://aspo.world/"
  },
  {
    imgUri: logoPlacewar,
    url: "https://placewar.io/#/"
  },
  {
    imgUri: logoHeroesEmpire,
    url: "https://heroesempires.com/"
  },
  {
    imgUri: logoFtribe,
    url: "https://f2nft.games/"
  },
  {
    imgUri: logoGunstar,
    url: "https://gunstar.io/"
  },
  {
    imgUri: logoKryptomoon,
    url: "https://kryptomon.co/"
  },
  {
    imgUri: logoShopnext,
    url: "https://shopnext.io/"
  },
  {
    imgUri: logoPlanetSandbox,
    url: "https://planetsandbox.io/"
  }
]

const PortfolioPage = () => {
  return (
    <div className={clsx(styles.bgPortfolio, "flex flex-col w-full items-center justify-center")}>
      <div className={clsx(styles.bgBanner, "flex w-full items-center justify-center")}>
        <p className="font-bevn500 text-60/72 text-center">Portfolio</p>
      </div>
      <div
        className={clsx(
          styles.bgInfo,
          "w-full mx-auto flex justify-center px-10 pt-[60px] md:pt-[160px] pb-[60px]"
        )}
      >
        <div className="flex flex-col items-center">
          <p className="text-32/40 md:text-40/52 text-center max-w-[1000px]">
            We have proudly supported the success of our partners
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-screen-main items-center pb-[120px] px-8 sm:px-20 lg:px-[140px]">
        <div
          className={clsx(
            "mt-10 grid grid-cols-2 gap-3 justify-center items-center",
            "sm:flex sm:flex-wrap sm:gap-5"
          )}
        >
          {partners.map((partner: PartnerTypes, index: number) => (
            <div
              className={clsx(
                "flex w-full h-[80px] bg-teaBlack rounded-sm",
                "sm:w-[216px] sm:h-[105px]"
              )}
              key={index}
            >
              <Link
                href={partner.url}
                target="_blank"
                className={clsx(styles.cardPartner, "flex w-full h-full")}
              >
                <div className="w-full h-full p-5 flex justify-center items-center">
                  <Image src={partner.imgUri} alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Subcribe />

      <Accelerator />
    </div>
  )
}

export default PortfolioPage
