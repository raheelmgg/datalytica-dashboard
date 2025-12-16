import { ChevronDown, Clock9, SettingsIcon } from "lucide-react";
import PagePlaceholder from "../PagePlaceholder";
import aiIcon from "@/assets/ai-icon.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CalendarRange from "@/components/CalendarRange";
import { useState } from "react";

export default function Dooh() {
  const [open, setOpen] = useState(false);

  const doohKPIs = [
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
      suffix: "%",
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
  return (
    <div>
      DOOH
    </div>
  );
}
