export interface SlideData {
  id: string;
  title: string;
  type: 'title' | 'cornell';
  content: TitleSlideContent | CornellSlideContent;
}

export interface TitleSlideContent {
  subtitle: string;
  keyPoints?: Array<{
    number: string;
    label: string;
  }>;
}

export interface CornellSlideContent {
  cueItems: string[];
  notes: Array<{
    title: string;
    description: string;
    information: string;
  }>;
  metrics?: Array<{
    number: string;
    label: string;
  }>;
  summary: string;
}

export const slideshowData: SlideData[] = [
  {
    id: 'slide1',
    title: 'Frontend Scaling: 100K → 1M Data Points',
    type: 'title',
    content: {
      subtitle: 'Performance-First Frontend Architecture for 10x Growth',
      keyPoints: [
        { number: '1M', label: 'Data Points' },
        { number: '10x', label: 'Scale Increase' },
        { number: '<2s', label: 'Load Time Goal' }
      ]
    }
  },
  {
    id: 'slide2',
    title: 'Strategy: Smart State & Data Management',
    type: 'cornell',
    content: {
      cueItems: ['State Management', 'Data Fetching', 'Caching', 'Normalization'],
      notes: [
        { 
          title: 'Zustand + Immer', 
          description: 'Lightweight state with immutable updates for large datasets', 
          information: 'Zustand (~2KB) prevents Redux\'s massive object recreation issue. With 1M points, updating one record in Redux recreates the entire state tree. Immer + Zustand only updates changed references, keeping memory usage constant.'
        },
        { 
          title: 'TanStack Query', 
          description: 'Smart data fetching with built-in caching', 
          information: 'We can\'t load 1M points at once, it would crash the browser. TanStack Query lets us load data in chunks (lets say 10K at a time) and caches what we\'ve already fetched. If the user scrolls back up, we don\'t hit the API again.'
        },
        { 
          title: 'Normalized State', 
          description: 'Entity-based structure eliminates data duplication', 
          information: 'Store data as { users: {}, datasets: {}, charts: {} } instead of nested objects. This prevents multiple copies of the same data and enables efficient updates via entity IDs.'
        },
        { 
          title: 'IndexedDB Storage', 
          description: 'Persistent client-side cache for processed data', 
          information: 'Store aggregated/filtered results locally. Initial load processes 1M points once, subsequent visits load from IndexedDB instantly. Service worker handles cache invalidation on data updates.'
        }
      ],
      metrics: [
        { number: '90%', label: 'Re-render Reduction' },
        { number: '80%', label: 'API Calls Saved' }
      ],
      summary: 'Modern state management eliminates performance bottlenecks while maintaining data consistency across components.'
    }
  },
  {
    id: 'slide3',
    title: 'Rendering: GPU + Virtualization',
    type: 'cornell',
    content: {
      cueItems: ['Virtualization', 'GPU Rendering', 'Web Workers', 'Progressive Loading'],
      notes: [
        { 
          title: 'React-Window Virtualization', 
          description: 'Render only visible items (~50 out of 1M)', 
          information: 'Creates virtual scrolling that renders only visible rows. For 1M items, DOM contains max 50 elements. Handles variable heights and smooth scrolling with position calculations done in requestAnimationFrame.'
        },
        { 
          title: 'WebGL Canvas Charts', 
          description: 'GPU-accelerated plotting with LOD optimization', 
          information: 'Three.js/D3 renders points as GPU textures instead of DOM elements. Level-of-detail (LOD) shows simplified view when zoomed out, full detail when zoomed in. Can render 1M+ points at 60fps.'
        },
        { 
          title: 'Web Workers', 
          description: 'Data processing and filtering off main thread', 
          information: 'Heavy calculations (sorting, filtering, aggregation) happen in worker threads. Main thread stays responsive for UI interactions while workers handle data transformations in parallel.'
        },
        { 
          title: 'Progressive Enhancement', 
          description: 'Adaptive rendering based on device capabilities', 
          information: 'Detect device performance (RAM, CPU, GPU) and adjust rendering strategy. High-end devices get full WebGL, low-end devices get simplified Canvas rendering with reduced point density.'
        }
      ],
      metrics: [
        { number: '60fps', label: 'Scroll Performance' },
        { number: '<100ms', label: 'Interaction Response' }
      ],
      summary: 'GPU-accelerated rendering with intelligent virtualization ensures smooth performance across all device types.'
    }
  },
  {
    id: 'slide4',
    title: 'Success Metrics & Validation',
    type: 'cornell',
    content: {
      cueItems: ['Performance', 'Memory', 'User Experience', 'Scalability'],
      notes: [
        { 
          title: 'Core Web Vitals', 
          description: 'Standard performance metrics across all devices', 
          information: 'Track LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift) using Chrome DevTools and real user monitoring. Test on low-end devices to ensure baseline performance. Lighthouse CI in deployment pipeline catches regressions before they hit production.'
        },
        { 
          title: 'Memory Profiling', 
          description: 'Monitor memory usage and detect leaks', 
          information: 'Use Chrome DevTools Memory tab to track heap growth during heavy operations. Set up automated tests that repeatedly load/unload data to catch memory leaks. Profile before/after major user interactions.'
        },
        { 
          title: 'Load Testing', 
          description: 'Simulate realistic user traffic and data volumes', 
          information: 'Use tools like Playwright to simulate concurrent users performing typical workflows. Monitor both server response times and client-side performance during peak usage scenarios.'
        },
        { 
          title: 'Performance Monitoring', 
          description: 'Real-time tracking with automated alerts', 
          information: 'Set up performance observers for custom metrics relevant to your app. Configure alerts when performance degrades below acceptable thresholds. Track both technical metrics and user experience indicators.'
        }
      ],
      metrics: [
        { number: '<2s', label: 'Time to Interactive' },
        { number: '500MB', label: 'Memory Budget' },
        { number: '99.5%', label: 'Success Rate' },
        { number: '10M+', label: 'Future Capacity' }
      ],
      summary: 'Comprehensive monitoring ensures reliable performance while building foundation for future 10x+ growth.'
    }
  },
  {
    id: 'slide5',
    title: 'Thank you very much',
    type: 'title',
    content: {
      subtitle: 'This presentation is made by Osman Calisir'
    }
  },
];