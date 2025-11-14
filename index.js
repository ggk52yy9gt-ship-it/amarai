
export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #3b1c8d, #1a73e8, #000000)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px'
    }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>مرحباً بك في AmarAI</h1>
      <p style={{ fontSize: '20px', opacity: 0.9 }}>منصة ذكاء اصطناعي عربية بتصميم عصري</p>
    </div>
  );
}
