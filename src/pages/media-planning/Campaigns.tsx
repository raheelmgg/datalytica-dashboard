import CampaignTable from "@/components/CampaignTable";
import DetailBox from "@/components/ui/DetailBox";
import type { DashboardKpi } from "@/types";

export default function Campaigns() {
  const newCampaignsKPIs: DashboardKpi[] = [
    {
      title: "Delivered impressions",
      before: "",
      value: "34.9",
      suffix: "M",
      change: "+8.4%",
      tooltipMsg: "Total impressions delivered so far",
    },
    {
      title: "Planned impressions",
      before: "",
      value: "70.3",
      suffix: "M",
      change: "+12.1%",
      tooltipMsg: "Total impressions planned for the campaign",
    },
    {
      title: "Spend vs Delivery",
      before: "",
      value: "50",
      suffix: "% on plan",
      change: "+1.0%",
      tooltipMsg: "How delivery is tracking against planned spend",
    },
    {
      title: "Active media units",
      before: "",
      value: "5,720",
      suffix: "",
      change: "+6.3%",
      tooltipMsg: "Number of active media units currently running",
    },
    {
      title: "Impressions per unit",
      before: "",
      value: "12.3",
      suffix: "k",
      change: "+4.7%",
      tooltipMsg: "Average impressions delivered per media unit",
    },
    {
      title: "Delivery reliability",
      before: "",
      value: "100",
      suffix: "%",
      change: "+0.0%",
      tooltipMsg: "Consistency of delivery against plan",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-y-7">
      <div>asdkojiuhn</div>
      <div className="w-full flex flex-col gap-5">
        <div className="card w-full max-w-full">
          <div className="cardBody grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-y-4 md:gap-x-7">
            {newCampaignsKPIs.map((kpi) => (
              <div key={kpi.title}>
                <DetailBox kpi={kpi} tooltipMsg={kpi.tooltipMsg} />
              </div>
            ))}
          </div>
        </div>
        <div className="card w-full max-w-full">
          <CampaignTable />

        </div>
      </div>
    </section>
  );
}
