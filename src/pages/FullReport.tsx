import BrandLogo from ".././assets/Datalytica-logo-white.png";
import datalyticaLogo from ".././assets/datalytica-logo.png";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  ageData,
  distanceFromHomeData,
  distanceFromWorkData,
  educationLevelData,
  employmentData,
  ethnicityData,
  householdIncomeData,
  pointsOfInterestData,
  top10HouseholdFSAData,
  top10WorkFSAData,
  top20WorkCitiesData,
  visitationIndexData,
  visitationIndexConfig,
  visitsByDayOfWeekData,
  visitsByTimeOfDayData,
} from "@/data/fullReportChartData";

type Props = {};

function FullReport({}: Props) {
  return (
    <div className="bg-primary-bg w-full min-h-screen py-8 px-4 md:py-12 md:px-10">
      <div className="my-container">
        {/* Head */}
        <div className="flex flex-col gap-4 md:gap-y-14">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row gap-4 md:gap-9 items-center">
              <img
                src={BrandLogo}
                alt="Brand Name"
                className="w-full max-w-32 md:max-w-52 h-auto"
              />
              <div className="text-white flex flex-col gap-1">
                <span className="md:text-[20px] text-[16px] leading-tight text-center md:text-left">
                  Premium location performance report
                </span>
                <h3 className="font-semibold md:text-[28px] text-[20px] leading-tight text-center md:text-left">
                  Walmart Supercenter - 900 Dufferin St. Toronto, On
                </h3>
              </div>
            </div>
            <div>
              <img
                src={datalyticaLogo}
                alt="datalyticaLogo"
                className="w-full md:max-w-30 h-auto"
              />
            </div>
          </div>
          {/* sub head */}
          <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4 md:gap-8 mt-5 md:mt-0">
            {/* Left */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 w-full">
              <span className="text-white text-[17px] md:text-[20px] leading-none whitespace-nowrap">
                Date of study
              </span>

              <div className="stat-pill w-full md:max-w-[600px]!">
                <span className="text-white text-[20px] md:text-[26px] leading-none font-semibold">
                  Jan 30, 2025 – Aug 1, 2025
                </span>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col md:flex-row items-center gap-5 w-full">
              <span className="text-white text-[17px] md:text-[20px] leading-none whitespace-nowrap">
                Devices seen in the study
              </span>

              <div className="stat-pill w-full md:max-w-[400px]!">
                <span className="text-white text-[20px] md:text-[26px] leading-none font-semibold">
                  16,117
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Area */}
        <div className="mt-5 md:mt-10 flex flex-col gap-y-8">
          {/* Full Chart */}
          <div className="flex flex-col gap-y-2">
            <span className="text-white text-[16px] md:text-[18px] leading-tight">
              Visitation index
            </span>
            <div className="card">
              {/* Full LineChart */}
              <FullLinechart
                chartData={visitationIndexData}
                chartConfig={visitationIndexConfig}
              />
            </div>
          </div>
          {/* 2 col charts */}
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Visits by day of week
              </span>
              <div className="card">
                <VisitsByDayOfWeekChart data={visitsByDayOfWeekData} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Visits by time of day
              </span>
              <div className="card">
                <VisitsByTimeOfDayChart data={visitsByTimeOfDayData} />
              </div>
            </div>
          </div>
          {/* 2 col charts */}
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Distance from home to location
              </span>
              <div className="card">
                <DistancePieChart data={distanceFromHomeData} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Distance from work to location
              </span>
              <div className="card">
                <DistancePieChart data={distanceFromWorkData} />
              </div>
            </div>
          </div>
          {/* 2 col charts */}
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Top 10 work FSA{" "}
              </span>
              <div className="card">
                <FSABarChart data={top10WorkFSAData} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Top 10 household FSA
              </span>
              <div className="card">
                <FSABarChart data={top10HouseholdFSAData} />
              </div>
            </div>
          </div>
          {/* 2 col charts */}
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Top 20 work cities
              </span>
              <div className="card">
                <CitiesList data={top20WorkCitiesData} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2  justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <span className="text-white text-[16px] md:text-[18px] leading-tight">
                  Median HH income
                </span>
                <div className="card">
                  <span className="text-[28px] md:text-[40px] leading-tight text-center text-white font-semibold">
                    $ 41,147.06
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-white text-[16px] md:text-[18px] leading-tight">
                  Median home value
                </span>
                <div className="card">
                  <span className="text-[28px] md:text-[40px] leading-tight text-center text-white font-semibold">
                    $ 716,953.49
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 2 col charts */}
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Age
              </span>
              <div className="card">
                <AgePieChart data={ageData} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Ethnicity
              </span>
              <div className="card">
                <EthnicityPieChart data={ethnicityData} />
              </div>
            </div>
          </div>
          {/* 2 col charts */}
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Employment
              </span>
              <div className="card">
                <EmploymentPieChart data={employmentData} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full h-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Education level
              </span>
              <div className="card">
                <EducationLevelBarChart data={educationLevelData} />
              </div>
            </div>
          </div>
          {/* 2 col charts */}
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Household income
              </span>
              <div className="card">
                <HouseholdIncomeBarChart data={householdIncomeData} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <span className="text-white text-[16px] md:text-[18px] leading-tight">
                Points of interest
              </span>
              <div className="card">
                <PointsOfInterestTable data={pointsOfInterestData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullReport;

function FullLinechart({ chartData, chartConfig }: any) {
  return (
    <div className="">
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[250px] md:h-[350px] w-full"
      >
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="fillPink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E61E5C" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#E61E5C" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} strokeOpacity={0.15} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={16}
            tick={{ fill: "#A1A1AA", fontSize: 10 }}
            className="md:text-xs"
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={12}
            domain={[0, 30]}
            ticks={[0, 5, 10, 15, 20, 25, 30]}
            tick={{ fill: "#A1A1AA", fontSize: 12 }}
            width={30}
          />

          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                labelFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }
                indicator="dot"
              />
            }
          />
          <Area
            dataKey="value"
            stroke="#E61E5C"
            strokeWidth={2}
            fill="url(#fillPink)"
            dot={false}
            isAnimationActive={true}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}

function VisitsByDayOfWeekChart({ data }: { data: any[] }) {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Visits",
          color: "#E61E5C",
        },
      }}
      className="aspect-auto h-[250px] md:h-[300px] w-full"
    >
      <BarChart data={data} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeOpacity={0.15} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#A1A1AA", fontSize: 12 }}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#A1A1AA", fontSize: 12 }}
          domain={[0, 25]}
          ticks={[0, 5, 10, 15, 20, 25]}
          tickFormatter={(value) => `${value}%`}
          width={30}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey="value" fill="#E61E5C" radius={[4, 4, 0, 0]} isAnimationActive={true} />
      </BarChart>
    </ChartContainer>
  );
}

