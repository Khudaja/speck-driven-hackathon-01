# Data Model: Digital Twin (Gazebo & Unity)

## Entities

### Educational Content
- **Fields**: title, description, content_type, difficulty_level, duration, prerequisites, learning_objectives, exercises, assessment
- **Relationships**: Contains multiple Exercises; Links to Resources
- **Validation**: Title required, content_type must be one of [chapter, tutorial, exercise, assessment]
- **State transitions**: draft → review → approved → published

### Student
- **Fields**: experience_level, background, progress_tracking, learning_preferences
- **Relationships**: Interacts with Educational Content; Submits Exercises; Tracks Progress
- **Validation**: experience_level must be one of [beginner, intermediate, advanced]
- **State transitions**: enrolled → active → completed

### Gazebo Environment
- **Fields**: physics_properties, gravity_settings, collision_models, simulation_parameters
- **Relationships**: Associated with Educational Content; Contains Models; Supports Sensors
- **Validation**: gravity_settings must be valid physics values
- **State transitions**: configured → running → paused → stopped

### Unity Environment
- **Fields**: scene_properties, lighting_settings, interaction_points, 3d_models, navigation_mesh
- **Relationships**: Associated with Educational Content; Contains 3D Models; Supports Interactions
- **Validation**: scene_properties must be valid Unity configurations
- **State transitions**: designed → built → deployed → interacted

### Sensor Simulation
- **Fields**: sensor_type, parameters, output_format, accuracy_metrics, environmental_factors
- **Relationships**: Associated with Educational Content; Configured in Gazebo/Unity Environments
- **Validation**: sensor_type must be one of [lidar, depth_camera, imu, gps, camera]
- **State transitions**: configured → active → producing_data → calibrated

### Exercise
- **Fields**: type, instructions, expected_outcomes, difficulty, time_estimate, feedback_criteria
- **Relationships**: Belongs to Educational Content; Assigned to Students; Has Solutions
- **Validation**: instructions required, difficulty must be appropriate for content level
- **State transitions**: created → assigned → submitted → reviewed → completed

## Relationships

```
Student --[interacts_with]--> Educational Content
Educational Content --[contains]--> Exercise
Educational Content --[uses]--> Gazebo Environment
Educational Content --[uses]--> Unity Environment
Gazebo Environment --[contains]--> Sensor Simulation
Unity Environment --[contains]--> Sensor Simulation
```