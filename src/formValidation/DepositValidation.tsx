import * as Yup from "yup";

export const getDepositValidationSchema = (minAmount:any) => {
    return Yup.object().shape({
      amount: Yup.number()
        .min(minAmount, `The minimum amount is ${minAmount}`)
        .required('Amount is required'),
    });
};
