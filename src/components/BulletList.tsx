export default function BulletList({arr} : {arr: Array<string>}) {
  return(
    <div>
      <ul className="space-y-4 list-disc ml-6 marker:text-rose-800 marker:text-sm">
        { arr.map((_, i) => (
          <li key={i} className="pl-4" >{_}</li>
        )) }
      </ul>
    </div>
  );
}