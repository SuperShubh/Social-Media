import postmessage from "../models/postmessage.js";
export const getpost= async (req,res) => {
    try {
        const postmessages =await postmessage.find();
        res.status(200).json(postmessages);

    } catch (error) {
        res.status(404).json({message: error.message});

    }
}
export const createpost= async (req,res)=>{
        const body=req.body;
        const newpost=new postmessage(post);

    try {
  await   newpost.save();
  res.status(201).json(newpost);
} 
catch (error) {
    res.status(409 ).json({message: error.message});
   
}
}