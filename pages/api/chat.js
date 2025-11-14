
export default async function handler(req,res){
  const {msg}=req.body;
  res.json({reply:`انا Amarai — سأقوم بمساعدتك بعد ربط OpenAI. رسالتك كانت: ${msg}`});
}
