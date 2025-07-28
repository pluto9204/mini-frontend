import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import ApplyLoanPage from './pages/ApplyLoanPage';
import PrivateRoute from './pages/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 루트로 접근하면 로그인페이지로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* 로그인 페이지 */}
        <Route path="/login" element={<LoginPage />} />

        {/* 회원가입 페이지 */}
        <Route path="/join" element={<JoinPage />} />

        {/* 대출신청 페이지 */}
        <Route path="/applyLoan" element={<PrivateRoute />} >
          <Route path="" element={<ApplyLoanPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;