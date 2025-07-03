import { MetricProps } from "@/app/components/interfaces";

export default function Metric({ number, label }: MetricProps) {
  return (
    <div className="metric">
      <span className="metric-number">{number}</span>
      <span className="metric-label">{label}</span>
    </div>
  );
}
