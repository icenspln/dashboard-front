// contain global data that impact the whole app

export const DAYS = [
    "saturday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thurdsay",
    "firday",
];

export const INSTITUTIONS = ["primary school", "middle school", "high school"];

export const LEVELS = [
    "first year",
    "second year",
    "third year",
    "fourth year",
    "fifth year",
];

export const SPECIALITIES = [
    "science",
    "literature",
    "maths",
    "experimental sciences",
    "management and economy",
    "Etiquette and philosophy",
    "languages",
];
export const dayOfWeekFilterOptions = [
    { id: "Saturday", label: "السبت" },
    { id: "Sunday", label: "الأحد" },
    { id: "Monday", label: "الاثنين" },
    { id: "Tuesday", label: "الثلاثاء" },
    { id: "Wednesday", label: "الأربعاء" },
    { id: "Thursday", label: "الخميس" },
    { id: "Friday", label: "الجمعة" },
];
export const institutionFilterOptions = [
    { id: INSTITUTIONS[0], label: INSTITUTIONS[0] },
    { id: INSTITUTIONS[1], label: INSTITUTIONS[1] },
    { id: INSTITUTIONS[2], label: INSTITUTIONS[2] },
];

export const levelFilterOptions = [
    { id: 1, label: LEVELS[0] },
    { id: 2, label: LEVELS[1] },
    { id: 3, label: LEVELS[2] },
    { id: 4, label: LEVELS[3] },
    { id: 5, label: LEVELS[4] },
];

export const ModuleSelectionOptions = [
    { id: 1, label: "الرياضيات" },
    { id: 2, label: "اللغة العربية" },
    { id: 3, label: "اللغة الفرنسية" },
    { id: 4, label: "اللغة الانجليزية" },
    { id: 5, label: "التربية المدنية" },
    { id: 6, label: "التربية الإسلامية" },
    { id: 7, label: "التربية العلمية" },
    { id: 8, label: "تاريخ وجغرافيا" },
];
export const DaysSelectionOptions = [
    { id: 1, label: DAYS[0] },
    { id: 2, label: DAYS[1] },
    { id: 3, label: DAYS[2] },
    { id: 4, label: DAYS[3] },
    { id: 5, label: DAYS[5] },
    { id: 6, label: DAYS[5] },
    { id: 7, label: DAYS[6] },
];

export const modules = [
    { id: "Maths", label: "Maths" },
    { id: "Science", label: "Science" },
    { id: "Physics", label: "Physics" },
    { id: "Arabic", label: "Arabic" },
    { id: "Phylosophy", label: "Phylosophy" },
    { id: "French", label: "French" },
    { id: "English", label: "English" },
    { id: "History", label: "History" },
    { id: "German", label: "German" },
];
