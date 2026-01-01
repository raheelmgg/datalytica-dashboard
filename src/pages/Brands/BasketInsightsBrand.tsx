import CardHeader from "@/components/CardHeader";
import DashboardModal from "@/components/DashboardModal";
import PageHeader from "@/components/home/PageHeader";
import DetailBox from "@/components/ui/DetailBox";
import { Progress } from "@/components/ui/progress";
import type { DashboardKpi } from "@/types";
import { basketInsightsKpi } from "../../../allJSONs";
import {
  CheckCircleIcon,
  CircleCheckIcon,
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

export default function BasketInsightsBrand() {
  const [selectedKpi, setSelectedKpi] = useState<DashboardKpi | null>(null);
  const performanceByRegion = [
    { region: "Ontario", progress: 100, change: "+ 3.6%" },
    { region: "British Columbia", progress: 50, change: "+ 2.4%" },
    { region: "Quebec", progress: 30, change: "+ 2.1%" },
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
      title: "Top contributing SKUs",
      before: "energy ",
      value: "11.3",
      suffix: "%",
      change: "LY +0.8%",
      tooltipMsg: "",
    },
    {
      title: "Basket spend trend",
      before: "+",
      value: "2.1",
      suffix: "%",
      change: "Past 30 days",
      tooltipMsg: "",
    },
    {
      title: "Spend variance vs avg",
      before: "+",
      value: "1.9",
      suffix: "%",
      change: "Abv store baseline",
      tooltipMsg: "",
    },
  ];
  const kpiDeepDive = [
    {
      title: "High value basket share",
      before: "$",
      value: "18.4",
      suffix: "",
      change: "LY + 1.2%",
      tooltipMsg: "",
    },

    {
      title: "Promo week spend",
      before: "$",
      value: "22.70",
      suffix: "",
      change: "LY + 4.4%",
      tooltipMsg: "",
    },

    {
      title: "Spend by store",
      before: "$",
      value: "23.10",
      suffix: "",
      change: "LY + 3.7%",
      tooltipMsg: "lorem Ipsum",
    },

    {
      title: "High value basket share",
      before: "$",
      value: "18.4",
      suffix: "%",
      change: "LY + 1.2%",
      tooltipMsg: "lorem Ipsum",
    },
    {
      title: "Promo week spend",
      before: "$",
      value: "22.70",
      suffix: "",
      change: "LY + 4.4%",
      tooltipMsg: "lorem Ipsum",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-y-7">
      <PageHeader title="Basket insights" chips={true} />
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="card w-full max-w-full md:max-w-[58%]">
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
              <div className="flex flex-col gap-4 overflow-y-scroll scrollbar">
                <div className="card">
                  <CardHeader title="" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 ">
                    {kpiDeepDive.map((kpi, _) => {
                      return <DetailBox key={kpi.value} kpi={kpi} />;
                    })}
                  </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5 ">
                  <div className="w-full max-w-full md:max-w-[58%] flex flex-col gap-3">
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
              Icon={CheckCircleIcon}
              text="Energy SKUs showing above average contribution"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={TrendingUp}
              text="High value baskets increasing, up 1.2%"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={CheckCircleIcon}
              text="Top quartile stores outperform by a wide margin"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={LightbulbIcon}
              text="Shift promo windows to afternoon and evening"
              recommendationType="positive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// BasketInsights;
