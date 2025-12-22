import CardHeader from "@/components/CardHeader";
import DashboardModal from "@/components/DashboardModal";
import PageHeader from "@/components/home/PageHeader";
import DetailBox from "@/components/ui/DetailBox";
import { Progress } from "@/components/ui/progress";
import type { DashboardKpi } from "@/types";
import { basketInsightsKpi } from "../../../allJSONs";
import {
  CircleCheckIcon,
  InfoIcon,
  LightbulbIcon,
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

export default function BasketInsights() {
  const [selectedKpi, setSelectedKpi] = useState<DashboardKpi | null>(null);
  const performanceByRegion = [
    { region: "Ontario", progress: 100, change: "+ 3.6%" },
    { region: "Manitoba", progress: 50, change: "+ 2.4%" },
    { region: "Saskatchewan", progress: 30, change: "+ 2.1%" },
    { region: "Alberta", progress: 10, change: "+ 1.7%" },
  ];
  const chartData = [
    { day: "day 1", value: 18.6 },
    { day: "day 10", value: 19.1 },
    { day: "day 20", value: 19.25 },
    { day: "day 30", value: 19.4 },
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
      <PageHeader title="Basket insights" chips={true} />
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="card w-full max-w-[100%] md:max-w-[58%]">
          <CardHeader title="Dashboard" />
          <div className="cardBody grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-4 md:gap-x-7">
            {basketInsightsKpi.map((kpi) => (
              <div key={kpi.value} onClick={() => setSelectedKpi(kpi)}>
                <DetailBox kpi={kpi} tooltipMsg={kpi.tooltipMsg} />
              </div>
            ))}
            7
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
                                    dataKey="day"
                                    tick={{ fill: "#ffffff", fontSize: 12 }}
                                    axisLine={{
                                      stroke: "rgba(255,255,255,0.4)",
                                    }}
                                    tickLine={false}
                                  />
                                  <YAxis
                                    domain={[18, 20]}
                                    tick={{ fill: "#ffffff", fontSize: 12 }}
                                    axisLine={{
                                      stroke: "rgba(255,255,255,0.4)",
                                    }}
                                    tickLine={false}
                                    tickFormatter={(v) => `$${v.toFixed(2)}`}
                                  />
                                  <Tooltip formatter={(v) => `$${v}`} />

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
                        text="Basket spend rising steadily, up 2.1% over 30 days"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={TrendingUp}
                        text="Evening baskets driving the strongest spend"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={TrendingUp}
                        text="Promo weeks lifting spend by 4.4%"
                        recommendationType="positive"
                      />

                      <AiInlineRecommendation
                        Icon={CircleCheckIcon}
                        text="Energy SKUs showing above average contribution​"
                        recommendationType="positive"
                      />

                      <AiInlineRecommendation
                        Icon={TrendingUp}
                        text="High value baskets increasing, up 1.2%​"
                        recommendationType="positive"
                      />

                      <AiInlineRecommendation
                        Icon={CircleCheckIcon}
                        text="Top quartile stores outperform by a wide margin​"
                        recommendationType="positive"
                      />

                      <AiInlineRecommendation
                        Icon={LightbulbIcon}
                        text="Shift promo windows to afternoon and evening​"
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
              Icon={InfoIcon}
              text="Test bundle offers to grow total items per trip"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={TrendingUp}
              text="Feature chips in impulse zones to reinforce add ons"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={LightbulbIcon}
              text="Expand snack placement near beverage coolers"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={LightbulbIcon}
              text="Introduce multi buy pricing to recover unit softness"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={InfoIcon}
              text="Run shorter high impact promos to boost lift"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={InfoIcon}
              text="Push afternoon and evening offers to match demand"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={LightbulbIcon}
              text="Focus offers in top quartile stores to grow value"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={LightbulbIcon}
              text="Promote snack plus beverage combos to drive pairs"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={InfoIcon}
              text="Use targeted prompts to strengthen add on uptake"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={InfoIcon}
              text="Reposition top SKUs to improve basket contribution"
              recommendationType="positive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// BasketInsights;
