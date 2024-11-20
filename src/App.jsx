import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Welcome to the React App!</h2>
        <p>This is a simple example with components.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
