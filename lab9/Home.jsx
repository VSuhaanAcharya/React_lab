export default function Home() {
  return (
    <div style={{ animation: 'fadeIn 0.8s ease-in' }}>
      <h2 style={{ color: '#007bff' }}> Welcome Home</h2>
      <hr style={{ width: '50px', border: '2px solid #007bff' }} />
      <p style={{ lineHeight: '1.6', color: '#555' }}>
        This is the landing page of the application. React Router allows us to swap 
        this entire view without refreshing the browser window.
      </p>
    </div>
  );
}
