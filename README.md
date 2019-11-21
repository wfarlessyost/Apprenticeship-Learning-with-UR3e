# Apprenticeship-Learning-with-UR3e

<b> Bring up simulation </b>: <br>
roslaunch full_robot full_robot.launch <br>
roslaunch full_robot_moveit_config full_robot_moveit_planning_execution.launch sim:=true <br>
roslaunch full_robot_moveit_config moveit_rviz.launch <br>

<b> Connect to robot </b>: <br>
roslaunch ur_modern_driver ur3e_bringup.launch robot_ip:=<ROBOT'S_IP> <br>
roslaunch full_robot_moveit_config full_robot_moveit_planning_execution.launch <br>
roslaunch full_robot_moveit_config moveit_rviz.launch config:=true <br>
