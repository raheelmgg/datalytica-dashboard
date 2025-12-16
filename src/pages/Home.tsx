import CalendarRange from "@/components/CalendarRange";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Clock9, SettingsIcon } from "lucide-react";
import aiIcon from "@/assets/ai-icon.svg";
import funnelChart from "@/assets/funnelChart.svg";
import { da } from "date-fns/locale";

export default function Home() {
  const [open, setOpen] = useState(false);

  const dashboardKPIs = [
    {
      title: "Impressions",
      before: "",
      value: "184.2",
      suffix: "M",
      change: "+ 6.4%",
    },
    {
      title: "Reach",
      before: "",
      value: "22.4",
      suffix: "M",
      change: "+ 4.9%",
    },
    {
      title: "Freq / Users",
      before: "",
      value: "8.2",
      suffix: "X",
      change: "+ 1.8%",
    },
    {
      title: "Mobile CTR",
      before: "",
      value: "0.82",
      suffix: "%",
      change: "+ 3.1%",
    },
    {
      title: "CPM",
      before: "$",
      value: "7.45",
      suffix: "",
      change: "- 2.2%",
    },
    {
      title: "Visit Lift",
      before: "",
      value: "18.7",
      suffix: "%",
      change: "+ 5.6%",
    },
    {
      title: "Dwell time",
      before: "",
      value: "52",
      suffix: "sec",
      change: "- 1.4%",
    },
    {
      title: "Sales lift",
      before: "",
      value: "9.5",
      suffix: "%",
      change: "+ 5.2%",
    },
    {
      title: "New to brand",
      before: "",
      value: "27",
      suffix: "%",
      change: "+ 2.0%",
    },
    {
      title: "Basket lift",
      before: "",
      value: "6.1",
      suffix: "%",
      change: "+ 1.7%",
    },
    {
      title: "Cross buy",
      before: "",
      value: "14.3",
      suffix: "%",
      change: "+ 3.5%",
    },
    {
      title: "Offer redeem",
      before: "",
      value: "2.6",
      suffix: "%",
      change: "- 2.4%",
    },
  ];
  const funnelData = [
    {
      label: "Ad impressions",
      sub: "DOOH + Mobile",
      value: "184.2M",
      width: 320,
      color: "#ff1975",
    },
    {
      label: "Unique Reach",
      sub: "Devices exposed",
      value: "22.4M",
      width: 280,
      color: "#ff4b8f",
    },
    {
      label: "Mobile engagements",
      sub: "Clicks + Actions",
      value: "183K",
      width: 240,
      color: "#ff73aa",
    },
    {
      label: "Store visits",
      sub: "Attributed",
      value: "512K",
      width: 200,
      color: "#ff9bc2",
    },
    {
      label: "In-store purchasers",
      sub: "Video views",
      value: "142K",
      width: 160,
      color: "#ffc1d8",
    },
    {
      label: "Repeat purchasers",
      sub: "Loyal customers",
      value: "38K",
      width: 120,
      color: "#ffe1ee",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-y-7">
      <div className="labelAndChips">
        <div className="w-full max-w-200 flex flex-col justify-start items-start md:flex-row md:justify-between items-center gap-2">
          <h2 className="text-xl md:text-[30px] font-semibold leading-6 text-white ">
            Marketing strategic campaign
          </h2>
          <div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <div className="bg-white rounded-full p-1 flex flex-row justify-between items-center gap-2 cursor-pointer nowrap">
                  <div className="flex flex-row gap-2 items-center">
                    <Clock9 className="text-[#D9D9D9] h-5 w-5" />
                    <span className="text-[14px] leading-4"> 30 days</span>
                  </div>
                  <ChevronDown className="text-white h-5 w-5 bg-[#D9D9D9] rounded-full" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <CalendarRange />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="card w-full flex flex-col max-w-200 bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] px-4 md:px-10 py-7 gap-7">
          <div className="cardHeader flex justify-between items-center">
            <h3 className="text-lg font-semibold leading-6 text-white ">
              Dashboard
            </h3>

            <div className="flex flex-row gap-2 items-center">
              <div>
                <img src={aiIcon} alt="AI icon" className="h-4 w-4" />
              </div>
              <div>
                <SettingsIcon className="text-white h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="cardBody grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-4 md:gap-x-7">
            {dashboardKPIs.map((kpi, _) => {
              const isPrimary = kpi.change.trim().startsWith("+");
              return (
                <div
                  className={`${
                    isPrimary
                      ? "bg-primary kpi-shadow-primary"
                      : "bg-secondary kpi-shadow-secondary"
                  } flex flex-col gap-2.5 md:gap-5 items-center justify-center rounded-3xl p-3 text-white transition-shadow duration-300 cursor-pointer`}
                >
                  <span className="text-[16px] font-bold leading-4 text-center">
                    {kpi.title}
                  </span>
                  <span className="text-[24px] md:text-[36px] font-bold leading-4 text-center">
                    <span className="text-[20px] md:text-[30px]">
                      {kpi.before}
                    </span>
                    {kpi.value || ""}

                    <span className="text-[20px] md:text-[30px]">
                      {kpi.suffix}
                    </span>
                  </span>
                  <span className="text-[18px] md:text-[22px] font-bold leading-4 text-center">
                    {kpi.change}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grow card flex flex-col max-w-200 bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] px-4 md:px-10 py-7 gap-7">
          <div className="cardHeader flex justify-between items-center">
            <h3 className="text-lg font-semibold leading-6 text-white ">
              Path to purchase
            </h3>

            <div className="flex flex-row gap-2 items-center">
              <div>
                <img src={aiIcon} alt="AI icon" className="h-4 w-4" />
              </div>
              <div>
                <SettingsIcon className="text-white h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between align-top gap-5 md:gap-2">
            <div>
              <img src={funnelChart} alt="Funnel Chart" className="" />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 justify-between">
              {funnelData.map((data, _) => {
                return (
                  <div
                    className="flex flex-col text-white gap-1 md:gap-2"
                    key={data.value}
                  >
                    <span className="text-[13px] md:text-[16px] font-bold leading-4">
                      {data.label}
                    </span>
                    <span className="text-[11px] md:text-[14px] font-normal leading-4">
                      {data.sub}
                    </span>
                    <span className="text-[16px] md:text-[30px] font-bold text-primary leading-4">
                      {data.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
