"use strict";

/* eslint-disable new-cap */

import Business from "./business/Business.js";
//import BusinessHour from "./business/BusinessHour.js";
//import Company from "./business/Company.js";

import Address from "./geographic/Address.js";

//import Participation from "./participation/Participation.js";
//import ParticipationMember from "./participation/Participation.js";
//import PrivateMessage from "./participation/PrivateMessage.js";

import User from "./user/User.js";
import Role from "./user/Role.js";
//import UserPhoto from "./user/UserPhoto.js";

// Enums
import Activation from "./enum/Activation";
import ImageType from "./enum/ImageType";
import UserStatus from "./enum/UserStatus";
import UserType from "./enum/UserType";
import AgeGroup from "./enum/AgeGroup";
import Horoscope from "./enum/Horoscope";
import Gender from "./enum/Gender";
import Region from "./enum/Region.js";

  /**
   * Cloud Model.
   * @namespace model
   */
export default {
  Business,
  //BusinessHour,
  //Company,

  Address,

  //Participation,
  //ParticipationMember,
  //PrivateMessage,

  User,
  Role,
  //UserPhoto,

  // Enums
  Activation,
  ImageType,
  UserStatus,
  UserType,
  AgeGroup,
  Horoscope,
  Gender,
  Region
};
