
export default function CalcPage() {
  return (
    <div style={{ fontFamily:'sans-serif', padding:'20px' }}>
      <h2>🔍 حساب السعرات</h2>
      <p>أدخل الأكل ليتم حساب السعرات.</p>
      <textarea style={{ width:'100%', height:'120px'}}></textarea>
      <button style={{ marginTop:'10px', width:'100%', padding:'12px', background:'#4CAF50', color:'#fff' }}>احسب</button>
    </div>
  );
}
