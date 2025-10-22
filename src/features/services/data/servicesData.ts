// src/features/services/data/servicesData.ts

import {
  ShieldCheck,
  Lock,
  Handshake,
  Wallet,
  Link as LinkIcon,
  Truck,
} from "lucide-react";

export const servicesData = [
  {
    id: 1,
    title: "Create an Order",
    description:
      "A seller or service provider creates an escrow order detailing the transaction, item, price, and delivery terms.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Share Payment Link",
    description:
      "The buyer receives a secure NaijaEscrow payment link to fund the order using Naira or other supported methods.",
    icon: LinkIcon,
  },
  {
    id: 3,
    title: "Escrow Holds the Funds",
    description:
      "Once payment is made, NaijaEscrow safely holds the funds, ensuring neither party is at risk.",
    icon: Lock,
  },
  {
    id: 4,
    title: "Seller Ships or Delivers",
    description:
      "The seller proceeds to deliver the product or complete the service based on the agreed terms.",
    icon: Truck,
  },
  {
    id: 5,
    title: "Buyer Confirms Delivery",
    description:
      "The buyer confirms receipt and satisfaction. If there's an issue, NaijaEscrow steps in to mediate.",
    icon: Handshake,
  },
  {
    id: 6,
    title: "Funds are Released",
    description:
      "Once confirmed, NaijaEscrow releases the funds to the seller's wallet instantly.",
    icon: Wallet,
  },
];