function VisitsByTimeOfDayChart({ data }: { data: any[] }) {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Visits",
          color: "#E61E5C",
        },
      }}
      className="aspect-auto h-[250px] md:h-[300px] w-full"
    >
      <BarChart data={data} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeOpacity={0.15} />
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#A1A1AA", fontSize: 12 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#A1A1AA", fontSize: 12 }}
          domain={[0, 8]}
          ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          tickFormatter={(value) => `${value}%`}
          width={30}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey="value" fill="#E61E5C" radius={[4, 4, 0, 0]} isAnimationActive={true} />
      </BarChart>
    </ChartContainer>
  );
}

function DistancePieChart({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 min-h-[300px] md:h-[450px]">
      <ChartContainer
        config={{
          value: {
            label: "Percentage",
            color: "#E61E5C",
          },
        }}
        className="h-[250px] w-[250px] md:h-[400px] md:w-[400px] max-w-full"
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || "#E61E5C"} />
            ))}
          </Pie>
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatter={(value: any) => `${value}%`}
                indicator="dot"
              />
            }
          />
        </PieChart>
      </ChartContainer>
      <div className="flex flex-col gap-2 md:gap-3 text-white text-xs md:text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-3">
            <div
              className="w-3 h-3 md:w-4 md:h-4 rounded-full shrink-0"
              style={{ backgroundColor: item.color || "#E61E5C" }}
            />
            <span className="text-sm md:text-base">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FSABarChart({ data }: { data: any[] }) {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Percentage",
          color: "#E61E5C",
        },
      }}
      className="aspect-auto h-[250px] md:h-[300px] w-full"
    >
      <BarChart data={data} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeOpacity={0.15} />
        <XAxis
          dataKey="fsa"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#A1A1AA", fontSize: 10 }}
          className="md:text-xs"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#A1A1AA", fontSize: 12 }}
          domain={[0, 21]}
          ticks={[0, 3, 6, 9, 12, 15, 18, 21]}
          tickFormatter={(value) => `${value}%`}
          width={30}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey="value" fill="#E61E5C" radius={[4, 4, 0, 0]} isAnimationActive={true} />
      </BarChart>
    </ChartContainer>
  );
}

