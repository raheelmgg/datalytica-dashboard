import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Digital from "./pages/marketing/Digital";
import Dooh from "./pages/marketing/Dooh";
import Social from "./pages/marketing/Social";
import Email from "./pages/marketing/Email";
import StoreTraffic from "./pages/category/StoreTraffic";
import BasketInsights from "./pages/category/BasketInsights";
import CategoryPerformance from "./pages/category/CategoryPerformance";
import PromoPerformance from "./pages/category/PromoPerformance";
import PriceMargin from "./pages/category/PriceMargin";
import InventoryHealth from "./pages/category/InventoryHealth";
import Brands from "./pages/Brands";
import ConsumerInsights from "./pages/ConsumerInsights";
// import Reports from "./pages/Reports";
import AiInsights from "./pages/AiInsights";
import NotFound from "./pages/NotFound";
import NewCampaign from "./pages/media-planning/NewCampaign";
import Marketing from "./pages/reports/Marketing";
import MediaPlanning from "./pages/reports/MediaPlanning";
import Category from "./pages/reports/Category";
import Campaigns from "./pages/media-planning/Campaigns";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      // Marketing DD
      { path: "marketing/digital", element: <Digital /> },
      { path: "marketing/dooh", element: <Dooh /> },
      { path: "marketing/social", element: <Social /> },
      { path: "marketing/email", element: <Email /> },
      // Media Planning DD
      { path: "media-planning/new-campaign", element: <NewCampaign /> },
      { path: "media-planning/campaigns", element: <Campaigns /> },
      // Category DD
      { path: "category/store-traffic", element: <StoreTraffic /> },
      { path: "category/basket-insights", element: <BasketInsights /> },
      {
        path: "category/category-performance",
        element: <CategoryPerformance />,
      },
      { path: "category/promo-performance", element: <PromoPerformance /> },
      { path: "category/price-margin", element: <PriceMargin /> },
      { path: "category/inventory-health", element: <InventoryHealth /> },
      { path: "brands", element: <Brands /> },
      { path: "consumer-insights", element: <ConsumerInsights /> },
      // Reports DD
      { path: "reports/marketing", element: <Marketing /> },
      { path: "reports/media-planning", element: <MediaPlanning /> },
      { path: "reports/category", element: <Category /> },
      { path: "ai-insights", element: <AiInsights /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
