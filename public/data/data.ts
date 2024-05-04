import { INavOptions, IPost as ICardInfo } from "@/interfaces";

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
export const navigationOptions:INavOptions[] = [
  { id: 1, name: "Creon Pass", href: "", soon: false },
  { id: 2, name: "Token", href: "", soon: true },
  { id: 3, name: "AI Revenue", href: "", soon: true },
  { id: 4, name: "AI Launchpad", href: "", soon: true },
];
