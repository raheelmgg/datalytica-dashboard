import funnelChart from "@/assets/funnelChart.svg";
import PageHeader from "@/components/home/PageHeader";
import CardHeader from "@/components/CardHeader";
import DashboardModal from "@/components/DashboardModal";
import type { DashboardKpi } from "@/types";
import { dashboardKPIs, funnelData } from "../../allJSONs";
import { useState } from "react";
import DetailBox from "@/components/ui/DetailBox";

export default function Home() {
  const [selectedKpi, setSelectedKpi] = useState<DashboardKpi | null>(null);

  return (
    <section className="w-full flex flex-col gap-y-7">
      <PageHeader title="Marketing strategic campaign" chips={true} />
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="card w-full max-w-200">
          <CardHeader title="Dashboard" />
          <div className="cardBody grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-y-4 md:gap-x-7">
            {dashboardKPIs.map((kpi) => (
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
                  <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
                    {[0, 1, 2, 3, 4].map((item, _) => {
                      return (
                        <DetailBox
                          key={item}
                          kpi={{
                            title: "Reach",
                            before: "",
                            value: "22.4",
                            suffix: "M",
                            change: "+ 4.9%",
                            tooltipMsg: "",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5">
                  <div className="w-full max-w-200 flex flex-col gap-3">
                    <div className="card">
                      <div className="gap-6 flex flex-row justify-between">
                        <div className="w-full">
                          <div className="flex flex-col justify-between">
                            <h3 className="text-lg font-semibold leading-6 text-white ">
                              {selectedKpi.title} trend
                            </h3>
                            <div>Graph will come here</div>
                          </div>
                        </div>
                        <div className="w-full">
                          <CardHeader title="Performance by region" />
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <CardHeader title="Customer journey impact" />
                    </div>
                  </div>
                  <div className="card grow">
                    <CardHeader title="AI insights &Recommendations" />
                  </div>
                </div>
              </div>
            </DashboardModal>
          )}
        </div>
        <div className="card grow">
          <CardHeader title="Path to purchase" />
          <div className="flex flex-row justify-between align-top gap-5 md:gap-2">
            <div>
              <img src={funnelChart} alt="Funnel Chart" className="" />
            </div>
            <div className="flex flex-col gap-2 md:gap-4 justify-between">
              {funnelData.map((data) => {
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
