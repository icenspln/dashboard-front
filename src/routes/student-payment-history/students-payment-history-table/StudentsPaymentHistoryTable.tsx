import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPaymentsHistory } from './core/_requests';
import { Payment } from './core/_models';
import { motion } from 'framer-motion';
import ConfirmButton from "../../../components/confirmButton";
export function StudentsPaymentHistoryTable() {
    const constraintsRef = useRef(null);
    const { id: userId, fullName } = useParams<{ id: string; fullName: string }>();
  
    const { data, isLoading, error } = useQuery<Payment[]>({
      queryKey: ["getPaymentsHistory", userId],
      queryFn: () => getPaymentsHistory(userId as string),
    });
  
    useEffect(() => {
      if (data) {
        console.log('Query successful, data:', data);
      }
      if (error) {
        console.error('Query error:', error);
      }
    }, [data, error]);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    const payments = data || [];
    console.log(payments);
  
    return (
      <section>
        <div>
          <p className="text-xl">تواريخ الدفع - {fullName}</p>
        </div>
        <div
          ref={constraintsRef}
          className="w-[1013px] overflow-x-clip border border-[#E2E8F0] rounded-xl mt-5"
        >
          <motion.table
            drag={"x"}
            dragConstraints={constraintsRef}
            dragElastic={0}
            dragMomentum={false}
            className="bg-white rounded-xl"
          >
            <thead>
              <tr className="border-b border-b-light">
                <th className="text-textGray text-start p-3 font-normal w-full min-w-[180px]">الرقم</th>
                <th className="text-textGray text-start p-3 font-normal w-full min-w-[180px]">التاريخ</th>
                <th className="text-textGray text-start p-3 font-normal w-full min-w-[180px]">القيمة</th>
                <th className="text-textGray text-start p-3 font-normal w-full min-w-[180px]">التوقيت</th>
                <th className="text-textGray text-start p-3 font-normal w-full min-w-[180px]"></th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{new Date(payment.date).toLocaleDateString('en-GB')}</td>
                  <td className="p-3">{payment.amount}</td>
                  <td className="p-3">{new Date(payment.date).toLocaleTimeString()}</td>
                  <td className="p-3">
                    <ConfirmButton
                      text="تحميل وصل الدفع"
                      className="text-white outline hover:bg-white hover:outline-blue hover:text-blue"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </section>
    );
  }