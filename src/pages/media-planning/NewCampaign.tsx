import PageHeader from "@/components/home/PageHeader";
import { MyDatePicker } from "@/components/MyDatePicker";
import AiInlineRecommendation from "@/components/ui/AiInlineRecommendation";
import mapIcon from "../../assets/mapIcon.svg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  ChevronDown,
  DollarSignIcon,
  LightbulbIcon,
  RatioIcon,
  TrendingUp,
} from "lucide-react";

export default function NewCampaign() {
  const Campaign_objective = [
    "Awareness",
    "Consideration",
    "Conversion",
    "Store visit lift",
  ];
  const Placement_environment = [
    "Airports",
    "Convenience store",
    "Grocery",
    "Government office",
    "Transit",
    "Gas station",
    "Roadside",
    "Large format",
  ];
  const airportCheckboxes = [
    "LAX",
    "Orange County",
    "Long Beach",
    "Burbank",
    "Ontario",
  ];
  const convenienceStoreCheckboxes = [
    "7-Eleven",
    "Circle K",
    "AM/PM",
    "Independent",
    "Qwik",
  ];
  const formatCheckboxes = [
    "DOOH, vertical",
    "DOOH, horizontal",
    "OOH, 2’ x 3’",
    "OOH, 4’ x 6’",
    "OOH, 5’ x 10’",
  ];
  const dataSourceChecboxes = ["Vividata", "Census", "Mobile"];
  return (
    <div className="flex flex-col gap-y-6">
      <PageHeader title="Campaign name" />
      <div className="main flex flex-col md:flex-row justify-between w-full gap-x-10 gap-y-5">
        <div className="grow flex flex-col gap-y-5 w-full max-w-full md:max-w-[36%]">
          <div className="card text-white">
            <div className="flex flex-col gap-y-3">
              <Label
                htmlFor="campaignName"
                className="text-[14px] font-semibold text-white"
              >
                Campaign
              </Label>
              <Input
                type="text"
                id="campaignName"
                placeholder="Campaign name"
                className="bg-white text-black"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <Label
                htmlFor="picture"
                className="text-[14px] font-semibold text-white"
              >
                Campaign objective
              </Label>
              <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                {Campaign_objective.map((item) => (
                  <MyCheckBox item={item} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              <div className="flex flex-col justify-start gap-y-3">
                <Label
                  htmlFor="picture"
                  className="text-[14px] font-semibold text-white"
                >
                  Start Date
                </Label>
                <MyDatePicker />
              </div>
              <div className="flex flex-col justify-start gap-y-3">
                <Label
                  htmlFor="picture"
                  className="text-[14px] font-semibold text-white"
                >
                  End Date
                </Label>
                <MyDatePicker />
              </div>
            </div>
          </div>
          <div className="card text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              <div className="flex flex-col gap-y-3">
                <Label
                  htmlFor="budget"
                  className="text-[14px] font-semibold text-white"
                >
                  Budget
                </Label>

                <InputGroup className="bg-white">
                  <InputGroupInput
                    type="number"
                    id="budget"
                    placeholder="Campaign name"
                    className=" text-black"
                  />
                  <InputGroupAddon>
                    <DollarSignIcon className="text-black" />
                  </InputGroupAddon>
                </InputGroup>
              </div>
              <div className="flex flex-col gap-y-3">
                <Label
                  htmlFor="budget"
                  className="text-[14px] font-semibold text-white"
                >
                  Country
                </Label>
                <div className="w-full">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div
                        className="bg-white rounded-full py-1 px-2 flex flex-row justify-between items-center gap-2 cursor-pointer nowrap text-black"
                        id="chooseCountry"
                      >
                        <div className="flex flex-row gap-2 items-center">
                          <span className="text-[14px] leading-4">
                            Select Country
                          </span>
                        </div>
                        <ChevronDown
                          className={`text-white h-5 w-5 bg-[#D9D9D9] rounded-full transition-transform }`}
                        />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Canada</DropdownMenuItem>
                        <DropdownMenuItem>United States</DropdownMenuItem>
                        <DropdownMenuItem>Mexico</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <Label
                  htmlFor="budget"
                  className="text-[14px] font-semibold text-white"
                >
                  Province or State
                </Label>
                <div className="w-full">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div
                        className="bg-white rounded-full py-1 px-2 flex flex-row justify-between items-center gap-2 cursor-pointer nowrap text-black"
                        id="ProvinceorState"
                      >
                        <div className="flex flex-row gap-2 items-center">
                          <span className="text-[14px] leading-4">
                            Select Provinces
                          </span>
                        </div>
                        <ChevronDown
                          className={`text-white h-5 w-5 bg-[#D9D9D9] rounded-full transition-transform }`}
                        />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Canada</DropdownMenuItem>
                        <DropdownMenuItem>United States</DropdownMenuItem>
                        <DropdownMenuItem>Mexico</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <Label
                  htmlFor="budget"
                  className="text-[14px] font-semibold text-white"
                >
                  City
                </Label>
                <div className="w-full">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div
                        className="bg-white rounded-full py-1 px-2 flex flex-row justify-between items-center gap-2 cursor-pointer nowrap text-black"
                        id="City"
                      >
                        <div className="flex flex-row gap-2 items-center">
                          <span className="text-[14px] leading-4">
                            Select City
                          </span>
                        </div>
                        <ChevronDown
                          className={`text-white h-5 w-5 bg-[#D9D9D9] rounded-full transition-transform }`}
                        />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Canada</DropdownMenuItem>
                        <DropdownMenuItem>United States</DropdownMenuItem>
                        <DropdownMenuItem>Mexico</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
          <div className="card text-white">
            <div className="flex flex-col md:flex-row gap-x-10 gap-y-4 items-end justify-between w-full">
              <div className="flex flex-col justify-start gap-y-3 w-full">
                <Label
                  htmlFor="ZIP_Postalcode"
                  className="text-[14px] font-semibold text-white"
                >
                  ZIP / Postal code
                </Label>
                <Input
                  type="text"
                  placeholder="ZIP / Postal code"
                  id="ZIP_Postalcode"
                  className="bg-white text-black"
                />
              </div>
              <div className="w-full">
                <Button className="md:text-[15px]">
                  Bulk Import Postal Codes
                </Button>
              </div>
            </div>
          </div>
          <div className="card text-white">
            <div className="flex flex-col gap-y-3">
              <Label
                htmlFor="picture"
                className="text-[14px] font-semibold text-white"
              >
                Campaign objective
              </Label>
              <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                {Placement_environment.map((item) => (
                  <MyCheckBox item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grow flex flex-col gap-y-5 w-full md:max-w-[53%] ">
          <div className="card text-white">
            <div className="flex flex-col gap-y-3 h-auto max-h-60 overflow-y-scroll scrollbar">
              <h3 className="text-white text-[14px] leading-6 font-semibold">
                Network Type
              </h3>
              {/* Airport */}
              <div className="flex flex-col gap-y-3">
                <Label
                  htmlFor="picture"
                  className="text-[14px] font-semibold text-primary"
                >
                  Airport
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3">
                  {airportCheckboxes.map((item) => (
                    <MyCheckBox item={item} />
                  ))}
                </div>
              </div>
              {/* Convenience store */}
              <div className="flex flex-col gap-y-3">
                <Label
                  htmlFor="picture"
                  className="text-[14px] font-semibold text-primary"
                >
                  Convenience store
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3">
                  {convenienceStoreCheckboxes.map((item) => (
                    <MyCheckBox item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-x-4 md:gap-x-10 gap-y-4">
              <div className="flex flex-col gap-y-3 grow">
                <h3 className="text-white text-[14px] leading-6 font-semibold">
                  Format
                </h3>
                <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                  {formatCheckboxes.map((item) => (
                    <MyCheckBox item={item} />
                  ))}
                </div>
              </div>
              <div className="">
                <div className="flex gap-x-2 border border-primary w-fit rounded-full px-5 py-1.5">
                  <Checkbox id="formatAddMobile" className="peer" />
                  <Label
                    htmlFor="formatAddMobile"
                    className="font-semibold text-white"
                  >
                    add mobile
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-x-4 md:gap-x-10 gap-y-4">
              <div className="flex flex-col gap-y-3 grow">
                <h3 className="text-white text-[14px] leading-6 font-semibold">
                  Data sources
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {dataSourceChecboxes.map((item) => (
                    <MyCheckBox item={item} />
                  ))}
                </div>
              </div>
              <div className="">
                <Button className="px-15 leading-[100%] font-semibold">
                  Filters
                </Button>
              </div>
            </div>
          </div>
          <div className="card text-white">
            <h3 className="text-white text-[14px] leading-6 font-semibold">
              AI insights & Recommendations
            </h3>
            <div className="h-auto max-h-42.5 overflow-y-scroll scrollbar">
              <div className="flex flex-col gap-3">
                <AiInlineRecommendation
                  Icon={LightbulbIcon}
                  text="Add mobile using the same creative to increase estimated impressions and reach with minimal effort."
                  recommendationType="positive"
                />
                <AiInlineRecommendation
                  Icon={RatioIcon}
                  text="Change DOOH formats from horizontal to vertical to access more available screens and improve CPM."
                  recommendationType="positive"
                />
                <AiInlineRecommendation
                  Icon={TrendingUp}
                  text="Include gas stations to add incremental reach from frequent, short visits."
                  recommendationType="positive"
                />
                <AiInlineRecommendation
                  Icon={LightbulbIcon}
                  text="Extend delivery slightly into early evening to unlock additional media units."
                  recommendationType="positive"
                />
                <AiInlineRecommendation
                  Icon={LightbulbIcon}
                  text="Add mobile using the same creative to increase estimated impressions and reach with minimal effort."
                  recommendationType="positive"
                />
                <AiInlineRecommendation
                  Icon={RatioIcon}
                  text="Change DOOH formats from horizontal to vertical to access more available screens and improve CPM."
                  recommendationType="positive"
                />
                <AiInlineRecommendation
                  Icon={TrendingUp}
                  text="Include gas stations to add incremental reach from frequent, short visits."
                  recommendationType="positive"
                />
                <AiInlineRecommendation
                  Icon={LightbulbIcon}
                  text="Extend delivery slightly into early evening to unlock additional media units."
                  recommendationType="positive"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full md:max-w-[11%] grow ">
          <div className="flex flex-col justify-between gap-6 h-full">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
              <EstimateButtons title="Estimated impressions" number={0} />
              <EstimateButtons title="Estimated CPM" number={4} />
              <EstimateButtons title="Media units" number={4} />
              <EstimateButtons title="Budget" number={4} />
            </div>
            <div>
              <div className="flex flex-col gap-y-4">
                <div className="bg-secondary p-2 rounded-3xl text-white flex flex-row justify-center items-center gap-3 md:h-24">
                  <span className="text-[16px] font-bold leading-tight">
                    Map
                  </span>
                  <img src={mapIcon} alt="map Icon" />
                </div>
                <div>
                  <Button className="w-full text-[16px] font-semibold">save campaign</Button>
                </div>
                <div className="bg-primary kpi-shadow-primaryw-full flex flex-col gap-2.5 md:gap-3 items-center justify-center rounded-3xl p-5 text-white transition-shadow duration-300 cursor-pointer relative md:h-30 ">
                  <span className="text-[16px] font-bold leading-4 text-center">
                    create campaign
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyCheckBox({ item }: any) {
  return (
    <div className="flex gap-x-2 items-center">
      <Checkbox id={`${item}_checkbox`} className="peer" />
      <Label
        htmlFor={`${item}_checkbox`}
        className="font-normal peer-data-[state=checked]:text-white group-hover:text-white peer-hover:text-white transition-all"
      >
        {item}
      </Label>
    </div>
  );
}

function EstimateButtons({ title, number }: { title: string; number: number }) {
  return (
    <div className="bg-primary kpi-shadow-primaryw-full h-full flex flex-col gap-2.5 md:gap-3 items-center justify-center rounded-3xl px-1 py-5 text-white transition-shadow duration-300 cursor-pointer relative">
      <span className="text-[14px] font-bold leading-4 text-center">
        {title}
      </span>
      <span className="text-[24px] md:text-[36px] font-bold leading-4 text-center">
        {number}
      </span>
    </div>
  );
}
