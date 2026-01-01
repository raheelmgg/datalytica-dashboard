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

const DEFAULT_TITLE = "Welcome Joan, what insight can we unlock today?";

const PRE_BUILT_PROMPTS: PreBuiltPrompt[] = [
  {
    id: "inventory-availability-finder",
    title: "Inventory availability finder",
    description: "Shows available inventory by market, network, or location.",
    category: "executive",
  },
  {
    id: "budget-date-planner",
    title: "Budget and date planner",
    description: "Builds a plan based on budget, location, and campaign dates.",
    category: "executive",
  },
  {
    id: "objective-based-plan-builder",
    title: "Objective based plan builder",
    description:
      "Creates a plan aligned to awareness, conversion, or store visit lift.",
    category: "executive",
  },
  {
    id: "reach-frequency-optimizer",
    title: "Reach and frequency optimizer",
    description:
      "Optimizes reach and frequency to reduce waste and extend coverage.",
    category: "Analyst",
  },
  {
    id: "performance-forecast-risk-checker",
    title: "Performance forecast and risk checker",
    description: "Forecasts delivery and flags risks before a plan goes live.",
    category: "Analyst ",
  },
  {
    id: "network-location-tradeoff-advisor",
    title: "Network and location trade off advisor",
    description:
      "Compares spend options to show the best network and location mix.",
    category: "Analyst",
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

    setAiResponse(`The performance forecast indicates the proposed plan is positioned to deliver consistent coverage across the selected markets and campaign period, with delivery pacing aligned to historical network performance and seasonal traffic patterns. Forecasted impressions are concentrated in high reliability locations, supporting stable reach accumulation and reduced volatility throughout the flight.

Risk analysis highlights two primary considerations. First, a portion of inventory in high demand urban locations shows tighter availability during peak weekday periods, increasing the likelihood of delivery compression if campaign dates are shortened or budgets are increased late in the planning cycle. Second, frequency concentration begins to rise in smaller markets toward the end of the flight, suggesting diminishing incremental reach beyond the current allocation.

Reach and frequency modelling indicates the plan achieves balanced exposure during the core campaign window, with strongest efficiency in the first two thirds of the flight. Extending spend evenly rather than front loading improves consistency and lowers the risk of early saturation. Network mix analysis confirms performance is driven by a complementary blend of high traffic and contextual locations rather than reliance on a single network.

From a planning perspective, the forecast supports proceeding with the current structure while monitoring availability in constrained markets. Adjusting budgets between networks or extending flight dates would further reduce risk and improve delivery confidence before launch.`);
  };

  const onSubmit = (values: FormValues) => {
    setMode("active");

    // Simulated AI response (replace with real API later)
    setAiResponse(`The performance forecast indicates the proposed plan is positioned to deliver consistent coverage across the selected markets and campaign period, with delivery pacing aligned to historical network performance and seasonal traffic patterns. Forecasted impressions are concentrated in high reliability locations, supporting stable reach accumulation and reduced volatility throughout the flight.

Risk analysis highlights two primary considerations. First, a portion of inventory in high demand urban locations shows tighter availability during peak weekday periods, increasing the likelihood of delivery compression if campaign dates are shortened or budgets are increased late in the planning cycle. Second, frequency concentration begins to rise in smaller markets toward the end of the flight, suggesting diminishing incremental reach beyond the current allocation.

Reach and frequency modelling indicates the plan achieves balanced exposure during the core campaign window, with strongest efficiency in the first two thirds of the flight. Extending spend evenly rather than front loading improves consistency and lowers the risk of early saturation. Network mix analysis confirms performance is driven by a complementary blend of high traffic and contextual locations rather than reliance on a single network.

From a planning perspective, the forecast supports proceeding with the current structure while monitoring availability in constrained markets. Adjusting budgets between networks or extending flight dates would further reduce risk and improve delivery confidence before launch.`);

    console.log("Submitted prompt:", values.prompt);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-9 max-w-full md:mx-auto px-1 md:px-4">
      <div className="flex flex-col md:flex-row items-center w-full">
        <h2
          id="chatName"
          className="text-xl md:text-[30px] font-semibold text-white text-center flex-1"
        >
          {chatTitle}
        </h2>
        {chatTitle !== DEFAULT_TITLE && (
          <div className="mr-auto md:ml-auto flex items-center gap-2">
            {/* <Button className="px-10 py-2">Full Report</Button> */}
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
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:max-w-300 mx-auto mt-auto"
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
