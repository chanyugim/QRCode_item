import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddPage from './pages/AddPage';
import ScanPage from './pages/ScanPage';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="pageList">
      <BrowserRouter>
        {/* 상단 네비게이션 바 */}
        <nav>
          <Link to="/" className="navLink">📦재고 목록</Link>
          <Link to="/물품 추가" className="navLink">➕물품 추가</Link>
          <Link to="/QR 스캔" className="navLink">📷QR 스캔</Link>
        </nav>

        {/* URL에 따라 바뀌는 화면 영역 */}
        <div className="pg">
          <Routes>
            <Route path="/" element={<Home pageName={"재고 목록"} number={count}/>} />
            <Route path="/물품 추가" element={<AddPage pageName={"물품 추가"} number={count} setNumber={setCount}/>} />
            <Route path="/QR 스캔" element={<ScanPage pageName={"QR 스캔"} number={count}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
