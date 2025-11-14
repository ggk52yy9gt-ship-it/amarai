
import { useState } from 'react';

export default function Camera(){
  const [file,setFile]=useState(null);
  const [result,setResult]=useState(null);

  async function handleUpload(){
    const form = new FormData();
    form.append('image', file);

    const res = await fetch('/api/calc_image',{
      method:'POST',
      body:form
    });

    const data = await res.json();
    setResult(data);
  }

  return(
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h2>📷 حساب السعرات من الصورة</h2>

      <input type="file" accept="image/*" onChange={(e)=>setFile(e.target.files[0])} style={{marginTop:20}}/>

      <button onClick={handleUpload} style={{width:'100%',padding:15,marginTop:20,background:'#222',color:'#fff'}}>رفع الصورة</button>

      {result && (
        <div style={{marginTop:20,background:'#eee',padding:15,borderRadius:10}}>
          <h3>النتيجة:</h3>
          <p>{result.output}</p>
        </div>
      )}
    </div>
  )
}
