import User from "../Models/user-schema.js";

export const userSignup=async(req,res)=>{
    try {

        const exist= await User.findOne({username: req.body.username})
        if(exist){
            return res.status(401).json({message:"USername already exists"})
        }

        // console.log(req.body);
        const user=req.body;
        const newUser= new User(user);
        await newUser.save();

        return res.status(200).json({message:user})

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}