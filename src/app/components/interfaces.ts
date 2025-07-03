interface SlideData {
  id: string;
  title: string;
  type: 'title' | 'cornell';
  content: TitleSlideContent | CornellSlideContent;
}

interface TitleSlideContent {
  subtitle: string;
  keyPoints: Array<{
    number: string;
    label: string;
  }>;
}

interface CornellSlideContent {
  cueItems: string[];
  notes: Array<{
    title: string;
    description: string;
  }>;
  metrics?: Array<{
    number: string;
    label: string;
  }>;
  summary: string;
}

interface SlideshowProps {
  slides: SlideData[];
}

interface TitleSlideProps {
  title: string;
  content: TitleSlideContent;
}

interface KeyPointProps {
  number: string;
  label: string;
}

interface CornellSlideProps {
  title: string;
  content: CornellSlideContent;
}

interface CueColumnProps {
  items: string[];
}

interface CueItemProps {
  text: string;
}

interface NotesColumnProps {
  notes: Array<{
    title: string;
    description: string;
  }>;
  metrics?: Array<{
    number: string;
    label: string;
  }>;
}

interface NoteItemProps {
  title: string;
  description: string;
}

interface MetricProps {
  number: string;
  label: string;
}

interface SummarySectionProps {
  summary: string;
}

interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

interface SlideCounterProps {
  current: number;
  total: number;
}

export type {
    SlideData,
    TitleSlideContent,
    CornellSlideContent,
    SlideshowProps,
    TitleSlideProps,
    KeyPointProps,
    CornellSlideProps,
    CueColumnProps,
    CueItemProps,
    NotesColumnProps,
    NoteItemProps,
    MetricProps,
    SummarySectionProps,
    NavigationProps,
    SlideCounterProps
}