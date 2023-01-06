import imgInitiation from "/public/images/services/initiation.png"
import imgWeb3 from "/public/images/services/web3.png"
import imgTokenNft from "/public/images/services/token.png"
import imgGame from "/public/images/services/game.png"
import imgUser from "/public/images/services/user.png"

import imgIlap from "/public/images/services/initiation-ilap.png"
import imgMirai from "/public/images/services/mirai.png"
import imgIcetea from "/public/images/services/icetea-labs.png"
import imgRedkite from "/public/images/services/redkite.png"
import imgGamefi from "/public/images/services/gamefi.png"
import imgFirebird from "/public/images/services/firebird.png"
import imgDesport from "/public/images/services/desport.png"
import imgIfo from "/public/images/services/ifo.png"
import { StaticImageData } from "next/image"

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
  imgHoverUri: StaticImageData
  url: string
}

// export const partners: Array<PartnerTypes> = [
//   {
//     imgUri: ,
//     imgHoverUri: ,
//     url:""
//   }
// ]

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
