# Quickstart Guide: ROS 2 Robotics Education Module

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Basic Python knowledge (Python 3.8+)
- Fundamental understanding of robotics concepts (optional but helpful)

## Setup Instructions

### 1. Clone and Setup Repository
```bash
git clone <repository-url>
cd <repository-name>
npm install
```

### 2. Install Docusaurus
```bash
npm install @docusaurus/core@latest @docusaurus/module-type-aliases@latest
```

### 3. Start Development Server
```bash
npm start
```
This will start a local development server at `http://localhost:3000`.

### 4. Access the ROS 2 Module
Navigate to `http://localhost:3000/docs/modules/ros2-robotics` to access the educational content.

## Content Overview

The ROS 2 Robotics Education Module contains three chapters:

1. **ROS 2 Basics: Nodes, Topics, and Services** - Learn fundamental ROS 2 concepts
2. **Agent Integration with ROS 2 Controllers** - Connect AI agents to robot controllers
3. **URDF for Humanoid Robots** - Understand robot description format

## For Educators

### Adding New Content
1. Create new markdown files in the `docs/modules/ros2-robotics/` directory
2. Update `sidebars.js` to include the new content in the navigation
3. Use Docusaurus markdown features for enhanced educational content

### Customization Options
- Modify `docusaurus.config.js` to adjust site-wide settings
- Customize CSS in the `src/css/` directory
- Add custom React components in the `src/components/` directory

## For Students

### Getting Started
1. Begin with Chapter 1: ROS 2 Basics
2. Complete the exercises in each chapter before moving to the next
3. Use the additional resources provided in each chapter for deeper understanding

### Best Learning Practices
- Follow the chapters in order for optimal learning progression
- Attempt all practical exercises to reinforce concepts
- Use the discussion forums for questions and peer collaboration

## Deployment

To build the static site for deployment:
```bash
npm run build
```

The output will be in the `build/` directory and can be deployed to GitHub Pages or any static hosting service.

## Troubleshooting

### Common Issues
- If the development server doesn't start, ensure Node.js and npm are properly installed
- If content doesn't appear, check that the file is properly linked in `sidebars.js`
- For styling issues, check the browser console for errors