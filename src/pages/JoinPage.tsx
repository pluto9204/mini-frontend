import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {join} from '../services/authService';

const JoinPage: React.FC = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleJoin = async (e : React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await join({id, password, username, email, phonenumber});

            const res_code = result.res_code;
            if(res_code == '00') {
              alert("회원가입 성공");
              navigate('/login');
            } else {
              alert(result.res_message);
            }
        } catch (error) {
            console.log(error);
            setError("에러");
        }
    }

    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">회원가입</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">
              아이디
            </label>
            <input
              type="text"
              id="id"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              onChange={e => setId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              이름
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              휴대폰번호
            </label>
            <input
              type="text"
              id="phonenumber"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              onChange={e => setPhonenumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              이메일
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            onClick={handleJoin}
          >
            회원가입
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          이미 계정이 있으신가요?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            로그인
          </a>
        </p>
        {error && <p className="mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
}

export default JoinPage;