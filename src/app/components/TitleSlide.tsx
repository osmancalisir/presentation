import { TitleSlideProps } from "@/app/components/interfaces";
import KeyPoint from "@/app/components/KeyPoint";

export default function TitleSlide({ title, content }: TitleSlideProps) {
  return (
    <div className="title-slide">
      <h1>{title}</h1>
      <p className="subtitle">{content.subtitle}</p>
      <div className="key-points">
        {content?.keyPoints?.map((point, index) => (
          <KeyPoint
            key={index}
            number={point.number}
            label={point.label}
          />
        ))}
      </div>
    </div>
  );
}