const mongoose=require('mongoose')


const connectDB=async()=>{
    try {
        const res=await mongoose.connect(process.env.CONNECTION_STR) 
        if(res){
            console.log("connected...");  
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB