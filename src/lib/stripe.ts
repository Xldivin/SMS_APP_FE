import stripe from 'stripe';

export async function createCheckoutSession(totalPrice: number, userId: string) {
    try {
        const privateKey = "sk_test_51NDsFIAtBcpHWb8jWy3pXohalapfOpnhc5xbl75jpcZChSt3Til8iFbmnPwgNP6zzSIcP7JbdYbZCXdiZTjq9o8300DISaFJ8K";

        const stripeClient = new stripe(privateKey, {
            apiVersion: '2024-04-10',
        });

        const chargeAmount = Math.round(totalPrice * 1.05);
        const lineItem = {
            price_data: {
                currency: "RWF",
                product_data: {
                    name: `Deposit - Original: ${totalPrice} RWF, Transaction Fee: 5%`,
                },
                unit_amount: chargeAmount,
            },
            quantity: 1
        };

        const session = await stripeClient.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [lineItem],
            success_url: `https://tuesday-app.vercel.app/dashboard/payment`,
            cancel_url: `https://tuesday-app.vercel.app/failed`,
            metadata: {
                userId: userId,
                displayAmount: totalPrice.toString()
            }
        });

        return session;
    } catch (error) {
        console.error("Error creating checkout session:", error);
        throw error;
    }
}
