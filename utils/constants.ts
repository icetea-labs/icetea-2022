import { StaticImageData } from "next/image"
import imgInitiation from "/public/images/services/initiation.png"
import imgWeb3 from "/public/images/services/web3.png"
import imgTokenNft from "/public/images/services/token.png"
import imgGame from "/public/images/services/game.png"
import imgUser from "/public/images/services/user.png"

import imgEngagement from "/public/images/service-engagement.png"
import imgGaming from "/public/images/service-gaming.png"
import imgReputable from "/public/images/service-reputable.png"
import imgTechnical from "/public/images/service-technical.png"

// services
import imgIlap from "/public/images/services/initiation-ilap.png"
import imgMirai from "/public/images/services/mirai.png"
import imgIcetea from "/public/images/services/icetea-labs.png"
import imgIceteaSoftware from "/public/images/services/its.png"
import imgRedkite from "/public/images/services/redkite.png"
import imgGamefi from "/public/images/services/gamefi.png"
// import imgFirebird from "/public/images/services/firebird.png"
// import imgDesport from "/public/images/services/desport.png"
import DMission from "/public/images/services/DMission.png"

import logoDesport from "/public/images/logo/logo-desport.png"
import logoFirebird from "/public/images/logo/logo-firebird.png"
import logoGamefi from "/public/images/logo/logo-gamefi.png"
import logoIcetea from "/public/images/logo/logo-icetea.png"
import logoIfo from "/public/images/logo/logo-ifo.png"
import logoIlap from "/public/images/logo/logo-ilap.png"
import logoMirai from "/public/images/logo/logo-mirai.png"
import logoRedkite from "/public/images/logo/logo-redkite.png"
import logoDmission from "/public/images/logo/logo-dmission.svg"

// partners
import logoAlpha from "/public/images/partners/alpha-venture.png"
import logoAnimoca from "/public/images/partners/animoca.png"
import logoBnbChain from "/public/images/partners/bnb-chain.png"
import logoDAO from "/public/images/partners/dao.png"
import logoFilecoin from "/public/images/partners/filecoin.png"
import logoFuntap from "/public/images/partners/funtap.png"
import logoHashed from "/public/images/partners/hashed.png"
import logoPolygon from "/public/images/partners/polygon.png"
import logoMirai2x from "/public/images/logo/logo-mirai-2x.png"
import logoIceteaSoftware from "/public/images/logo/logo-icetea-software.svg"
import logoChainlink from "/public/images/partners/chainlink.svg"
import logoKlaytn from "/public/images/partners/klaytn.svg"

//startup
import logoGameFi from "/public/images/startup/gamefi.svg"
import logoRedKite from "/public/images/startup/redkite.svg"
import logoDMission from "/public/images/startup/DMission.png"
import logoTaskfi from "/public/images/startup/TaskFi.png"
import logoDLancer from "/public/images/startup/Dlancer.png"

// product images
import productTaskfi from "/public/images/products/taskFi-cover.png"
import productGamefi from "/public/images/products/gamefi.png"
import productRedkite from "/public/images/products/redkite.png"
import productDesport from "/public/images/products/desport.png"
import { HTMLAttributeAnchorTarget } from "react"

