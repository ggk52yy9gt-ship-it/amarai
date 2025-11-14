
export default function Chat() {
  return (
    <div style={{ fontFamily:'sans-serif', padding:'20px' }}>
      <h2>🤖 محادثة Amarai</h2>
      <p>هنا ستكون محادثتك مع الذكاء الاصطناعي.</p>
      <textarea style={{ width:'100%', height:'150px', marginTop:'20px' }} placeholder="اكتب رسالتك..."></textarea>
      <button style={{ marginTop:'10px', width:'100%', padding:'12px', background:'#222', color:'#fff' }}>إرسال</button>
    </div>
  );
}
