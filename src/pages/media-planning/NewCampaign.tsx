import PageHeader from "@/components/home/PageHeader";
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
  Clock9,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DashboardModal from "@/components/DashboardModal";
import { useState, useEffect, useRef } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  campaignName: z.string().optional(),
  campaignObjective: z.array(z.string()).optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  budget: z.string().optional(),
  country: z.string().optional(),
  provinces: z.array(z.string()).optional(),
  cities: z.array(z.string()).optional(),
  zipPostalCode: z.string().optional(),
  placementEnvironment: z.array(z.string()).optional(),
  airportNetworks: z.array(z.string()).optional(),
  convenienceStoreNetworks: z.array(z.string()).optional(),
  groceryNetworks: z.array(z.string()).optional(),
  governmentOfficeNetworks: z.array(z.string()).optional(),
  transitNetworks: z.array(z.string()).optional(),
  gasStationNetworks: z.array(z.string()).optional(),
  roadsideNetworks: z.array(z.string()).optional(),
  largeFormatNetworks: z.array(z.string()).optional(),
  formats: z.array(z.string()).optional(),
  addMobile: z.boolean().optional(),
  dataSources: z.array(z.string()).optional(),
  demographics: z.array(z.string()).optional(),
  mediaHabits: z.array(z.string()).optional(),
  lifestyle: z.array(z.string()).optional(),
  productUsage: z.array(z.string()).optional(),
  digitalBehaviour: z.array(z.string()).optional(),
  cultural: z.array(z.string()).optional(),
  geography: z.array(z.string()).optional(),
});
type FormValues = z.infer<typeof formSchema>;
const DEFAULT_FORM_VALUES: FormValues = {
  campaignName: "",
  campaignObjective: [],
  startDate: undefined,
  endDate: undefined,
  budget: "",
  country: "",
  provinces: [],
  cities: [],
  zipPostalCode: "",
  placementEnvironment: [],
  airportNetworks: [],
  convenienceStoreNetworks: [],
  groceryNetworks: [],
  governmentOfficeNetworks: [],
  transitNetworks: [],
  gasStationNetworks: [],
  roadsideNetworks: [],
  largeFormatNetworks: [],
  formats: [],
  addMobile: false,
  dataSources: [],
  demographics: [],
  mediaHabits: [],
  lifestyle: [],
  productUsage: [],
  digitalBehaviour: [],
  cultural: [],
  geography: [],
};
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
// Dummy network options for other placement environments
const groceryNetworks = [
  "Whole Foods",
  "Safeway",
  "Kroger",
  "Walmart Supercenter",
  "Target",
];
const governmentOfficeNetworks = [
  "DMV",
  "Post Office",
  "City Hall",
  "Courthouse",
  "Federal Building",
];
const transitNetworks = [
  "Metro Stations",
  "Bus Stops",
  "Train Stations",
  "Subway",
  "Airport Shuttle",
];
const gasStationNetworks = ["Shell", "BP", "Chevron", "Exxon", "Mobil"];
const roadsideNetworks = [
  "Billboard A",
  "Billboard B",
  "Digital Billboard",
  "Highway Sign",
  "Street Banner",
];
const largeFormatNetworks = [
  "Superboard",
  "Mega Display",
  "Wall Wrap",
  "Building Wrap",
  "Spectacular",
];
const formatCheckboxes = [
  "DOOH, vertical",
  "DOOH, horizontal",
  "OOH, 2’ x 3’",
  "OOH, 4’ x 6’",
  "OOH, 5’ x 10’",
];
const dataSourceChecboxes = ["Vividata", "Census", "Mobile"];
const DEMOGRAPHICS = [
  "Age",
  "Gender",
  "Income",
  "Education",
  "Household size",
  "Family stage",
  "Ethnic background",
  "Language",
  "Home ownership",
];
const MEDIA_HABITS = [
  "TV",
  "Digital",
  "Radio",
  "Print",
  "Social",
  "Streaming",
  "Device used",
];
const LIFESTYLE = [
  "Values",
  "Attitudes",
  "Motivations",
  "Lifestyle activities",
  "Purchase drivers",
];
const PRODUCT_USAGE = [
  "Product usage",
  "Usage frequency",
  "Spending level",
  "Brand used",
  "Purchase intent",
];
const DIGITAL_BEHAVIOUR = [
  "Websites visited",
  "Apps used",
  "Time spent",
  "Visit frequency",
  "Device type",
];
const CULTURAL = [
  "Time in Canada",
  "Language at home",
  "Community group",
  "Language",
];
const GEOGRAPHY = ["Province", "City", "Neighbourhood", "Postal code"];

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const US_CITIES = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Charlotte",
  "San Francisco",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Washington",
  "Boston",
  "El Paso",
  "Detroit",
  "Nashville",
  "Portland",
  "Memphis",
  "Oklahoma City",
  "Las Vegas",
  "Louisville",
  "Baltimore",
];

