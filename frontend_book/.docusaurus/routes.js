import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/frontend_book/__docusaurus/debug',
    component: ComponentCreator('/frontend_book/__docusaurus/debug', '7f6'),
    exact: true
  },
  {
    path: '/frontend_book/__docusaurus/debug/config',
    component: ComponentCreator('/frontend_book/__docusaurus/debug/config', 'e5a'),
    exact: true
  },
  {
    path: '/frontend_book/__docusaurus/debug/content',
    component: ComponentCreator('/frontend_book/__docusaurus/debug/content', '060'),
    exact: true
  },
  {
    path: '/frontend_book/__docusaurus/debug/globalData',
    component: ComponentCreator('/frontend_book/__docusaurus/debug/globalData', '940'),
    exact: true
  },
  {
    path: '/frontend_book/__docusaurus/debug/metadata',
    component: ComponentCreator('/frontend_book/__docusaurus/debug/metadata', '125'),
    exact: true
  },
  {
    path: '/frontend_book/__docusaurus/debug/registry',
    component: ComponentCreator('/frontend_book/__docusaurus/debug/registry', '5bc'),
    exact: true
  },
  {
    path: '/frontend_book/__docusaurus/debug/routes',
    component: ComponentCreator('/frontend_book/__docusaurus/debug/routes', '138'),
    exact: true
  },
  {
    path: '/frontend_book/docs',
    component: ComponentCreator('/frontend_book/docs', '101'),
    routes: [
      {
        path: '/frontend_book/docs',
        component: ComponentCreator('/frontend_book/docs', '7bd'),
        routes: [
          {
            path: '/frontend_book/docs',
            component: ComponentCreator('/frontend_book/docs', '46d'),
            routes: [
              {
                path: '/frontend_book/docs/intro',
                component: ComponentCreator('/frontend_book/docs/intro', '316'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/ai-robot-brain/assets/isaac-ros-diagram',
                component: ComponentCreator('/frontend_book/docs/modules/ai-robot-brain/assets/isaac-ros-diagram', '245'),
                exact: true
              },
              {
                path: '/frontend_book/docs/modules/ai-robot-brain/assets/isaac-sim-diagram',
                component: ComponentCreator('/frontend_book/docs/modules/ai-robot-brain/assets/isaac-sim-diagram', '801'),
                exact: true
              },
              {
                path: '/frontend_book/docs/modules/ai-robot-brain/assets/nav2-diagram',
                component: ComponentCreator('/frontend_book/docs/modules/ai-robot-brain/assets/nav2-diagram', '048'),
                exact: true
              },
              {
                path: '/frontend_book/docs/modules/ai-robot-brain/chapter-1-isaac-sim',
                component: ComponentCreator('/frontend_book/docs/modules/ai-robot-brain/chapter-1-isaac-sim', 'ea8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/ai-robot-brain/chapter-2-isaac-ros-vslam',
                component: ComponentCreator('/frontend_book/docs/modules/ai-robot-brain/chapter-2-isaac-ros-vslam', '094'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/ai-robot-brain/chapter-3-nav2-path-planning',
                component: ComponentCreator('/frontend_book/docs/modules/ai-robot-brain/chapter-3-nav2-path-planning', '761'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/ai-robot-brain/intro',
                component: ComponentCreator('/frontend_book/docs/modules/ai-robot-brain/intro', '92b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/digital-twin/chapter-1-gazebo-physics-simulation',
                component: ComponentCreator('/frontend_book/docs/modules/digital-twin/chapter-1-gazebo-physics-simulation', '1b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/digital-twin/chapter-2-unity-environment-design',
                component: ComponentCreator('/frontend_book/docs/modules/digital-twin/chapter-2-unity-environment-design', '4b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/digital-twin/chapter-3-sensor-simulation',
                component: ComponentCreator('/frontend_book/docs/modules/digital-twin/chapter-3-sensor-simulation', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/digital-twin/intro',
                component: ComponentCreator('/frontend_book/docs/modules/digital-twin/intro', 'f5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/ros2-robotics/',
                component: ComponentCreator('/frontend_book/docs/modules/ros2-robotics/', '05d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/ros2-robotics/chapter-1-ros2-basics',
                component: ComponentCreator('/frontend_book/docs/modules/ros2-robotics/chapter-1-ros2-basics', '604'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/ros2-robotics/chapter-2-agent-integration',
                component: ComponentCreator('/frontend_book/docs/modules/ros2-robotics/chapter-2-agent-integration', '2a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/ros2-robotics/chapter-3-urdf-humanoids',
                component: ComponentCreator('/frontend_book/docs/modules/ros2-robotics/chapter-3-urdf-humanoids', '094'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/vla-robotics/assets/autonomous-humanoid-concept',
                component: ComponentCreator('/frontend_book/docs/modules/vla-robotics/assets/autonomous-humanoid-concept', '132'),
                exact: true
              },
              {
                path: '/frontend_book/docs/modules/vla-robotics/assets/llm-planning-concept',
                component: ComponentCreator('/frontend_book/docs/modules/vla-robotics/assets/llm-planning-concept', 'df6'),
                exact: true
              },
              {
                path: '/frontend_book/docs/modules/vla-robotics/assets/llm-planning-diagram',
                component: ComponentCreator('/frontend_book/docs/modules/vla-robotics/assets/llm-planning-diagram', 'f41'),
                exact: true
              },
              {
                path: '/frontend_book/docs/modules/vla-robotics/assets/vla-integration-diagram',
                component: ComponentCreator('/frontend_book/docs/modules/vla-robotics/assets/vla-integration-diagram', 'ab0'),
                exact: true
              },
              {
                path: '/frontend_book/docs/modules/vla-robotics/assets/whisper-concept',
                component: ComponentCreator('/frontend_book/docs/modules/vla-robotics/assets/whisper-concept', '9d8'),
                exact: true
              },
              {
                path: '/frontend_book/docs/modules/vla-robotics/assets/whisper-diagram',
                component: ComponentCreator('/frontend_book/docs/modules/vla-robotics/assets/whisper-diagram', '13c'),
                exact: true
              },
              {
                path: '/frontend_book/docs/modules/vla-robotics/chapter-1-whisper-voice-action',
                component: ComponentCreator('/frontend_book/docs/modules/vla-robotics/chapter-1-whisper-voice-action', 'ba4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/vla-robotics/chapter-2-llm-cognitive-planning',
                component: ComponentCreator('/frontend_book/docs/modules/vla-robotics/chapter-2-llm-cognitive-planning', '917'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/vla-robotics/chapter-3-autonomous-humanoid-capstone',
                component: ComponentCreator('/frontend_book/docs/modules/vla-robotics/chapter-3-autonomous-humanoid-capstone', '3f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/frontend_book/docs/modules/vla-robotics/intro',
                component: ComponentCreator('/frontend_book/docs/modules/vla-robotics/intro', '80d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/frontend_book/',
    component: ComponentCreator('/frontend_book/', '760'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
