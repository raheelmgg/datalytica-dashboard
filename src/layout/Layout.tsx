import { Outlet, useLocation } from "react-router-dom";
import LayoutHeader from "@/components/LayoutHeader";
import clientLogo from "@/assets/Gulpmedia-logo.png";
import Sidebar from "@/components/Sidebar";

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="bg-primary-bg w-full min-h-screen pb-20">
      <LayoutHeader />
      <section className="my-container py-12.5">
        <img
          src={clientLogo}
          alt="Brand Logo here."
          className="w-full max-w-39.5"
        />
      </section>
      <main className="my-container flex flex-col md:flex-row gap-2.5 md:gap-5 md:items-center">
        <section className="w-full max-w-fit ">
          <Sidebar activePath={location.pathname} />
        </section>
        <section className="grow ">
          {children ?? <Outlet />}
        </section>
      </main>
    </div>
  );
}

export default Layout;
