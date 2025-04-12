export type PricingPlan = {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  description: string;
  features: string[];

  featured: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    id: "tier-free",
    href: "#",
    priceMonthly: "$0",
    description:
      "Get started for free with limited features to explore the product.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "Email support within 48 hours",
    ],
    featured: false,
  },
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$29",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: false,
  },
];
