import { KeyPointProps } from "@/app/components/interfaces";

export default function KeyPoint({ number, label }: KeyPointProps) {
  return (
    <div className="key-point">
      <span className="key-point-number">{number}</span>
      <span>{label}</span>
    </div>
  );
}