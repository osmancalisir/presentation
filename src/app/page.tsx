import Slideshow from '@/app/components/Slideshow';
import { slideshowData } from '@/app/data/slideshowData';
import './globals.css';

export default function Home() {
  return (
    <div>
      <Slideshow slides={slideshowData} />
    </div>
  );
}