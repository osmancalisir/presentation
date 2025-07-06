export interface SlideData {
  id: string;
  title: string;
  type: 'title' | 'cornell';
  content: TitleSlideContent | CornellSlideContent;
}

export interface TitleSlideContent {
  subtitle: string;
  keyPoints: Array<{
    number: string;
    label: string;
  }>;
}

export interface CornellSlideContent {
  cueItems: string[];
  notes: Array<{
    title: string;
    description: string;
    information?: string;
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
    title: 'Frontend Scaling Architecture',
    type: 'title',
    content: {
      subtitle: 'Modern Stack for 10x Data Growth',
      keyPoints: [
        { number: '1M', label: 'Data Points' },
        { number: '10x', label: 'Scale Increase' },
        { number: '<2s', label: 'Load Time Goal' }
      ]
    }
  },
  {
    id: 'slide2',
    title: 'Core Strategy: Architecture Modernization',
    type: 'cornell',
    content: {
      cueItems: ['State Management', 'Data Fetching', 'Rendering', 'Caching'],
      notes: [
        { title: 'Zustand + Immer', description: 'Lightweight state with immutable updates, perfect for large datasets' },
        { title: 'TanStack Query', description: 'Intelligent caching, background sync, optimistic updates' },
        { title: 'React-Window + WebGL', description: 'Virtual scrolling + GPU-accelerated rendering' },
        { title: 'IndexedDB + Service Worker', description: 'Persistent offline storage with background sync' }
      ],
      metrics: [
        { number: '80%', label: 'Bundle Size Reduction' },
        { number: '90%', label: 'Re-render Reduction' }
      ],
      summary: 'Modern stack reduces complexity while dramatically improving performance through intelligent state management and data fetching patterns.'
    }
  },
  {
    id: 'slide3',
    title: 'Data Flow & State Architecture',
    type: 'cornell',
    content: {
      cueItems: ['Query Layer', 'State Slicing', 'Normalization', 'Subscriptions'],
      notes: [
        { title: 'Query Orchestration', description: 'TanStack Query with parallel fetching, deduplication, and infinite queries' },
        { title: 'Normalized State', description: 'Entity-based state structure (users, datasets, charts) with Zustand slices' },
        { title: 'Selective Subscriptions', description: 'Component-level subscriptions to prevent unnecessary re-renders' },
        { title: 'Optimistic Updates', description: 'Immediate UI updates with rollback capability for better UX' }
      ],
      metrics: [
        { number: '95%', label: 'Cache Hit Rate' },
        { number: '5ms', label: 'State Update Time' }
      ],
      summary: 'Normalized state architecture with intelligent caching eliminates data duplication and provides instant UI responsiveness.'
    }
  },
  {
    id: 'slide4',
    title: 'Performance & Rendering Strategy',
    type: 'cornell',
    content: {
      cueItems: ['Virtualization', 'GPU Rendering', 'Web Workers', 'Streaming'],
      notes: [
        { title: 'React-Window + FixedSizeList', description: 'Render only visible rows, maintain smooth scrolling' },
        { title: 'Three.js/WebGL Canvas', description: 'GPU-accelerated charts with LOD (Level of Detail) optimization' },
        { title: 'Worker Threads', description: 'Data processing, filtering, and aggregation off main thread' },
        { title: 'Streaming Updates', description: 'WebSocket + Server-Sent Events for real-time data updates' }
      ],
      metrics: [
        { number: '60fps', label: 'Scroll Performance' },
        { number: '<100ms', label: 'Interaction Response' }
      ],
      summary: 'Multi-threaded architecture with GPU rendering ensures smooth interactions even with massive datasets.'
    }
  },
  {
    id: 'slide5',
    title: 'Success Validation & Monitoring',
    type: 'cornell',
    content: {
      cueItems: ['Performance', 'Memory', 'User Experience', 'Scalability'],
      notes: [
        { title: 'Core Web Vitals', description: 'LCP <2.5s, FID <100ms, CLS <0.1 across all device types' },
        { title: 'Memory Profiling', description: 'Heap snapshots, memory leaks detection, <500MB total usage' },
        { title: 'User Journey Testing', description: 'E2E tests with 1M+ records, interaction stress testing' },
        { title: 'Load Testing', description: 'Concurrent users, data mutation scenarios, failover testing' }
      ],
      metrics: [
        { number: '<2s', label: 'Time to Interactive' },
        { number: '99.9%', label: 'Uptime Target' },
        { number: '500MB', label: 'Memory Limit' },
        { number: '10M+', label: 'Future Capacity' }
      ],
      summary: 'Comprehensive monitoring ensures reliable performance while preparing for future 10x+ growth with modern, maintainable architecture.'
    }
  }
];