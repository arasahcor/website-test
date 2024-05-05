import { INavOptions, ICardInfo, IIcon } from "@/interfaces";

//for cards
export const cards: ICardInfo[] = [
  {
    id: 1,
    title: "token",
    subtitle: "The Gateway token to the world of AI",
    coming: true,
    description:
      "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    imageUrl: "../images/cS1.webp",
  },
  {
    id: 2,
    title: "revenue",
    subtitle: "Driving income and growth through decentralization",
    coming: true,
    description:
      "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
    imageUrl: "../images/cS2.webp",
  },
  {
    id: 3,
    title: "launchpad",
    subtitle: "Driving the future of AI Innovation",
    coming: true,
    description:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
    imageUrl: "../images/cS3.webp",
  },
];

//for navigation
export const navigationOptions: INavOptions[] = [
  { id: 1, name: "Creon Pass", href: "", soon: false },
  { id: 2, name: "Token", href: "", soon: true },
  { id: 3, name: "AI Revenue", href: "", soon: true },
  { id: 4, name: "AI Launchpad", href: "", soon: true },
];

export const iconsFooter: IIcon[] = [
  {
    id: 1,
    name: "Telegram",
    img: "../../images/Telegram.svg",
  },
  {
    id: 2,
    name: "Discord",
    img: "../../images/Discord.svg",
  },
  {
    id: 3,
    name: "Twitter",
    img: "../../images/Twitter.svg",
  },
];

export const passNFTData: { id: string | number; text: string }[] = [
  {
    id: 1,
    text: "Pre-launch investment opportunities for upcoming AI projects",
  },
  {
    id: 2,
    text: "Free and early access to Creon built AI projects",
  },
  {
    id: 3,
    text: "Higher allocation limits on the Creon AI Launchpad",
  },
  {
    id: 4,
    text: "Revenue share distribution from Creon built AI projects",
  },
];

export const cards2: ICardInfo[] = [
  {
    id: 1,
    title: "AI Prospects, Market Size, and Development Pace",
    coming: true,
    description:
      "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
    imageUrl: "../images/dC1.webp",
  },
  {
    id: 2,
    title: "AI Tools and Market",
    coming: true,
    description:
      "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
    imageUrl: "../images/dC2.webp",
  },
  {
    id: 3,
    title: "AI, Crypto, and NFT Market",
    coming: true,
    description:
      "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
    imageUrl: "../images/dC3.webp",
  },
];

export const accordionData: ICardInfo[] = [
  {
    id: 1,
    title: "Profitability and Growth",
    description:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    imageUrl: "../images/accIcon3.svg",
  },
  {
    id: 2,
    title: "Transparent & Fair Decentralized Earnings",
    description:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    imageUrl: "../images/accIcon2.svg",
  },
  {
    id: 3,
    title: "Launching the future",
    description:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    imageUrl: "../images/accIcon1.svg",
  },
  {
    id: 4,
    title: "Limitless Possibilities of AI & Crypto",
    description:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    imageUrl: "../images/accIcon4.svg",
  },
];
