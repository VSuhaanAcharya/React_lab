export default function About() {
  return (
    <div style={{ animation: 'fadeIn 0.8s ease-in' }}>
      <h2 style={{ color: '#28a745' }}> About the Project</h2>
      <hr style={{ width: '50px', border: '2px solid #28a745' }} />
      <p style={{ lineHeight: '1.6', color: '#555' }}>
        This program explores the 
        <b> Single Page Application (SPA)</b> architecture using <i>react-router-dom v6</i>.
      </p>
    </div>
  );
}
