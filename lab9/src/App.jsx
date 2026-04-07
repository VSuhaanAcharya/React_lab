import React from 'react';
import { Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Active Link Styling
  const navLinkStyle = ({ isActive }) => ({
    padding: '10px 20px',
    margin: '0 10px',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    color: isActive ? '#ffffff' : '#007bff',
    backgroundColor: isActive ? '#007bff' : 'transparent',
    border: '1px solid #007bff',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', minHeight: '100vh', backgroundColor: '#f4f7f6' }}>
      {/* Persistent Navigation Header */}
      <header style={{ backgroundColor: '#fff', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>React Lab: Program 9</h1>
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <NavLink to="/" style={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" style={navLinkStyle}>About</NavLink>
          <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>
        </nav>
      </header>

      {/* Dynamic Content Area */}
      <main style={{ maxWidth: '800px', margin: '40px auto', padding: '30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
        
        {/* Current Path Indicator (Useful for Viva) */}
        <p style={{ fontSize: '0.8rem', color: '#888' }}>Current Route: <b>{location.pathname}</b></p>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 Page with Programmatic Redirection */}
          <Route path="*" element={
            <div>
              <h2 style={{ color: '#dc3545' }}>Oops! Page Not Found</h2>
              <button 
                onClick={() => navigate('/')} 
                style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '5px' }}
              >
                Return to Home
              </button>
            </div>
          } />
        </Routes>
      </main>

      <footer style={{ textAlign: 'center', color: '#aaa', marginTop: '20px' }}>
        <p>© 2025 VTU Laboratory - BCSL657B</p>
      </footer>
    </div>
  );
}

export default App;
