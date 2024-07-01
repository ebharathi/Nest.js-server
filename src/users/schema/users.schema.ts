import { Schema, Document } from 'mongoose';

export interface User extends Document{
    name:string;
    email:string;
    age:number
}

export const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
  });



//RESPONSE BODY
export interface responseBody{
    error:Boolean,
    message:string,
}