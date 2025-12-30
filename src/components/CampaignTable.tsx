import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";

type CampaignStatus = "Active" | "Completed" | "Saved";

type Campaign = {
  name: string;
  status: CampaignStatus;
  startDate: string;
  endDate: string;
  mediaUnits: number;
  budgetPlanned: number;
  budgetSpent?: number;
  impressionsEstimated: number;
  impressionsDelivered: number;
};

const campaigns: Campaign[] = [
  {
    name: "Toronto Winter Commuter Reach",
    status: "Active",
    startDate: "1 dec, 25",
    endDate: "15 jan, 26",
    mediaUnits: 1240,
    budgetPlanned: 250000,
    budgetSpent: 148500,
    impressionsEstimated: 12.5,
    impressionsDelivered: 7.4,
  },
  {
    name: "Montréal Urban Retail Momentum + Mobile",
    status: "Active",
    startDate: "1 dec, 25",
    endDate: "15 jan, 26",
    mediaUnits: 1240,
    budgetPlanned: 310000,
    budgetSpent: 176800,
    impressionsEstimated: 17.9,
    impressionsDelivered: 10.9,
  },
  {
    name: "Canadian Airport Holiday Traveller Push",
    status: "Completed",
    startDate: "15 nov, 25",
    endDate: "20 dec, 25",
    mediaUnits: 860,
    budgetPlanned: 180000,
    budgetSpent: 180000,
    impressionsEstimated: 8.9,
    impressionsDelivered: 9.1,
  },
  {
    name: "National Convenience Store Awareness Canada + Mobile",
    status: "Completed",
    startDate: "15 nov, 25",
    endDate: "20 dec, 25",
    mediaUnits: 860,
    budgetPlanned: 235000,
    budgetSpent: 235000,
    impressionsEstimated: 13.6,
    impressionsDelivered: 14.1,
  },
  {
    name: "Los Angeles Morning Drive Reach",
    status: "Active",
    startDate: "1 jan, 26",
    endDate: "31 jan, 26",
    mediaUnits: 640,
    budgetPlanned: 120000,
    budgetSpent: 36200,
    impressionsEstimated: 6.2,
    impressionsDelivered: 1.9,
  },
  {
    name: "Los Angeles Retail Retargeting Extension + Mobile",
    status: "Active",
    startDate: "1 jan, 26",
    endDate: "31 jan, 26",
    mediaUnits: 640,
    budgetPlanned: 155000,
    budgetSpent: 48200,
    impressionsEstimated: 9.8,
    impressionsDelivered: 3.4,
  },
  {
    name: "New York Transit Commuter Impact",
    status: "Saved",
    startDate: "1 feb, 26",
    endDate: "31 mar, 26",
    mediaUnits: 2450,
    budgetPlanned: 500000,
    impressionsEstimated: 24.0,
    impressionsDelivered: 0,
  },
  {
    name: "Q1 Brand Awareness Canada + Mobile",
    status: "Saved",
    startDate: "1 feb, 26",
    endDate: "31 mar, 26",
    mediaUnits: 2450,
    budgetPlanned: 650000,
    impressionsEstimated: 38.5,
    impressionsDelivered: 0,
  },
  {
    name: "New York Grocery Shopper Lift + Mobile",
    status: "Completed",
    startDate: "1 sep, 25",
    endDate: "30 sep, 25",
    mediaUnits: 290,
    budgetPlanned: 75000,
    budgetSpent: 75000,
    impressionsEstimated: 3.6,
    impressionsDelivered: 3.7,
  },
  {
    name: "Chicago C-store Push",
    status: "Completed",
    startDate: "1 sep, 25",
    endDate: "30 sep, 25",
    mediaUnits: 290,
    budgetPlanned: 95000,
    budgetSpent: 95000,
    impressionsEstimated: 5.9,
    impressionsDelivered: 6.2,
  },
  {
    name: "LA C-Store Reach + Mobile",
    status: "Active",
    startDate: "10 dec, 25",
    endDate: "20 jan, 26",
    mediaUnits: 980,
    budgetPlanned: 185000,
    budgetSpent: 89600,
    impressionsEstimated: 9.1,
    impressionsDelivered: 4.3,
  },
  {
    name: "Multi City Grocery Store Network Expansion",
    status: "Active",
    startDate: "10 dec, 25",
    endDate: "20 jan, 26",
    mediaUnits: 980,
    budgetPlanned: 240000,
    budgetSpent: 112300,
    impressionsEstimated: 14.8,
    impressionsDelivered: 7.0,
  },
];

