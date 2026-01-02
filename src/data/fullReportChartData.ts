import type { ChartConfig } from "@/components/ui/chart";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface VisitationIndexDataPoint {
  date: string;
  value: number;
}

export interface DayOfWeekDataPoint {
  day: string;
  value: number; // percentage
}

export interface TimeOfDayDataPoint {
  time: string;
  value: number; // percentage
}

export interface DistanceDataPoint {
  label: string;
  value: number; // percentage
  color?: string;
}

export interface FSADataPoint {
  fsa: string;
  value: number; // percentage
}

export interface CityDataPoint {
  city: string;
  visitorPercent: number;
}

export interface AgeDataPoint {
  ageRange: string;
  value: number; // percentage
  color?: string;
}

export interface EthnicityDataPoint {
  ethnicity: string;
  value: number; // percentage
  color?: string;
}

export interface EmploymentDataPoint {
  employment: string;
  value: number; // percentage
  color?: string;
}

export interface EducationDataPoint {
  education: string;
  value: number; // percentage
}

export interface HouseholdIncomeDataPoint {
  incomeRange: string;
  value: number; // percentage
}

export interface PointsOfInterestDataPoint {
  poi: string;
  before: number; // percentage
  after: number; // percentage
}

// ============================================================================
// CHART CONFIGS
// ============================================================================

export const visitationIndexConfig: ChartConfig = {
  value: {
    label: "Visitation Index",
    color: "#E61E5C",
  },
} satisfies ChartConfig;

// ============================================================================
// CHART DATA
// ============================================================================

