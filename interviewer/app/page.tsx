import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Teacher's Recruiter Platform</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
                Connect with top educators and streamline your recruitment process.
            </p>
            <Link href="/interview">
                <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}>
                    Go to Interview Page
                </button>
            </Link>
        </div>
    );
}