import { Schema,model,models } from "mongoose";
const usersSchema=new Schema({
    username:String,
    email:String,
    password:String
})
const Users=models.user||model("user",usersSchema)
export default Users