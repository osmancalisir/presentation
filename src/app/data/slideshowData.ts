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
    title: 'Your Presentation Title',
    type: 'title',
    content: {
      subtitle: 'Add your subtitle here',
      keyPoints: [
        { number: '100', label: 'First Metric' },
        { number: '250', label: 'Second Metric' },
        { number: '75%', label: 'Third Metric' }
      ]
    }
  },
  {
    id: 'slide2',
    title: 'Topic 1: Main Concept',
    type: 'cornell',
    content: {
      cueItems: ['Key Point 1', 'Key Point 2', 'Key Point 3', 'Key Point 4'],
      notes: [
        { title: 'First Point', description: 'Detailed explanation of the first main point' },
        { title: 'Second Point', description: 'Detailed explanation of the second main point' },
        { title: 'Third Point', description: 'Detailed explanation of the third main point' },
        { title: 'Fourth Point', description: 'Detailed explanation of the fourth main point' }
      ],
      metrics: [
        { number: '90%', label: 'Success Rate' }
      ],
      summary: 'This section summarizes the main concept and its key benefits or outcomes.'
    }
  },
  {
    id: 'slide3',
    title: 'Topic 2: Secondary Concept',
    type: 'cornell',
    content: {
      cueItems: ['Strategy', 'Implementation', 'Results', 'Analysis'],
      notes: [
        { title: 'Strategic Approach', description: 'How to approach this topic strategically' },
        { title: 'Implementation Steps', description: 'Key steps required for successful implementation' },
        { title: 'Expected Results', description: 'What outcomes you can expect to achieve' },
        { title: 'Analysis Method', description: 'How to measure and analyze the results' }
      ],
      metrics: [
        { number: '85%', label: 'Efficiency Gain' }
      ],
      summary: 'This approach provides a comprehensive framework for addressing the secondary concept effectively.'
    }
  },
  {
    id: 'slide4',
    title: 'Implementation Plan',
    type: 'cornell',
    content: {
      cueItems: ['Phase 1', 'Phase 2', 'Phase 3'],
      notes: [
        { title: 'Initial Phase', description: 'Setup and preparation activities' },
        { title: 'Development Phase', description: 'Core implementation and development work' },
        { title: 'Launch Phase', description: 'Deployment and go-live activities' }
      ],
      metrics: [
        { number: '12', label: 'Weeks Timeline' },
        { number: '3', label: 'Major Phases' }
      ],
      summary: 'A structured three-phase approach ensures systematic progress and milestone achievement.'
    }
  },
  {
    id: 'slide5',
    title: 'Expected Outcomes',
    type: 'cornell',
    content: {
      cueItems: ['Quality', 'Efficiency', 'Growth', 'Innovation'],
      notes: [
        { title: 'Quality Improvement', description: 'Enhanced quality standards and deliverables' },
        { title: 'Efficiency Gains', description: 'Streamlined processes and reduced overhead' },
        { title: 'Growth Opportunities', description: 'New opportunities for expansion and development' },
        { title: 'Innovation Impact', description: 'Innovative solutions and competitive advantages' }
      ],
      metrics: [
        { number: '95%', label: 'Quality Score' },
        { number: '60%', label: 'Efficiency Gain' },
        { number: '40%', label: 'Growth Rate' },
        { number: '80%', label: 'Innovation Index' }
      ],
      summary: 'The combined impact delivers significant improvements across all key performance indicators.'
    }
  }
];