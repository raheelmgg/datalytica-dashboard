"use client";

import PageHeader from "@/components/home/PageHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

/* -----------------------------
   Schema
------------------------------ */

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

/* -----------------------------
   Reusable checkbox group
------------------------------ */

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
        isRow ? "flex-row flex-wrap" : "md:flex-col flex-row flex-wrap "
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
            const isAddMobileCheckBox = option
              .toLocaleLowerCase()
              .includes("add mobile");

            return (
              <FormItem
                className={`flex items-center gap-3 ${
                  isAddMobileCheckBox &&
                  "border border-primary rounded-full px-5 py-1.5"
                } `}
              >
                <FormControl>
                  <Checkbox
                    checked={checked}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        field.onChange([...value, option]);
                      } else {
                        field.onChange(value.filter((v) => v !== option));
                      }
                    }}
                  />
                </FormControl>
                <FormLabel
                  className={`font-normal peer-data-[state=checked]:text-white ${
                    isAddMobileCheckBox && "text-white"
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
    defaultValues: {
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
    },
  });

  function onSubmit(values: FormValues) {
    const myPromise = new Promise<{ name: string }>((resolve, reject) => {
      setTimeout(() => {
        if (values.searchLocation?.trim()) {
          resolve({ name: values.searchLocation });
        } else {
          reject("No search location provided");
        }
      }, 800);
    });

    toast.promise(myPromise, {
      loading: "Applying filters...",
      success: (data) => `Filters applied for "${data.name}"`,
      error: () => "Please enter a search location",
    });

    console.log("values =>>>", values.searchLocation);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5"
      >
        <PageHeader title="Store and shopper insights" chips={false} />

        <div className="bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] px-6 py-7">
          <h3 className="text-lg font-semibold text-white mb-4">Data source</h3>
          <CheckboxGroup
            name="dataSources"
            control={form.control}
            options={[
              "Vividata",
              "Census",
              "Mobile",
              "Transactional",
              "Loyalty",
              "CRM",
              "Add mobile",
            ]}
            isRow={true}
          />
        </div>

        <div className="bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] px-6 py-7">
          <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="w-full">
              <FormField
                control={form.control}
                name="searchLocation"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Search here"
                        className="rounded-full bg-white border-none outline-0 pl-4 text-[#6E6E7A]"
                      />
                    </FormControl>
                    <SearchIcon className="absolute right-4 top-1.5 text-primary" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <CheckboxGroup
                name="locations"
                control={form.control}
                options={[
                  "AB",
                  "BC",
                  "MB",
                  "NB",
                  "NL",
                  "NS",
                  "ON",
                  "PE",
                  "QC",
                  "SK",
                ]}
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
              <h4 className="text-primary font-semibold mb-3">Demographics</h4>
              <CheckboxGroup
                name="demographics"
                control={form.control}
                options={[
                  "Age",
                  "Gender",
                  "Income",
                  "Education",
                  "Household size",
                  "Family stage",
                  "Ethnic background",
                  "Language",
                  "Home ownership",
                ]}
                isRow={false}
              />
            </section>

            <section className="w-full md:max-w-43">
              <h4 className="text-primary font-semibold mb-3">Media habits</h4>
              <CheckboxGroup
                name="mediaHabits"
                control={form.control}
                options={[
                  "TV",
                  "Digital",
                  "Radio",
                  "Print",
                  "Social",
                  "Streaming",
                  "Device used",
                ]}
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
                options={[
                  "Values",
                  "Attitudes",
                  "Motivations",
                  "Lifestyle activities",
                  "Purchase drivers",
                ]}
                isRow={false}
              />
            </section>

            <section className="w-full md:max-w-43">
              <h4 className="text-primary font-semibold mb-3">Product usage</h4>
              <CheckboxGroup
                name="productUsage"
                control={form.control}
                options={[
                  "Product usage",
                  "Usage frequency",
                  "Spending level",
                  "Brand used",
                  "Purchase intent",
                ]}
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
                options={[
                  "Websites visited",
                  "Apps used",
                  "Time spent",
                  "Visit frequency",
                  "Device type",
                ]}
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
                options={[
                  "Time in Canada",
                  "Language at home",
                  "Community group",
                  "Language",
                ]}
                isRow={false}
              />
            </section>

            <section className="w-full md:max-w-43">
              <h4 className="text-primary font-semibold mb-3">Geography</h4>
              <CheckboxGroup
                name="geography"
                control={form.control}
                options={["Province", "City", "Neighbourhood", "Postal code"]}
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
  );
}
