export default function NumberList({arr} : {arr: Array<string>}) {
  return(
    <div>
      <ol className="space-y-4 list-decimal ml-6 marker:text-rose-800 marker:text-sm marker:font-bold">
        { arr.map((_, i) => {
          const splitItems = _.split(':');
          return <li key={i} className="pl-4" ><span className="font-bold">{splitItems[0]}</span>: {splitItems[1]}</li>
        }) }
      </ol>
    </div>
  );
}