export const visitationIndexData: VisitationIndexDataPoint[] = [
  { date: "2025-01-31", value: 2 },
  { date: "2025-02-01", value: 3 },
  { date: "2025-02-02", value: 2 },
  { date: "2025-02-03", value: 4 },
  { date: "2025-02-04", value: 3 },
  { date: "2025-02-05", value: 4 },
  { date: "2025-02-06", value: 5 },
  { date: "2025-02-07", value: 4 },
  { date: "2025-02-08", value: 6 },
  { date: "2025-02-09", value: 5 },
  { date: "2025-02-10", value: 6 },
  { date: "2025-02-11", value: 5 },
  { date: "2025-02-12", value: 4 },
  { date: "2025-02-13", value: 5 },
  { date: "2025-02-14", value: 4 },
  { date: "2025-02-15", value: 4 },
  { date: "2025-02-16", value: 5 },
  { date: "2025-02-17", value: 4 },
  { date: "2025-02-18", value: 6 },
  { date: "2025-02-19", value: 5 },
  { date: "2025-02-20", value: 5 },
  { date: "2025-02-21", value: 4 },
  { date: "2025-02-22", value: 5 },
  { date: "2025-02-23", value: 4 },
  { date: "2025-02-24", value: 5 },
  { date: "2025-02-25", value: 4 },

  { date: "2025-03-01", value: 4 },
  { date: "2025-03-02", value: 3 },
  { date: "2025-03-03", value: 4 },
  { date: "2025-03-04", value: 3 },
  { date: "2025-03-05", value: 3 },
  { date: "2025-03-06", value: 4 },
  { date: "2025-03-07", value: 3 },
  { date: "2025-03-08", value: 4 },
  { date: "2025-03-09", value: 3 },
  { date: "2025-03-10", value: 4 },
  { date: "2025-03-11", value: 3 },
  { date: "2025-03-12", value: 4 },
  { date: "2025-03-13", value: 3 },
  { date: "2025-03-14", value: 4 },
  { date: "2025-03-15", value: 3 },
  { date: "2025-03-16", value: 4 },
  { date: "2025-03-17", value: 3 },
  { date: "2025-03-18", value: 4 },
  { date: "2025-03-19", value: 3 },
  { date: "2025-03-20", value: 4 },
  { date: "2025-03-21", value: 3 },
  { date: "2025-03-22", value: 4 },
  { date: "2025-03-23", value: 3 },
  { date: "2025-03-24", value: 4 },
  { date: "2025-03-25", value: 3 },

  { date: "2025-04-01", value: 4 },
  { date: "2025-04-02", value: 5 },
  { date: "2025-04-03", value: 4 },
  { date: "2025-04-04", value: 6 },
  { date: "2025-04-05", value: 4 },
  { date: "2025-04-06", value: 5 },
  { date: "2025-04-07", value: 6 },
  { date: "2025-04-08", value: 5 },
  { date: "2025-04-09", value: 4 },
  { date: "2025-04-10", value: 3 },
  { date: "2025-04-11", value: 4 },
  { date: "2025-04-12", value: 5 },
  { date: "2025-04-13", value: 6 },
  { date: "2025-04-14", value: 4 },
  { date: "2025-04-15", value: 5 },
  { date: "2025-04-16", value: 6 },
  { date: "2025-04-17", value: 5 },
  { date: "2025-04-18", value: 6 },
  { date: "2025-04-19", value: 7 },
  { date: "2025-04-20", value: 7 },
  { date: "2025-04-21", value: 6 },
  { date: "2025-04-22", value: 7 },
  { date: "2025-04-23", value: 8 },
  { date: "2025-04-24", value: 8 },
  { date: "2025-04-25", value: 9 },

  { date: "2025-05-01", value: 6 },
  { date: "2025-05-02", value: 8 },
  { date: "2025-05-03", value: 7 },
  { date: "2025-05-04", value: 10 },
  { date: "2025-05-05", value: 12 },
  { date: "2025-05-06", value: 9 },
  { date: "2025-05-07", value: 6 },
  { date: "2025-05-08", value: 8 },
  { date: "2025-05-09", value: 7 },
  { date: "2025-05-10", value: 5 },
  { date: "2025-05-11", value: 6 },
  { date: "2025-05-12", value: 7 },
  { date: "2025-05-13", value: 9 },
  { date: "2025-05-14", value: 11 },
  { date: "2025-05-15", value: 28 }, // main spike
  { date: "2025-05-16", value: 15 },
  { date: "2025-05-17", value: 9 },
  { date: "2025-05-18", value: 14 },
  { date: "2025-05-19", value: 10 },
  { date: "2025-05-20", value: 16 },
  { date: "2025-05-21", value: 12 },
  { date: "2025-05-22", value: 24 },
  { date: "2025-05-23", value: 13 },
  { date: "2025-05-24", value: 9 },
  { date: "2025-05-25", value: 11 },
  { date: "2025-05-26", value: 10 },
  { date: "2025-05-27", value: 12 },
  { date: "2025-05-28", value: 10 },

  { date: "2025-06-01", value: 11 },
  { date: "2025-06-02", value: 13 },
  { date: "2025-06-03", value: 9 },
  { date: "2025-06-04", value: 14 },
  { date: "2025-06-05", value: 14 },
  { date: "2025-06-06", value: 10 },
  { date: "2025-06-07", value: 9 },
  { date: "2025-06-08", value: 8 },
  { date: "2025-06-09", value: 7 },
  { date: "2025-06-10", value: 8 },
  { date: "2025-06-11", value: 9 },
  { date: "2025-06-12", value: 7 },
  { date: "2025-06-13", value: 8 },
  { date: "2025-06-14", value: 9 },
  { date: "2025-06-15", value: 9 },
  { date: "2025-06-16", value: 10 },
  { date: "2025-06-17", value: 11 },
  { date: "2025-06-18", value: 8 },
  { date: "2025-06-19", value: 9 },
  { date: "2025-06-20", value: 10 },
  { date: "2025-06-21", value: 9 },
  { date: "2025-06-22", value: 8 },
  { date: "2025-06-23", value: 9 },
  { date: "2025-06-24", value: 8 },
  { date: "2025-06-25", value: 7 },

  { date: "2025-07-01", value: 9 },
  { date: "2025-07-02", value: 8 },
  { date: "2025-07-03", value: 10 },
  { date: "2025-07-04", value: 11 },
  { date: "2025-07-05", value: 12 },
  { date: "2025-07-06", value: 10 },
  { date: "2025-07-07", value: 9 },
  { date: "2025-07-08", value: 8 },
  { date: "2025-07-09", value: 9 },
  { date: "2025-07-10", value: 8 },
  { date: "2025-07-11", value: 9 },
  { date: "2025-07-12", value: 10 },
  { date: "2025-07-13", value: 9 },
  { date: "2025-07-14", value: 10 },
  { date: "2025-07-15", value: 10 },
  { date: "2025-07-16", value: 9 },
  { date: "2025-07-17", value: 8 },
  { date: "2025-07-18", value: 7 },
  { date: "2025-07-19", value: 6 },
  { date: "2025-07-20", value: 6 },
  { date: "2025-07-21", value: 7 },
  { date: "2025-07-22", value: 6 },
  { date: "2025-07-23", value: 5 },
  { date: "2025-07-24", value: 6 },
  { date: "2025-07-25", value: 5 },

  { date: "2025-08-01", value: 4 },
];

