import connectMongo from "@/database/connect";
import Users from "@/models/Schema";
import { hash } from "bcryptjs";

export default async function handler(req,res){
    connectMongo().catch(err=>res.json({err:"Connection Failed..!"}));
    if(req.method==="POST"){
        if(!req.body){
            res.status(404).json({error:"Dont have any data"})
        }
        const {username,email,password}=req.body;
        const existUser=await Users.findOne({email});
        if(existUser)return res.status(422).json({message:"user already exist"})
        Users.create({username,email,password:await hash(password,12)},function(error,data){
            if(error)return res.status(404).json({error});
            res.status(201).json({status:true,user:data});
        })
    }else{
        res.status(500).json({message:"HTTP method invalid...!"})
    }
}