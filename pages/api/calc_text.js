
export default async function handler(req,res){
  const {text} = req.body;

  const foods = {
    "رز":200,"شاورما":650,"بيض":78,"خبز":120,"دجاج":240,"بطاطس":320,"بيبسي":150
  };

  let total = 0;
  for (const [k,v] of Object.entries(foods)){
    if (text.includes(k)) total+=v;
  }

  res.json({output:`مجموع السعرات التقريبي: ${total} سعرة`});
}
