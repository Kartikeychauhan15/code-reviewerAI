const generateContent = require("../services/ai.servics");

const aiService = ("../services/ai.service");

module.exports.getReview =  async(req,res)=>{
    const code = req.body.code;
    if(!code){
        return res.status(400).send("prompt is required");
    }

    const response = await generateContent(code);
    res.send(response);
}