import { SummarySectionProps } from "@/app/components/interfaces";

export default function SummarySection({ summary }: SummarySectionProps) {
  return (
    <div className="summary-section">
      <strong>Summary:</strong> {summary}
    </div>
  );
}