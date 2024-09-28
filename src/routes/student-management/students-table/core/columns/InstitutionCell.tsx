export default function InstitutionCell({ value }: { value: string }) {
    function returnArabic(value: string) {
        switch (value) {
            case "primarySchool":
                return "Primary School"
                break
            case "middleSchool":
                return "Middle School"
                break
            case "highSchool":
                return "High School"
                break
            default:
                return "N/A"
        }
    }

    return <>{returnArabic(value)}</>
}
