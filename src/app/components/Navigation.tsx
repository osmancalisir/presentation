import { NavigationProps } from "@/app/components/interfaces";

export default function Navigation({ onPrevious, onNext, canGoPrevious, canGoNext }: NavigationProps) {
  return (
    <div className="navigation">
      <button
        className="nav-btn"
        onClick={onPrevious}
        disabled={!canGoPrevious}
      >
        ← Previous
      </button>
      <button
        className="nav-btn"
        onClick={onNext}
        disabled={!canGoNext}
      >
        Next →
      </button>
    </div>
  );
}