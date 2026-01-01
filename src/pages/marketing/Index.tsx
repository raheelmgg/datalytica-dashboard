import CardHeader from "@/components/CardHeader";
import DashboardModal from "@/components/DashboardModal";
import PageHeader from "@/components/home/PageHeader";
import DetailBox from "@/components/ui/DetailBox";
import { Progress } from "@/components/ui/progress";
import type { DashboardKpi } from "@/types";
import { marketingKPIs } from "../../../allJSONs";
import {
  DollarSignIcon,
  InfoIcon,
  LightbulbIcon,
  SearchIcon,
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

export default function Index() {
  const [selectedKpi, setSelectedKpi] = useState<DashboardKpi | null>(null);
  const performanceByRegion = [
    { region: "Los Angeles", progress: 100, change: "+ 4.3%" },
    { region: "New York", progress: 50, change: "+ 3.6%" },
    { region: "Florida", progress: 30, change: "+1.4%" },
    { region: "Arizona", progress: 10, change: "+0.9%" },
  ];
const chartData = [
  { name: "jan", value: 7.0 },
  { name: "feb", value: 9.0 },
  { name: "mar", value: 12.0 },
  { name: "apr", value: 15.0 },
  { name: "may", value: 20.0 },
  { name: "jun", value: 25.0 },
];

  const kpiDeepDive = [
    {
      title: "Engagement lift",
      before: "",
      value: "19.6",
      suffix: "%",
      change: "+ 4.2%",
      tooltipMsg: "Increase in audience engagement driven by campaign exposure",
    },
    {
      title: "Engagement rate",
      before: "",
      value: "1.12",
      suffix: "%",
      change: "+ 6.4%",
      tooltipMsg: "Percentage of impressions that resulted in user engagement",
    },
    {
      title: "Post exposure visits",
      before: "",
      value: "612",
      suffix: "K",
      change: "- 2.1%",
      tooltipMsg: "Number of location visits occurring after ad exposure",
    },
    {
      title: "Assisted conversion rate",
      before: "",
      value: "3.6",
      suffix: "%",
      change: "+ 1.8%",
      tooltipMsg:
        "Conversions influenced by the campaign but not directly attributed",
    },
    {
      title: "Cost per engagement",
      before: "",
      value: "3.14",
      suffix: "$",
      change: "- 2.7%",
      tooltipMsg: "Average cost incurred for each engagement action",
    },
  ];

  const funnelSteps = [
    { label: "Impressions", value: "186.7M" },
    { label: "Engagement", value: "2.09M" },
    { label: "Consideration", value: "412K" },
    { label: "visits", value: "612K" },
    { label: "Loyalty", value: "48K" },
  ];
  const gradients = [
    "linear-gradient(135deg, #ff8cc3, #ff4b9a)",
    "linear-gradient(135deg, #ff6fb0, #ff3388)",
    "linear-gradient(135deg, #ff5fa2, #ff1f7a)",
    "linear-gradient(135deg, #ff4b9a, #e91e63)",
    "linear-gradient(135deg, #ff3388, #d81b60)",
  ];
  return (
    <section className="w-full flex flex-col gap-y-7">
      <PageHeader title="DOOH campaigns" chips={true} />
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="card w-full max-w-full md:max-w-[58%]">
          <CardHeader title="Dashboard" />
          <div className="cardBody grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-4 md:gap-x-7">
            {marketingKPIs.map((kpi) => (
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
                          <div className="flex flex-col gap-y-3 mt-4 md:mt-8">
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
                      <div className="flex flex-col md:flex-row gap-2">
                        {funnelSteps.map((step, index) => {
                          const isFirst = index === 0;
                          return (
                            <div
                              key={step.label}
                              className={`relative flex flex-col justify-center text-white bg-primary  w-full items-center *:flex-1 py-3 ml-0 md:-ml-4.5 ${
                                isFirst
                                  ? "clip-chevron-first rounded-md"
                                  : "clip-chevron rounded-md md:rounded-none"
                              }`}
                              style={{
                                background: gradients[index % gradients.length],
                              }}
                            >
                              <span className="text-[16px] opacity-90">
                                {step.label}
                              </span>
                              <span className="text-[28px] font-bold">
                                {step.value}
                              </span>
                            </div>
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
                        text="Engagement Lift up 6.1% over the last 30 days, driven by higher engagement quality rather than increased exposure."
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={TrendingUp}
                        text="Los Angeles continues to outperform all regions, exceeding average engagement lift by 2.4 points."
                        recommendationType="positive"
                      />

                      <AiInlineRecommendation
                        Icon={LightbulbIcon}
                        text="Florida overperformance aligns with declining post exposure visits and elevated frequency."
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={LightbulbIcon}
                        text="Shift 8 to 12% of spend from Florida into Los Angeles and New York to maximise engagement efficiency.​"
                        recommendationType="positive"
                      />
                      <AiInlineRecommendation
                        Icon={InfoIcon}
                        text="Rotate creative more frequently in Florida to reduce engagement fatigue."
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
              text="Reallocate spend to high attention environments"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={LightbulbIcon}
              text="Pair DOOH with mobile follow through"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={InfoIcon}
              text="Shoppers notice the media, but downstream actions lag"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={InfoIcon}
              text="Optimise video for early impact"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={TrendingUp}
              text="Reach is expanding faster than efficiency"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={TrendingUp}
              text="Engagement quality improving despite video softness"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={DollarSignIcon}
              text="Cost pressure tied to premium inventory mix"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={SearchIcon}
              text="Targeting remains accurate at scale"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={LightbulbIcon}
              text="Shift optimisation focus to mid funnel signals"
              recommendationType="positive"
            />
            <AiInlineRecommendation
              Icon={InfoIcon}
              text="Tighten frequency in lower performing segments"
              recommendationType="positive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