// ============================================================================
// CHART DATA
// ============================================================================

export const visitsByDayOfWeekData: DayOfWeekDataPoint[] = [
  { day: "Monday", value: 18 },
  { day: "Tuesday", value: 19 },
  { day: "Wednesday", value: 22.5 },
  { day: "Thursday", value: 18.5 },
  { day: "Friday", value: 17 },
  { day: "Saturday", value: 15.5 },
  { day: "Sunday", value: 15.5 },
];

export const visitsByTimeOfDayData: TimeOfDayDataPoint[] = [
  { time: "00:00", value: 2.1 },
  { time: "02:00", value: 1.3 },
  { time: "04:00", value: 0.8 },
  { time: "06:00", value: 0.9 },
  { time: "08:00", value: 2.3 },
  { time: "10:00", value: 4.1 },
  { time: "12:00", value: 5.5 },
  { time: "14:00", value: 7.0 },
  { time: "16:00", value: 6.8 },
  { time: "18:00", value: 6.7 },
  { time: "20:00", value: 5.9 },
  { time: "22:00", value: 6.5 },
  { time: "00:00", value: 4.0 },
];

export const distanceFromHomeData: DistanceDataPoint[] = [
  { label: "Within 2 km", value: 25.9, color: "#E61E5C" },
  { label: "2 - 4 km's", value: 18.8, color: "#1E3A8A" },
  { label: "4 - 5 km's", value: 13.5, color: "#3B82F6" },
  { label: "5 - 6 km's", value: 13.4, color: "#F97316" },
  { label: "6 - 16 km's", value: 13.2, color: "#9333EA" },
  { label: "16 - 40 km's", value: 10.9, color: "#A855F7" },
  { label: "40 - 80 km's", value: 2.5, color: "#6B7280" },
  { label: "80 - 160 km's", value: 1.2, color: "#E0F2FE" },
  { label: "> 160 km's", value: 0.6, color: "#FEF3C7" },
];

export const distanceFromWorkData: DistanceDataPoint[] = [
  { label: "Within 2 km's", value: 25.5, color: "#E61E5C" },
  { label: "2 - 4 km's", value: 19.1, color: "#1E3A8A" },
  { label: "4 - 5 km's", value: 14.2, color: "#3B82F6" },
  { label: "5 - 6 km's", value: 13.0, color: "#F97316" },
  { label: "6 - 16 km's", value: 13.6, color: "#9333EA" },
  { label: "16 - 40 km's", value: 11.9, color: "#A855F7" },
  { label: "40 - 80 km's", value: 1.5, color: "#6B7280" },
  { label: "80 - 160 km's", value: 0.8, color: "#E0F2FE" },
  { label: "> 160 km's", value: 0.4, color: "#FEF3C7" },
];

export const top10WorkFSAData: FSADataPoint[] = [
  { fsa: "M6H", value: 20.0 },
  { fsa: "M6K", value: 6.5 },
  { fsa: "M6E", value: 4.5 },
  { fsa: "M6G", value: 4.0 },
  { fsa: "M6J", value: 3.5 },
  { fsa: "M6N", value: 3.0 },
  { fsa: "M6P", value: 2.5 },
  { fsa: "M5V", value: 2.0 },
  { fsa: "M5R", value: 1.5 },
  { fsa: "M6R", value: 1.0 },
];

export const top10HouseholdFSAData: FSADataPoint[] = [
  { fsa: "M6H", value: 20.0 },
  { fsa: "M6K", value: 6.5 },
  { fsa: "M6E", value: 4.5 },
  { fsa: "M6G", value: 3.5 },
  { fsa: "M6N", value: 3.0 },
  { fsa: "M6J", value: 2.8 },
  { fsa: "M6P", value: 2.5 },
  { fsa: "M5V", value: 2.2 },
  { fsa: "M6M", value: 2.0 },
  { fsa: "M5A", value: 1.5 },
];

