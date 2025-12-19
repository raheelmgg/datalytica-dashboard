import CardHeader from "@/components/CardHeader";
import DashboardModal from "@/components/DashboardModal";
import PageHeader from "@/components/home/PageHeader";
import DetailBox from "@/components/ui/DetailBox";
import { Progress } from "@/components/ui/progress";
import type { DashboardKpi } from "@/types";
import { doohKPIs } from "../../../allJSONs";
import {
  DollarSignIcon,
  InfoIcon,
  LightbulbIcon,
  SearchIcon,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AiInlineRecommendation from "@/components/ui/AiInlineRecommendation";

export default function Dooh() {
  const [selectedKpi, setSelectedKpi] = useState<DashboardKpi | null>(null);
  const performanceByRegion = [
    { region: "Ontario", progress: 100, change: "+ 4.3%" },
    { region: "Manitoba", progress: 50, change: "+ 3.4%" },
    { region: "Saskatchewan", progress: 30, change: "+1.2%" },
    { region: "Alberta", progress: 10, change: "+0.9%" },
  ];
  const chartData = [
    { name: "jan", value: 0.28 },
    { name: "feb", value: 0.3 },
    { name: "mar", value: 0.35 },
    { name: "apr", value: 0.4 },
    { name: "may", value: 0.45 },
    { name: "jun", value: 0.5 },
  ];
  const threeKpis = [
    {
      title: "Basket contribution",
      before: "+",
      value: "7.8",
      suffix: "%",
      change: "",
      tooltipMsg: "",
    },
    {
      title: "Repeat purchase indicator",
      before: "-",
      value: "2.4",
      suffix: "%",
      change: "",
      tooltipMsg: "",
    },
    {
      title: "Store performance",
      before: "+",
      value: "7.4",
      suffix: "%",
      change: "",
      tooltipMsg: "",
    },
  ];
  const kpiDeepDive = [
    {
      title: "Conversion to purchase",
      before: "",
      value: "3.8",
      suffix: "%",
      change: "+ 5.3%",
      tooltipMsg:
        "Lift in conversion from shopper exposure to completed purchase",
    },
    {
      title: "Exposed shoppers",
      before: "",
      value: "214",
      suffix: "K",
      change: "+ 14.5%",
      tooltipMsg: "Number of unique shoppers exposed to the campaign",
    },
    {
      title: "Purchase rate",
      before: "",
      value: "31",
      suffix: "K",
      change: "+ 6.8%",
      tooltipMsg: "Total number of purchases driven by exposed shoppers",
    },
    {
      title: "Conversion lift",
      before: "",
      value: "28.2",
      suffix: "%",
      change: "+ 3.8%",
      tooltipMsg: "Incremental lift in conversion rate compared to baseline",
    },
    {
      title: "New to brand buyers",
      before: "",
      value: "8.6",
      suffix: "K",
      change: "+ 8.3%",
      tooltipMsg: "Number of buyers purchasing the brand for the first time",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-y-7">
      <PageHeader title="DOOH campaigns" chips={true} />
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="card w-full max-w-200">
          <CardHeader title="Dashboard" />
          <div className="cardBody grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-4 md:gap-x-7">
            {doohKPIs.map((kpi) => (
              <div key={kpi.title} onClick={() => setSelectedKpi(kpi)}>
                <DetailBox kpi={kpi} tooltipMsg={kpi.tooltipMsg} />
              </div>
            ))}
          </div>
          {selectedKpi && (
            <DashboardModal
              isOpen={!!selectedKpi}
              onClose={() => setSelectedKpi(null)}
              title={`KPI deep dive - ${selectedKpi.title}`}
            >
              <div className="flex flex-col gap-4">
                <div className="card">
                  <CardHeader title="" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 ">
                    {kpiDeepDive.map((kpi, _) => {
                      return <DetailBox key={kpi.value} kpi={kpi} />;
                    })}
                  </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5 ">
                  <div className="w-full max-w-200 flex flex-col gap-3">
                    <div className="card">
                      <div className="flex flex-col md:flex-row justify-between gap-x-10">
                        <div className="w-full max-w-100">
                          <div className="flex flex-col justify-between">
                            <h3 className="text-lg font-semibold leading-6 text-white mb-4 md:mb-8">
                              {selectedKpi.title} trend
                            </h3>
                            <div className="w-full">
                              <ResponsiveContainer width="100%" height={230}>
                                <AreaChart data={chartData}>
                                  <defs>
                                    <linearGradient
                                      id="area"
                                      x1="0"
                                      y1="0"
                                      x2="0"
                                      y2="1"
                                    >
                                      <stop
                                        offset="0%"
                                        stopColor="#ff1f7a"
                                        stopOpacity={0.35}
                                      />
                                      <stop
                                        offset="100%"
                                        stopColor="#ff1f7a"
                                        stopOpacity={0.05}
                                      />
                                    </linearGradient>
                                  </defs>

                                  <XAxis
                                    dataKey="name"
                                    tick={{ fill: "#ffffff", fontSize: 12 }}
                                    axisLine={{
                                      stroke: "rgba(255,255,255,0.4)",
                                    }}
                                  />
                                  <YAxis
                                    domain={[0, 1]}
                                    tickFormatter={(v) => `${v}%`}
                                    tick={{ fill: "#ffffff", fontSize: 12 }}
                                    axisLine={{
                                      stroke: "rgba(255,255,255,0.4)",
                                    }}
                                  />
                                  <Tooltip formatter={(v) => `${v}%`} />

                                  <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#EC1A75"
                                    fill="url(#area)"
                                    strokeWidth={2}
                                  />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                        <div className=" grow">
                          <CardHeader title="Performance by region" />
                          <div className="flex flex-col gap-y-3.5 mt-4 md:mt-8">
                            {performanceByRegion.map((data, _) => (
                              <div
                                className="w-full flex flex-col gap-2"
                                key={data.progress}
                              >
                                <div className="flex justify-between">
                                  <span className="text-white  font-normal">
                                    {data.region}
                                  </span>
                                  <span className="text-white  font-normal">
                                    {data.change}
                                  </span>
                                </div>
                                <Progress value={data.progress} />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <CardHeader title="Customer journey impact" />
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        {threeKpis.map((kpi, _) => {
                          return (
                            <DetailBox kpi={kpi} tooltipMsg={kpi.tooltipMsg} />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="card grow">
                    <CardHeader title="AI insights & Recommendations" />
                    <div className="flex flex-col gap-y-5">
                      <AiInlineRecommendation
                        Icon={TrendingUp}
                        text="Exposed shoppers up 14.5%"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={TrendingUp}
                        text="Purchase rate up 6.8%"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={TrendingDown}
                        text="Repeat purchase down 2.4​"
                        recommendationType="negative"
                      />
                      <AiInlineRecommendation
                        Icon={LightbulbIcon}
                        text="Recommendation, shift spend to stores with high repeat potential​"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={LightbulbIcon}
                        text="Recommendation, add more audio weight in afternoon dayparts​"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={LightbulbIcon}
                        text="Recommendation, move budget toward strong urban clusters​​"
                        recommendationType="positive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </DashboardModal>
          )}
        </div>
        <div className="card grow">
          <CardHeader title="AI insights & Recommendations" />
          <div className="flex flex-col gap-y-5">
            <AiInlineRecommendation
              Icon={TrendingDown}
              text="Shoppers notice the screens, but fewer convert"
              recommendationType="negative"
            />
            <AiInlineRecommendation
              Icon={InfoIcon}
              text="Units per transaction slipping"
              recommendationType="negative"
            />
            <AiInlineRecommendation
              Icon={DollarSignIcon}
              text="Traffic solid, need stronger in store pull"
              recommendationType="negative"
            />
            <AiInlineRecommendation
              Icon={DollarSignIcon}
              text="Refresh creative with simple value messaging"
              recommendationType="negative"
            />
            <AiInlineRecommendation
              recommendationType="negative"
              Icon={InfoIcon}
              text="Shift impressions to high traffic windows"
            />
            <AiInlineRecommendation
              Icon={SearchIcon}
              text="Pair DOOH with mobile to improve follow through"
              recommendationType="positive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
