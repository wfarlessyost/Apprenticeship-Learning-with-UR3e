
"use strict";

let SetRemoteLoggerLevel = require('./SetRemoteLoggerLevel.js')
let StartMotion = require('./StartMotion.js')
let StopMotion = require('./StopMotion.js')
let SetDrivePower = require('./SetDrivePower.js')
let CmdJointTrajectory = require('./CmdJointTrajectory.js')
let GetRobotInfo = require('./GetRobotInfo.js')

module.exports = {
  SetRemoteLoggerLevel: SetRemoteLoggerLevel,
  StartMotion: StartMotion,
  StopMotion: StopMotion,
  SetDrivePower: SetDrivePower,
  CmdJointTrajectory: CmdJointTrajectory,
  GetRobotInfo: GetRobotInfo,
};
