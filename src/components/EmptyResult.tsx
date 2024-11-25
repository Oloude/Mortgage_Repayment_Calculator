 import emptyIcon from '../assets/illustration-empty.svg'

function EmptyResult() {
  return (
    <div className='flex flex-col gap-4 items-center'>
        <div><img src={emptyIcon} alt="" /></div>
        <h2 className='text-white font-semibold text-2xl  '>Results shown here</h2>
        <p className='text-base font-medium text-slate300 text-center'>Complete the form and click “calculate repayments” to see what your monthly repayments would be. </p>
    </div>
  )
}

export default EmptyResult