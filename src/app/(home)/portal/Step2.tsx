import { PaystackButton } from "react-paystack";
import { formatAmount } from "./Step1";
import { Step2Data } from "./register_student/registerStudentTypes";
import { registerStudent } from "@/lib/axios/requests";

type Step2Props = {
  step2Data: React.RefObject<Step2Data | null>;
  getPaymentReference: (reference: string) => void;
};

export default function Step2({ step2Data, getPaymentReference }: Step2Props) {
  const handlePaystackSuccessAction = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    getPaymentReference(reference.reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
  };

  const componentProps = {
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY as string,
    email: step2Data.current?.email != undefined ? step2Data.current.email : "",
    amount:
      step2Data?.current?.amount != undefined
        ? step2Data.current.amount * 100
        : 0,
    text: "Pay Now",
    onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <section>
      <h2 className="text-center font-righteous text-xl text-primary">
        Details
      </h2>
      <div className="mx-auto flex flex-col gap-2 p-2 shadow-lg md:w-[60%]">
        <table className="w-full table-auto border-separate border-spacing-2 p-2 font-inter">
          <tbody>
            <tr>
              <td className="font-semibold text-primary">Name</td>
              <td className="capitalize">
                {step2Data?.current?.lastName} {step2Data?.current?.firstName}
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-primary">Email</td>
              <td className="">{step2Data?.current?.email}</td>
            </tr>
            <tr>
              <td className="font-semibold text-primary">Class</td>
              <td>{step2Data?.current?.level}</td>
            </tr>
            <tr>
              <td className="font-semibold text-primary">Amount</td>
              <td>{`${formatAmount(
                step2Data?.current?.amount != undefined
                  ? step2Data?.current?.amount
                  : 0,
              )}`}</td>
            </tr>
          </tbody>
        </table>
        <PaystackButton
          {...componentProps}
          className="mx-auto self-center bg-primary px-4 py-2 text-white"
        />
      </div>
    </section>
  );
}
