import { CornellSlideProps } from "@/app/components/interfaces";
import CueColumn from "@/app/components/CueColumn";
import SummarySection from "@/app/components/SummarySection";
import NotesColumn from "@/app/components/NotesColumn";

export default function CornellSlide({ title, content }: CornellSlideProps) {
  return (
    <>
      <h1>{title}</h1>
      <div className="cornell-layout">
        <CueColumn items={content.cueItems} />
        <NotesColumn
          notes={content.notes}
          metrics={content.metrics}
        />
        <SummarySection summary={content.summary} />
      </div>
    </>
  );
}