// import { Settings } from "lucide-react";

import logo from "@/assets/datalytica-logo.png";
import { Button } from "./ui/button";
import { SettingsDD } from "./ui/SettingsDD";

function LayoutHeader() {
  return (
    <header className="w-full bg-[#2E2C38]">
      <div className="my-container flex items-center justify-between h-20 gap-5 ">
        <img src={logo} alt="Logo" className="w-full max-w-25" />
        <div className="flex flex-row items-center justify-center md:gap-5 gap-2">
          <div className="flex flex-row items-center text-white md:gap-5 gap-2">
            <div className="flex flex-col">
              <span className=" md:text-[16px] text-[14px]">Sam Smith</span>
              <span className="md:block md:text-[14px] hidden text-right">
                Admin
              </span>
            </div>
            <div className="cursor-pointer">
              <SettingsDD />
            </div>
          </div>
          <div>
            <Button className="bg-primary text-white w-full md:px-8 md:py-2.5 px-4 py-1.5 rounded-2xl font-semibold text-[16px] leading-none">
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LayoutHeader;
