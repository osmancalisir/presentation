import { CueColumnProps } from "@/app/components/interfaces";
import CueItem from "@/app/components/CueItem";

export default function CueColumn({ items }: CueColumnProps) {
  return (
    <div className="cue-column">
      <h3>Key Concepts</h3>
      {items.map((item, index) => (
        <CueItem key={index} text={item} />
      ))}
    </div>
  );
}