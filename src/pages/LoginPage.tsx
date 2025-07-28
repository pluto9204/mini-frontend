import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const LoginPage: React.FC = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    //const [error, setError] = useState('');

    const handleLogin = async (e : React.FormEvent) => {
        e.preventDefault(); // 새로고침 방지!
        try {
            const result = await login({id, password});
            
            const res_code =  result.res_code;
            if(res_code == '00'){
                //토큰 저장
                localStorage.setItem('token', result.token);

                navigate('/applyLoan');
            } else {
                alert(result.res_message);
            }
        } catch(error) {
            //setError('로그인 실패, 아이디와 비밀번호를 확인해주세요.');
            console.log('로그인 실패 : ' + error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 m-0 p-0">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">로그인</h2>
            <form>
                <div className="mb-4">
                <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                    아이디
                </label>
                <input
                    type="text"
                    id="id"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    onChange={e => setId(e.target.value)}
                />
                </div>
                <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    비밀번호
                </label>
                <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    onChange={e => setPassword(e.target.value)}
                />
                </div>
                <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                onClick={handleLogin}
                >
                로그인
                </button>
            </form>
            <p className="mt-4 text-sm text-center">
                계정이 없으신가요?{' '}
                <a href="/join" className="text-blue-600 hover:underline">
                회원가입
                </a>
            </p>
            </div>
        </div>
    );
};

export default LoginPage;