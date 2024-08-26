import { Link } from "react-router-dom";
import { GetStudentByCardIdType } from "../attendance-register/Attendance-table/core/_models";

export default function ReceiptPrintManagement  (
  {studentInfo,
   

  }
   :
   {studentInfo : GetStudentByCardIdType
   

   })  {
  const handlePrint = () => {
    const printContent = document.getElementById('print-section')?.innerHTML;

    if (printContent) {
      const printWindow = window.open('', '', 'width=700,height=600');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <style>
                @media print {
                  body {
                    width: 72mm;
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                  }
                  /* Hide browser default headers and footers */
                  @page { 
                    margin: 0;
                  }
                }
                img {
                  width:70;
                  height:70;
                  
                }
                .logo-school{
                  display:flex;
                  justify-content:space-between                
                }    
                h1 {
                  font-size: 22px;
                  font-weight: bold;
                  text-align: center;
                }
                p {
                  font-size: 18px;
                  text-align: right;
                  margin: 4px 0;
                }
                .content {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  padding: 10px;
                }
                .date {
                  text-align: left;
                  font-size: 10px;
                  margin-bottom: 5px;
                }
              </style>
            </head>
            <body onload="window.print(); window.close();">
              <div class="content">
                <div class="date">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</div>
                <div>${printContent}</div>
              </div>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  };
  return (
    <div className="p-4">
      <div id="print-section" className="w-[72mm] mx-auto bg-white p-4">
        <div className='logo-school'>
          <img src="src\assets\TemporaryLogo.png" />
          <h2>سراج المعرفة</h2>
        </div>
        <h1 className="text-lg font-bold text-center">وصل الدفع</h1>
        <div key={studentInfo.student._id} className="mt-4">
          <p className="text-2xl">الإسم: {studentInfo.student.firstName} </p>
          <p className="text-2xl">اللقب: {studentInfo.student.lastName}</p>
          <p className="text-2xl">المستوى: {studentInfo.student.level}</p>
          <p className="text-2xl">المواد: {studentInfo.student.groups} </p>
          <p className="text-2xl">الثمن الذي تم دفعه:  {studentInfo.totalPaidThisMonth}</p>
          <p className="text-2xl">الباقي: {studentInfo.totalOutstandingBalance} </p>
        </div>
      </div>
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handlePrint}
      >
        Print this receipt
      </button>
      <Link to={'/receiptprint'}/>
    </div>
  );
};