export default function NewCampaign() {
  const [isFilterDashboardOpen, setisFilterDashboardOpen] = useState(false);
  const navigate = useNavigate();
  const [estimates, setEstimates] = useState({
    impressions: "0",
    cpm: "$0",
    mediaUnits: "0",
    budget: "$0",
  });
  const [displayEstimates, setDisplayEstimates] = useState({
    impressions: "0",
    cpm: "$0",
    mediaUnits: "0",
    budget: "$0",
  });
  const animationIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const watchedFormats = form.watch("formats") || [];
  const watchedPlacements = form.watch("placementEnvironment") || [];
  const watchedCampaignName = form.watch("campaignName") || "";
  const watchedAddMobile = form.watch("addMobile") || false;

  const handleApplyFilters = (values: FormValues) => {
    console.log("form values ==> ", values);
    setisFilterDashboardOpen(false);
  };

  const handleSaveCampaign = () => {
    const formValues = form.getValues();
    console.log("Full form data:", formValues);

    const toastId = toast.loading("Saving campaign…");

    setTimeout(() => {
      toast.info("Campaign saved successfully", {
        id: toastId,
      });
    }, 800);
  };
  const handleCreateCampaign = () => {
    const formValues = form.getValues();
    console.log("Full form data:", formValues);

    const toastId = toast.loading("Creating campaign…");

    setTimeout(() => {
      toast.success("Campaign created successfully", {
        id: toastId,
      });

      navigate("/media-planning/campaigns");
    }, 1000);
  };

  // Update estimates when formats change with toast and animation
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    // Clear any existing animation
    if (animationIntervalRef.current) {
      clearInterval(animationIntervalRef.current);
      animationIntervalRef.current = null;
    }

    // Format values mapping - each format adds to the total (real client numbers)
    // Only specified formats have values, others default to 0
    // Using formatCheckboxes array indices to ensure exact string matching
    const formatValues: Record<string, { impressions: number; cpm: number; mediaUnits: number; budget: number }> = {
      [formatCheckboxes[0]]: { impressions: 4000000, cpm: 13, mediaUnits: 40, budget: 100000 }, // DOOH, vertical
      [formatCheckboxes[1]]: { impressions: 8000000, cpm: 13, mediaUnits: 80, budget: 100000 }, // DOOH, horizontal
      [formatCheckboxes[2]]: { impressions: 0, cpm: 0, mediaUnits: 0, budget: 0 }, // OOH, 2' x 3'
      [formatCheckboxes[3]]: { impressions: 9000000, cpm: 12, mediaUnits: 120, budget: 100000 }, // OOH, 4' x 6'
      [formatCheckboxes[4]]: { impressions: 0, cpm: 0, mediaUnits: 0, budget: 0 }, // OOH, 5' x 10'
    };

    // Add mobile values
    const addMobileValues = { impressions: 12000000, cpm: 12, mediaUnits: 120, budget: 100000 };

    if (watchedFormats.length > 0 || watchedAddMobile) {
      toast.loading("Calculating estimates...", { id: "estimates" });

      // Simulate calculation delay
      timeoutId = setTimeout(() => {
        // Calculate cumulative totals from all selected formats
        const totals = watchedFormats.reduce(
          (acc, format) => {
            const values = formatValues[format] || { impressions: 0, cpm: 0, mediaUnits: 0, budget: 0 };
            // Add all values (including 0s for formats without values)
            acc.impressions += values.impressions;
            acc.mediaUnits += values.mediaUnits;
            acc.budget += values.budget;
            // CPM: add up like other values
            acc.cpm += values.cpm;
            return acc;
          },
          { impressions: 0, mediaUnits: 0, budget: 0, cpm: 0 }
        );

        // Add mobile if checked
        if (watchedAddMobile) {
          totals.impressions += addMobileValues.impressions;
          totals.mediaUnits += addMobileValues.mediaUnits;
          totals.budget += addMobileValues.budget;
          totals.cpm += addMobileValues.cpm;
        }

        const formatNumber = (num: number, type: "impressions" | "cpm" | "mediaUnits" | "budget"): string => {
          if (type === "impressions") {
            if (num >= 1000000) {
              const value = num / 1000000;
              return value >= 1 ? `${value.toFixed(1)}M`.replace(".0", "") : `${Math.round(num).toLocaleString()}`;
            }
            return Math.round(num).toLocaleString();
          }
          if (type === "cpm") {
            // Round CPM to nearest integer
            return `$${Math.round(num)}`;
          }
          if (type === "budget") {
            if (num >= 1000) {
              const value = num / 1000;
              return `$${value >= 1 ? Math.round(value) : Math.round(num)}K`;
            }
            return `$${Math.round(num)}`;
          }
          return Math.round(num).toString();
        };

        const newEstimates = {
          impressions: formatNumber(totals.impressions, "impressions"),
          cpm: formatNumber(totals.cpm, "cpm"),
          mediaUnits: formatNumber(totals.mediaUnits, "mediaUnits"),
          budget: formatNumber(totals.budget, "budget"),
        };

        setEstimates(newEstimates);
        animationIntervalRef.current = animateNumbers(newEstimates);
        toast.info("Estimates calculated successfully!", {
          id: "estimates",
        });
      }, 800);
    } else {
      const resetEstimates = {
        impressions: "0",
        cpm: "$0",
        mediaUnits: "0",
        budget: "$0",
      };
      setEstimates(resetEstimates);
      setDisplayEstimates(resetEstimates);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
      }
    };
  }, [watchedFormats, watchedAddMobile]);

  // Animate numbers from old to new value
  const animateNumbers = (
    targetValues: typeof estimates
  ): ReturnType<typeof setInterval> => {
    const duration = 1000; // 1 second animation
    const steps = 30;
    const stepDuration = duration / steps;

    const parseValue = (value: string): number => {
      if (!value || value === "0" || value === "$0") return 0;
      const cleaned = value.replace("$", "").trim();
      if (cleaned === "0" || cleaned === "") return 0;
      if (value.includes("M")) {
        return parseFloat(cleaned.replace("M", "")) * 1000000;
      }
      if (value.includes("K")) {
        return parseFloat(cleaned.replace("K", "")) * 1000;
      }
      const parsed = parseFloat(cleaned);
      return isNaN(parsed) ? 0 : parsed;
    };

    const formatValue = (num: number, original: string, isAnimating: boolean = true): string => {
      if (num <= 0) return original.includes("$") ? "$0" : "0";
      if (original.includes("M")) {
        const value = num / 1000000;
        return value >= 1
          ? `${value.toFixed(1)}M`.replace(".0", "")
          : `${Math.round(num).toLocaleString()}`;
      }
      if (original.includes("K")) {
        const value = num / 1000;
        return value >= 1 ? `$${Math.round(value)}K` : `$${Math.round(num)}`;
      }
      if (original.startsWith("$") && !original.includes("K")) {
        // For CPM, show one decimal during animation for smoother transitions
        // This ensures CPM always shows animation even if final value is same
        if (isAnimating) {
          // Show decimal during animation to ensure visual update
          const rounded = Math.round(num * 10) / 10;
          return `$${rounded.toFixed(1)}`;
        }
        return `$${Math.round(num)}`;
      }
      return Math.round(num).toString();
    };

    const startValues = {
      impressions: parseValue(displayEstimates.impressions),
      cpm: parseValue(displayEstimates.cpm),
      mediaUnits: parseValue(displayEstimates.mediaUnits),
      budget: parseValue(displayEstimates.budget),
    };

    const targetNums = {
      impressions: parseValue(targetValues.impressions),
      cpm: parseValue(targetValues.cpm),
      mediaUnits: parseValue(targetValues.mediaUnits),
      budget: parseValue(targetValues.budget),
    };

    // Calculate increments
    const increments = {
      impressions: (targetNums.impressions - startValues.impressions) / steps,
      cpm: (targetNums.cpm - startValues.cpm) / steps,
      mediaUnits: (targetNums.mediaUnits - startValues.mediaUnits) / steps,
      budget: (targetNums.budget - startValues.budget) / steps,
    };

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;

      const currentValues = {
        impressions:
          startValues.impressions + increments.impressions * currentStep,
        cpm: startValues.cpm + increments.cpm * currentStep,
        mediaUnits:
          startValues.mediaUnits + increments.mediaUnits * currentStep,
        budget: startValues.budget + increments.budget * currentStep,
      };

      const isLastStep = currentStep >= steps;
      
      setDisplayEstimates({
        impressions: formatValue(
          currentValues.impressions,
          targetValues.impressions,
          !isLastStep
        ),
        cpm: formatValue(currentValues.cpm, targetValues.cpm, !isLastStep),
        mediaUnits: formatValue(
          currentValues.mediaUnits,
          targetValues.mediaUnits,
          !isLastStep
        ),
        budget: formatValue(currentValues.budget, targetValues.budget, !isLastStep),
      });

      if (isLastStep) {
        clearInterval(interval);
        setDisplayEstimates(targetValues);
      }
    }, stepDuration);

    return interval;
  };
  return (
    <div className="flex flex-col gap-y-6">
      <Form {...form}>
        <PageHeader title={watchedCampaignName || "Campaign name"} />
        <div className="main flex flex-col md:flex-row justify-between w-full gap-x-4 gap-y-2">
          <div className="grow flex flex-col gap-y-2 w-full max-w-full md:max-w-[36%]">
            <div className="card text-white gap-y-3! p-3.5!">
              <FormField
                control={form.control}
                name="campaignName"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col gap-y-2">
                      <FormLabel className="text-[14px] font-semibold text-white">
                        Campaign
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Campaign name"
                          className="bg-white text-black"
                          {...field}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-y-2">
                <FormLabel className="text-[14px] font-semibold text-white">
                  Campaign objective
                </FormLabel>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <CheckboxGroup
                    name="campaignObjective"
                    control={form.control}
                    options={Campaign_objective}
                    isRow={false}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col justify-start gap-y-2">
                        <FormLabel className="text-[14px] font-semibold text-white">
                          Start Date
                        </FormLabel>
                        <FormControl>
                          <DatePickerField
                            date={field.value}
                            onSelect={field.onChange}
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col justify-start gap-y-2">
                        <FormLabel className="text-[14px] font-semibold text-white">
                          End Date
                        </FormLabel>
                        <FormControl>
                          <DatePickerField
                            date={field.value}
                            onSelect={field.onChange}
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="card text-white gap-y-3! p-4.5! gap-y-2! p-3.5!">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-y-2">
                        <FormLabel className="text-[14px] font-semibold text-white">
                          Budget
                        </FormLabel>
                        <FormControl>
                          <InputGroup className="bg-white">
                            <InputGroupInput
                              type="number"
                              placeholder="Budget"
                              className="text-black"
                              {...field}
                            />
                            <InputGroupAddon>
                              <DollarSignIcon className="text-black" />
                            </InputGroupAddon>
                          </InputGroup>
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-y-2">
                        <FormLabel className="text-[14px] font-semibold text-white">
                          Country
                        </FormLabel>
                        <FormControl>
                          <div className="w-full">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <div
                                  className="bg-white rounded-full p-1.5 flex flex-row justify-between items-center gap-2 cursor-pointer nowrap text-black"
                                  id="chooseCountry"
                                >
                                  <div className="flex flex-row gap-2 items-center">
                                    <span className="text-[14px] leading-4">
                                      {field.value || "Select Country"}
                                    </span>
                                  </div>
                                  <ChevronDown className="text-white h-5 w-5 bg-[#D9D9D9] rounded-full transition-transform" />
                                </div>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="start">
                                <DropdownMenuGroup>
                                  <DropdownMenuItem
                                    onClick={() => field.onChange("Canada")}
                                  >
                                    Canada
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      field.onChange("United States")
                                    }
                                  >
                                    United States
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => field.onChange("Mexico")}
                                  >
                                    Mexico
                                  </DropdownMenuItem>
                                </DropdownMenuGroup>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="provinces"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-y-2">
                        <FormLabel className="text-[14px] font-semibold text-white">
                          Province or State
                        </FormLabel>
                        <FormControl>
                          <MultiSelectDropdown
                            options={US_STATES}
                            selected={field.value || []}
                            onSelectionChange={field.onChange}
                            placeholder="Select Provinces"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cities"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-y-2">
                        <FormLabel className="text-[14px] font-semibold text-white">
                          City
                        </FormLabel>
                        <FormControl>
                          <MultiSelectDropdown
                            options={US_CITIES}
                            selected={field.value || []}
                            onSelectionChange={field.onChange}
                            placeholder="Select Cities"
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="card text-white gap-y-3! p-4.5!">
              <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 items-end justify-between w-full">
                <FormField
                  control={form.control}
                  name="zipPostalCode"
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-start gap-y-2 w-full">
                      <FormLabel className="text-[14px] font-semibold text-white">
                        ZIP / Postal code
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="ZIP / Postal code"
                          className="bg-white text-black"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="w-full">
                  <Button className="md:text-[15px]" type="button">
                    Bulk Import Postal Codes
                  </Button>
                </div>
              </div>
            </div>
            <div className="card text-white gap-y-3! p-4.5!">
              <div className="flex flex-col gap-y-2">
                <FormLabel className="text-[14px] font-semibold text-white">
                  Placement environment
                </FormLabel>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <CheckboxGroup
                    name="placementEnvironment"
                    control={form.control}
                    options={Placement_environment}
                    isRow={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grow flex flex-col gap-y-2 w-full md:max-w-[53%] ">
            <div className="card text-white gap-y-3! p-4.5!">
              <div className="flex flex-col gap-y-2 h-auto max-h-60 overflow-y-scroll scrollbar">
                <h3 className="text-white text-[14px] leading-5 font-semibold mb-1">
                  Network Type
                </h3>
                {watchedPlacements.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-1 text-center">
                    <p className="text-white/60 text-sm mb-2">
                      No placement environments selected
                    </p>
                    <p className="text-white/40 text-xs">
                      Select placement environments to see network options
                    </p>
                  </div>
                ) : (
                  <>
                  {watchedPlacements.includes("Airports") && (
                    <div className="flex flex-col gap-y-2">
                      <FormLabel className="text-[14px] font-semibold text-primary">
                        Airport
                      </FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                        <CheckboxGroup
                          name="airportNetworks"
                          control={form.control}
                          options={airportCheckboxes}
                          isRow={false}
                        />
                      </div>
                    </div>
                  )}
                  {watchedPlacements.includes("Convenience store") && (
                    <div className="flex flex-col gap-y-2">
                      <FormLabel className="text-[14px] font-semibold text-primary">
                        Convenience store
                      </FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                        <CheckboxGroup
                          name="convenienceStoreNetworks"
                          control={form.control}
                          options={convenienceStoreCheckboxes}
                          isRow={false}
                        />
                      </div>
                    </div>
                  )}
                  {watchedPlacements.includes("Grocery") && (
                    <div className="flex flex-col gap-y-2">
                      <FormLabel className="text-[14px] font-semibold text-primary">
                        Grocery
                      </FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                        <CheckboxGroup
                          name="groceryNetworks"
                          control={form.control}
                          options={groceryNetworks}
                          isRow={false}
                        />
                      </div>
                    </div>
                  )}
                  {watchedPlacements.includes("Government office") && (
                    <div className="flex flex-col gap-y-2">
                      <FormLabel className="text-[14px] font-semibold text-primary">
                        Government office
                      </FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                        <CheckboxGroup
                          name="governmentOfficeNetworks"
                          control={form.control}
                          options={governmentOfficeNetworks}
                          isRow={false}
                        />
                      </div>
                    </div>
                  )}
                  {watchedPlacements.includes("Transit") && (
                    <div className="flex flex-col gap-y-2">
                      <FormLabel className="text-[14px] font-semibold text-primary">
                        Transit
                      </FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                        <CheckboxGroup
                          name="transitNetworks"
                          control={form.control}
                          options={transitNetworks}
                          isRow={false}
                        />
                      </div>
                    </div>
                  )}
                  {watchedPlacements.includes("Gas station") && (
                    <div className="flex flex-col gap-y-2">
                      <FormLabel className="text-[14px] font-semibold text-primary">
                        Gas station
                      </FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                        <CheckboxGroup
                          name="gasStationNetworks"
                          control={form.control}
                          options={gasStationNetworks}
                          isRow={false}
                        />
                      </div>
                    </div>
                  )}
                  {watchedPlacements.includes("Roadside") && (
                    <div className="flex flex-col gap-y-2">
                      <FormLabel className="text-[14px] font-semibold text-primary">
                        Roadside
                      </FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                        <CheckboxGroup
                          name="roadsideNetworks"
                          control={form.control}
                          options={roadsideNetworks}
                          isRow={false}
                        />
                      </div>
                    </div>
                  )}
                  {watchedPlacements.includes("Large format") && (
                    <div className="flex flex-col gap-y-2">
                      <FormLabel className="text-[14px] font-semibold text-primary">
                        Large format
                      </FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                        <CheckboxGroup
                          name="largeFormatNetworks"
                          control={form.control}
                          options={largeFormatNetworks}
                          isRow={false}
                        />
                      </div>
                    </div>
                  )}
                  </>
                )}
              </div>
            </div>
            <div className="card text-white gap-y-3! p-4.5!">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-x-4 gap-y-2">
                <div className="flex flex-col gap-y-2 grow">
                  <h3 className="text-white text-[14px] leading-5 font-semibold">
                    Format
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <CheckboxGroup
                      name="formats"
                      control={form.control}
                      options={formatCheckboxes}
                      isRow={false}
                    />
                  </div>
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="addMobile"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex gap-x-2 border border-primary w-fit rounded-full px-4 py-1">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="peer"
                            />
                          </FormControl>
                          <FormLabel className="font-semibold text-white cursor-pointer">
                            add mobile
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="card text-white gap-y-3! p-4.5!">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-x-4 gap-y-2">
                <div className="flex flex-col gap-y-2 grow">
                  <h3 className="text-white text-[14px] leading-5 font-semibold">
                    Data sources
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
                    <CheckboxGroup
                      name="dataSources"
                      control={form.control}
                      options={dataSourceChecboxes}
                      isRow={false}
                    />
                  </div>
                </div>
                <div className="">
                  <Button
                    className="px-15 leading-[100%] font-semibold"
                    onClick={() => setisFilterDashboardOpen(true)}
                  >
                    Filters
                  </Button>
                  <DashboardModal
                    isOpen={isFilterDashboardOpen}
                    onClose={() => setisFilterDashboardOpen(false)}
                    title={`Data sources - Filters`}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="w-full flex flex-col gap-3">
                        <div className="card text-white gap-y-3! p-4.5!">
                          {/* Form of checkboxes */}
                          <div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">
                                Filters
                              </h3>
                            </div>
                            <Form {...form}>
                              <form
                                onSubmit={form.handleSubmit(handleApplyFilters)}
                              >
                                <div className="w-full flex flex-row justify-between gap-2 flex-wrap md:gap-2">
                                  <section className="min-w-40">
                                    <h4 className="text-primary font-semibold mb-2">
                                      Demographics
                                    </h4>
                                    <div className="flex flex-col gap-x-4 gap-y-2">
                                      <CheckboxGroup
                                        name="demographics"
                                        control={form.control}
                                        options={DEMOGRAPHICS}
                                        isRow={false}
                                      />
                                    </div>
                                  </section>

                                  <section className="min-w-40">
                                    <h4 className="text-primary font-semibold mb-2">
                                      Media habits
                                    </h4>
                                    <div className="flex flex-col gap-x-4 gap-y-2">
                                      <CheckboxGroup
                                        name="mediaHabits"
                                        control={form.control}
                                        options={MEDIA_HABITS}
                                        isRow={false}
                                      />
                                    </div>
                                  </section>

                                  <section className="min-w-40">
                                    <h4 className="text-primary font-semibold mb-2">
                                      Lifestyle
                                    </h4>
                                    <div className="flex flex-col gap-x-4 gap-y-2">
                                      <CheckboxGroup
                                        name="lifestyle"
                                        control={form.control}
                                        options={LIFESTYLE}
                                        isRow={false}
                                      />
                                    </div>
                                  </section>

                                  <section className="min-w-40">
                                    <h4 className="text-primary font-semibold mb-2">
                                      Product usage
                                    </h4>
                                    <div className="flex flex-col gap-x-4 gap-y-2">
                                      <CheckboxGroup
                                        name="productUsage"
                                        control={form.control}
                                        options={PRODUCT_USAGE}
                                        isRow={false}
                                      />
                                    </div>
                                  </section>

                                  <section className="min-w-40">
                                    <h4 className="text-primary font-semibold mb-2">
                                      Digital behaviour
                                    </h4>
                                    <div className="flex flex-col gap-x-4 gap-y-2">
                                      <CheckboxGroup
                                        name="digitalBehaviour"
                                        control={form.control}
                                        options={DIGITAL_BEHAVIOUR}
                                        isRow={false}
                                      />
                                    </div>
                                  </section>

                                  <section className="min-w-40">
                                    <h4 className="text-primary font-semibold mb-2">
                                      Cultural
                                    </h4>
                                    <div className="flex flex-col gap-x-4 gap-y-2">
                                      <CheckboxGroup
                                        name="cultural"
                                        control={form.control}
                                        options={CULTURAL}
                                        isRow={false}
                                      />
                                    </div>
                                  </section>

                                  <section className="min-w-40">
                                    <h4 className="text-primary font-semibold mb-2">
                                      Geography
                                    </h4>
                                    <div className="flex flex-col gap-x-4 gap-y-2">
                                      <CheckboxGroup
                                        name="geography"
                                        control={form.control}
                                        options={GEOGRAPHY}
                                        isRow={false}
                                      />
                                    </div>
                                  </section>
                                </div>
                                {/* Form Submit btn */}
                                <div className="flex flex-row justify-center items-center">
                                  <Button className="px-8" type="submit">
                                    Apply filters
                                  </Button>
                                </div>
                              </form>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DashboardModal>
                </div>
              </div>
            </div>
            <div className="card text-white gap-y-3! p-4.5!">
              <h3 className="text-white text-[14px] leading-5 font-semibold mb-2">
                AI insights & Recommendations
              </h3>
              <div className="h-auto max-h-40 overflow-y-scroll scrollbar">
                <div className="flex flex-col gap-2">
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
            <div className="flex flex-col justify-between gap-3 h-full">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                <EstimateButtons
                  title="Estimated impressions"
                  number={displayEstimates.impressions}
                />
                <EstimateButtons
                  title="Estimated CPM"
                  number={displayEstimates.cpm}
                />
                <EstimateButtons
                  title="Media units"
                  number={displayEstimates.mediaUnits}
                />
                <EstimateButtons
                  title="Budget"
                  number={displayEstimates.budget}
                />
              </div>
              <div>
                <div className="flex flex-col gap-y-2">
                  <div className="bg-secondary p-2 rounded-3xl text-white flex flex-row justify-center items-center gap-2 md:h-20">
                    <span className="text-[16px] font-bold leading-tight">
                      Map
                    </span>
                    <img src={mapIcon} alt="map Icon" />
                  </div>
                  <div>
                    <Button
                      className="w-full text-[16px] font-semibold"
                      onClick={handleSaveCampaign}
                      type="button"
                    >
                      save campaign
                    </Button>
                  </div>
                  <button
                    className="bg-primary kpi-shadow-primaryw-full flex flex-col gap-1.5 md:gap-2 items-center justify-center rounded-3xl p-3 text-white transition-shadow duration-300 cursor-pointer relative md:h-24"
                    type="submit"
                    onClick={handleCreateCampaign}
                  >
                    <span className="text-[16px] font-bold leading-4 text-center">
                      create campaign
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

