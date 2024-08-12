export default function InstitutionCell({ value }: { value: string }) {
  function returnArabic(value: string) {
    switch (value) {
      case "primarySchool":
        return "الإبتدائي";
        break;
      case "middleSchool":
        return "المتوسط";
        break;
      case "highSchool":
        return "الثانوي";
        break;
      default:
        return "N/A";
    }
  }

  return <>{returnArabic(value)}</>;
}
