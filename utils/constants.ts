import { StaticImageData } from "next/image"
import imgInitiation from "/public/images/services/initiation.png"
import imgWeb3 from "/public/images/services/web3.png"
import imgTokenNft from "/public/images/services/token.png"
import imgGame from "/public/images/services/game.png"
import imgUser from "/public/images/services/user.png"

// services
import imgIlap from "/public/images/services/initiation-ilap.png"
import imgMirai from "/public/images/services/mirai.png"
import imgIcetea from "/public/images/services/icetea-labs.png"
import imgIceteaSoftware from "/public/images/services/its.png"
import imgConcha from "/public/images/services/concha.png"
import imgRedkite from "/public/images/services/redkite.png"
import imgGamefi from "/public/images/services/gamefi.png"
import imgDlancer from "/public/images/services/dlancer.png"
import imgCockroach from "/public/images/services/cockroach.png"
import imgCatia from "/public/images/services/catia.svg"
// import imgFirebird from "/public/images/services/firebird.png"
// import imgDesport from "/public/images/services/desport.png"
import DMission from "/public/images/services/DMission.png"

import logoFirebird from "/public/images/logo/logo-firebird.png"
import logoGamefi from "/public/images/logo/logo-gamefi.png"
import logoIcetea from "/public/images/logo/logo-icetea.png"
import logoIlap from "/public/images/logo/logo-ilap.png"
import logoRedkite from "/public/images/logo/logo-redkite.png"
import logoDmission from "/public/images/logo/logo-dmission.svg"

// partners
import logoAnimoca from "/public/images/partners/animoca.png"
import logoBnbChain from "/public/images/partners/bnb-chain.png"
import logoDAO from "/public/images/partners/dao.png"
import logoApeTerminal from "/public/images/partners/ape-terminal.svg"
import logoFilecoin from "/public/images/partners/filecoin.png"
import logoFuntap from "/public/images/partners/funtap.png"
import logoHashed from "/public/images/partners/hashed.png"
import logoPolygon from "/public/images/partners/polygon.png"
import logoMirai2x from "/public/images/logo/logo-mirai-2x.png"
import logoIceteaSoftware from "/public/images/logo/logo-icetea-software.svg"
import logoChainlink from "/public/images/partners/chainlink.svg"
import logoKlaytn from "/public/images/partners/klaytn.svg"
import logoMorningstar from "/public/images/partners/morningstar.svg"
import logoCryptoBanter from "/public/images/partners/crypto-banter.png"

//startup
import logoGameFi from "/public/images/startup/gamefi.svg"
import logoRedKite from "/public/images/startup/redkite.svg"
import logoDLancer from "/public/images/startup/Dlancer.svg"
import logoPlayable from "/public/images/startup/playable.png"

// product images
import productTaskfi from "/public/images/products/taskFi-cover.png"
import productGamefi from "/public/images/products/gamefi.png"
import productRedkite from "/public/images/products/redkite.png"
import productDesport from "/public/images/products/desport.png"
import { HTMLAttributeAnchorTarget } from "react"

// partner logo
import logoBlocktopia from "/public/images/portfolio/blocktopia.png"
import logoDarkFrontiers from "/public/images/portfolio/dark-frontiers.png"
import logoDerace from "/public/images/portfolio/derace.png"
import logoFury from "/public/images/portfolio/fury.png"
// import logoKryptomoon from "/public/images/portfolio/kryptomoon.png"
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
  HOME: "/",
  SERVICES: "/services",
  PRODUCT: "/products",
  PORTFOLIO: "/portfolio",
  BLOG: "/blog",
  ABOUT: "/about",
  CAREER: "https://careers.icetea.io/",
  ILAP: "https://ilap.icetea.io/",
  SEND_GMAIL: "https://mail.google.com/mail/u/0/?fs=1&to=recruitment@icetea.io&tf=cm"
} as const

