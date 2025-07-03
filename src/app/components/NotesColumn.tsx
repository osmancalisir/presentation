import { NotesColumnProps } from "@/app/components/interfaces";
import NoteItem from "@/app/components/NoteItem";
import Metric from "@/app/components/Metric";

export default function NotesColumn({ notes, metrics }: NotesColumnProps) {
  return (
    <div className="notes-column">
      <h3>Solutions</h3>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <NoteItem
            key={index}
            title={note.title}
            description={note.description}
          />
        ))}
      </ul>
      {metrics && (
        <div className={metrics.length > 1 ? "metrics-grid" : ""}>
          {metrics.map((metric, index) => (
            <Metric
              key={index}
              number={metric.number}
              label={metric.label}
            />
          ))}
        </div>
      )}
    </div>
  );
}