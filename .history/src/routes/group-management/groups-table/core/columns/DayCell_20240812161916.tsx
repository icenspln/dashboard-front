export default function DayCell({ value }: { value: string }) {
    
    function returnArabic(value: string) {
      switch (value) {
        case "Monday":
          return "الإثنين";
        case "Tuesday":
          return "الثلاثاء";
        case "Wednesday":
          return "الأربعاء";
        case "Thursday":
          return "الخميس";
        case "Friday":
          return "الجمعة";
        case "Saturday":
          return "السبت";
        case "Sunday":
          return "الأحد";
        default:
          return "N/A";
      }
    }
  
    return <>{returnArabic(value)}</>;
}