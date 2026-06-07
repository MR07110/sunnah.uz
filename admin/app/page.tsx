import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1f2125',
      color: '#71baba'
    }}>
      <h1>SUNNAH.UZ Admin</h1>
      <Link href="/dashboard" style={{ color: '#71baba', marginTop: '20px' }}>
        Dashboard →
      </Link>
    </div>
  );
}
