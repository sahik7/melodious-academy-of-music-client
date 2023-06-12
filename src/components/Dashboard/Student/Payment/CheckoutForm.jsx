import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';
import useAxiosProtect from '../../../../hooks/useAxiosProtect';
import { IdentityContext } from '../../../../provider/IdentityProvider';
import { useQuery } from '@tanstack/react-query';


const CheckoutForm = ({ price, selectId }) => {
    console.log(price, selectId)
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(IdentityContext)
    const { instance } = useAxiosProtect()
    const [clientSecret, setClientSecret] = useState("");
    const [inProcess, setInProcess] = useState("");



    const { data: enrolled = {}, refetch } = useQuery(["enrolled-classes"], async () => {
        const res = await instance(`/my-classes/${user?.email}?specificClass=${selectId}`);
        console.log(res.data)
        return res.data;
    });

    console.log(enrolled)

    useEffect(() => {
        instance.post("/create-payment-intent", { price })
            .then((data) => {
                // console.log(data.data.clientSecret)
                setClientSecret(data.data.clientSecret);
            });
    }, [price]);


    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        })
        if (error) {
            toast.error(error.message)
        } else {
            // console.log(paymentMethod)
        }
        setInProcess(true)
        console.log(card)
        const { paymentIntent, error: approveError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "unknown user",
                    email: user?.email || "unknown user",
                }
            }
        })
        if (approveError) {
            toast.error(approveError)
        }
        setInProcess(false)
        console.log("intent", paymentIntent)
        if (paymentIntent.status === "succeeded") {

            toast.success("Payment Complete Successfully")
            instance.patch(`/classes/${selectId}?payment=successful`).then(data => {
                if (enrolled) {
                    instance.post("/enrolled", enrolled).then(data => {
                        toast.success("enrolled success")
                        instance.delete(`/my-classes/${selectId}`).then(data => console.log(data)).catch(error => console.log(error))
                    }).catch(error => console.log(error))
                }
                toast.success("available seats successfully done")
            })
            
            const paymentId = paymentIntent.id
            const paymentInfo = {
                email: user?.email,
                paymentId, price, date: new Date()
            }
            instance.post("/payments", paymentInfo).then(data => {})
        }
    }



    return (
        <form onSubmit={handlePayment}>
            <CardElement className="shadow-md p-4 border-2 border-second"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="text-center mt-20">
                <button className="btn-primary py-2 px-3 w-1/3" type="submit" disabled={!stripe || !clientSecret || inProcess}>
                    Confirm Payment
                </button>

            </div>
        </form>
    );
};

export default CheckoutForm;