# Apprenticeship-Learning-with-UR3e

<b> Bring up simulation </b>: <br>
roslaunch full_robot full_robot.launch <br>
roslaunch full_robot_moveit_config full_robot_moveit_planning_execution.launch sim:=true <br>
rosrun rg2_gripper gripper_controller.py <br>
roslaunch full_robot_moveit_config moveit_rviz.launch <br>


<b> Connect to physical robot over ethernet </b>: <br>
roslaunch ur_modern_driver ur3e_bringup.launch robot_ip:=<ROBOT'S_IP> <br>
roslaunch full_robot_moveit_config full_robot_moveit_planning_execution.launch <br>
rosrun rg2_gripper gripper_controller.py <br>
roslaunch full_robot_moveit_config moveit_rviz.launch config:=true <br>
rosrun full_robot RG2Grip.py <br>
