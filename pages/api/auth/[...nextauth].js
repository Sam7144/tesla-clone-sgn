import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "@/database/connect";
import Users from "@/models/Schema";
import { compare } from "bcryptjs";
export default NextAuth({
providers:[
    GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
        name:"Credentials",
        async authorize(credentials,req){
            connectMongo().catch(err=>{err:"Connection Failed"});
            const result=await Users.findOne({email:credentials.email});
            if(!result){
                throw new Error("No user Found with that email")
            }
            const checkPassword=await compare(credentials.checkPassword,result.password);
            if(!checkPassword||result.email!==credentials.email){
                throw new Error("username or password does not match")
            }
        }
    })
],
secret: process.env.SECRET,
})