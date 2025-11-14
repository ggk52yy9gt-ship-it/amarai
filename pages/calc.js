
import { useState } from 'react';

export default function Calc(){
  const [text,setText]=useState('');
  const [result,setResult]=useState(null);

  async function handleCalc(){
    const res = await fetch('/api/calc_text',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({text})
    });
    const data = await res.json();
    setResult(data);
  }

  return(
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h2>🔢 حساب السعرات من النص</h2>
      <textarea value={text} onChange={e=>setText(e.target.value)} style={{width:'100%',height:150,marginTop:20}} placeholder="مثال: اكلت شاورما ورز وبيبسي"></textarea>
      <button onClick={handleCalc} style={{width:'100%',padding:15,marginTop:10,background:'#4CAF50',color:'#fff'}}>احسب</button>

      {result && (
        <div style={{marginTop:20,background:'#eee',padding:15,borderRadius:10}}>
          <h3>النتيجة:</h3>
          <p>{result.output}</p>
        </div>
      )}
    </div>
  )
}
