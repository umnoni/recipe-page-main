export default function PreparationTime({ arr } : { arr: Array<string> }){
  return(
  <div className="bg-[#fff7fc] p-6 rounded-xl">
    <h1 className="text-rose-800 font-[Outfit-VariableFont_wght] font-bold mb-5 text-[20px]">
      Preparation time
    </h1>
    <ul className="list-disc ml-6 space-y-4 marker:text-rose-800 marker:text-sm">
      { arr.map((item, index) => {
        const [ title, desc ] = item.split(':');
        return <li className="font-[Outfit-VariableFont_wght] text-stone-600 pl-4 text-[14px]" key={index}><span className="font-bold">{title}: </span>{desc}</li>
      })}
    </ul>
  </div>
);
}