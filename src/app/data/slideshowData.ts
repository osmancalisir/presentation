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
    title: 'TUM Venture Labs Case Study',
    type: 'title',
    content: {
      subtitle: 'API Optimization & DevOps Integration',
      keyPoints: [
        { number: '300K', label: 'API Calls Needed' },
        { number: '100K', label: 'Current Limit' },
        { number: '85%', label: 'Reduction Target' }
      ]
    }
  },
  {
    id: 'slide2',
    title: 'Problem 1: API Call Limits',
    type: 'cornell',
    content: {
      cueItems: ['Caching', 'Batch Processing', 'Progressive Loading', 'Smart Architecture'],
      notes: [
        { title: 'Caching Layer', description: 'Store frequent requests, reduce 60-80% calls' },
        { title: 'Batch Operations', description: 'Group API calls, sync every 15-30 min' },
        { title: 'Lazy Loading', description: 'Load data only when needed' },
        { title: 'Data Optimization', description: 'Pagination, local storage for static data' }
      ],
      metrics: [
        { number: '65-85%', label: 'Expected Reduction' }
      ],
      summary: 'Implement caching and batch processing to reduce API calls from 300K to 50K-100K monthly while improving performance by 40-60%.'
    }
  },
  {
    id: 'slide3',
    title: 'Problem 2: DevOps Integration',
    type: 'cornell',
    content: {
      cueItems: ['Version Control', 'Testing', 'Monitoring', 'Deployment'],
      notes: [
        { title: 'Git Integration', description: 'Track Softr configs, Airtable schemas' },
        { title: 'Automated Testing', description: 'API tests, UI tests, data validation' },
        { title: '24/7 Monitoring', description: 'Uptime, response times, error rates' },
        { title: 'Staging Pipeline', description: 'Test environment, automated deployment' }
      ],
      metrics: [
        { number: '99.9%', label: 'Target Uptime' }
      ],
      summary: 'Hybrid DevOps approach maintains no-code speed while adding enterprise reliability and monitoring.'
    }
  },
  {
    id: 'slide4',
    title: 'Implementation Timeline',
    type: 'cornell',
    content: {
      cueItems: ['Week 1-2', 'Week 3-4', 'Week 5-6'],
      notes: [
        { title: 'Phase 1', description: 'API optimization, caching implementation' },
        { title: 'Phase 2', description: 'DevOps setup, testing automation' },
        { title: 'Phase 3', description: 'Analytics deployment, optimization' }
      ],
      metrics: [
        { number: '6', label: 'Weeks Total' },
        { number: '3', label: 'Key Phases' }
      ],
      summary: '6-week phased approach ensures minimal disruption while delivering immediate value in each phase.'
    }
  },
  {
    id: 'slide5',
    title: 'Expected Results',
    type: 'cornell',
    content: {
      cueItems: ['Performance', 'Reliability', 'Efficiency', 'Quality'],
      notes: [
        { title: 'API Reduction', description: '85% reduction in API calls' },
        { title: 'Uptime', description: '99.9% system availability' },
        { title: 'Deployment Speed', description: '50% faster deployment times' },
        { title: 'Issue Reduction', description: '90% fewer production issues' }
      ],
      metrics: [
        { number: '85%', label: 'API Reduction' },
        { number: '99.9%', label: 'Uptime' },
        { number: '50%', label: 'Faster Deployment' },
        { number: '90%', label: 'Fewer Issues' }
      ],
      summary: 'Solution delivers scalable architecture within current budget while improving performance, reliability, and development velocity.'
    }
  }
];
