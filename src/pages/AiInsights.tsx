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

const DEFAULT_TITLE = "Welcome Joan, what insight can we unlock today?";

const PRE_BUILT_PROMPTS: PreBuiltPrompt[] = [
  {
    id: "store-performance",
    title: "Store performance analyst",
    description:
      "Gives a quick read on how each store is performing and what needs attention.",
    category: "performance",
  },
  {
    id: "category-growth",
    title: "Category growth advisor",
    description:
      "Shows which categories are rising, slowing or ready for support.",
    category: "growth",
  },
  {
    id: "brand-opportunity",
    title: "Brand Opportunity Finder",
    description:
      "Highlights brands that can grow faster with DOOH, audio or mobile activation.",
    category: "growth",
  },
  {
    id: "audience-missions",
    title: "Audience and Missions Decoder",
    description:
      "Reveals who the shopper is, what they are doing and how they move through the store.",
    category: "audience",
  },
  {
    id: "traffic-forecast",
    title: "Traffic and Visits Forecaster",
    description:
      "Predicts visits and daypart trends so teams can plan with confidence.",
    category: "performance",
  },
  {
    id: "campaign-impact",
    title: "Campaign Impact Reviewer",
    description:
      "Breaks down how media exposure changed sales, visits and shopper behaviour.",
    category: "performance",
  },
  {
    id: "pricing-promo",
    title: "Price and Promotion Interpreter",
    description:
      "Explains how shoppers respond to pricing and where margin gains are possible.",
    category: "pricing",
  },
  {
    id: "store-clusters",
    title: "Store Cluster Recommender",
    description:
      "Groups stores with similar patterns so teams can target smarter.",
    category: "performance",
  },
  {
    id: "exec-summary",
    title: "Executive Summary Generator",
    description:
      "Delivers a weekly snapshot of what improved, what declined and what to do next.",
    category: "executive",
  },
];

const formSchema = z.object({
  prompt: z.string().min(1, "Prompt is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiInsights() {
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

    setAiResponse(`Store performance is mixed this period.
      
      Traffic is up 2.8%, driven by stronger afternoon visits.
     
      Trip conversion is down 0.4%, meaning more shoppers left without purchasing.
      
      Units per transaction declined slightly, showing weaker impulse attachment.
     
      Sales dollars rose 1.3% due to higher average selling price.
      
      Gross profit declined 8% from cost pressure and heavier promotions.
     
      Inventory on hand increased 2.2%, signaling slower sell-through.
      
      Focus on improving attachment in weaker stores, tightening promotions, and reducing slow-moving items to lift margin next period.
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
    <div className="flex flex-col gap-4 md:gap-9 max-w-full md:max-w-300 md:mx-auto px-1 md:px-4">
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
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[96%] mx-auto"
        >
          {PRE_BUILT_PROMPTS.map((prompt) => (
            <div
              key={prompt.id}
              onClick={() => handleSuggestionClick(prompt)}
              className="card ai-prompt-box cursor-pointer transition-shadow hover:shadow-lg"
            >
              <span className="font-semibold text-primary text-[20px]">
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
