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
        { 
          title: 'First Point', 
          description: 'Detailed explanation of the first main point', 
          information: 'This point focuses on foundational concepts that are essential for understanding the overall framework. It establishes the baseline knowledge required for all subsequent topics.'
        },
        { 
          title: 'Second Point', 
          description: 'Detailed explanation of the second main point',
          information: 'Building upon the first point, this covers intermediate concepts and their practical applications in real-world scenarios. Includes case studies and examples.'
        },
        { 
          title: 'Third Point', 
          description: 'Detailed explanation of the third main point',
          information: 'Advanced strategies and methodologies that leverage the previous concepts for maximum effectiveness. Focuses on optimization and best practices.'
        },
        { 
          title: 'Fourth Point', 
          description: 'Detailed explanation of the fourth main point',
          information: 'Integration techniques that bring all concepts together for comprehensive implementation. Includes troubleshooting and maintenance considerations.'
        }
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
        { 
          title: 'Strategic Approach', 
          description: 'How to approach this topic strategically',
          information: 'Focus on long-term planning and alignment with organizational goals. Consider market conditions, competitive landscape, and resource constraints when developing your strategy.'
        },
        { 
          title: 'Implementation Steps', 
          description: 'Key steps required for successful implementation',
          information: 'Detailed roadmap including resource allocation, timeline management, and risk mitigation strategies. Break down complex tasks into manageable phases with clear milestones.'
        },
        { 
          title: 'Expected Results', 
          description: 'What outcomes you can expect to achieve',
          information: 'Quantifiable benefits including ROI projections, efficiency gains, and competitive advantages. Set realistic expectations and prepare for potential challenges.'
        },
        { 
          title: 'Analysis Method', 
          description: 'How to measure and analyze the results',
          information: 'Comprehensive evaluation framework using KPIs, data analytics, and continuous improvement processes. Establish baseline metrics before implementation for accurate comparison.'
        }
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
        { 
          title: 'Initial Phase', 
          description: 'Setup and preparation activities',
          information: 'Includes stakeholder alignment, resource procurement, team formation, and baseline establishment. Critical for setting the foundation and ensuring all prerequisites are met.'
        },
        { 
          title: 'Development Phase', 
          description: 'Core implementation and development work',
          information: 'Active development, testing, quality assurance, and iterative improvements based on feedback. This phase requires close monitoring and regular status updates.'
        },
        { 
          title: 'Launch Phase', 
          description: 'Deployment and go-live activities',
          information: 'Final deployment, user training, support systems activation, and performance monitoring setup. Includes rollback procedures and emergency response protocols.'
        }
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
        { 
          title: 'Quality Improvement', 
          description: 'Enhanced quality standards and deliverables',
          information: 'Implementation of quality assurance processes, standardized procedures, and continuous improvement cycles. Reduces defects by 40% and improves customer satisfaction scores.'
        },
        { 
          title: 'Efficiency Gains', 
          description: 'Streamlined processes and reduced overhead',
          information: 'Automation of routine tasks, optimization of workflows, and elimination of redundant activities. Expected to reduce processing time by 60% and operational costs by 25%.'
        },
        { 
          title: 'Growth Opportunities', 
          description: 'New opportunities for expansion and development',
          information: 'Market expansion potential, new revenue streams, and scalability improvements for future growth. Projected to increase market share by 40% within 18 months.'
        },
        { 
          title: 'Innovation Impact', 
          description: 'Innovative solutions and competitive advantages',
          information: 'Breakthrough technologies, unique methodologies, and differentiation strategies in the marketplace. Creates sustainable competitive advantages and patent opportunities.'
        }
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