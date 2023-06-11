import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Holder from "../../../Holder";
import { Elements } from "@stripe/react-stripe-js";
import {  useParams } from "react-router-dom";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PK_PAYMENT);
    const price = useParams()

    return (
        <Holder>
            <div className="border-2 border-second rounded-lg w-5/6 mx-auto  h-[300px] p-10">
            <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={parseFloat(price.price)}/>
            </Elements>
            </div>
            </div>
            
        </Holder>
    );
};

export default Payment;