"use client"

import * as React from "react"
import { type DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarRange() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 12, 15),
    to: new Date(2026, 1, 30),
  });

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <Calendar
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        min={2}
        max={30}
        className="rounded-lg border shadow-sm"
      />
      <div className="sr-only text-muted-foreground text-center text-xs">
        Your stay must be between 2 and 20 nights
      </div>
    </div>
  );
}