// partner logo
// import logoAspo from "/public/images/portfolio/aspo.png"
import logoBlocktopia from "/public/images/portfolio/blocktopia.png"
import logoDarkFrontiers from "/public/images/portfolio/dark-frontiers.png"
import logoDerace from "/public/images/portfolio/derace.png"
// import logoDreamsQuest from "/public/images/portfolio/dreams-quest.png"
// import logoErtha from "/public/images/portfolio/ertha.png"
// import logoFaraLand from "/public/images/portfolio/fara-land.png"
// import logoFroyo from "/public/images/portfolio/froyo.png"
// import logoFtribe from "/public/images/portfolio/ftribe.png"
import logoFury from "/public/images/portfolio/fury.png"
// import logoGoldFever from "/public/images/portfolio/gold-fever.png"
// import logoGunstar from "/public/images/portfolio/gunstar.png"
// import logoHeroesEmpire from "/public/images/portfolio/heroes-empire.png"
// import logoKryptomoon from "/public/images/portfolio/kryptomoon.png"
// import logoLabel from "/public/images/portfolio/label.png"
// import logoMetagods from "/public/images/portfolio/metagods.png"
// import logoMetawars from "/public/images/portfolio/metawars.png"
// import logoMonkeyBall from "/public/images/portfolio/monkey-ball.png"
// import logoMyMasterWar from "/public/images/portfolio/my-master-war.png"
// import logoNftTrade from "/public/images/portfolio/nft-trade.png"
// import logoPlacewar from "/public/images/portfolio/placewar.png"
// import logoPlanetSandbox from "/public/images/portfolio/planetsandbox.png"
// import logoProjectSeed from "/public/images/portfolio/project-seed.png"
// import logoRog from "/public/images/portfolio/rog.png"
// import logoShopnext from "/public/images/portfolio/shopnext.png"
import logoSidus from "/public/images/portfolio/sidus.png"
// import logoSinVerse from "/public/images/portfolio/sin-verse.png"
// import logoSolice from "/public/images/portfolio/solice.png"
// import logoTitanHunters from "/public/images/portfolio/titan-hunters.png"
// import logoUnfettered from "/public/images/portfolio/unfettered.png"
// import logoWam from "/public/images/portfolio/wam.png"
// import logoWarena from "/public/images/portfolio/warena.png"
// import logoWonderHero from "/public/images/portfolio/wonder-hero.png"
// import logoMonsterra from "/public/images/portfolio/monsterra.png"
import logoClay from "/public/images/portfolio/clay.png"
import logoIntMax from "/public/images/portfolio/IntMax.svg"
import logoAether from "/public/images/portfolio/aether.png"
import logoWicrypt from "/public/images/portfolio/wicrypt.png"
import logoPolytrade from "/public/images/portfolio/polytrade.svg"
import logoWinr from "/public/images/portfolio/winr.svg"
// import logoPrism from "/public/images/portfolio/prism.png"
import logoUnkjd from "/public/images/portfolio/unkjd.png"

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
}

