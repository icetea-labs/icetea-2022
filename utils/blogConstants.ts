export interface BlogTypes {
  id: string
  type: string
  title: string
  slug: string
  date: string
  image: string
  hashtags: string[]
  short_intro?: string
  intro: string
  html: boolean
  content: string[]
  link: string[]
  tags: string[]
  show: boolean
  highlight: boolean
}

export const blogs: Array<BlogTypes> = [
  {
    id: "199",
    type: "Announcement",
    title:
      "Icetea Labs Collaborate with Good Games Guild to Co-incubate ArbiPad - The Next Generation Arbitrum-zkSync Based Launchpad",
    slug: "icetea-labs-and-collaborate-with-good-games-guild-to-co-incubate-arbipad",
    date: "Tues 04/18/2023",
    image: "/images/news/good_games_guild.png",
    hashtags: [],
    short_intro: "",
    intro: "",
    html: true,
    content: [
      '<p><img src="/images/news/good_games_guild.png" width="100%" ></p>',
      "<p><br></p>",
      "<p>We are thrilled to announce that Icetea Labs has joined forces with Good Games Guild to co-incubate a new launchpad built on Arbitrum and zkSync, ArbiPad. Through this partnership, we will together provide ArbiPad extensive support to offer the community a project with enhanced features and an optimal user experience.</p>",
      "<p><br></p>",
      "<p>ArbiPad is an innovative platform that launches the greatest tokenized projects created by Good Games Guild. Leveraging the advantages of Arbitrum and zkSync, it has a low-cost, stable, efficient, and high-security ecosystem. </p>",
      "<p><br></p>",
      "<p>ArbiPad aims to provide a unique launchpad experience for blockchain projects, allowing them to access the benefits of both scaling solutions. With transparency and a fair distribution system, ArbiPad can connect the biggest crypto project and the global community to become a leading launchpad in the Arbitrum and zkSync ecosystems. </p>",
      "<p><br></p>",
      "<i>Learn more about ArbiPad: </i>",
      '<p><a href="https://arbipadcom.medium.com/">Medium</a> | <a href="https://twitter.com/arbipadcom">Twitter</a> | <a href="https://t.me/arbipadchat">Telegram chat</a> | <a href="https://t.me/arbipadnews">Telegram announcement channel</a></p>',
      "<p><br></p>",
      "<p>Realizing the potential possibilities of ArbiPad, Icetea Labs and Good Games Guild have decided to co-incubate this project. With considerable experience in the blockchain field, we will comprehensively support ArbiPad in building technical infrastructure and business development plans, giving advice on growing marketing, community, and many more. </p>",
      "<p><br></p>",
      "<p><b>About Good Games Guild</b></p>",
      "<p>Good Games Guild is a Gaming Hub that The Good Games Guild is a gaming hub that aspires to construct the biggest virtual world economy by sponsoring millions of play-to-earn gamers, ,investing in play-to-earn games along with their in-game assets, and developing tools that will enhance the future of gaming and metaverse. </p>",
      "<p><br></p>",
      "<p>With more than 300,000 communities around the world, Good Games has become a movement and network of gamers, builders and investors. </p>",
      "<p><br></p>",
      "<p><i>Learn more about Good Games Guild: </i></p>",
      '<p><a href="https://goodgamesguild.com/">Website</a> | <a href="https://discord.gg/x47U9qkR5K">Discord</a> | <a href="https://twitter.com/goodgamesguild">Twitter</a> | <a href="https://t.me/GoodGamesGuildChat">Telegram</a> | <a href="https://medium.com/@goodgamesguild">Medium</a> | <a href="https://www.instagram.com/goodgamesguild/">Instagram</a></p>',
      "<p><br></p>",
      "<p><b>About Icetea Labs</b></p>",
      "<p>Icetea Labs is Asia’s leading Web3 Incubator and powerhouse specializing in the game discovery and user engagement. Icetea Labs has its full-lifecycle ecosystem of infrastructure layers and launchpad services, which allows the firm not only to invest and incubate early-stage startups but also to offer a platform for these companies to launch and grow their community. Our mission is to connect and engage the next billion gamers with Web3 games. </p>"
    ],
    link: [],
    tags: ["Partnership", "Incubation"],
    show: true,
    highlight: false
  },
  {
    id: "9",
    type: "Announcement",
    title: "Introducing the Icetea Labs accelerator program",
    slug: "introducing-the-icetea-labs-accelerator-program",
    date: "Mon 08/15/2022",
    image: "/images/news/ilap_aug.png",
    hashtags: [],
    short_intro:
      "Web3 leading incubator Icetea Labs has announced the creation of its inaugural Web3 Accelerator Program in conjunction with Polygon and Alpha Venture DAO.",
    intro: "INTRODUCING THE ICETEA LABS ACCELERATOR PROGRAM",
    html: true,
    content: [
      "<p><b>1. WHAT IS THE ICETEA LABS ACCELERATOR PROGRAM?</b></p>",
      "<p><b>Icetea Labs Accelerator Program (ILAP)</b> is the 08-week accelerator program that helps Web3 Startups in product/market fit, expansion, and growth. Our focus for this cohort is GameFi, Metaverse, NFT utilities and beyond.</p>",
      '<p>ILAP is powered by Icetea Labs and co-organized with <a href="https://polygon.technology/" style="color: white" target="_blank" rel="noreferrer noopener">Polygon</a>, one of the top blockchain development platforms offering scalable and sustainable blockchains and Alpha Venture DAO, the leading Web3 venture builder and incubator in Southeast Asia.</p>',
      '<p>The Icetea Labs Accelerator Program has the participation of several high-profile partners, funds and mentors including Polygon, <a style="color: white" href="https://alphaventuredao.io/" target="_blank" rel="noreferrer noopener">Alpha Venture DAO</a>, Hashed, Protocol Labs, Global Founders Capital (GFC), Polygon Studios, Saison Capital, Crypto.com Capital, Shima Capital, CyberAgent Capital, Filecoin, Amazon Web Services (AWS), Bybit, GameFi.org, DAO Maker, Avocado DAO, Salad Ventures, Funtap, Red Kite launchpad, Certik, DESports.gg, Symbolic Capital, Spark Digital Capital, Moonrock Capital, iCandy Interactive, Topebox, Dvision Network, BitKeep, Alpha Lab Capital and many others.</p>',
      "<p>The program is also accompanied by several well-known media partners including CoinMarketCap, Momentum6, Crypto Banter, AltcoinBuzz, Cryptodiffer, Satoshi Club, Top 7 ICO, Vendetta Ventures, and HG Ventures.</p>",
      "<p><br/></p>",
      "<p><b>2. WHO SHOULD JOIN ILAP?</b></p>",
      "<p>ILAP is open for any Web3 Startup whose product or service relates to gaming, metaverse, or NFT utilities. Startups at all stages benefit from the contents of ILAP. Early product startups with MVP will benefit the most that we can help with project audit, ecosystem network, security, business model, and go-to-market strategy. While the later stages project will enjoy advice mostly on marketing, community building, traction growth, funding, and tokenomics.</p>",
      "<p>It doesn’t matter where you come from. What world you’re building that counts.</p>",
      "<p><br/></p>",
      "<p><b>3. BENEFITS FOR WEB3 STARTUPS JOINING ILAP</b></p>",
      "<p><br/></p>",
      '<div class="image"><img width="100%" alt="" src="https://i.imgur.com/iFY6iE6.png"/></div>',
      "<p><br/></p>",
      "<p>Web3 Startups who are selected to join the Accelerator program will receive a lot of attractive benefits:</p>",
      "<p><b><u>- Expertise</u></b>: Accessible to in-depth knowledge, mentors, experts, and global investors in Web3 Business.</p>",
      "<p><b><u>- Ecosystem</u></b>: Accessible to an entire ecosystem of Icetea Labs and its partners that supports a full product development and operation lifecycle.</p>",
      "<p><b><u>- Investment</u></b>: Funding opportunities on showcase day where participating startups pitch to accredited venture capital investors, angels, entrepreneurs, mentors, and partners.</p>",
      "<p>The advantage is not limited to the program course only. Graduated startups will have access to Icetea Lab’s Alumni network where we continue to support, give advice, make introductions, form partnerships, and build together.</p>",
      "<p><br/></p>",
      "<p><b>4. ILAP APPLICATION PROCESS</b></p>",
      "<p>The Web3 Startups who want to join our Accelerator Program need to follow the below steps:</p>",
      '<p><b>Step 01</b>: Fill in the <b>Online Application Form</b>: <a href="https://bit.ly/3IV43J0" style="color: white" target="_blank" rel="noreferrer noopener">https://bit.ly/3IV43J0</a></p>',
      "<p><b>Step 02</b>: After being carefully screened and evaluated, the shortlisted candidates will go to the next round - the <b>Interview round</b>.</p>",
      "<p><b>Step 03</b>: Successfully selected startups will enjoy ILAP’s mentorship and support during the 8 weeks program. (Selected candidates will be informed one week before the program starts and commit to spending at least 08 hours per week on its activities).</p>",
      "<p>After completing the 08-week program, the qualified Web3 Startups will present and pitch at Showcase Day with 40+ global investors, mentors, experts, and strategic partners!</p>",
      "<p><br/></p>",
      "<p><b>5. ILAP KEY MILESTONES</b></p>",
      "<p><br/></p>",
      '<div class="image"><img width="100%" alt="" src="https://i.imgur.com/MisXvHD.png"/></div>',
      "<p><br/></p>",
      "<p>Please mark your calendar the following dates:</p>",
      "<p>ILAP Application duration: <b>August 15, 2022 - August 31, 2022</b></p>",
      "<p>Shortlisted Interview: <b>September 01, 2022</b></p>",
      "<p>Main Program: <b>September 26, 2022 - November 21, 2022</b></p>",
      "<p>Demo Day: <b>November</b></p>",
      "<p><b>JOIN US NOW TO CO-CREATE LASTING IMPACTS WITH WEB3!</b></p>"
    ],
    link: [],
    tags: ["Accelerator", "Web3"],
    show: true,
    highlight: false
  },
  {
    id: "10",
    type: "Announcement",
    title: "Hashed And Icetea Labs Join Forces Towards A Common Goal In GameFi And Metaverse",
    slug: "hashed-and-icetea-labs-join-forces-towards-a-common-goal-in-gamefi-and-metaverse",
    date: "FRI 11/02/2022",
    image: "/images/news/hashed.png",
    hashtags: [],
    short_intro: "",
    html: true,
    intro:
      "Hashed and Icetea Labs, as strategic partners, will co-build a self-sustainable, interoperable, open metaverse and GameFi ecosystem in the long run.",
    content: [
      "Since the latter half of 2021, GameFi and metaverse have driven the crypto market; henceforth, a dozen of crypto games have launched per month and led to a wider selection of games that users can choose from. But as one delves deeper into this space, crypto games are actually facing hardships in implementing a sustainable in-game economy. Simultaneously, even emerging metaverses are extant only on trailers, casting doubt on the wide discrepancy between vision and reality. The market is starting to see faltering games with a short-term focus and an unsustainable in-game economy.",
      "Sharing a common vision and understanding of the potentials for and challenges to the future of GameFi and metaverse, Hashed and Icetea Labs shook hands to form a strategic partnership without termination dates.",
      "To be specific, the two strategic partners will explore the details to cooperate closely in an on-hands manner in GameFi and metaverse with regard to R&D and financing, ranging from infrastructure layers, platforms, and services, to interoperable flagship products, supporting the full lifecycle of games and metaverses (i.e. tokenomics design, launch plan, marketing, and etc.).",
      "The strategic collaboration is expected to fuel the overall growth of the gaming and metaverse industry, especially in the Asia Pacific.",
      "Jun Park, Investment Associate at Hashed focusing on crypto investments through the eyes of gaming: “In reality, the number of crypto games that are officially launched with meaningful daily active users is low. I have noticed faltering projects which were not able to converge their vision and reality at the end of the day. From 2022 along with Icetea Labs, I hope to see and will actively search for genuine GameFi projects with the following, non-exhaustive traits: 1) fair game mechanics; 2) play-to-earn through time-based efforts; 3) circular economy with low treasury intervention; 4) gaming fundamentals being fun at its core.”",
      "Edward Hong, Head of Growth at Hashed: “SEA (Southeast Asia) is the region with the fastest-growing adoption of blockchain games and GameFi. It is mesmerizing that blockchain games like Axie Infinity are now entirely transforming the economic patterns of people living in the region. Through this partnership, Hashed will work closely with Icetea Labs in the region to actively discover founders and support them to create a new value.”",
      'Thi Truong, founder of Icetea Labs: "Blockchain gaming and metaverse industry suffer if companies just want to take away from it rather than contributing. There are many missing pieces and supporting systems that need to be built seriously and with a long-term vision in mind. In 2022 and the years to come, Icetea Labs devotes itself to research and experiments of sustainable economic models, designing cross-game and cross-metaverse mechanisms, building workforce and inhabitants for metaverses, and collaborating on infrastructure effort. We are very happy to work together with Hashed, one of the most visionary leaders in crypto space, on this journey."',
      "Hashed is an early-stage venture firm focused on blockchain protocols. Led by serial entrepreneurs and engineers, Hashed focuses on expediting global blockchain adoption through strategic investments and community building. Based in South Korea, San Francisco, Singapore and Bangalore, Hashed has cultivated industry-defining web3 founders around the globe by accelerating protocols such as Terra Money, Axie Infinity, Klaytn, Link, and The Sandbox. Hashed additionally operates metaverse studio UNOPND and Korean cryptocurrency custodian KODA.",
      "Icetea Labs is a notable gaming and metaverse incubator and enabler in Asia - the world's most exciting blockchain gaming and metaverse community. Operating two of the best performing launchpads, GameFi.org and Red Kite, Icetea Labs has advised, strategically invested, and launched many high profile games and metaverses such as Bloktopia, Sidus, Solice, etc. Icetea Labs also owns Mirai game studio, and is working closely with several industry-leading partners on critical gaming and metaverse initiatives."
    ],
    link: [],
    tags: ["Infrastructure", "Partnership"],
    show: true,
    highlight: false
  },
  {
    id: "12",
    type: "Announcement",
    title:
      "Icetea Labs Partners with Filecoin for Greater Decentralization and Asset Integrity in Open Metaverse",
    slug: "icetea-labs-partners-with-filecoin-for-greater-decentralization-and-asset-integrity-in-open-metaverse",
    date: "TUE 08/03/2022",
    image: "/images/news/filecoin.png",
    hashtags: [],
    short_intro: "",
    html: true,
    intro:
      "We’re pleased to announce Icetea Labs’ partnership with Filecoin, one of the pioneers in decentralized storage networks, to drive the adoption of decentralized data storage for blockchain-based projects, especially in the open metaverse.",
    content: [
      "As a notable gaming and metaverse incubator and enabler in Asia, Icetea Labs pays particular attention not only to researching, building the workforce and inhabitants of metaverses, but also collaborating on infrastructure efforts.",
      "The collaboration will see Icetea Labs becoming the bridge between Filecoin and future projects within our ecosystem that aim to have a large number of users and content uploaded. Filecoin can be a compelling alternative to traditional web services with the ability to make information and data persist in a secure, private manner. With a decentralized system like Filecoin, there is no risk of data loss once it’s stored. The projects’ files are split up, encrypted, and stored on many computers throughout the world. It helps avoid relying on trusted third parties, or vendors who keep the data hostage. Furthermore, the cost of storing data on Filecoin is remarkably lower than centralized enterprises today.",
      "Through this collaboration, Filecoin will support Web3 games and metaverse projects within IceTea Labs’ network on their storage and infrastructure needs. In addition, projects using IPFS and Filecoin (and services like NFT.storage, Estuary, Web3.storage) for decentralized storage are eligible for a $5,000 grant.  Eligible projects can apply here. Applications are reviewed on a rolling basis.",
      "At the same time, Icetea Labs will work with Filecoin and the Protocol Labs ecosystem fund to invest in and support high-quality open metaverse projects.",
      "Icetea Labs and Filecoin will collaborate to open up more opportunities that benefit projects and development teams in the blockchain space in terms of decentralized data storage, funding, and launchpads. Both parties will explore further collaborations and foster a long-term relationship to support new ideas in the open metaverse and other fields of common interest.",
      "\bAbout Filecoin\b Filecoin, the world’s largest decentralized network, allows users to store, request, and transfer data via a verifiable marketplace. Filecoin is completely open-source, enabling people from all over the world to participate. The Filecoin protocol runs on an advanced and novel proof system — a combination of Proof of Spacetime (PoSt) and Proof of Replication (PoRep), to provide unmatched efficiency and reliability.",
      "Filecoin’s advanced technology provides a robust foundation to store the world’s most valuable data sets. An alternative to costly cloud storage, the Filecoin network offers efficiently priced and geographically decentralized storage, minimizing financial barriers and allowing users to take advantage of its unmatched network capabilities.",
      "\bAbout Icetea Labs\b Icetea Labs is a notable gaming and metaverse incubator and enabler in Asia - the world's most exciting blockchain gaming and metaverse community. With an extensive network of venture capitalists and programmers, Icetea Labs provides four different services to firms that are tailored to their individual needs including Project incubation, Advisory partner, Project launching, and Developer Hub.",
      "Icetea Labs is currently working as a strategic consultant for many famous projects, such as GameFi, Red Kite, Faraland, Deathroad, Metawars, Wonder Hero, Dreams Quest, Warena, Mymasterwar, ASPO World, etc."
    ],
    link: [],
    tags: ["Filecoin", "Partnership"],
    show: true,
    highlight: false
  },
  {
    id: "13",
    type: "Announcement",
    title: "INTRODUCING 06 FINALISTS IN ILAP - AUTUMN 2022 COHORT",
    slug: "introducing-06-finalists-in-ilap-autumn-2022-cohort",
    date: "Fri 09/23/2022",
    image: "/images/news/ilap_projects.jfif",
    hashtags: [],
    short_intro:
      "Icetea Labs Accelerator Program (ILAP - Autumn 2022 Cohort) is organized to support Web3 Startups and move Web3 forward. Together meet our top 06 Startups chosen from 250+ applications!",
    intro: "INTRODUCING 06 FINALISTS IN ILAP - AUTUMN 2022 COHORT",
    html: true,
    content: [
      "<p><b>Icetea Labs Accelerator Program (ILAP - Autumn 2022 Cohort)</b> is organized to support Web3 Startups and move Web3 forward together. 06 finalists chosen from 250+ applications will join us in the 08-week accelerator program.</p>",
      "<p>Through the intensive 08-week bootcamp, our Head Mentors will closely accompany the projects. Many activities are exclusively organized for the top finalists: intensive workshops with specific topics for learning from experts, Tea Talk with our Partners and Mentors to build strong networking, Mentoring 1on1 with Head Mentors, etc. Significantly, the Demo Day will be specially organized on the biggest event of IceTea Labs this November - the Miracle event.</p>",
      "<p>We are thrilled to share details of the 06 Startups joining ILAP - Autumn 2022 Cohort. Together meet our top 06 Startups:</p>",

      "<p><br /></p>",
      "<p><b>VICTORY POINT</b></p>",
      "<p><br/></p>",
      '<div class="image"><img width="100%" alt="" src="https://i.imgur.com/3HYO1uW.png"/></div>',
      "<p><br/></p>",
      "<p><b>Victory Point</b> is an AAA-rated, Free-to-Play (F2P), Play-to-Earn (P2E), Multiplayer, First Person Shooter (FPS) game built on Unreal Engine and powered by blockchain and NFTs. Victory Point is the first game to adopt a zero-sum-game reward system with the focus on retaining a long-term, healthy and sustainable economy within its ecosystem. The game was initially intended to release only on PC via Steam and Epic Games as a web2 game (previously titled Hind Warfare).</p>",
      '<p><b>Victory Point website:</b> <a class="link-ref" href="https://victorypoint.io/">https://victorypoint.io/</a></p>',

      "<p><br /></p>",
      "<p><b>TOONFT</b></p>",
      "<p><br/></p>",
      '<div class="image"><img width="100%" alt="" src="https://i.imgur.com/h9658n8.png"/></div>',
      "<p><br/></p>",
      "<p><b>TooNFT</b> is an unprecedented blockchain-based platform that will revolutionize the WebToon industry by creating an innovative, next-generation NFT ecosystem. TooNFT strives to establish a decentralized WebToon market through implementing a transparent compensation system based on blockchain technology. Through the utilization of cutting-edge technological advancements like smart contracts and NFTs, the TooNFT team discovered an opportunity to eliminate the role of middlemen and create a transformed decentralized WebToon ecosystem with features such as transparency, fairness, and a focus on creators and consumers.</p>",
      '<p><b>TooNFT website:</b> <a class="link-ref" href="https://toonft.com/">https://toonft.com/</a></p>',

      "<p><br /></p>",
      "<p><b>YOOLDO | TROUBLE PUNK</b></p>",
      "<p><br/></p>",
      '<div class="image"><img width="100%" alt="" src="https://i.imgur.com/bah7ra0.png"/></div>',
      "<p><br/></p>",
      "<p><b>Yooldo</b> is an X-to-Earn game content platform which will have tokenomics optimized for the content provided by each game, and which the form of Earn also vary from game to game.</p>",
      "<p><b>Trouble Punk | Cyber Galz</b>, the first game on the Yooldo platform, is a fighting action game of the battle royale genre. Users can collect points dropped in the game to win in a limited time. Users need to beat off as many opponents as possible while trying to earn as many points as they can. They used the Unity engine for the development, they adopted a client execution method rather than a web app-based method for in-game functions and controls. Trouble Punk will be released for PC upon the launch, and the mobile version is being considered to be available later.</p>",
      '<p><b>Yooldo website:</b> <a class="link-ref" href="https://www.yooldo.gg/">https://www.yooldo.gg/</a></p>',
      '<p><b>Trouble Punk | Cyber Galz website:</b> <a class="link-ref" href="https://troublepunk.com/web3/">https://troublepunk.com/web3/</a></p>',

      "<p><br /></p>",
      "<p><b>GUMMYS</b></p>",
      "<p><br/></p>",
      '<div class="image"><img width="100%" alt="" src="https://i.imgur.com/QUOQlPO.png"/></div>',
      "<p><br/></p>",
      "<p><b>Gummys</b> is a new income opportunity for content creators and users. Create, own, earn is our paradigm. Users can earn by making content, minting videos as NFT, watching videos, engaging with content creators, and more actions. Through Gummys privacy measures, users have peace of mind knowing that they do not need to worry about their data being sold to third parties or a data bridge as they only need a blockchain public address to use the platform. Gummys will use the grant for the development of key features of the platform like storing video metadata on the blockchain making the platform censorship-resistant and minting video as NFT.</p>",
      '<p><b>Gummies website:</b> <a class="link-ref" href="https://www.gummys.io/">https://www.gummys.io/</a></p>',

      "<p><br /></p>",
      "<p><b>HASHBON PASS</b></p>",
      "<p><br/></p>",
      '<div class="image"><img width="100%" alt="" src="https://i.imgur.com/yB3uP7r.png"/></div>',
      "<p><br/></p>",
      "<p><b>Hashbon Pass</b> NFT Passport, or by Hashbon FiRe is an NFT and a decentralized protocol for reusable identity verification on blockchains such as Ethereum, BNB Chain, Polygon, and other EVM-compatible networks. Their protocol involves the participation of three parties: Verifiers, Users, DeFi protocols that require user identification</p>",
      '<p><b>Hashbon Pass website:</b> <a class="link-ref" href="https://pass.hashbon.com/">https://pass.hashbon.com/</a></p>',

      "<p><br /></p>",
      "<p><b>ETERNAL GLORY</b></p>",
      "<p><br/></p>",
      '<div class="image"><img width="100%" alt="" src="https://i.imgur.com/KbkPryb.png"/></div>',
      "<p><br/></p>",
      "<p><b>Eternal Glory</b> is a Multichain GameFi platform with distinguished reward balance mechanism and economic system to ensure a fair environment. It is backed by IEC - one of the Top 7 Game Studio in South East Asia, with 600M+ downloads Worldwide. Eternal Glory is a multiverse that is made up of many realms. Each realm in Eternal Glory is designed to have unique gameplay mechanics and each NFT is designed to have different skill sets and different use cases once they set foot into a new realm. Players can endlessly travel between different realms, uncover hidden treasure, unlock new game modes to achieve ultimate glory.</p>",
      '<p><b>Eternal Glory website:</b> <a class="link-ref" href="https://eternalglory.io/">https://eternalglory.io/</a></p>',

      "<p>Our mission is to try our best to support the Web3 Startups, especially Web3 Startups joining ILAP, scale and thrive through our ecosystems, networking, and deep experience in this industry. The ILAP kick-off event successfully took place at <b>10:00 UTC on September 23</b> with the participation of the representatives of top 06 finalists, trio organizers, mentors, and our partners, marking a good inauguration.</p>",
      "<p><b>Let’s co-create lasting impact with Web3 together!</b></p>"
    ],
    link: [],
    tags: ["Accelerator", "Web3"],
    show: true,
    highlight: false
  }
]
