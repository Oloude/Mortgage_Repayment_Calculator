import EmptyResult from "./EmptyResult"

type MProps = {
    mortgage : number[]
}

function MortgageResult({mortgage}: MProps) {
  return (
    <div className="bg-slate900 p-7 flex justify-center items-center lg:basis-1/2 lg:rounded-bl-[60px]">
       {mortgage[0]=== 0 && mortgage[1] === 0 ? <EmptyResult/> : <div>
        <h2 className="text-white font-semibold text-xl mb-4">Your results </h2>
        <p className="text-slate300 text-base mb-6">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
        <div className="bg-slate-950 border-t-2 border-lime p-4 flex flex-col gap-3 rounded-md">
           <div className="py-3">
            <h3 className="text-sm text-slate300 mb-2"> Your monthly repayments </h3>
            <p className="text-5xl font-semibold text-lime">E{mortgage[1].toFixed(3)}</p>
           </div>
          {mortgage[0] > 0 && <div className="border-t border-slate300 py-3">
            <h3 className="text-sm text-slate300 mb-2">Total you'll repay over the term</h3>
            <p className="text-xl font-semibold text-white">E{mortgage[0].toFixed(3)}</p>
           </div>}
        </div>
        </div>}
    </div>
  )
}

export default MortgageResult