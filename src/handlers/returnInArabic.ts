export function returnInstitutionInAR(inst: string) {
  switch (inst) {
    case "primarySchoo":
      return "ابتدائي";
      break;
    case "middleSchool":
      return "متوسط";
      break;
    case "highSchool":
      return "ثانوي";
  }
}

export function returnLevelInAR(level: number) {
  switch (level) {
    case 1:
      return "​الأولى";
      break;
    case 2:
      return "الثانية";
      break;
    case 3:
      return "الثالثة";
    case 4:
      return "الرابعة";
      break;
    case 5:
      return "الخامسة";
      break;
  }
}
