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