export default function CampaignTable() {
  // const statusStyles: Record<CampaignStatus, string> = {
  //   Active: "bg-emerald-500/15 text-emerald-400",
  //   Completed: "bg-sky-500/15 text-sky-400",
  //   Saved: "bg-muted text-black",
  // };

  return (
    <div className="relative ">
      <Table className="text-white">
        <TableHeader className="">
          {/* ROW 1 */}
          <TableRow>
            <TableHead
              rowSpan={2}
              className="w-[320px] bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md align-middle text-white"
            >
              Campaign name
            </TableHead>

            <TableHead
              rowSpan={2}
              className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md align-middle"
            >
              Status
            </TableHead>

            <TableHead
              rowSpan={2}
              className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md align-middle"
            >
              Start date
            </TableHead>

            <TableHead
              rowSpan={2}
              className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md align-middle"
            >
              End date
            </TableHead>

            <TableHead
              rowSpan={2}
              className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md align-middle text-center"
            >
              Media units
            </TableHead>

            <TableHead
              colSpan={2}
              className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md text-center text-sm text-muted-foreground"
            >
              Budget
            </TableHead>

            <TableHead
              colSpan={3}
              className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md text-center text-sm text-muted-foreground"
            >
              Impressions
            </TableHead>
          </TableRow>

          {/* ROW 2 */}
          <TableRow>
            <TableHead className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md text-center text-xs uppercase tracking-wide">
              Planned
            </TableHead>

            <TableHead className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md text-center text-xs uppercase tracking-wide">
              Spend to date
            </TableHead>

            <TableHead className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md text-center text-xs uppercase tracking-wide">
              Estimated
            </TableHead>

            <TableHead className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md text-center text-xs uppercase tracking-wide">
              Delivered
            </TableHead>

            <TableHead className="bg-[#3F3D48] border-4 border-[#2E2C38] rounded-md text-center text-xs uppercase tracking-wide">
              %
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {campaigns.map((c) => {
            const percent =
              c.impressionsEstimated > 0
                ? Math.round(
                    (c.impressionsDelivered / c.impressionsEstimated) * 100
                  )
                : 0;

            return (
              <TableRow key={c.name} className="">
                <TableCell className="border-2 border-[#3F3D48]">
                  {c.name}
                </TableCell>

                {/* <TableCell className="bg-[#2E2C38] border-2 border-[#3F3D48]">
                  <Badge className={statusStyles[c.status]}>{c.status}</Badge>
                </TableCell> */}

                <TableCell className="border-2 border-[#3F3D48]">
                  {c.status}
                </TableCell>
                <TableCell className="border-2 border-[#3F3D48]">
                  {c.startDate}
                </TableCell>
                <TableCell className="border-2 border-[#3F3D48]">
                  {c.endDate}
                </TableCell>

                <TableCell className="text-center border-2 border-[#3F3D48]">
                  {c.mediaUnits.toLocaleString()}
                </TableCell>

                <TableCell className="text-center border-2 border-[#3F3D48]">
                  $ {c.budgetPlanned.toLocaleString()}
                </TableCell>

                <TableCell className="text-center border-2 border-[#3F3D48]">
                  {c.budgetSpent
                    ? `$ ${c.budgetSpent.toLocaleString()}`
                    : "$ -"}
                </TableCell>

                <TableCell className="text-center border-2 border-[#3F3D48]">
                  {c.impressionsEstimated.toFixed(1)} M
                </TableCell>

                <TableCell className="text-center border-2 border-[#3F3D48]">
                  {c.impressionsDelivered.toFixed(1)} M
                </TableCell>
                <TableCell className="text-center border-2 border-[#3F3D48]">
                  {percent}
                </TableCell>

                {/* <TableCell
                  className={cn(
                    "text-center font-semibold border-2 border-[#3F3D48]",
                    percent >= 100
                      ? "text-emerald-400"
                      : percent >= 60
                      ? "text-amber-400"
                      : "text-rose-400"
                  )}
                >
                  {percent} %
                </TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
