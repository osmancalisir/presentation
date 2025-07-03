import { SlideCounterProps } from "@/app/components/interfaces";

export default function SlideCounter({ current, total }: SlideCounterProps) {
  return (
    <div className="slide-counter">
      <span>{current}</span> / <span>{total}</span>
    </div>
  );
}