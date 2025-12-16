export type NavItem = {
  title: string;
  href?: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/home" },
  {
    title: "Marketing",
    children: [
      { title: "Digital", href: "/marketing/digital" },
      { title: "DOOH", href: "/marketing/dooh" },
      { title: "Social", href: "/marketing/social" },
      { title: "Email", href: "/marketing/email" },
    ],
  },
  {
    title: "Category",
    children: [
      { title: "Store Traffic", href: "/category/store-traffic" },
      { title: "Basket Insights", href: "/category/basket-insights" },
      { title: "Category Performance", href: "/category/category-performance" },
      { title: "Promo Performance", href: "/category/promo-performance" },
      { title: "Price and Margin", href: "/category/price-margin" },
      { title: "Inventory Health", href: "/category/inventory-health" },
    ],
  },
  { title: "Brands", href: "/brands" },
  { title: "Consumer Insights", href: "/consumer-insights" },
  { title: "Reports", href: "/reports" },
  { title: "AI insights", href: "/ai-insights" },
];
