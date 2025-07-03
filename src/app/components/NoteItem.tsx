import { NoteItemProps } from "@/app/components/interfaces";

export default function NoteItem({ title, description }: NoteItemProps) {
  return (
    <li>
      <strong>{title}:</strong> {description}
    </li>
  );
}