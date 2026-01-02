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
import StoreTrafficBrand from "./pages/Brands/StoreTrafficBrand";
import BasketInsights from "./pages/category/BasketInsights";
import BasketInsightsBrand from "./pages/Brands/BasketInsightsBrand";
import CategoryPerformance from "./pages/category/CategoryPerformance";
import PromoPerformance from "./pages/category/PromoPerformance";
import PriceMargin from "./pages/category/PriceMargin";
import InventoryHealth from "./pages/category/InventoryHealth";
// import Brands from "./pages/Brands";
import ConsumerInsights from "./pages/ConsumerInsights";
// import Reports from "./pages/Reports";
import AiInsights from "./pages/AiInsights";
import NotFound from "./pages/NotFound";
import NewCampaign from "./pages/media-planning/NewCampaign";
import Marketing from "./pages/reports/Marketing";
import MediaPlanning from "./pages/reports/MediaPlanning";
import Category from "./pages/reports/Category";
import Campaigns from "./pages/media-planning/Campaigns";
import CategoryPerformanceBrand from "./pages/Brands/CategoryPerformanceBrand";
import PromoPerformanceBrand from "./pages/Brands/PromoPerformanceBrand";
import PriceMarginBrand from "./pages/Brands/PriceMarginBrand";
import InventoryHealthBrand from "./pages/Brands/InventoryHealthBrand";
import Index from "./pages/marketing/Index";
import FullReport from "./pages/FullReport";

const router = createBrowserRouter([
  {
    path: "/full-report",
    element: <FullReport />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      // Marketing DD
      { path: "marketing", element: <Index /> },
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
      // Brands DD
      // { path: "brands", element: <Brands /> },
      { path: "brands/store-traffic", element: <StoreTrafficBrand /> },
      { path: "brands/basket-insights", element: <BasketInsightsBrand /> },
      {
        path: "brands/category-performance",
        element: <CategoryPerformanceBrand />,
      },
      { path: "brands/promo-performance", element: <PromoPerformanceBrand /> },
      { path: "brands/price-margin", element: <PriceMarginBrand /> },
      { path: "brands/inventory-health", element: <InventoryHealthBrand /> },

      { path: "consumer-insights", element: <ConsumerInsights /> },
      // { path: "full-report", element: <FullReport /> },
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
