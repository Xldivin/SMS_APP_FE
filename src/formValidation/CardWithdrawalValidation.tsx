import * as Yup from "yup";

export const CardWithdrawalValidation = Yup.object({
    amount: Yup.number()
    .required('Amount is required'),
    bank: Yup.number()
    .required('Bank Acc is required'),
    sortCode: Yup.string()
    .required('sortCode is required'),
});
