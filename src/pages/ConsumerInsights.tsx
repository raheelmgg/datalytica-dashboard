import PageHeader from "@/components/home/PageHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  dataSources: z.array(z.string()).optional(),
  locations: z.array(z.string()).optional(),
  searchLocation: z.string().optional(),
  demographics: z.array(z.string()).optional(),
  mediaHabits: z.array(z.string()).optional(),
  lifestyle: z.array(z.string()).optional(),
  productUsage: z.array(z.string()).optional(),
  digitalBehaviour: z.array(z.string()).optional(),
  cultural: z.array(z.string()).optional(),
  geography: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof formSchema>;
type SearchState = "idle" | "loading" | "results";
type SearchResultsData = {
  location: string;
  summary: {
    households: string;
    avgIncome: string;
    ageRange: string;
    population: string;
  };
  dashboard: {
    impressions: string;
    reach: string;
    frequency: string;
  };
};

const LOCATION_RESULTS = [
  "150 Main St N, Brampton, ON L6V 1N9",
  "150 Main St S, Brampton, ON L6Y 1C1",
  "120 Queen St E, Toronto, ON M5C 1S4",
  "1 Dundas St W, Toronto, ON M5G 1Z3",
];

const DATA_SOURCES = [
  "Vividata",
  "Census",
  "Mobile",
  "Transactional",
  "Loyalty",
  "CRM",
  "Add mobile",
];
const PROVINCES = ["AB", "BC", "MB", "NB", "NL", "NS", "ON", "PE", "QC", "SK"];
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

