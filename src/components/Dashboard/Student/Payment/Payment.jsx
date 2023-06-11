import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Holder from "../../../Holder";
import { Elements } from "@stripe/react-stripe-js";
import {  useParams } from "react-router-dom";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PK_PAYMENT);
    const { id, price } = useParams();
    console.log(id, price)

    return (
        <Holder>
            <div className="border-2 border-second rounded-lg w-5/6 mx-auto p-10">
            <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={parseFloat(price)} selectId={id}/>
            </Elements>
            </div>
            </div>
            
        </Holder>
    );
};

export default Payment;