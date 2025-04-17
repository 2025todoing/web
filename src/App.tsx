import { Global } from '@emotion/react';
import { globalStyles } from './styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import BottomNavigation from './components/Navigation/BottomNavigation';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/login" element={
          isLoggedIn ? <Navigate to="/feed" replace /> : <LoginPage onLogin={handleLogin} />
        } />
        <Route path="/" element={
          isLoggedIn ? <Navigate to="/feed" /> : <Navigate to="/login" />
        } />
        <Route path="/feed" element={
          isLoggedIn ? (
            <>
              <MainPage />
              <BottomNavigation />
            </>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/community" element={
          isLoggedIn ? (
            <>
              <div style={{ padding: "20px" }}>커뮤니티 페이지</div>
              <BottomNavigation />
            </>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/call" element={
          isLoggedIn ? (
            <>
              <div style={{ padding: "20px" }}>통화 페이지</div>
              <BottomNavigation />
            </>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/message" element={
          isLoggedIn ? (
            <>
              <div style={{ padding: "20px" }}>메시지 페이지</div>
              <BottomNavigation />
            </>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/more" element={
          isLoggedIn ? (
            <>
              <div style={{ padding: "20px" }}>더보기 페이지</div>
              <BottomNavigation />
            </>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
