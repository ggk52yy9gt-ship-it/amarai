
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{fontFamily:'sans-serif',padding:20,maxWidth:450,margin:'0 auto'}}>
      <h2 style={{textAlign:'center'}}>Amarai — الذكاء الغذائي</h2>

      <Link href="/calc">
        <button style={{width:'100%',padding:15,marginTop:20,background:'#4CAF50',color:'#fff',borderRadius:10,border:'none'}}>
          🔢 حساب السعرات من النص
        </button>
      </Link>

      <Link href="/camera">
        <button style={{width:'100%',padding:15,marginTop:20,background:'#222',color:'#fff',borderRadius:10,border:'none'}}>
          📷 حساب السعرات من الصورة (ذكاء صناعي)
        </button>
      </Link>

      <Link href="/chat">
        <button style={{width:'100%',padding:15,marginTop:20,background:'#000',color:'#fff',borderRadius:10,border:'none'}}>
          🤖 محادثة Amarai
        </button>
      </Link>
    </div>
  );
}
