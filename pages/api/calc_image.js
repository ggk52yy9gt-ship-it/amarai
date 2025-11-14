
import formidable from 'formidable';
import fs from 'fs';
export const config = { api:{ bodyParser:false } };

export default async function handler(req,res){
  const form = new formidable.IncomingForm();
  form.parse(req, async (err,fields,files)=>{
    if(err) return res.status(500).json({error:'error'});

    const imageData = fs.readFileSync(files.image.filepath).toString('base64');

    // Vercel AI / OpenAI Vision call placeholder
    res.json({
      output: "📸 تم استلام الصورة — اربطي مفتاح OpenAI في ENV ليعمل التحليل الحقيقي."
    });
  });
}
