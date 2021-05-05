/*
  1. Import everything you need to be able to create a mongoDB Collection
  2. Export a created collection object named Contact_Info_Collection_Access
  3. Ensure your export is imported correctly in server/main.js
*/
import {Mongo} from "meteor/mongo";

export const Contact_Info_Collection_Access = new Mongo.Collection("contact");
