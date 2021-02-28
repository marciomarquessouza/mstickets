import { Document, Schema, Model, model } from "mongoose";

export interface IUser {
  id: string;
  email: string;
  password: string;
  salt: string;
  phone: number;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: false },
});

export const User: Model<IUser & Document> = model("User", UserSchema);