export const top20WorkCitiesData: CityDataPoint[] = [
  { city: "Toronto", visitorPercent: 54.9 },
  { city: "Mississauga", visitorPercent: 19.5 },
  { city: "Brampton", visitorPercent: 11.1 },
  { city: "Markham", visitorPercent: 7.6 },
  { city: "Richmond Hill", visitorPercent: 3.4 },
  { city: "Vaughan", visitorPercent: 2.1 },
  { city: "Oakville", visitorPercent: 1.8 },
  { city: "Burlington", visitorPercent: 1.5 },
  { city: "Hamilton", visitorPercent: 1.2 },
  { city: "Ajax", visitorPercent: 1.0 },
  { city: "Pickering", visitorPercent: 0.9 },
  { city: "Whitby", visitorPercent: 0.8 },
  { city: "Oshawa", visitorPercent: 0.7 },
  { city: "Newmarket", visitorPercent: 0.6 },
  { city: "Aurora", visitorPercent: 0.5 },
  { city: "Barrie", visitorPercent: 0.4 },
  { city: "Guelph", visitorPercent: 0.3 },
  { city: "Kitchener", visitorPercent: 0.3 },
  { city: "Waterloo", visitorPercent: 0.2 },
  { city: "Cambridge", visitorPercent: 0.2 },
];

export const ageData: AgeDataPoint[] = [
  { ageRange: "< 18", value: 10.0, color: "#E61E5C" },
  { ageRange: "18-24", value: 3.6, color: "#1E3A8A" },
  { ageRange: "25-34", value: 14.7, color: "#3B82F6" },
  { ageRange: "35-44", value: 10.9, color: "#F97316" },
  { ageRange: "45-54", value: 8.0, color: "#9333EA" },
  { ageRange: "55-64", value: 7.3, color: "#F472B6" },
  { ageRange: "65 +", value: 9.4, color: "#6B7280" },
];

export const ethnicityData: EthnicityDataPoint[] = [
  { ethnicity: "White", value: 56.4, color: "#E61E5C" },
  { ethnicity: "Black", value: 24.3, color: "#1E3A8A" },
  { ethnicity: "South Asian", value: 8.1, color: "#3B82F6" },
  { ethnicity: "Latino", value: 4.5, color: "#F97316" },
  { ethnicity: "Middle Eastern", value: 3.5, color: "#A855F7" },
  { ethnicity: "Other", value: 3.2, color: "#F472B6" },
];

export const employmentData: EmploymentDataPoint[] = [
  { employment: "Employed", value: 42.9, color: "#E61E5C" },
  { employment: "Self-employed", value: 23.3, color: "#1E3A8A" },
  { employment: "Unemployed", value: 20.4, color: "#3B82F6" },
  { employment: "Part-time", value: 19.8, color: "#F97316" },
];

export const educationLevelData: EducationDataPoint[] = [
  { education: "no HS", value: 38.5 },
  { education: "HS", value: 43.5 },
  { education: "some college", value: 57.5 },
  { education: "bachelor", value: 40.0 },
  { education: "higher degree", value: 34.5 },
];

export const householdIncomeData: HouseholdIncomeDataPoint[] = [
  { incomeRange: "$0 - 30k", value: 36 },
  { incomeRange: "$30 - 70k", value: 34 },
  { incomeRange: "$70 - 100k", value: 13 },
  { incomeRange: "$100 - 150k", value: 8 },
  { incomeRange: "$150k +", value: 5 },
];

export const pointsOfInterestData: PointsOfInterestDataPoint[] = [
  { poi: "Walmart", before: 37.0, after: 37.4 },
  { poi: "H&M", before: 15.5, after: 13.0 },
  { poi: "Winners", before: 13.0, after: 11.1 },
  { poi: "Loblaws", before: 8.4, after: 7.2 },
  { poi: "Tip Top Tailors", before: 7.1, after: 6.9 },
  { poi: "No Frills", before: 5.0, after: 5.4 },
  { poi: "McDonald's", before: 1.5, after: 1.7 },
  { poi: "Jokarena", before: 1.1, after: 1.2 },
  { poi: "Footlocker", before: 0.9, after: 1.0 },
  { poi: "Burger King", before: 0.9, after: 0.2 },
];

// Single value metrics
export const medianHouseholdIncome = 41147.06;
export const medianHomeValue = 716953.49;

