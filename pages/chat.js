
import { useState } from 'react';

export default function Chat(){
  const [msg,setMsg]=useState('');
  const [result,setResult]=useState(null);

  async function send(){
    const res = await fetch('/api/chat',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({msg})
    });
    const data = await res.json();
    setResult(data.reply);
  }

  return(
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h2>🤖 محادثة Amarai</h2>
      <textarea value={msg} onChange={e=>setMsg(e.target.value)} style={{width:'100%',height:150,marginTop:20}} placeholder="اسأل Amarai عن دايتك..."/>
      <button onClick={send} style={{width:'100%',padding:15,marginTop:10,background:'#000',color:'#fff'}}>إرسال</button>
      {result && <div style={{marginTop:20,background:'#eee',padding:15}}>{result}</div>}
    </div>
  )
}
