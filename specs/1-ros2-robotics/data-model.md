# Data Model: ROS 2 Robotics Education Module

## Content Structure

### Chapter
- **id**: Unique identifier for the chapter
- **title**: Display title of the chapter
- **slug**: URL-friendly identifier
- **description**: Brief summary of chapter content
- **prerequisites**: List of required knowledge areas
- **learning_objectives**: Array of specific learning goals
- **duration**: Estimated completion time in minutes
- **difficulty**: Level (beginner, intermediate, advanced)
- **content**: Markdown content for the chapter
- **exercises**: Array of practical exercises
- **resources**: List of additional resources and links

### Exercise
- **id**: Unique identifier for the exercise
- **title**: Display title of the exercise
- **description**: Detailed description of the exercise
- **type**: Exercise category (hands-on, quiz, simulation, etc.)
- **difficulty**: Level (beginner, intermediate, advanced)
- **instructions**: Step-by-step instructions
- **expected_outcome**: What students should achieve
- **solution**: Suggested solution or reference implementation
- **dependencies**: Other exercises or chapters required first

### Resource
- **id**: Unique identifier for the resource
- **title**: Display title of the resource
- **url**: Link to the resource
- **type**: Resource category (video, article, code, documentation)
- **description**: Brief description of the resource
- **relevance**: How the resource relates to the chapter content

### StudentProgress
- **student_id**: Identifier for the student
- **chapter_id**: Chapter being studied
- **status**: Progress status (not_started, in_progress, completed)
- **completion_date**: Date when chapter was completed
- **exercise_attempts**: Map of exercise attempts with results
- **time_spent**: Time spent on the chapter in minutes
- **notes**: Student's personal notes on the chapter

## Relationships

- **Chapter** contains many **Exercise** items
- **Chapter** references many **Resource** items
- **StudentProgress** tracks progress for each **Chapter**
- **Exercise** may depend on other **Exercise** items or **Chapter** items

## Validation Rules

- Chapter title must be between 10-100 characters
- Chapter content must be valid Markdown
- Learning objectives must be specific and measurable
- Exercise difficulty must match or be lower than chapter difficulty
- All resource URLs must be valid and accessible
- Student progress cannot be marked as completed without completing all required exercises

## State Transitions

- **Chapter Status**: not_started → in_progress → completed
- **Exercise Status**: not_attempted → in_progress → completed → reviewed
- **Student Progress**: can advance only when prerequisites are met