const DEFAULT_FORM_VALUES: FormValues = {
  dataSources: [],
  searchLocation: "",
  locations: [],
  demographics: [],
  mediaHabits: [],
  lifestyle: [],
  productUsage: [],
  digitalBehaviour: [],
  cultural: [],
  geography: [],
};
function CheckboxGroup({
  name,
  options,
  control,
  isRow,
}: {
  name: keyof FormValues;
  options: string[];
  control: any;
  isRow: boolean;
}) {
  return (
    <div
      className={`flex gap-3 ${
        isRow ? "flex-row flex-wrap" : "md:flex-col flex-row flex-wrap"
      }`}
    >
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
                className={`flex items-center gap-3 ${
                  isAddMobile
                    ? "border border-primary rounded-full px-5 py-1.5"
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
                  />
                </FormControl>
                <FormLabel
                  className={`font-normal peer-data-[state=checked]:text-white peer-hover:text-white transition-all ${
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
    </div>
  );
}

export default function ConsumerInsights() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<SearchState>("idle");
  const [results, setResults] = useState<SearchResultsData | null>(null);
  const wrapperRef = useRef<HTMLInputElement>(null);
  const searchValue = form.watch("searchLocation") || "";
  const filteredResults = LOCATION_RESULTS.filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function onSubmit(values: FormValues) {
    if (values.searchLocation == "") {
      toast.error("Please Select a location");
      return;
    }
    setState("loading");
    toast.loading("Searching consumer insights...", { id: "search" });

    await new Promise((r) => setTimeout(r, 1200));

    setResults({
      location: values.searchLocation!,
      summary: {
        households: "75k households",
        avgIncome: "$85k average income",
        ageRange: "35–54",
        population: "215k population",
      },
      dashboard: {
        impressions: "9.7M",
        reach: "675k",
        frequency: "3.1",
      },
    });

    toast.success("Search completed successfully!", { id: "search" });
    setState("results");
  }
  return (
    <>
      {state === "idle" && (
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-5"
            >
              <PageHeader title="Store and shopper insights" chips={false} />

              <div className="bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] px-6 py-7">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Data source
                </h3>
                <CheckboxGroup
                  name="dataSources"
                  control={form.control}
                  options={DATA_SOURCES}
                  isRow={true}
                />
              </div>

              <div className="bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] px-6 py-7">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Location
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="searchLocation"
                      render={({ field }) => (
                        <FormItem className="relative" ref={wrapperRef}>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Search here"
                              className="rounded-full bg-white border-none pl-4 pr-10 text-[#6E6E7A]"
                              autoComplete="off"
                              autoCorrect="off"
                              onChange={(e) => {
                                field.onChange(e);
                                setOpen(true);
                              }}
                              onFocus={() => setOpen(true)}
                            />
                          </FormControl>

                          <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-primary" />
                          {open && (
                            <div className="absolute z-50 top-12 w-full">
                              <Command className="rounded-2xl bg-white shadow-lg">
                                <CommandList>
                                  {filteredResults.length === 0 && (
                                    <CommandEmpty>
                                      No results found.
                                    </CommandEmpty>
                                  )}

                                  {filteredResults.length > 0 && (
                                    <CommandGroup>
                                      {filteredResults.map((item) => (
                                        <CommandItem
                                          key={item}
                                          value={item}
                                          onSelect={() => {
                                            field.onChange(item);
                                            setOpen(false);
                                          }}
                                          className="cursor-pointer"
                                        >
                                          {item}
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  )}
                                </CommandList>
                              </Command>
                            </div>
                          )}
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <CheckboxGroup
                      name="locations"
                      control={form.control}
                      options={PROVINCES}
                      isRow={true}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] px-6 py-7 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white">Filters</h3>
                </div>
                <div className="w-full flex flex-row gap-4 flex-wrap md:gap-4">
                  <section className="w-full md:max-w-43">
                    <h4 className="text-primary font-semibold mb-3">
                      Demographics
                    </h4>
                    <CheckboxGroup
                      name="demographics"
                      control={form.control}
                      options={DEMOGRAPHICS}
                      isRow={false}
                    />
                  </section>

                  <section className="w-full md:max-w-43">
                    <h4 className="text-primary font-semibold mb-3">
                      Media habits
                    </h4>
                    <CheckboxGroup
                      name="mediaHabits"
                      control={form.control}
                      options={MEDIA_HABITS}
                      isRow={false}
                    />
                  </section>

                  <section className="w-full md:max-w-43">
                    <h4 className="text-primary font-semibold mb-3">
                      Lifestyle and attitudes
                    </h4>
                    <CheckboxGroup
                      name="lifestyle"
                      control={form.control}
                      options={LIFESTYLE}
                      isRow={false}
                    />
                  </section>

                  <section className="w-full md:max-w-43">
                    <h4 className="text-primary font-semibold mb-3">
                      Product usage
                    </h4>
                    <CheckboxGroup
                      name="productUsage"
                      control={form.control}
                      options={PRODUCT_USAGE}
                      isRow={false}
                    />
                  </section>

                  <section className="w-full md:max-w-43">
                    <h4 className="text-primary font-semibold mb-3">
                      Digital behaviour
                    </h4>
                    <CheckboxGroup
                      name="digitalBehaviour"
                      control={form.control}
                      options={DIGITAL_BEHAVIOUR}
                      isRow={false}
                    />
                  </section>

                  <section className="w-full md:max-w-43">
                    <h4 className="text-primary font-semibold mb-3">
                      Cultural and newcomer
                    </h4>
                    <CheckboxGroup
                      name="cultural"
                      control={form.control}
                      options={CULTURAL}
                      isRow={false}
                    />
                  </section>

                  <section className="w-full md:max-w-43">
                    <h4 className="text-primary font-semibold mb-3">
                      Geography
                    </h4>
                    <CheckboxGroup
                      name="geography"
                      control={form.control}
                      options={GEOGRAPHY}
                      isRow={false}
                    />
                  </section>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="rounded-full px-10">
                  Apply search
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
      {state === "results" && results && (
        <div>
          <SearchResultView
            searchResults={results}
            setResults={setResults}
            setState={setState}
            resetForm={form.reset}
          />
        </div>
      )}
    </>
  );
}

function SearchResultView({
  searchResults,
  setResults,
  setState,
  resetForm,
}: {
  searchResults: SearchResultsData;
  setResults: (results: SearchResultsData | null) => void;
  setState: (state: SearchState) => void;
  resetForm: () => void;
}) {
  return (
    <div>
      <PageHeader title="Store and shopper insights" chips={false} />
      <div className="flex flex-col gap-y-8 mt-1 md:mt-10">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="text-white">
            <span>Location:</span>
            <h3 className="text-[24px] font-semibold">
              {searchResults.location}
            </h3>
          </div>
          <div>
            <Button
              type="button"
              className="rounded-full px-10"
              onClick={() => {
                resetForm();
                setResults(null);
                setState("idle");
              }}
            >
              New search
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 justify-between">
          <div className="card w-full max-w-full md:max-w-[30%] text-white">
            <h3 className="text-lg font-semibold leading-6">Ai Inishgt</h3>
            <p className="text-[16px]">
              South Asian Enterprise embodies a richly diverse segment primarily
              residing in urban neighbourhoods within Toronto. Dominated by
              upper-middle-income households, these large, middle-aged families
              - many with adult children at home - often own single-detached,
              semi-detached, or row houses. This segment embraces a strong work
              ethic, resulting in stable blue-collar and service-sector careers.
              Active and sociable, they participate in sports such as basketball
              and tennis, with a strong emphasis on fitness and well-being.
              Their lifestyle reflects a pursuit of upward mobility, community
              pride, and meaningful personal achievement.
            </p>
          </div>
          <div className="card w-full grow text-white">
            <h3 className="text-lg font-semibold leading-6">Dashboard</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-4 md:gap-x-4 md:gap-y-6 h-auto max-h-112.5  overflow-scroll scrollbar">
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Average household income
                </span>
                <span className="text-[20px] md:text-[22px]">$ 142.300</span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Media household income{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">$ 136.800</span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Average household net worth{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">$ 1.018.000</span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Media household net worth{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">$ 972.500</span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Home ownership{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">67% own</span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">Home type </span>
                <span className="text-[20px] md:text-[22px]">
                  71% single detached
                </span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Primary life stage
                </span>
                <span className="text-[20px] md:text-[22px]">
                  Young families{" "}
                </span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Dominant age band{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">35 to 54 </span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Household size{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">3.1 persons</span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Presence of children{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">Yes</span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Education level{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">
                  31% university
                </span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Employment status{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">
                  81% employed{" "}
                </span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Primary language{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">Spanish </span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  New canadians{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">High </span>
              </div>
              <div className="flex flex-col justify-between p-1 h-auto md:h-20">
                <span className="text-primary font-semibold">
                  Commuter type{" "}
                </span>
                <span className="text-[20px] md:text-[22px]">Drive </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
