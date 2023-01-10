import clsx from "clsx"
import { PartnerTypes } from "../../../utils/constants"
import styles from "./portfolio.module.scss"

// partner logo
import logoFury from "/public/images/portfolio/fury.png"
import logoUnfettered from "/public/images/portfolio/unfettered.png"
import logoErtha from "/public/images/portfolio/ertha.png"
import logoFroyo from "/public/images/portfolio/froyo.png"
import logoSolice from "/public/images/portfolio/solice.png"
import logoBlocktopia from "/public/images/portfolio/blocktopia.png"
import logoSidus from "/public/images/portfolio/sidus.png"
import logoRog from "/public/images/portfolio/rog.png"
import logoLabel from "/public/images/portfolio/label.png"
import logoMonkeyBall from "/public/images/portfolio/monkey-ball.png"
import logoGoldFever from "/public/images/portfolio/gold-fever.png"
import logoMetawars from "/public/images/portfolio/metawars.png"
import logoMetagods from "/public/images/portfolio/metagods.png"
import logoWonderHero from "/public/images/portfolio/wonder-hero.png"
import logoProjectSeed from "/public/images/portfolio/project-seed.png"
import logoDreamsQuest from "/public/images/portfolio/dreams-quest.png"
import logoDerace from "/public/images/portfolio/derace.png"
import logoDarkFrontiers from "/public/images/portfolio/dark-frontiers.png"
import logoNftTrade from "/public/images/portfolio/nft-trade.png"
import logoFaraLand from "/public/images/portfolio/fara-land.png"
import logoWarena from "/public/images/portfolio/warena.png"
import logoTitanHunters from "/public/images/portfolio/titan-hunters.png"
import logoMyMasterWar from "/public/images/portfolio/my-master-war.png"
import logoSinVerse from "/public/images/portfolio/sin-verse.png"
import logoWam from "/public/images/portfolio/wam.png"
import logoAspo from "/public/images/portfolio/aspo.png"
import logoPlacewar from "/public/images/portfolio/placewar.png"
import logoHeroesEmpire from "/public/images/portfolio/heroes-empire.png"
import logoFtribe from "/public/images/portfolio/ftribe.png"
import logoGunstar from "/public/images/portfolio/gunstar.png"
import logoKryptomoon from "/public/images/portfolio/kryptomoon.png"
import logoShopnext from "/public/images/portfolio/shopnext.png"
import logoPlanetSandbox from "/public/images/portfolio/planetsandbox.png"
import Link from "next/link"
import Image from "next/image"

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
    <div className="flex flex-col w-full items-center justify-center pb-[120px]">
      <div className={clsx(styles.bgProduct, "flex w-full items-center justify-center")}>
        <p className="font-bevn500 text-60/72 text-center">Portfolio</p>
      </div>
      <div
        className={clsx(styles.bgInfo, "w-full mx-auto flex justify-center pt-[160px] pb-[60px]")}
      >
        <div className="flex flex-col items-center">
          <p className="text-40/52 text-center max-w-[1000px]">
            We have proudly supported the success of our partners
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-screen-main items-center px-[140px]">
        <div className="mt-10 flex flex-wrap justify-center items-center gap-5">
          {partners.map((partner: PartnerTypes, index: number) => (
            <div className="flex w-[216px] h-[105px] bg-teaBlack rounded-sm" key={index}>
              <Link
                href={partner.url}
                target="_blank"
                className={clsx(styles.cardPartner, "flex w-full h-full")}
              >
                <div className="w-full h-full flex justify-center items-center">
                  <Image src={partner.imgUri} alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
