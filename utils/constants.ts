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
import imgRedkite from "/public/images/services/redkite.png"
import imgGamefi from "/public/images/services/gamefi.png"
import imgFirebird from "/public/images/services/firebird.png"
import imgDesport from "/public/images/services/desport.png"
import imgIfo from "/public/images/services/ifo.png"

import logoDesport from "/public/images/logo/logo-desport.png"
import logoFirebird from "/public/images/logo/logo-firebird.png"
import logoGamefi from "/public/images/logo/logo-gamefi.png"
import logoIcetea from "/public/images/logo/logo-icetea.png"
import logoIfo from "/public/images/logo/logo-ifo.png"
import logoIlap from "/public/images/logo/logo-ilap.png"
import logoMirai from "/public/images/logo/logo-mirai.png"
import logoRedkite from "/public/images/logo/logo-redkite.png"

// partners
import logoAlpha from "/public/images/partners/alpha-venture.png"
import logoAnimoca from "/public/images/partners/animoca.png"
import logoBnbChain from "/public/images/partners/bnb-chain.png"
import logoDAO from "/public/images/partners/dao.png"
import logoFilecoin from "/public/images/partners/filecoin.png"
import logoFuntap from "/public/images/partners/funtap.png"
import logoHashed from "/public/images/partners/hashed.png"
import logoPolygon from "/public/images/partners/polygon.png"

// product images
import productFirebird from "/public/images/products/firebird.png"
import productGamefi from "/public/images/products/gamefi.png"
import productRedkite from "/public/images/products/redkite.png"
import productDesport from "/public/images/products/desport.png"

export const URLS = {
  HOME: "/",
  SERVICES: "/services",
  PRODUCT: "/product",
  PORTFOLIO: "/portfolio",
  BLOG: "/blog",
  ABOUT: "/about",
  CAREER: "/career"
}

export type RouteTypes = {
  label: string
  uri: string
}
export const routes: Array<RouteTypes> = [
  {
    label: "Services",
    uri: URLS.SERVICES
  },
  {
    label: "Product",
    uri: URLS.PRODUCT
  },
  {
    label: "Portfolio",
    uri: URLS.PORTFOLIO
  },
  {
    label: "Blog",
    uri: URLS.BLOG
  },
  {
    label: "About",
    uri: URLS.ABOUT
  },
  {
    label: "Career",
    uri: URLS.CAREER
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
    bgUri: "/images/products/bg-firebird.png",
    description: "A game-dedicated web2-friendly high-performance blockchain",
    imageUri: productFirebird,
    title: "Layer 1 Blockchain",
    url: "https://firebirdchain.com/"
  },
  {
    bgUri: "/images/products/bg-gamefi.png",
    description: "An all-in-one discovery hub for web3 games and metaverses",
    imageUri: productGamefi,
    title: "Gamehub",
    url: "https://gamefi.org/"
  },
  {
    bgUri: "/images/products/bg-redkite.png",
    description: "A cutting-edge launchpad and some DeFi/NFTFi features",
    imageUri: productRedkite,
    title: "Launchpad & NFT-FI",
    url: "https://redkitepad.com/"
  }
]
export const ventureProducts: Array<ProductTypes> = [
  {
    bgUri: "/images/products/bg-desport.png",
    description: "A blockchain E-sport platform that help convert traditional gamers to blockchain",
    imageUri: productDesport,
    title: "Web3 E-sport platform",
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
    imageUri: logoMirai
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
      "We support potential startups with our extensive network of mentors and partners to build a market-fit products, fundraising and brand awareness.",
    detailUrl: "",
    imgUri: imgInitiation,
    programs: [
      {
        title: "Icetea Labs",
        description: "A leading gaming and metaverse incubator in Asia",
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
        title: "Icetea Labs",
        description: "Bring the true benefit of blockchain technology to everyone",
        thumbnail: imgIcetea,
        url: "https://icetea.io/"
      }
    ]
  },
  {
    id: 3,
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
        description: "Launch hand-picked projects and help them shine. ",
        thumbnail: imgRedkite,
        url: "https://redkitepad.com/"
      }
    ]
  },
  {
    id: 4,
    title: "Game Discoveries",
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
      },
      {
        title: "Firebird",
        description: "Build scalable and frictionless Web3 games with Firebird",
        thumbnail: imgFirebird,
        url: "https://firebirdchain.com/"
      }
    ]
  },
  {
    id: 5,
    title: "User Engagement",
    description:
      "Icetea Labs supports e-sport tournaments & leaderboards and integrates in-game advertising and content creation to support the creator economy. \nBesides, we do joint research with strategic partners to co-build a sustainable web3 game and metaverse.",
    detailUrl: "",
    imgUri: imgUser,
    programs: [
      {
        title: "Desport",
        description:
          "The first Esports platform with integrated blockchain technology and play-to-earn model built for gamers around the world.",
        thumbnail: imgDesport,
        url: "https://desports.gg/"
      },
      {
        title: "Initial Fan Offering (IFO)",
        description: "Where project tokens awarded to the real fans!",
        thumbnail: imgIfo,
        url: "https://ifo.icetea.io/"
      }
    ]
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
    imgUri: logoAlpha,
    url: "https://alphaventuredao.io/"
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
        services: ["True Fan Building"],
        poweredByUri: logoIfo
      },
      {
        services: ["In-game Advertising for Web2 and Web3 Games"],
        poweredByUri: logoMirai
      },
      {
        services: ["E-sport Tournament Organizing"],
        poweredByUri: logoDesport
      },
      {
        services: ["GameFi Party (Real Player Growth Hacking System)"],
        poweredByUri: logoGamefi
      }
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
  image: "https://d1j2c9jkfhu70p.cloudfront.net/Thumbnail_2_7bc61c9253.png",
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
