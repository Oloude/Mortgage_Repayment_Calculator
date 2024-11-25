 import calculatorIcon from '../assets/icon-calculator.svg'
 import { useForm, SubmitHandler } from "react-hook-form"
 import calculateMortgage from '../utils'

 type FormType = {
    amount : string,
    term : string,
    rate : string,
    mType : string
 }
 type FormProps = {
    handleMortgage: (value: number[])=> void
 } 

function Form({handleMortgage}: FormProps) {
const {register, formState:{errors} , handleSubmit, reset} = useForm<FormType>()

const onSubmit :SubmitHandler<FormType> = (data ) =>{
    const amount = parseFloat(data.amount);
    const rate = parseFloat(data.rate);
    const term = parseFloat(data.term);
  
    if (!amount || !rate || !term) {
      console.log('Please provide valid inputs');
      return;
    }
     
    const monthlyPayment = calculateMortgage(amount, rate, term);

    if(data.mType === 'replayment'){
        handleMortgage([amount *monthlyPayment, monthlyPayment])
    }else{
       handleMortgage([0, monthlyPayment])
    }
}

 


  return (
    <form action="" className='p-6 lg:basis-1/2' onSubmit={ handleSubmit(onSubmit)} noValidate>
        <div className='flex flex-col gap-2 mb-8 lg:flex-row lg:justify-between'>
            <h1 className='text-xl font-bold text-slate900'>Mortgage Calculator </h1>
             <button type="reset" onClick={() => reset()} className='self-start underline text-slate700 text-sm'>Clear All </button>
          </div>

           <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="" className='text-slate700 text-base '> Mortgage Amount</label>
            <div className={`${ errors.amount ? 'group-focus-within:bg-red focus-within:border-red ' : 'group-focus-within:bg-lime focus-within:border-lime  '} flex gap-3  border border-slate500 group rounded-md overflow-hidden   `}>
            <p className={`${ errors.amount ? 'group-focus-within:bg-red  group-focus-within:text-white' : 'group-focus-within:bg-lime  '}  bg-slate100 text-slate900 py-2 px-4 font-medium `}>E</p>
                <input type="number"   id="" className='text-slate700 text-base outline-none w-full font-semibold' {...register('amount',  {
    required: 'This field is required',
    min: {
      value: 1000,
      message: 'Amount must be at least $1,000',
    },
    max: {
      value: 1000000,
      message: 'Amount cannot exceed $1,000,000',
    },
    })}/>
                
            </div>
            <span className='text-sm text-red'>{errors.amount?.message}</span>
            </div>  
              
   <div className='flex flex-col gap-4 lg:flex-row mb-4'>
            <div className='flex flex-col gap-2 lg:basis-1/2 '>
            <label htmlFor="" className='text-slate700 text-base '>Mortgage Term </label>
            <div className={`${ errors.term ? 'group-focus-within:bg-red focus-within:border-red ' : 'group-focus-within:bg-lime focus-within:border-lime  '} flex gap-3  border border-slate500 group rounded-md overflow-hidden   `}>
                <input type="number"  id="" className='text-slate700 text-base pl-3 outline-none w-full font-semibold' {...register('term', {
    required: 'This field is required',
    min: {
      value: 1,
      message: 'Term must be at least 1 year',
    },
    max: {
      value: 30,
      message: 'Term cannot exceed 30 years',
    },
  })}/>
                <p className={`${ errors.term ? 'group-focus-within:bg-red  group-focus-within:text-white' : 'group-focus-within:bg-lime  '} text-slate900 bg-slate100 py-2 px-4 font-medium `}>years</p>
            </div>
            <span className='text-sm text-red'>{errors.term?.message}</span>
            </div> 

            <div className='flex flex-col gap-2 lg:basis-1/2 '>
            <label htmlFor="" className='text-slate700 text-base '>Interest Rate</label>
            <div className={`${ errors.rate ? 'group-focus-within:bg-red focus-within:border-red ' : 'group-focus-within:bg-lime focus-within:border-lime  '} flex gap-3  border border-slate500 group rounded-md overflow-hidden   `}>
                <input type="number"   id="" className='text-slate700 text-base  pl-3 outline-none w-full font-semibold' {...register('rate', {
    required: 'This field is required',
    min: {
      value: 1,
      message: 'Rate must be at least 1%',
    },
    max: {
      value: 20,
      message: 'Rate cannot exceed 20%',
    },
  })}/>
                <p className={`${ errors.rate ? 'group-focus-within:bg-red  group-focus-within:text-white' : 'group-focus-within:bg-lime  '} text-slate900 bg-slate100 py-2 px-4 font-medium `}>%</p>
            </div>
            <span className='text-sm text-red'>{errors.rate?.message}</span>
            </div> 
            </div>

            <div className='flex flex-col gap-2 mb-6'>
                <label htmlFor="" className='text-slate700 text-base '>Mortgage Type</label>
                <div className='flex gap-3  border border-slate500 rounded-md items-center overflow-hidden p-3 focus-within:border-lime focus-within:bg-lime focus-within:bg-opacity-20  '>
                    <input type="radio" name="mtype" value='replayment' id="replayment" className='appearance-none w-[14px] h-[14px]  border border-lime rounded-full   checked:bg-lime ' {...register('mType',  { required: 'Please select a mortgage type' })}/>
                    <p className='text-slate900 text-base font-semibold'>Repayment</p>
                </div>
                <div className='flex gap-3  border border-slate500 rounded-md overflow-hidden p-3 items-center focus-within:border-lime focus-within:bg-lime focus-within:bg-opacity-20 '>
                <input  type="radio" name="mtype" value='interest' id="interest" className='appearance-none w-[14px] h-[14px]  border border-lime rounded-full   checked:bg-lime ' {...register('mType',  { required: 'Please select a mortgage type' })}/>

                    <p className='text-slate900 text-base font-semibold'>Interest Only </p>
                </div>
                <span className='text-sm text-red'>{errors.mType?.message}</span>
            </div>

            <button className='bg-lime flex gap-2 items-center py-2 px-10 rounded-full text-slate900 font-semibold text-base'> 
                <img src={calculatorIcon} alt="" /> Calculate Repayments
                </button>

    </form>
  )
}

export default Form