export type RouteTypes = {
  label: string
  uri: string
  target?: HTMLAttributeAnchorTarget | string
}
export const routes: Array<RouteTypes> = [
  // {
  //   label: "Services",
  //   uri: URLS.SERVICES
  // },
  // {
  //   label: "Products",
  //   uri: URLS.PRODUCT
  // },
  // {
  //   label: "Portfolio",
  //   uri: URLS.PORTFOLIO
  // },
  // {
  //   label: "Blog",
  //   uri: URLS.BLOG
  // },
  // {
  //   label: "About",
  //   uri: URLS.ABOUT
  // },
  // {
  //   label: "Careers",
  //   uri: URLS.CAREER,
  //   target: "_blank"
  // }
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
          "08-week accelerator program that helps Web3 Startups in building a product-market",
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
        title: "GameFi",
        description: "A one-stop destination for web3 gaming",
        thumbnail: imgGamefi,
        url: "https://gamefi.org/"
      },
      {
        title: "Red Kite",
        description: "Launch hand-picked projects and help them shine",
        thumbnail: imgRedkite,
        url: "https://redkitepad.com/"
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
        title: "GameFi",
        description: "A one-stop destination for web3 gaming",
        thumbnail: imgGamefi,
        url: "https://gamefi.org/"
      }
      // {
      //   title: "Firebird",
      //   description: "Build scalable and frictionless Web3 games with Firebird",
      //   thumbnail: imgFirebird,
      //   url: "https://firebirdchain.com/"
      // }
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
      // {
      //   title: "DESports",
      //   description:
      //     "The first eSports platform with integrated blockchain technology and play-to-earn model built for gamers around the world",
      //   thumbnail: imgDesport,
      //   url: "https://desports.gg/"
      // },
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
    imgUri: logoTaskfi,
    url: "https://taskfi.io/"
  },
  {
    imgUri: logoDLancer,
    url: "https://dlancer.io/"
  },
  {
    imgUri: logoGameFi,
    url: "https://gamefi.org/"
  },
  {
    imgUri: logoDMission,
    url: "https://dmission.me/"
  },
  {
    imgUri: logoRedKite,
    url: "https://redkitepad.com/#/"
  }
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
  // {
  //   imgUri: logoAlpha,
  //   url: "https://alphaventuredao.io/"
  // },
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
  }
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
  //{
  //  imgUri: logoPrism,
  //  url: "https://www.prism.rmg.io/"
  //},
  //{
  //  imgUri: logoFroyo,
  //  url: "https://froyo.games/"
  //},
  {
    imgUri: logoDarkFrontiers,
    url: "https://www.darkfrontiers.com/"
  },
  //{
  //  imgUri: logoLabel,
  //  url: "https://label.community/"
  //},
  //{
  //  imgUri: logoWam,
  //  url: "https://wam.app/"
  //},
  //{
  //  imgUri: logoKryptomoon,
  //  url: "https://kryptomon.co/"
  //},
  //{
  //  imgUri: logoMonsterra,
  //  url: "https://monsterra.io/"
  //},
  //{
  //  imgUri: logoFaraLand,
  //  url: "https://faraland.io/"
  //}

  ////////////////////////////////
  // {
  //   imgUri: logoUnfettered,
  //   url: "https://theunfettered.io/"
  // },
  // {
  //   imgUri: logoErtha,
  //   url: "https://ertha.io/"
  // },
  // {
  //   imgUri: logoSolice,
  //   url: "https://solice.io/"
  // },
  // {
  //   imgUri: logoRog,
  //   url: "https://rmg.io/"
  // },
  // {
  //   imgUri: logoGoldFever,
  //   url: "https://goldfever.io/"
  // },
  // {
  //   imgUri: logoMetawars,
  //   url: "https://metawars.gg/"
  // },
  // {
  //   imgUri: logoMetagods,
  //   url: "https://metagods.gg/"
  // },
  // {
  //   imgUri: logoWonderHero,
  //   url: "https://www.wonderhero.io/"
  // },
  // {
  //   imgUri: logoProjectSeed,
  //   url: "https://projectseed.io/"
  // },
  // {
  //   imgUri: logoDreamsQuest,
  //   url: "https://dreams.quest/"
  // },
  // {
  //   imgUri: logoNftTrade,
  //   url: "https://nftrade.com/"
  // },
  // {
  //   imgUri: logoWarena,
  //   url: "https://www.warena.io/"
  // },
  // {
  //   imgUri: logoTitanHunters,
  //   url: "https://www.titanhunters.io/"
  // },
  // {
  //   imgUri: logoMyMasterWar,
  //   url: "https://mymasterwar.com/"
  // },
  // {
  //   imgUri: logoSinVerse,
  //   url: "https://www.sin-city.io/home"
  // },
  // {
  //   imgUri: logoAspo,
  //   url: "https://aspo.world/"
  // },
  // {
  //   imgUri: logoPlacewar,
  //   url: "https://placewar.io/#/"
  // },
  // {
  //   imgUri: logoHeroesEmpire,
  //   url: "https://heroesempires.com/"
  // },
  // {
  //   imgUri: logoFtribe,
  //   url: "https://f2nft.games/"
  // },
  // {
  //   imgUri: logoGunstar,
  //   url: "https://gunstar.io/"
  // },
  // {
  //   imgUri: logoShopnext,
  //   url: "https://shopnext.io/"
  // },
  // {
  //   imgUri: logoPlanetSandbox,
  //   url: "https://planetsandbox.io/"
  // }
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
export const serviceDetails: Array<ServiceDetailTypes> = [
  {
    title: "Reputable Incubation",
    description:
      "We will accompany your project on the journey from building a strategic plan, raising funds, marketing, product development to implementation in real life, providing a clear picture of the status quo to take the next step towards fully harnessing the future potential of your project.",
    imgUri: imgReputable,
    providers: [
      {
        services: ["Icetea Labs Accelerator Program"],
        poweredByUri: logoIlap
      },
      {
        services: ["Game Economics & Operational Advisory"],
        poweredByUri: logoIcetea
      }
    ]
  },
  {
    title: "Technical Excellence",
    description:
      "We are backed by a network of strategic technology partners with more than 1,200 experienced and qualified programmers as well as a wide range of programming tools and utilities to help blockchain development become simpler and easier than ever.",
    imgUri: imgTechnical,
    providers: [
      {
        services: [
          "Security Audit, Pentest & Incident Response",
          "Blockchain Game and App Development",
          "Whitelabel",
          "Taskforce - Community Building",
          "DeepBlue - Augmented Web3 Content"
        ],
        poweredByUri: logoIcetea
      }
    ]
  },
  {
    title: "Experienced in Launching",
    description:
      "We own one of the most reputable Game Hubs to help the project reach a large community of quality players. Our top-tier launchpads integrate the top popular networks to bring users the best experience and enable diverse projects listed on its platform.",
    imgUri: imgGaming,
    providers: [
      {
        services: ["Blockchain Infrastructure"],
        poweredByUri: logoFirebird
      },
      {
        services: ["IDO (Initial DEX Offering)"],
        poweredByUri: logoRedkite
      },
      {
        services: [
          "IGO (Initial Gaming Offering)",
          "INO (Initial NFT Offering)",
          "Game Hub Listing"
        ],
        poweredByUri: logoGamefi
      }
    ]
  },
  {
    title: "Proficient in User Engagement",
    description:
      "We are going along with potential projects by connecting with our extensive network of KOLs to raise brand awareness and offer our tools and platforms to manage and build communities and players. We have a team of experienced and passionate enthusiasts in marketing who have supported over 130+ projects having a strong foothold in the competitive market.",
    imgUri: imgEngagement,
    providers: [
      {
        services: ["Mission Tool for Community and User Growth Hacking"],
        poweredByUri: logoDmission
      },
      {
        services: ["In-game Advertising for Web2 and Web3 Games"],
        poweredByUri: logoMirai
      }
      // {
      //   services: ["eSports Tournament Organizing"],
      //   poweredByUri: logoDesport
      // },
      // {
      //   services: ["GameFi Party (Real Player Growth Hacking System)"],
      //   poweredByUri: logoGamefi
      // }
    ]
  }
]

export type SocialItemTypes = {
  label: string
  username?: string
  url: string
}
export const socialsData: Array<SocialItemTypes> = [
  {
    label: "Official Twitter",
    url: "https://twitter.com/Firebirdchain",
    username: "@Firebirdchain"
  },
  {
    label: "Github",
    url: "https://github.com/firebird"
    // username: "@Firebird"
  },
  {
    label: "Medium",
    url: "https://medium.com/firebirdchain",
    username: "@Firebirdchain"
  },
  {
    label: "Reddit",
    url: "https://www.reddit.com/r/firebirdchain",
    username: "r/firebirdchain"
  },
  {
    label: "Announcement Channel",
    url: "https://t.me/FirebirdANN",
    username: "@FirebirdANN"
  },
  {
    label: "Telegram Group",
    url: "https://t.me/Firebird_en",
    username: "@Firebird_en"
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
  image: "https://d1j2c9jkfhu70p.cloudfront.net/Frame_1000002310_1_42ae31ee69.png",
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
