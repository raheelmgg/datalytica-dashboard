import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
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
    id: "client-executive-summary",
    title: "Client executive summary",
    description:
      "Summarizes key results, notable changes, and performance drivers to support client reviews.",
    category: "executive",
  },
  {
    id: "cross-channel-performance",
    title: "Cross channel performance",
    description:
      "Provides a unified view of performance across paid media, analytics, and ecommerce data.",
    category: "executive",
  },
  {
    id: "attribution-outcome-analysis",
    title: "Attribution and outcome analysis",
    description:
      "Connects media exposure to outcomes, including offline results when client data exists.",
    category: "executive",
  },
  {
    id: "campaign-pacing-spend",
    title: "Campaign pacing and spend",
    description:
      "Tracks spend and delivery pacing to surface risks and issues before they impact clients.",
    category: "Analyst",
  },
  {
    id: "channel-contribution-analysis",
    title: "Channel contribution analysis",
    description:
      "Shows how each channel contributes to outcomes, helping explain performance in context.",
    category: "Analyst",
  },
  {
    id: "conversion-funnel-analysis",
    title: "Conversion and funnel analysis",
    description:
      "Analyzes conversion behavior across channels to identify drop offs and efficiency gaps.",
    category: "Analyst",
  },
  {
    id: "ecommerce-performance-summary",
    title: "Ecommerce performance summary",
    description:
      "Connects media performance to revenue, transactions, and product level outcomes.",
    category: "Analyst",
  },
  {
    id: "audience-geography-insights",
    title: "Audience and geography insights",
    description:
      "Breaks down performance by audience segments and geographic markets for deeper context.",
    category: "Analyst",
  },
  {
    id: "trend-period-comparison",
    title: "Trend and period comparison",
    description:
      "Compares performance across time periods to identify shifts, patterns, and anomalies.",
    category: "Analyst",
  },
];

const formSchema = z.object({
  prompt: z.string().min(1, "Prompt is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Marketing() {
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

    setAiResponse(`Cross channel performance this period shows results being driven by a combination of paid media efficiency, audience alignment, and downstream ecommerce behaviour rather than reliance on a single channel. Performance is strongest where channels work together, with paid media driving initial engagement, analytics data confirming sustained interest, and ecommerce activity reflecting follow through and conversion.

Paid search and paid social continue to generate the highest volume of engagement, while display and video contribute incremental reach and assist earlier stage consideration. Analytics data indicates that users exposed across multiple channels demonstrate longer session duration and higher repeat visit rates compared to single channel exposure. This pattern suggests cumulative impact rather than channel substitution.

Ecommerce performance aligns closely with cross channel exposure. Transactions and revenue are higher among users reached across two or more channels, with stronger conversion rates and higher average order value. Single channel exposure shows weaker conversion efficiency and lower downstream value.

From an executive perspective, this view confirms that performance is being driven by channel coordination rather than isolated execution. Maintaining balanced investment across channels, with attention to how they reinforce one another, supports more consistent outcomes and reduces dependence on any single platform.
  `);
  };

  const onSubmit = (values: FormValues) => {
    setMode("active");

    // Simulated AI response (replace with real API later)
    setAiResponse(`Cross channel performance this period shows results being driven by a combination of paid media efficiency, audience alignment, and downstream ecommerce behaviour rather than reliance on a single channel. Performance is strongest where channels work together, with paid media driving initial engagement, analytics data confirming sustained interest, and ecommerce activity reflecting follow through and conversion.

Paid search and paid social continue to generate the highest volume of engagement, while display and video contribute incremental reach and assist earlier stage consideration. Analytics data indicates that users exposed across multiple channels demonstrate longer session duration and higher repeat visit rates compared to single channel exposure. This pattern suggests cumulative impact rather than channel substitution.

Ecommerce performance aligns closely with cross channel exposure. Transactions and revenue are higher among users reached across two or more channels, with stronger conversion rates and higher average order value. Single channel exposure shows weaker conversion efficiency and lower downstream value.

From an executive perspective, this view confirms that performance is being driven by channel coordination rather than isolated execution. Maintaining balanced investment across channels, with attention to how they reinforce one another, supports more consistent outcomes and reduces dependence on any single platform.
  `);

    console.log("Submitted prompt:", values.prompt);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-9 max-w-full md:mx-auto px-1 md:px-4">
      <div className="flex flex-col md:flex-row items-center w-full gap-y-4">
        <h2
          id="chatName"
          className="text-xl md:text-[30px] font-semibold text-white text-center flex-1"
        >
          {chatTitle}
        </h2>
        {chatTitle !== DEFAULT_TITLE && (
          <div className="ml-auto  flex items-center gap-2">
            <Button
              className="px-10 py-2"
              onClick={() => window.open("/full-report", "_blank")}
            >
              Full Report
            </Button>
            <button
              type="button"
              onClick={() => {
                setMode("idle");
                setAiResponse(null);
                setChatTitle(DEFAULT_TITLE);
                form.reset();
              }}
              className="p-1.5 bg-white rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <XIcon className="w-full max-w-4 h-4 md:max-w-5 md:h-5 text-black" />
            </button>
          </div>
        )}
      </div>
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
