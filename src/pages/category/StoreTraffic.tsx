import PageHeader from "@/components/home/PageHeader";
import { storeTrafficKpi } from "../../../allJSONs";
import CardHeader from "@/components/CardHeader";
import DetailBox from "@/components/ui/DetailBox";
import DashboardModal from "@/components/DashboardModal";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Progress } from "@/components/ui/progress";
import AiInlineRecommendation from "@/components/ui/AiInlineRecommendation";
import {
  DollarSignIcon,
  InfoIcon,
  LightbulbIcon,
  SearchIcon,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import type { DashboardKpi } from "@/types";

export default function StoreTraffic() {
  const [selectedKpi, setSelectedKpi] = useState<DashboardKpi | null>(null);
  const performanceByRegion = [
    { region: "Ontario", progress: 100, change: "+ 4.1%" },
    { region: "British Columbia", progress: 55, change: "+ 2.2%" },
    { region: "Manitoba", progress: 32, change: "+1.5%" },
    { region: "Alberta", progress: 22, change: "+0.9%" },
  ];
  const chartData = [
    { name: "week 1", revenue: 260000, rate: 0.28 },
    { name: "week 2", revenue: 320000, rate: 0.35 },
    { name: "week 3", revenue: 290000, rate: 0.5 },
    { name: "week 4", revenue: 270000, rate: 0.62 },
    { name: "week 5", revenue: 310000, rate: 0.75 },
    { name: "week 6", revenue: 260000, rate: 0.82 },
  ];
  const threeKpis = [
    {
      title: "Inventory coverage",
      before: "",
      value: "22",
      suffix: "days",
      change: "LY + 1.3%",
      tooltipMsg: "",
    },
    {
      title: "Unit velocity",
      before: "",
      value: "62",
      suffix: "u/week",
      change: "LY + 2.2%",
      tooltipMsg: "",
    },
    {
      title: "Store lift rate",
      before: "$",
      value: "41.2",
      suffix: "k",
      change: "LY + 3.1%",
      tooltipMsg: "",
    },
  ];
  const kpiDeepDive = [
    {
      title: "Sales",
      before: "",
      value: "42.8",
      suffix: "M",
      change: "LY + 1.4%",
      tooltipMsg: "",
    },
    {
      title: "Sales units",
      before: "",
      value: "1.92",
      suffix: "M units",
      change: "LY - 1.8%",
      tooltipMsg: "",
    },
    {
      title: "Sales per store",
      before: "",
      value: "41.2",
      suffix: "K",
      change: "LY + 3.1%",
      tooltipMsg: "",
    },
    {
      title: "",
      before: "",
      value: "1.24",
      suffix: "",
      change: "LY - 0.4%",
      tooltipMsg: "",
    },
    {
      title: "Promo lift on sales",
      before: "",
      value: "7.1",
      suffix: "%",
      change: "LY + 2.9%",
      tooltipMsg: "",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-y-7">
      <PageHeader title="Store traffic" chips={true} />
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="card w-full max-w-[100%] md:max-w-[58%]">
          <CardHeader title="Dashboard" />
          <div className="cardBody grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-4 md:gap-x-7">
            {storeTrafficKpi.map((kpi) => (
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
                  <div className="w-full max-w-[100%] md:max-w-[58%] flex flex-col gap-3">
                    <div className="card">
                      <div className="flex flex-col md:flex-row justify-between gap-x-10">
                        <div className="w-full max-w-100">
                          <div className="flex flex-col justify-between">
                            <h3 className="text-lg font-semibold leading-6 text-white mb-4 md:mb-8">
                              {selectedKpi.title} trend
                            </h3>
                            <div className="w-full">
                              <ResponsiveContainer width="100%" height={230}>
                                <ComposedChart data={chartData}>
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
                                    yAxisId="left"
                                    domain={[0, 400000]}
                                    tick={{ fill: "#ffffff", fontSize: 12 }}
                                    axisLine={{
                                      stroke: "rgba(255,255,255,0.4)",
                                    }}
                                    tickFormatter={(v) => `$${v / 1000}K`}
                                  />

                                  <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    domain={[0, 1]}
                                    tick={{ fill: "#ffffff", fontSize: 12 }}
                                    axisLine={{
                                      stroke: "rgba(255,255,255,0.4)",
                                    }}
                                    tickFormatter={(v) => `${v}%`}
                                  />

                                  <CartesianGrid
                                    stroke="rgba(255,255,255,0.08)"
                                    strokeDasharray="4 4"
                                    vertical={false}
                                  />

                                  <Tooltip
                                    formatter={(value, name) =>
                                      name === "revenue"
                                        ? [
                                            `$${value?.toLocaleString()}`,
                                            "Revenue",
                                          ]
                                        : [`${value}%`, "Rate"]
                                    }
                                  />

                                  <Bar
                                    yAxisId="left"
                                    dataKey="revenue"
                                    barSize={18}
                                    fill="#EC1A75"
                                  />

                                  <Area
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="rate"
                                    stroke="none"
                                    fill="url(#area)"
                                  />

                                  <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="rate"
                                    stroke="#EC1A75"
                                    strokeWidth={2}
                                    dot={false}
                                    activeDot={{ r: 4 }}
                                  />
                                </ComposedChart>
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
                        text="Sales lift driven mainly by price strength"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={TrendingUp}
                        text="Unit softness shows lighter shopper demand"
                        recommendationType="positive"
                      />

                      <AiInlineRecommendation
                        Icon={TrendingDown}
                        text="Stores performing above last year across most regions​"
                        recommendationType="negative"
                      />
                      <AiInlineRecommendation
                        Icon={LightbulbIcon}
                        text="Lower attachment suggests fewer impulse add ons​​"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={LightbulbIcon}
                        text="Promos are driving meaningful incremental volume​"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={LightbulbIcon}
                        text="Inventory holding longer as sell through slows​​"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={InfoIcon}
                        text="Steady weekly movement signals stable base demand​​​"
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
              Icon={TrendingUp}
              text="Revenue up from higher selling price, not stronger demand​"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={TrendingDown}
              text="Unit volume down, softer consumer pull​"
              recommendationType="negative"
            />
            <AiInlineRecommendation
              Icon={TrendingDown}
              text="Units per transaction down, weaker attachment​​"
              recommendationType="negative"
            />
            <AiInlineRecommendation
              Icon={DollarSignIcon}
              text="Gross profit dollars down, cost pressure rising"
              recommendationType="negative"
            />
            <AiInlineRecommendation
              Icon={DollarSignIcon}
              text="Gross profit rate down, promotions outweigh price gains​"
              recommendationType="negative"
            />
            <AiInlineRecommendation
              recommendationType="negative"
              Icon={InfoIcon}
              text="Inventory up slightly, slower sell through​"
            />
            <AiInlineRecommendation
              Icon={SearchIcon}
              text="Overall, price lift hides weakness in volume​"
              recommendationType="positive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
