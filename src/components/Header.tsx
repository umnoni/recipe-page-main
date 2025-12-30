export default function Header({title} : {title: string;}) {
  return (
    <h1 className="text-2xl font-[YoungSerif-Regular] text-amber-800 py-1">
      {title}
    </h1>
  );
}