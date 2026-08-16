import { StaticImageData } from "next/image"

// partners
import logoAnimoca from "/public/images/partners/animoca.png"
import logoBnbChain from "/public/images/partners/bnb-chain.png"
import logoDAO from "/public/images/partners/dao.png"
import logoApeTerminal from "/public/images/partners/ape-terminal.svg"
import logoFilecoin from "/public/images/partners/filecoin.png"
import logoFuntap from "/public/images/partners/funtap.png"
import logoHashed from "/public/images/partners/hashed.png"
import logoPolygon from "/public/images/partners/polygon.png"
import logoChainlink from "/public/images/partners/chainlink.svg"
import logoKlaytn from "/public/images/partners/klaytn.svg"
import logoMorningstar from "/public/images/partners/morningstar.svg"
import logoCryptoBanter from "/public/images/partners/crypto-banter.png"

import { HTMLAttributeAnchorTarget } from "react"

// portfolio logos
import logoBlocktopia from "/public/images/portfolio/blocktopia.png"
import logoDarkFrontiers from "/public/images/portfolio/dark-frontiers.png"
import logoFury from "/public/images/portfolio/fury.png"
import logoSidus from "/public/images/portfolio/sidus.png"
import logoUnfettered from "/public/images/portfolio/unfettered.png"
import logoClay from "/public/images/portfolio/clay.svg"
import logoIntMax from "/public/images/portfolio/IntMax.svg"
import logoAether from "/public/images/portfolio/aether.png"
import logoWicrypt from "/public/images/portfolio/wicrypt.png"
import logoPolytrade from "/public/images/portfolio/polytrade.svg"
import logoWinr from "/public/images/portfolio/winr.svg"
import logoUnkjd from "/public/images/portfolio/unkjd.png"
import logoFormless from "/public/images/portfolio/formless.svg"

export const URLS = {
  HOME: "/"
} as const

export type RouteTypes = {
  label: string
  uri: string
  target?: HTMLAttributeAnchorTarget | string
}
export const routes: Array<RouteTypes> = [
  {
    label: "Partners",
    uri: "",
    target: "partners"
  },
  {
    label: "Portfolio",
    uri: "",
    target: "portfolio"
  }
]

export type PartnerTypes = {
  imgUri: StaticImageData
  url: string
}

export const partners: Array<PartnerTypes> = [
  {
    imgUri: logoAnimoca,
    url: "https://www.animocabrands.com/"
  },
  {
    imgUri: logoHashed,
    url: "https://www.hashed.com/"
  },
  {
    imgUri: logoDAO,
    url: "https://daomaker.com/"
  },
  {
    imgUri: logoApeTerminal,
    url: "https://apeterminal.io/"
  },
  {
    imgUri: logoMorningstar,
    url: "https://morningstar.ventures/"
  },
  {
    imgUri: logoChainlink,
    url: "https://chain.link/"
  },
  {
    imgUri: logoKlaytn,
    url: "https://klaytn.foundation/"
  },
  {
    imgUri: logoPolygon,
    url: "https://polygon.technology/"
  },
  {
    imgUri: logoBnbChain,
    url: "https://www.bnbchain.org/"
  },
  {
    imgUri: logoFilecoin,
    url: "https://filecoin.io/"
  },
  {
    imgUri: logoFuntap,
    url: "https://corp.funtap.vn/"
  },
  {
    imgUri: logoCryptoBanter,
    url: "https://www.cryptobanter.com/"
  },
]

export const ourPortfolio: Array<PartnerTypes> = [
  {
    imgUri: logoClay,
    url: "https://claystack.com/"
  },
  {
    imgUri: logoIntMax,
    url: "https://intmax.io/"
  },
  {
    imgUri: logoFormless,
    url: "https://share.formless.xyz/"
  },
  {
    imgUri: logoAether,
    url: "https://aethergames.io/"
  },
  {
    imgUri: logoSidus,
    url: "https://sidusheroes.com/"
  },
  {
    imgUri: logoFury,
    url: "https://www.eof.gg/"
  },
  {
    imgUri: logoWicrypt,
    url: "https://wicrypt.com/"
  },
  {
    imgUri: logoPolytrade,
    url: "https://www.polytrade.finance/"
  },
  {
    imgUri: logoWinr,
    url: "https://winr.games/"
  },
  {
    imgUri: logoBlocktopia,
    url: "https://www.bloktopia.com/"
  },
  {
    imgUri: logoUnkjd,
    url: "https://unkjd.games/public_alpha"
  },
  {
    imgUri: logoUnfettered,
    url: "https://theunfettered.io/"
  },
  {
    imgUri: logoDarkFrontiers,
    url: "https://www.darkfrontiers.com/"
  }
]

type HeadDefaultTypes = {
  image: string
  title: string
  description: string
  keywords: string
}

export const headDefault: HeadDefaultTypes = {
  description:
    "We support visionary founders and energetic teams to create a long-lasting positive impact through decentralization technologies.",
  image: "https://assets.icetea.io/Frame_1000002310_1_42ae31ee69.png",
  title: "Icetea Labs",
  keywords: "icetea, icetea labs, crypto, chain"
}
