export default function Table({title, desc, underline = true} : {title:string; desc:string; underline?:boolean;}) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 pb-3 px-8 font-[Outfit-VariableFont_wght] text-[14px]">
        <p className="text-stone-600">{title}</p>
        <p className="text-rose-800 font-bold">{desc}</p>
      </div>
      {underline ? <hr className='text-stone-200'></hr> : undefined}
    </div>
  )
}