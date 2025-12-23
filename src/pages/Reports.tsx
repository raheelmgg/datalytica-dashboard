import { Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function Reports() {
  return (
    <div className="flex flex-col gap-9">
      <div className="card">
        <div className="h-auto max-h-50 md:max-h-90 overflow-auto scrollbar">
          <div className="w-full flex flex-col gap-y-4 text-white text-[16px] md:text-[20px]">
            <p className="">
              Hi and welcome to your Datalytica dashboard, a quick look at store
              and shopper performance over the past 30 days.
            </p>
            <p className="">
              Trip conversion is steady at 41.6%, down a touch from last year.
              Traffic is up 2.8%, but not all visits are turning into purchases.
              Units per trip eased to 1.19, which shows weaker impulse
              behaviour, while basket value continues to strengthen with more
              high value items per transaction.
            </p>
            <p className="">
              Sales per store climbed to 41.8K dollars, supported by stronger
              regions like Ontario and British Columbia. Promo lift remains
              solid at 7.6% and continues to drive better conversion during key
              weeks.
            </p>
            <p className="">
              Late afternoon conversion is softer, which suggests timing or
              creative adjustments may be needed. Store lift also varies, with a
              small group of strong stores carrying most of the gains. These
              patterns show where targeted support and refreshed messaging can
              improve overall performance.
            </p>
            <p className="">
              The takeaway, shopper intent is mixed, but when customers do
              convert, they spend more. With Datalytica linking screens,
              placement, and shopper signals, each insight helps shape better
              decisions for the next cycle.
            </p>
            <p className="">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator. Reference site about Lorem Ipsum, giving
              information on its origins, as well as a random Lipsum generator.
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
            <p className="">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator. Reference site about Lorem Ipsum, giving
              information on its origins, as well as a random Lipsum generator.
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
            <p className="">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator. Reference site about Lorem Ipsum, giving
              information on its origins, as well as a random Lipsum generator.
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
            <p className="">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator. Reference site about Lorem Ipsum, giving
              information on its origins, as well as a random Lipsum generator.
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#2E2C38] border border-[#3F3D48] rounded-[32px] p-2 space-y-8">
        <div className="w-full">
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              className="h-10 w-10 rounded-full bg-primary  hover:bg-primary/90"
            >
              <Play className="h-5 w-5 ml-0.5" />
            </Button>

            <div className="flex flex-col flex-1 gap-1">
              <Slider
                defaultValue={[30]}
                max={100}
                step={1}
                className="cursor-pointer"
              />

              {/* <div className="flex justify-between text-xs text-muted-foreground">
                <span>0:32</span>
                <span>3:45</span>
              </div> */}
            </div>

            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