function DatePickerField({
  date,
  onSelect,
}: {
  date: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className="bg-white rounded-full p-1.5 flex flex-row justify-between items-center gap-2 cursor-pointer nowrap text-black"
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
            onSelect(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

function MultiSelectDropdown({
  options,
  selected,
  onSelectionChange,
  placeholder,
}: {
  options: string[];
  selected: string[];
  onSelectionChange: (selected: string[]) => void;
  placeholder: string;
}) {
  const allSelected = selected.length === options.length;

  const handleSelectAll = () => {
    onSelectionChange(allSelected ? [] : options);
  };

  const handleToggle = (option: string) => {
    onSelectionChange(
      selected.includes(option)
        ? selected.filter((s) => s !== option)
        : [...selected, option]
    );
  };

  const displayText =
    selected.length === 0
      ? placeholder
      : selected.length === 1
      ? selected[0]
      : `${selected.length} selected`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="bg-white rounded-full p-1.5 flex flex-row justify-between items-center gap-2 cursor-pointer nowrap text-black">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-[14px] leading-4">{displayText}</span>
          </div>
          <ChevronDown className="text-white h-5 w-5 bg-[#D9D9D9] rounded-full transition-transform" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 bg-white rounded-lg">
        <div className="flex flex-col p-2">
          <div
            className={`px-2 py-1.5 cursor-pointer rounded text-sm font-medium ${
              allSelected ? "text-primary" : "text-primary hover:bg-gray-100"
            }`}
            onClick={handleSelectAll}
          >
            {allSelected ? "Deselect all" : "Select all"}
          </div>
          <div className="h-px bg-gray-200 my-1" />
          <div className="max-h-60 overflow-y-auto">
            {options.map((option) => {
              const isChecked = selected.includes(option);
              return (
                <div
                  key={option}
                  className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer"
                  onClick={() => handleToggle(option)}
                >
                  <Checkbox checked={isChecked} className="bg-[#D8DBEC]" />
                  <Label className="text-sm text-[#6E6E7A] cursor-pointer font-normal peer-data-[state=checked]:text-black">
                    {option}
                  </Label>
                </div>
              );
            })}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function EstimateButtons({ title, number }: { title: string; number: string }) {
  return (
    <div className="bg-primary kpi-shadow-primaryw-full h-full flex flex-col gap-2 md:gap-2 items-center justify-center rounded-3xl px-2 py-5 text-white transition-shadow duration-300 cursor-pointer relative">
      <span className="text-[14px] font-bold leading-4 text-center">
        {title}
      </span>
      <span className="text-[24px] md:text-[36px] font-bold leading-4 text-center transition-all duration-500 ease-out">
        {number}
      </span>
    </div>
  );
}
function CheckboxGroup({
  name,
  options,
  control,
}: {
  name: keyof FormValues;
  options: string[];
  control?: any;
  isRow?: boolean;
}) {
  return (
    <>
      {options.map((option) => (
        <FormField
          key={option}
          control={control}
          name={name}
          render={({ field }) => {
            const value: string[] = field.value || [];
            const checked = value.includes(option);
            const isAddMobile = option.toLowerCase().includes("add mobile");

            return (
              <FormItem
                className={`flex items-center gap-1.5 ${
                  isAddMobile
                    ? "border border-primary rounded-full px-4 py-1"
                    : ""
                }`}
              >
                <FormControl>
                  <Checkbox
                    checked={checked}
                    onCheckedChange={(checked) => {
                      field.onChange(
                        checked
                          ? [...value, option]
                          : value.filter((v) => v !== option)
                      );
                    }}
                    className="peer"
                  />
                </FormControl>
                <FormLabel
                  className={`font-normal peer-data-[state=checked]:text-white group-hover:text-white peer-hover:text-white transition-all cursor-pointer ${
                    isAddMobile ? "text-white" : ""
                  }`}
                >
                  {option}
                </FormLabel>
              </FormItem>
            );
          }}
        />
      ))}
    </>
  );
}
