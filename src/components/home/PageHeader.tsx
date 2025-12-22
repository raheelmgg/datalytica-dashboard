import { ChevronDown, Clock9 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import CalendarRange from "../CalendarRange";
import { useState } from "react";

function PageHeader({ title, chips }: { title: string; chips?: boolean }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="w-full max-w-[100%] md:max-w-[58%] flex flex-col justify-start items-start md:flex-row md:justify-between gap-2">
        <h2 className="text-xl md:text-[30px] font-semibold leading-6 text-white ">
          {title}
        </h2>
        <div>
          {chips && (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <div className="bg-white rounded-full p-1 flex flex-row justify-between items-center gap-2 cursor-pointer nowrap w-41.5">
                  <div className="flex flex-row gap-2 items-center">
                    <Clock9 className="text-[#D9D9D9] h-5 w-5" />
                    <span className="text-[14px] leading-4"> 30 days</span>
                  </div>
                  <ChevronDown className="text-white h-5 w-5 bg-[#D9D9D9] rounded-full" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <CalendarRange />
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
