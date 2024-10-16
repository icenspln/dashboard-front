import { GetStudentByCardIdType } from "./core/_models";
import ConfirmButton from "../../../components/confirmButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    submitPayment,
    updateTotalDebt,
    updateTotalToPay,
} from "./core/_requests";
import { useState } from "react";
import toast from "react-hot-toast";
import { PricingButton } from "../../../components/PricingButtonEdit";
import { useNavigate } from "react-router-dom";

export function StudentPaymentTable({
    studentInfo,
}: {
    studentInfo: GetStudentByCardIdType;
}) {
    const queryClient = useQueryClient();
    const [paymentAmount, setPaymentAmount] = useState<string>("");
    const navigate = useNavigate();

    //payment
    const paymentMutation = useMutation({
        mutationKey: ["paymentMutation"],
        mutationFn: (data: { studentId: string; amount: number }) =>
            submitPayment(data),
        onSuccess: (data, variables) => {
            toast.success("Payment successful");
            setPaymentAmount("");
            queryClient.invalidateQueries({
                queryKey: ["getStudentByCardId"],
            });
            const totalToPay =
                data.newfinancials.totalOutstandingBalance +
                data.newfinancials.totalDebts;
            navigate("/receipt-print", {
                state: {
                    studentInfo: studentInfo,
                    paymentAmount: variables.amount,
                    totalToPay: totalToPay,
                },
            });
        },
        onError: (err: any) => {
            toast.error("something went wrong");
            if (
                err.response.data.message ==
                "Payment amount exceeds total amount due"
            ) {
                toast.error("Payment amount exceeds total amount due");
            }
            setPaymentAmount("");
            queryClient.invalidateQueries({
                queryKey: ["getStudentByCardId"],
            });
        },
    });
    const submitPaymentMutation = () => {
        if (paymentAmount && studentInfo.student._id) {
            const data = {
                studentId: studentInfo.student._id,
                amount: +paymentAmount,
            };
            paymentMutation.mutate(data);
        }
    };

    //total to pay
    const totalToPayMutation = useMutation({
        mutationKey: ["updateTotalToPayMutation"],
        mutationFn: (data: { studentId: string; newTotalAmount: number }) =>
            updateTotalToPay(data),
        onSuccess: () => {
            toast.success("Debt has been updated");
            queryClient.invalidateQueries({
                queryKey: ["getStudentByCardId"],
            });
        },
        onError: (err: any) => {
            const msg = err.response.data.message;
            toast.error("something went wrong");
            if (
                msg ==
                "New total amount cannot be greater than total outstanding balance"
            ) {
                toast.error("amount is bigger than the debt");
            }
        },
    });
    const submitTotalToPayMutation = (amount: string | number) => {
        if (amount && studentInfo.student._id) {
            const data = {
                studentId: studentInfo.student._id,
                newTotalAmount: +amount,
            };
            totalToPayMutation.mutate(data);
        }
    };

    //total debt
    const totalDebtMutation = useMutation({
        mutationKey: ["updateTotalDebt"],
        mutationFn: (data: { studentId: string; newTotalDebt: number }) =>
            updateTotalDebt(data),
        onSuccess: () => {
            toast.success("debts has been modified");
            queryClient.invalidateQueries({
                queryKey: ["getStudentByCardId"],
            });
        },
        onError: (err: any) => {
            const msg = err.response.data.message;
            toast.error("something went wrong");
            if (
                msg ==
                "New total debt cannot be greater than total outstanding balance"
            ) {
                toast.error(
                    "New total debt cannot be greater than total outstanding balance"
                );
            }
        },
    });
    const submitTotalDebtMutation = (amount: string | number) => {
        if (amount && studentInfo.student._id) {
            const data = {
                studentId: studentInfo.student._id,
                newTotalDebt: +amount,
            };
            totalDebtMutation.mutate(data);
        }
    };
    return (
        <div className="  border border-[#E2E8F0] rounded-xl ">
            <div className=" rounded-xl  overflow-hidden">
                <div className="bg-mainBg flex flex-col md:flex-row justify-between gap-3 md:text-center">
                    <div className="bg-mainBg p-4 flex flex-col gap-3 ">
                        <h3 className="text-lg text-textGray">
                            Total paid this month
                        </h3>
                        <p className="underline">
                            {studentInfo.totalPaidThisMonth}
                        </p>
                    </div>
                    <div className="bg-mainBg p-4 flex flex-col gap-3 ">
                        <h3 className="text-lg text-textGray">
                            Total payment needed
                        </h3>
                        <div className="underline">
                            <PricingButton
                                submit={submitTotalToPayMutation}
                                initValue={studentInfo.totalOutstandingBalance}
                            />
                        </div>
                    </div>
                    <div className="bg-mainBg p-4 flex flex-col gap-3 ">
                        <h3 className="text-lg text-textGray">Debt</h3>
                        <div className="underline">
                            <PricingButton
                                submit={submitTotalDebtMutation}
                                initValue={studentInfo.totalDebts}
                            />
                        </div>
                    </div>
                    <div className="bg-mainBg p-4 flex flex-col gap-3 ">
                        <h3 className="text-lg text-textGray">Total</h3>
                        <p className="underline">
                            {studentInfo.totalOutstandingBalance +
                                studentInfo.totalDebts}
                            {/* <PricingButton /> */}
                        </p>
                    </div>
                    {/* {table.getHeaderGroups().map((headerGroup) => (
            <div
              key={headerGroup.id}
              className="grid grid-cols-4  text-gray-400"
            >
              {headerGroup.headers.map((header) => (
                <div key={header.id} className="text-center py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </div>
              ))}
            </div>
          ))}
          {table.getRowModel().rows.map((row) => (
            <div key={row.id} className="grid grid-cols-4  py-2">
              {row.getVisibleCells().map((cell) => (
                <div
                  key={cell.id}
                  className="text-center  flex justify-center align-center"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          ))} */}
                </div>
                <div className="flex items-center justify-between p-4 bg-white gap-[12px]">
                    <input
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        value={paymentAmount}
                        type="text"
                        className=" border border-gray-300 outline-gray-300 rounded-lg p-2 w-1/2"
                        placeholder="2000"
                    />
                    <ConfirmButton
                        text="New Payment"
                        className="min-w-[157px] text-white"
                        onClick={submitPaymentMutation}
                    />
                </div>
            </div>
        </div>
    );
}
