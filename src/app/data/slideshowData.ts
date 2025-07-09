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
    title: 'TUM Venture Labs',
    type: 'title',
    content: {
      subtitle: 'API Optimization + DevOps + Feature Flags + Atomic Design',
      keyPoints: [
        { number: '85%', label: 'API Reduction' },
        { number: '99.9%', label: 'Uptime Target' },
        { number: '4', label: 'Core Solutions' }
      ]
    }
  },
  {
    id: 'slide2',
    title: 'Problem 1: API Call Optimization',
    type: 'cornell',
    content: {
      cueItems: ['State Management', 'Intelligent Caching', 'Progressive Loading', 'Normalization'],
      notes: [
        { 
          title: 'State Management with Zustand', 
          description: 'Centralized state to prevent duplicate API calls',
          information: 'Implement Zustand for global state management, preventing duplicate API calls when multiple components need the same data. Cache API responses in state, implement optimistic updates, and use state selectors to minimize re-renders. Reduces redundant API calls by 30-40%.'
        },
        { 
          title: 'Redis Caching Layer', 
          description: 'Cache frequent requests with TTL management',
          information: 'Implement Redis for hot data (user profiles, settings) with 1-hour TTL, warm cache for dashboard data with 15-min TTL, and cold storage for historical data. Reduces 60-80% of repetitive API calls.'
        },
        { 
          title: 'Progressive Data Loading', 
          description: 'Load data incrementally based on user interaction',
          information: 'Implement virtual scrolling, lazy loading for dashboard widgets, and on-demand data fetching. Load initial 50 records, fetch more on scroll. Reduces initial load by 70%.'
        },
        { 
          title: 'Data Normalization', 
          description: 'Optimize data structure to eliminate redundancy',
          information: 'Store related data efficiently using entity-based structure (users, projects, tasks as separate entities), implement client-side joins, and use reference IDs instead of duplicating data. Reduces data transfer by 30-50% and enables efficient updates.'
        }
      ],
      metrics: [
        { number: '85%', label: 'API Reduction' },
        { number: '60%', label: 'Faster Loading' }
      ],
      summary: 'Multi-layered approach with state management and normalization can reduce API calls from 300K to 45K monthly while improving user experience through smart caching and progressive loading.'
    }
  },
  {
    id: 'slide3',
    title: 'Problem 2: DevOps Integration',
    type: 'cornell',
    content: {
      cueItems: ['CI/CD Pipeline', 'Monitoring', 'Testing', 'Deployment'],
      notes: [
        { 
          title: 'Hybrid CI/CD Pipeline', 
          description: 'Version control for no-code configurations',
          information: 'Git tracks Softr page configs, Airtable schema changes, and custom scripts. Automated testing validates API integrations and UI functionality before deployment.'
        },
        { 
          title: 'Comprehensive Monitoring', 
          description: '24/7 system health and performance tracking',
          information: 'Monitor API usage, response times, error rates, and user experience metrics. Automated alerts for API limit approaching (80% threshold) and system anomalies.'
        },
        { 
          title: 'Automated Testing Suite', 
          description: 'API tests, UI tests, and integration validation',
          information: 'Playwright for UI testing, Postman for API validation, and custom scripts for data integrity checks. Runs on every deployment and daily health checks.'
        },
        { 
          title: 'Staging Environment', 
          description: 'Safe testing ground before production',
          information: 'Mirror production setup with test data, validate changes in isolation, and ensure zero-downtime deployments through blue-green strategy(initially costly).'
        }
      ],
      metrics: [
        { number: '99.9%', label: 'Uptime' },
        { number: '50%', label: 'Faster Deployment' }
      ],
      summary: 'Enterprise-grade DevOps practices maintain no-code agility while ensuring reliability and continuous delivery.'
    }
  },
  {
    id: 'slide4',
    title: 'Solution 3: Feature Flags System',
    type: 'cornell',
    content: {
      cueItems: ['Role-Based Access', 'Gradual Rollout', 'A/B Testing', 'Risk Management'],
      notes: [
        { 
          title: 'Role-Based Feature Control', 
          description: 'Different features for different user roles',
          information: 'Admins get full monitoring access, managers see analytics dashboards, analysts have data export capabilities, viewers get read-only access. Reduces support burden and improves security.'
        },
        { 
          title: 'Gradual Feature Rollout', 
          description: 'Deploy new features to percentage of users',
          information: 'Start with 10% of users, monitor performance and feedback, gradually increase to 100%. Allows safe deployment of API optimization features without affecting all users.'
        },
        { 
          title: 'A/B Testing Capabilities', 
          description: 'Compare different solutions in production',
          information: 'Test different caching strategies, UI layouts, and API call patterns with real users. Data-driven decisions on which optimizations provide best results.'
        },
        { 
          title: 'Emergency Rollback', 
          description: 'Instant disable of problematic features',
          information: 'Toggle features off immediately if issues arise, protect system stability during deployments, and maintain user experience during incidents.'
        }
      ],
      metrics: [
        { number: '90%', label: 'Faster Feature Deployment' },
        { number: '75%', label: 'Reduced Risk' }
      ],
      summary: 'Feature flags enable safe, controlled deployment of optimizations while maintaining system stability and user experience.'
    }
  },
  {
    id: 'slide5',
    title: 'Solution 4: Atomic Design System',
    type: 'cornell',
    content: {
      cueItems: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
      notes: [
        { 
          title: 'Atomic Components', 
          description: 'Reusable building blocks (buttons, inputs, badges)',
          information: 'Standardized UI elements with consistent styling, accessibility features, and behavior. Reduces development time by 60% and ensures consistent user experience.'
        },
        { 
          title: 'Molecular Combinations', 
          description: 'Search boxes, metric cards, form fields',
          information: 'Pre-built combinations of atoms that solve common UI patterns. Includes search with autocomplete, metric displays with trends, and form validation.'
        },
        { 
          title: 'Organism Structures', 
          description: 'Data tables, navigation bars, dashboards',
          information: 'Complex UI sections that combine multiple molecules. Includes features like sorting, filtering, pagination, and responsive design out of the box.'
        },
        { 
          title: 'Template Layouts', 
          description: 'Page structures for different use cases',
          information: 'Dashboard layout, authentication pages, settings panels, and monitoring interfaces. Provides consistent navigation and responsive design patterns.'
        }
      ],
      metrics: [
        { number: '60%', label: 'Faster Development' },
        { number: '80%', label: 'Code Reusability' }
      ],
      summary: 'Atomic design system ensures scalable, maintainable, and consistent user interface development across all platforms.'
    }
  },
  {
    id: 'slide6',
    title: 'Expected Business Results',
    type: 'cornell',
    content: {
      cueItems: ['Cost Savings', 'Performance', 'Scalability', 'Developer Experience'],
      notes: [
        { 
          title: 'API Cost Reduction', 
          description: '85% reduction in API calls saves upgrade costs',
          information: 'Avoid expensive plan upgrades, reduce infrastructure costs, and improve application performance. ROI achievement is the key here.'
        },
        { 
          title: 'System Reliability', 
          description: '99.9% uptime with automated monitoring',
          information: 'Reduce downtime costs, improve user satisfaction(current analysis shows that users are only willing to wait 4 to 6 seconds for a result), and enable business growth. Automated alerts prevent issues before they impact users.'
        },
        { 
          title: 'Development Velocity', 
          description: '60% faster feature development',
          information: 'Atomic design system and feature flags accelerate development cycles. New features deploy safely with gradual rollout and instant rollback capabilities.'
        },
        { 
          title: 'Future Scalability', 
          description: 'Architecture supports 10x growth',
          information: 'Solution handles 3M API calls monthly, supports 10K+ concurrent users, and provides foundation for advanced features and integrations.'
        }
      ],
      metrics: [
        { number: '85%', label: 'API Reduction' },
        { number: '99.9%', label: 'Uptime' },
        { number: '60%', label: 'Faster Development' },
        { number: '10x', label: 'Future Capacity' }
      ],
      summary: 'Comprehensive solution delivers immediate cost savings, improved reliability, and scalable architecture for future growth.'
    }
  },
  {
    id: 'slide7',
    title: 'Thank you very much',
    type: 'title',
    content: {
        subtitle: 'This presentation is made by Osman Calisir'
      }
  },
];
