import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { DashboardKpi } from "@/types";

type Props = {
  kpi: DashboardKpi;
  tooltipMsg?: string;
};

function DetailBox({ kpi, tooltipMsg }: Props) {
  const isKpiTrue = kpi.change.trim().startsWith("+");
  const isTooltipMsg = tooltipMsg && tooltipMsg.length > 0;

  return (
    <div
      key={kpi.value}
      className={`${
        isKpiTrue
          ? "bg-primary kpi-shadow-primary"
          : "bg-secondary kpi-shadow-secondary"
      } w-full flex flex-col gap-2.5 md:gap-5 items-center justify-center rounded-3xl p-3 text-white transition-shadow duration-300 cursor-pointer relative`}
    >
      <span className="text-[16px] font-bold leading-4 text-center">
        {kpi.title}
      </span>
      <span className="text-[24px] md:text-[36px] font-bold leading-4 text-center">
        <span className="text-[20px] md:text-[30px]">{kpi.before ?? ""}</span>
        {kpi.value || ""}

        <span className="text-[20px] md:text-[30px]">{kpi.suffix}</span>
      </span>
      <span className="text-[18px] md:text-[22px] font-bold leading-4 text-center">
        {kpi.change}
      </span>
      {isTooltipMsg && (
        <Tooltip>
          <TooltipTrigger asChild>
            <InfoIcon className="absolute bottom-3 right-3 h-4 w-4 rounded-full" />
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipMsg}</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}

export default DetailBox;
