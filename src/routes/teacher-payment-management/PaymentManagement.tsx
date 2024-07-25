import { Link } from "react-router-dom";
import { PaymentTable } from "./payment-table/PaymentTable";
import ButtonPrimary from "../../components/ButtonPrimary";



export default function PaymentManagement() {
  
  return (
    <section className="w-full min-h-screen p-4 bg-mainBg">
     <div className="flex justify-between items-center mb-4">
      <div className=" flex gap-[12px]">
      
        
        
      </div>
      <nav className="flex items-center gap-[12px]">
       <Link to={"/paymentmanagement"}>
       <ButtonPrimary text="تحميل قسيمة الدفع" active/>
       </Link>
       
      </nav>
      </div>
      <div>
        <PaymentTable  />
      </div>
    </section>
  );
}
