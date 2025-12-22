import PageHeader from "@/components/home/PageHeader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";

export default function ConsumerInsights() {
  return (
    <div className="flex flex-col gap-y-12">
      <PageHeader title="Store and shopper insights" chips={false} />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] px-4 md:px-6 py-7 gap-3.5">
          <div>
            <h3 className="text-lg font-semibold leading-6 text-white">
              Data source
            </h3>
          </div>
          <div className="flex md:flex-row flex-wrap gap-2 md:gap-9">
            <div className="flex items-center gap-3">
              <Checkbox id="Vividata" />
              <Label htmlFor="Vividata">Vividata</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="Census" />
              <Label htmlFor="Census">Census</Label>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox id="Mobile" />
              <Label htmlFor="Mobile">Mobile</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="Transactional" />
              <Label htmlFor="Transactional">Transactional</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="Loyalty" />
              <Label htmlFor="Loyalty">Loyalty</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="CRM" />
              <Label htmlFor="CRM">CRM</Label>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] px-4 md:px-6 py-7 gap-3.5">
          <div>
            <h3 className="text-lg font-semibold leading-6 text-white">
              Location
            </h3>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-11">
            <div className="flex w-full relative">
              <input
                className="w-full bg-white rounded-full border-0 text-sm text-[#6E6E7A] outline-0 py-2 px-4"
                type="text"
                id="search"
                name="search"
                placeholder="Search here"
              ></input>
              <SearchIcon className="text-primary absolute z-10 right-2 top-1.25" />
            </div>
            <div className="grid grid-cols-5 w-full gap-4">
              <div className="flex items-center gap-3">
                <Checkbox id="AB" />
                <Label htmlFor="AB">AB</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="MB" />
                <Label htmlFor="MB">MB</Label>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox id="NL" />
                <Label htmlFor="NL">NL</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="ON" />
                <Label htmlFor="ON">ON</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="QC" />
                <Label htmlFor="QC">QC</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="BC" />
                <Label htmlFor="BC">BC</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="NB" />
                <Label htmlFor="NB">NB</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="NS" />
                <Label htmlFor="NS">NS</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="PE" />
                <Label htmlFor="PE">PE</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="SK" />
                <Label htmlFor="SK">SK</Label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] px-4 md:px-6 py-7 gap-3.5">
          <div>
            <h3 className="text-lg font-semibold leading-6 text-white">
              Filters
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-1.75">
            <div className="flex flex-col gap-2 md:min-w-45">
              <h4 className="text-primary text-sm font-semibold">
                Demographics
              </h4>
              <div className="flex flex-row flex-wrap md:flex-col  ">
                <div className="flex items-center gap-3 px-1.75 py-2 ">
                  <Checkbox id="Age" />
                  <Label htmlFor="Age">Age</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Gender" />
                  <Label htmlFor="Gender">Gender</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Income" />
                  <Label htmlFor="Income">Income</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Education" />
                  <Label htmlFor="Education">Education</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Household size" />
                  <Label htmlFor="Household size">Household size</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Family stage" />
                  <Label htmlFor="Family stage">Family stage</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Ethnic background" />
                  <Label htmlFor="Ethnic background">Ethnic background</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Language" />
                  <Label htmlFor="Language">Language</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Home ownership" />
                  <Label htmlFor="Home ownership">Home ownership</Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:min-w-45">
              <h4 className="text-primary text-sm font-semibold">
                Media habits
              </h4>
              <div className="flex flex-row flex-wrap md:flex-col  ">
                <div className="flex items-center gap-3 px-1.75 py-2 ">
                  <Checkbox id="TV" />
                  <Label htmlFor="TV">TV</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Digital" />
                  <Label htmlFor="Digital">Digital</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Radio" />
                  <Label htmlFor="Radio">Radio</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Print" />
                  <Label htmlFor="Print">Print</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Social" />
                  <Label htmlFor="Social">Social</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Streaming" />
                  <Label htmlFor="Streaming">Streaming</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Device used" />
                  <Label htmlFor="Device used">Device used</Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:min-w-45">
              <h4 className="text-primary text-sm font-semibold">
                Lifestyle and attitudes
              </h4>
              <div className="flex flex-row flex-wrap md:flex-col  ">
                <div className="flex items-center gap-3 px-1.75 py-2 ">
                  <Checkbox id="Values" />
                  <Label htmlFor="Values">Values</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Attitudes" />
                  <Label htmlFor="Attitudes">Attitudes</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Motivations" />
                  <Label htmlFor="Motivations">Motivations</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Lifestyle activities" />
                  <Label htmlFor="Lifestyle activities">
                    Lifestyle activities
                  </Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Purchase drivers" />
                  <Label htmlFor="Purchase drivers">Purchase drivers</Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:min-w-45">
              <h4 className="text-primary text-sm font-semibold">
                Product usage
              </h4>
              <div className="flex flex-row flex-wrap md:flex-col  ">
                <div className="flex items-center gap-3 px-1.75 py-2 ">
                  <Checkbox id="Product usage" />
                  <Label htmlFor="Product usage">Product usage</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Usage frequency" />
                  <Label htmlFor="Usage frequency">Usage frequency</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Spending level" />
                  <Label htmlFor="Spending level">Spending level</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Brand used" />
                  <Label htmlFor="Brand used">Brand used</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Purchase intent" />
                  <Label htmlFor="Purchase intent">Purchase intent</Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:min-w-45">
              <h4 className="text-primary text-sm font-semibold">
                Digital behaviour
              </h4>
              <div className="flex flex-row flex-wrap md:flex-col  ">
                <div className="flex items-center gap-3 px-1.75 py-2 ">
                  <Checkbox id="Websites visited" />
                  <Label htmlFor="Websites visited">Websites visited</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Apps used" />
                  <Label htmlFor="Apps used">Apps used</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Time spend" />
                  <Label htmlFor="Time spend">Time spend</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Visit frequency" />
                  <Label htmlFor="Visit frequency">Visit frequency</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Device type" />
                  <Label htmlFor="Device type">Device type</Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:min-w-45">
              <h4 className="text-primary text-sm font-semibold">
                Cultural and newcomer
              </h4>
              <div className="flex flex-row flex-wrap md:flex-col  ">
                <div className="flex items-center gap-3 px-1.75 py-2 ">
                  <Checkbox id="Time in Canada" />
                  <Label htmlFor="Time in Canada">Time in Canada</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Language at home" />
                  <Label htmlFor="Language at home">Language at home</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Community group" />
                  <Label htmlFor="Community group">Community group</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Language" />
                  <Label htmlFor="Language">Language</Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:min-w-45">
              <h4 className="text-primary text-sm font-semibold">Geography</h4>
              <div className="flex flex-row flex-wrap md:flex-col  ">
                <div className="flex items-center gap-3 px-1.75 py-2 ">
                  <Checkbox id="Province" />
                  <Label htmlFor="Province">Province</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="City" />
                  <Label htmlFor="City">City</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Neighbourhood" />
                  <Label htmlFor="Neighbourhood">Education</Label>
                </div>
                <div className="flex items-center gap-3 px-1.75 py-2">
                  <Checkbox id="Postal code" />
                  <Label htmlFor="Postal code">Postal code</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="rounded-full px-10">Apply search</Button>
        </div>
      </div>
    </div>
  );
}
