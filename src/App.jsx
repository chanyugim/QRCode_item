import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddPage from './pages/AddPage';
import ScanPage from './pages/ScanPage';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* 상단 네비게이션 바 */}
      <nav style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>재고 목록</Link>
        <Link to="/add" style={{ marginRight: '15px' }}>물품 추가</Link>
        <Link to="/scan">QR 스캔</Link>
      </nav>

      {/* URL에 따라 바뀌는 화면 영역 */}
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/scan" element={<ScanPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
