import type { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  text: string;
  recommendationType: string;
};
type Trend = string;

function AiInlineRecommendation({ Icon, text, recommendationType }: Props) {
  const trendClass: Trend =
    recommendationType === "positive"
      ? "text-primary"
      : recommendationType === "negative"
      ? "text-secondary"
      : "";

  return (
    <div className="flex flex-row gap-4 items-center">
      <Icon className={`w-5 h-5 ${trendClass}`} />
      <h4 className="text-[16px] text-white leading-4">{text}</h4>
    </div>
  );
}

export default AiInlineRecommendation;
