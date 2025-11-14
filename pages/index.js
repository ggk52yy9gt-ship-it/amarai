
export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '450px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        مرحباً بك في <span style={{ color: '#4CAF50' }}>Amarai</span>
      </h2>

      <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '12px', marginBottom: '20px' }}>
        <p>💬 أدخل الأكل الذي أكلته:</p>
        <textarea style={{ width: '100%', height: '90px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} placeholder="مثال: اكلت شطة، بيض، شاورما…"></textarea>
        <button style={{ width: '100%', marginTop: '12px', padding: '12px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '8px' }}>
          🔍 حساب السعرات
        </button>
      </div>

      <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '12px', marginBottom: '20px' }}>
        <p>📷 أو صوّر الأكل:</p>
        <a href="/camera"><button style={{ width: '100%', padding: '12px', background: '#4CAF50', color: 'white', borderRadius: '8px', border: 'none' }}>
          فتح الكاميرا 📸
        </button></a>
      </div>

      <a href="/chat">
        <button style={{ width: '100%', padding: '15px', background: '#222', color: 'white', borderRadius: '10px', border: 'none', fontSize: '18px' }}>
          🤖 محادثة Amarai الذكية
        </button>
      </a>
    </div>
  );
}
