import * as Yup from "yup";

export const MomoWithdrawalValidation = Yup.object({
    amount: Yup.number()
    .required('Amount is required'),
    number: Yup.number()
    .required('Momo Number is required'),
});
