import { ChevronDown, Clock9 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function MyDatePicker() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className="bg-white rounded-full p-1 flex flex-row justify-between items-center gap-2 cursor-pointer nowrap text-black"
            id="date"
          >
            <div className="flex flex-row gap-2 items-center">
              <Clock9 className="text-[#D9D9D9] h-5 w-5" />
              <span className="text-[14px] leading-4">
                {date ? date.toLocaleDateString() : "Select date"}
              </span>
            </div>
            <ChevronDown
              className={`text-white h-5 w-5 bg-[#D9D9D9] rounded-full transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
