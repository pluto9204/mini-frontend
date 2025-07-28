import React, {useState} from "react";
import {applyLoan} from '../services/applyLoanService'

const ApplyLoanPage: React.FC = () => {
    const [userId, setUserId] = useState('');
    const [amount, setAmount] = useState<number>(0);
    const [monthlyIncome, setMonthlyIncome] = useState<number>(0);
    const [purpose, setPurpose] = useState('');
  const [message, setMessage] = useState('');

    const handleApplyLoan = async (e : React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await applyLoan({userId, amount, monthlyIncome, purpose});

            const res_code = result.res_code;
            if(res_code == '00') {
                setMessage("대출신청 완료");
            } else {
                setMessage("대출신청 실패");
            }
        } catch(error) {
            console.log(error);
            setMessage("에러");
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">대출 신청</h2>
        <form onSubmit={handleApplyLoan} className="space-y-4">
            <input
            name="userId"
            placeholder="사용자 ID"
            onChange={e => setUserId(e.target.value)}
            className="border w-full px-3 py-2 rounded"
            required
            />
            <input
            name="amount"
            type="number"
            placeholder="대출 금액"
            onChange={e => setAmount(Number(e.target.value))}
            className="border w-full px-3 py-2 rounded"
            required
            />
            <input
            name="income"
            type="number"
            placeholder="연소득"
            onChange={e => setMonthlyIncome(Number(e.target.value))}
            className="border w-full px-3 py-2 rounded"
            required
            />
            <select
            name="purpose"
            onChange={e => setPurpose(e.target.value)}
            className="border w-full px-3 py-2 rounded"
            required
            >
            <option value="">용도 선택</option>
            <option value="주택">주택</option>
            <option value="사업자금">사업자금</option>
            <option value="개인소비">개인소비</option>
            </select>

            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
            신청하기
            </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
        </div>
    ) ;
};

export default ApplyLoanPage;