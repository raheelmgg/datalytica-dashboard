export interface DashboardKpi {
  title: string;
  before?: string;
  value: string;
  suffix: string;
  change: string;
  tooltipMsg?: string;
}

export interface FunnelStage {
  label: string;
  sub: string;
  value: string;
  width: number;
  color: string;
}
export interface performanceByRegionType {
  region: string;
  progress: number;
  change: string;
}
