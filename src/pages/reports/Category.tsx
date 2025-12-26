import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type PreBuiltPrompt = {
  id: string;
  title: string;
  description: string;
  category: string;
};

const DEFAULT_TITLE = "Welcome Joan, these are today’s reports";

const PRE_BUILT_PROMPTS: PreBuiltPrompt[] = [
  {
    id: "sales-performance-snapshot",
    title: "Sales performance snapshot",
    description:
      "Tracks what is driving sales now by item, store, time of day, and shopper group.",
    category: "executive",
  },
  {
    id: "store-performance-index",
    title: "Store performance index",
    description:
      "Ranks stores and regions to highlight top performers and locations needing action.",
    category: "executive",
  },
  {
    id: "closed-loop-impact-report",
    title: "Closed loop impact report",
    description:
      "Connects media exposure to in store sales, trips, and revenue to prove business impact.",
    category: "executive",
  },
  {
    id: "category-benchmarking",
    title: "Category benchmarking",
    description:
      "Shows how your item performs versus category norms across stores, regions, and time.",
    category: "Analyst",
  },
  {
    id: "shopper-behaviour-trends",
    title: "Shopper behaviour trends",
    description:
      "Analyzes how shopper behaviour shifts by daypart, weekday, and repeat patterns.",
    category: "Analyst",
  },
  {
    id: "promotion-lift-analysis",
    title: "Promotion lift analysis",
    description:
      "Compares promotional periods to baseline weeks to isolate true lift and incrementality.",
    category: "Analyst",
  },
  {
    id: "cross-shop-analysis",
    title: "Cross shop analysis",
    description:
      "Identifies which items and categories are most often purchased together in the same trip.",
    category: "Analyst",
  },
  {
    id: "basket-contribution-report",
    title: "Basket contribution report",
    description:
      "Measures how your item affects basket size, add ons, and multi unit purchases.",
    category: "Analyst",
  },
  {
    id: "loyalty-engagement-report",
    title: "Loyalty engagement report",
    description:
      "Examines purchase patterns, point usage, and spend differences by loyalty tier.",
    category: "Analyst",
  },
];


const formSchema = z.object({
  prompt: z.string().min(1, "Prompt is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Category() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { prompt: "" },
  });

  const [chatTitle, setChatTitle] = useState(DEFAULT_TITLE);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [mode, setMode] = useState<"idle" | "active">("idle");

  const handleSuggestionClick = (prompt: PreBuiltPrompt) => {
    setChatTitle(prompt.title);

    // Populate textarea (optional but good UX)
    // form.setValue("prompt", prompt.description);

    setMode("active");

    setAiResponse(`Sales performance this period is being driven by a concentrated set of stores, dayparts, and shopper segments that consistently outperform network averages. Overall sales are stable, with clear pockets of growth emerging during weekday afternoon and early evening hours, supported by repeat visitation and higher trip frequency. These trends indicate performance is being sustained by habitual shopping behaviour rather than one time spikes.

Store level analysis shows stronger results in urban and commuter heavy locations, where visit density and conversion rates remain elevated. Underperforming stores display shorter dwell time and weaker basket attachment, suggesting opportunity for optimisation through placement, pricing, or promotional support. Category mix also plays a role, with higher velocity items contributing disproportionately to revenue.

From an executive perspective, the snapshot highlights where performance is scaling efficiently and where intervention is required. Focusing attention on high performing store clusters and reinforcing proven daypart strategies can improve near term results while reducing overall execution risk.
  `);
  };

  const onSubmit = (values: FormValues) => {
    setMode("active");

    // Simulated AI response (replace with real API later)
    setAiResponse(`Store performance is mixed this period.
      
      Traffic is up 2.8%, driven by stronger afternoon visits.
     
      Trip conversion is down 0.4%, meaning more shoppers left without purchasing.
      
      Units per transaction declined slightly, showing weaker impulse attachment.
     
      Sales dollars rose 1.3% due to higher average selling price.
      
      Gross profit declined 8% from cost pressure and heavier promotions.
     
      Inventory on hand increased 2.2%, signaling slower sell-through.
      
      Focus on improving attachment in weaker stores, tightening promotions, and reducing slow-moving items to lift margin next period.`);

    console.log("Submitted prompt:", values.prompt);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-9 max-w-full md:mx-auto px-1 md:px-4">
      <h2
        id="chatName"
        className="text-xl md:text-[30px] font-semibold text-white text-center"
      >
        {chatTitle}
      </h2>
      {aiResponse && (
        <div id="response-area">
          <div className="card p-6">
            <div className="flex flex-col gap-y-4 text-white whitespace-pre-line text-[16px] md:text-[18px] h-auto max-h-100 overflow-auto scrollbar">
              {aiResponse}
            </div>
          </div>
        </div>
      )}
      <div id="prompt-area">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Message"
                      className="
                        card text-[20px]! placeholder:text-[#6E6E7A]
                        text-white resize-none py-6! max-h-40
                        outline-none  focus-visible:ring-0 scrollbar"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      {mode === "idle" && (
        <div
          id="promptSuggestions"
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 max-w-300 mx-auto"
        >
          {PRE_BUILT_PROMPTS.map((prompt) => (
            <div
              key={prompt.id}
              onClick={() => handleSuggestionClick(prompt)}
              className="card ai-prompt-box cursor-pointer transition-shadow hover:shadow-lg gap-y-3!"
            >
              <span className="text-[#6E6E7A] font-semibold text-[12px]">
                {prompt.category}
              </span>
              <span className="font-normal text-primary text-[20px]">
                {prompt.title}
              </span>
              <span className="text-white text-[14px] leading-6">
                {prompt.description}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