function CitiesList({ data }: { data: any[] }) {
  return (
    <div className="h-[245px] overflow-y-auto scrollbar pr-5 md:pr-10">
      <div>
        <span className="text-primary text-md font-semibold leading-tight flex justify-end mb-2">
          Visitor %
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-end items-center text-white py-1 gap-x-10"
          >
            <span className="text-md">{item.city}</span>
            <span className="text-md">{item.visitorPercent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgePieChart({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 min-h-[300px] md:h-[400px]">
        <ChartContainer
          config={{
            value: {
              label: "Percentage",
              color: "#E61E5C",
            },
          }}
          className="h-[250px] w-[250px] md:h-[360px] md:w-[360px] max-w-full"
        >
          <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="70%"
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || "#E61E5C"} />
              ))}
            </Pie>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value: any) => `${value}%`}
                  indicator="dot"
                />
              }
            />
          </PieChart>
        </ChartContainer>
      <div className="flex flex-col gap-1.5 md:gap-2 text-white text-xs md:text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: item.color || "#E61E5C" }}
            />
            <span className="text-sm md:text-base">{item.ageRange}</span>
            {/* <span className="font-semibold">{item.value}%</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

function EthnicityPieChart({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 min-h-[300px] md:h-[400px]">
      <ChartContainer
        config={{
          value: {
            label: "Percentage",
            color: "#E61E5C",
          },
        }}
        className="h-[250px] w-[250px] md:h-[360px] md:w-[360px] max-w-full"
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || "#E61E5C"} />
            ))}
          </Pie>
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatter={(value: any) => `${value}%`}
                indicator="dot"
              />
            }
          />
        </PieChart>
      </ChartContainer>
      <div className="flex flex-col gap-1.5 md:gap-2 text-white text-xs md:text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: item.color || "#E61E5C" }}
            />
            <span className="text-sm md:text-base">{item.ethnicity}</span>
            {/* <span className="font-semibold">{item.value}%</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

function EmploymentPieChart({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 min-h-[300px] md:h-[400px]">
      <ChartContainer
        config={{
          value: {
            label: "Percentage",
            color: "#E61E5C",
          },
        }}
        className="h-[250px] w-[250px] md:h-[360px] md:w-[360px] max-w-full"
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || "#E61E5C"} />
            ))}
          </Pie>
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatter={(value: any) => `${value}%`}
                indicator="dot"
              />
            }
          />
        </PieChart>
      </ChartContainer>
      <div className="flex flex-col gap-1.5 md:gap-2 text-white text-xs md:text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: item.color || "#E61E5C" }}
            />
            <span className="text-sm md:text-base">{item.employment}</span>
            {/* <span className="font-semibold">{item.value}%</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationLevelBarChart({ data }: { data: any[] }) {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Percentage",
          color: "#E61E5C",
        },
      }}
      className="aspect-auto h-[250px] md:h-[300px] w-full"
    >
      <BarChart data={data} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeOpacity={0.15} />
        <XAxis
          dataKey="education"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#A1A1AA", fontSize: 10 }}
          className="md:text-xs"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#A1A1AA", fontSize: 12 }}
          domain={[0, 60]}
          ticks={[0, 10, 20, 30, 40, 50, 60]}
          tickFormatter={(value) => `${value}%`}
          width={30}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey="value" fill="#E61E5C" radius={[4, 4, 0, 0]} isAnimationActive={true} />
      </BarChart>
    </ChartContainer>
  );
}

function HouseholdIncomeBarChart({ data }: { data: any[] }) {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Percentage",
          color: "#E61E5C",
        },
      }}
      className="aspect-auto h-[250px] md:h-[300px] w-full"
    >
      <BarChart data={data} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeOpacity={0.15} />
        <XAxis
          dataKey="incomeRange"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#A1A1AA", fontSize: 10 }}
          className="md:text-xs"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#A1A1AA", fontSize: 12 }}
          domain={[0, 40]}
          ticks={[0, 10, 20, 30, 40]}
          tickFormatter={(value) => `${value}%`}
          width={30}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey="value" fill="#E61E5C" radius={[4, 4, 0, 0]} isAnimationActive={true} />
      </BarChart>
    </ChartContainer>
  );
}

function PointsOfInterestTable({ data }: { data: any[] }) {
  return (
    <div className="h-[300px] overflow-y-auto scrollbar pr-5 md:pr-10">
      <div className="flex flex-col gap-2">
        <div className="flex justify-end gap-x-20">
          {/* <span>Name</span> */}
          <span className="text-primary text-md font-semibold leading-tight">
            Before
          </span>
          <span className="text-primary text-md font-semibold leading-tight">
            After
          </span>
        </div>
        {data.map((item, index) => (
          <div key={index} className="flex justify-end gap-x-20 text-white">
            <span className="text-sm">{item.poi}</span>
            <span className="text-sm">{item.before}%</span>
            <span className="text-sm">{item.after}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
