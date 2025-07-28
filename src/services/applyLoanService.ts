import type {ApplyLoanCredential} from '../types/apply';
import axiosLoanApplyInstance from './axios';

export const applyLoan = async (credentials: ApplyLoanCredential) => {
    try{
        const response = await axiosLoanApplyInstance.post('/loan/apply/requestLoan', credentials);
        return response.data;
    } catch(error) {
        console.log("apply failed : " + error);
        throw error;
    }
}

