# Dr.-Bogert-Apprenticeship-Learning-Research
Performance guarantees for online apprenticeship learning with unknown features using the UR3-ER5-RG2 

Bring up simulation:
roslaunch full_robot full_robot.launch
roslaunch full_robot_moveit_config full_robot_moveit_planning_execution.launch sim:=true
roslaunch full_robot_moveit_config moveit_rviz.launch

Connect to robot: 
roslaunch ur_modern_driver ur3e_bringup.launch robot_ip:=<ROBOT'S_IP>
roslaunch full_robot_moveit_config full_robot_moveit_planning_execution.launch
roslaunch full_robot_moveit_config moveit_rviz.launch config:=true
