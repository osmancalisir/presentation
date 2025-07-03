import { CueItemProps } from "@/app/components/interfaces";

export default function CueItem({ text }: CueItemProps) {
  return <div className="cue-item">{text}</div>;
}