export type RouteTypes = {
  label: string
  uri: string
  target?: HTMLAttributeAnchorTarget | string
}
export const routes: Array<RouteTypes> = [
  {
    label: "Startups",
    uri: "",
    target: "startups"
  },
  {
    label: "Services",
    uri: "",
    target: "services"
  },
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

export type ProductTypes = {
  title: string
  description: string
  bgUri: string
  imageUri: StaticImageData
  url: string
}
export const inHouseProducts: Array<ProductTypes> = [
  {
    bgUri: "/images/products/bg-gamefi.png",
    description: "An all-in-one discovery hub for web3 games and metaverses",
    imageUri: productGamefi,
    title: "Game Hub",
    url: "https://gamefi.org/"
  },
  {
    bgUri: "/images/products/bg-redkite.png",
    description: "A cutting-edge launchpad and some DeFi/NFTFi features",
    imageUri: productRedkite,
    title: "Launchpad & NFT-FI",
    url: "https://redkitepad.com/"
  },
  {
    bgUri: "/images/products/taskFi-background.png",
    description: "A revolutionary work protocol for next generation freelancers",
    imageUri: productTaskfi,
    title: "Decentralized Work Protocol",
    url: "https://taskfi.ai/"
  }
]
export const ventureProducts: Array<ProductTypes> = [
  {
    bgUri: "/images/products/bg-desport.png",
    description: "A blockchain eSports platform that helps convert to Web3's",
    imageUri: productDesport,
    title: "Web3 eSports Platform",
    url: "https://desports.gg/"
  }
]
export type SubProductTypes = {
  imageUri: StaticImageData
  url: string
  bgUri?: string
  title?: string
  description?: string
}
export const subsidiaryProducts: Array<SubProductTypes> = [
  {
    url: "https://miraistudio.games/",
    imageUri: logoMirai2x
  },
  {
    url: "https://www.icetea-software.com/",
    imageUri: logoIceteaSoftware
  }
]

export type ProgramTypes = {
  thumbnail: StaticImageData
  title: string
  description: string
  url: string
}
export type ServiceTypes = {
  id: number
  title: string
  imgUri: StaticImageData
  description: string
  detailUrl: string
  programs: Array<ProgramTypes>
}
export const services: Array<ServiceTypes> = [
  {
    id: 1,
    title: "Initiation",
    description:
      "We support potential startups with our extensive network of mentors and partners to build market-fit products, fundraising and brand awareness.",
    detailUrl: "",
    imgUri: imgInitiation,
    programs: [
      {
        title: "Icetea Labs Incubator",
        description: "The leading Web3 gaming Incubator and Enabler in SEA",
        thumbnail: imgIcetea,
        url: "https://icetea.io/"
      },
      {
        title: "Icetea Labs Accelerator Program",
        description:
          "08-week accelerator program that helps Web3 Startups in building a product-market fit",
        thumbnail: imgIlap,
        url: "https://ilap.icetea.io/"
      }
    ]
  },
  {
    id: 2,
    title: "Token & NFT Launch",
    description:
      "We launch fully vetted projects on 2 of the top tier platforms: RedKite launchpad and Gamefi.org Game hub, helping them to reach a high quality audience of millions.",
    detailUrl: "",
    imgUri: imgTokenNft,
    programs: [
      {
        title: "GameFi.org",
        description: "World No1 Web3 Gaming Launchpad",
        thumbnail: imgGamefi,
        url: "https://gamefi.org/"
      },
      {
        title: "Red Kite",
        description: "Launch hand-picked projects and help them shine",
        thumbnail: imgRedkite,
        url: "https://redkitepad.com/"
      },
      {
        title: "Catia",
        description: "First-Of-Its-Kind Asset Publishing Protocol",
        thumbnail: imgCatia,
        url: "https://catia.co/"
      },
      {
        title: "Cockroach",
        description: "Unlocking possibilities in the Bitcoin ecosystem",
        thumbnail: imgCockroach,
        url: "https://cockroach.redkitepad.com/"
      }
    ]
  },
  {
    id: 3,
    title: "Web3 Development",
    description:
      "We provide tech experts and professional developers who have been forced to turn our client's ideas into reality. Our experience in Blockchain-related development have enabled innovative digital transformation for our clients of any size.",
    detailUrl: "",
    imgUri: imgWeb3,
    programs: [
      {
        title: "Mirai Studio",
        description: "Masters In Reality And Imagination",
        thumbnail: imgMirai,
        url: "https://miraistudio.games/"
      },
      {
        title: "Icetea Software",
        description: "Deliver Bespoke Solutions With Expertise",
        thumbnail: imgIceteaSoftware,
        url: "https://www.icetea-software.com/"
      },
      {
        title: "Concha",
        description: "A modular consumer L3 on Bitcoin, designed for decentralized consumer apps",
        thumbnail: imgConcha,
        url: "https://concha.network/"
      },
      {
        title: "DLancer",
        description: "Blockchain-powered Freelancer Marketplace",
        thumbnail: imgDlancer,
        url: "https://dlancer.io/"
      }
    ]
  },
  {
    id: 4,
    title: "Game Discovery",
    description:
      "By building the infrastructure and decentralized publishing platform, we support web3 games to build player bases through a Game hub with 400+ games and 200K eKYC verified users.",
    detailUrl: "",
    imgUri: imgGame,
    programs: [
      {
        title: "GameFi.org",
        description: "A one-stop destination for web3 gaming",
        thumbnail: imgGamefi,
        url: "https://gamefi.org/"
      }
    ]
  },
  {
    id: 5,
    title: "User Engagement",
    description:
      "Icetea Labs supports leaderboards and integrates in-game advertising and content creation to support the creator economy. Besides, we do joint research with strategic partners to co-build a sustainable web3 game and metaverse.",
    detailUrl: "",
    imgUri: imgUser,
    programs: [
      {
        title: "DMission",
        description:
          "Decentralized community-building & user-engagement platform which connects users to web3 apps & games through engaging and creative campaigns.",
        thumbnail: DMission,
        url: "https://dmission.me/"
      }
    ]
  }
]

export type PartnerTypes = {
  imgUri: StaticImageData
  url: string
}

export const startups: Array<PartnerTypes> = [
  {
    imgUri: logoGameFi,
    url: "https://gamefi.org/"
  },

  {
    imgUri: logoPlayable,
    url: "https://playable.gg/"
  },
]
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
    imgUri: logoDerace,
    url: "https://derace.com/"
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

export type ProviderTypes = {
  services: Array<string>
  poweredByUri: StaticImageData
}
export type ServiceDetailTypes = {
  title: string
  description: string
  providers: Array<ProviderTypes>
  imgUri: StaticImageData
}
export const serviceDetails: Array<ServiceDetailTypes> = []

export type SocialItemTypes = {
  label: string
  username?: string
  url: string
}
export const socialsData: Array<SocialItemTypes> = []

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
  title:
    "The laboratory incubating and nurturing Polkadot projects, the trusted companion of visionary founders.",
  keywords: "icetea, icetea labs, crypto, chain, firebird"
}

type BlogTypesTypes = {
  all: string
  announcement: string
  rd: string
  partnership: string
}

export const blogTypes: BlogTypesTypes = {
  all: "All",
  announcement: "Announcement",
  rd: "R&D",
  partnership: "Partnership"
}
