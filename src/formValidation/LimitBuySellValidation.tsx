import * as Yup from "yup";

export const LimitBuySellValidation = Yup.object({
    stock: Yup.string()
    .required('stock is required'),
    price: Yup.string()
    .required('price is required'),
    quantity: Yup.number()
    .required('quantity is required'),
});
