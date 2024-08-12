export default function BirthDateCell({ value }: { value: string | Date }) {
  const date = new Date(value);
  return <>{date.toLocaleDateString()}</>;
}
