import imgCard from '../assets/images/illustration-article.svg'
import imgUser from '../assets/images/image-avatar.webp' 

export const CardProfile = () => {
  return (
    <article className="bg-slate-50 mx-3 p-5  rounded-xl border-solid border border-black  w-[330px] shadow-[7px_7px_0_0] hover:shadow-[14px_14px_0_0] transition duration-150 ease-in-out ">
        <div className='flex center mb-7 '>
            <picture className=''>
                <img className='w-full rounded-xl ' src={imgCard} alt="imgCard" />
            </picture>
        </div>
        
        <div className="flex-center mb-4">
            <span className='font-bold text-[12px] bg-amber-300 w-[px] p-3 py-2 rounded'>
                Learning
            </span>
            <h2 className='text-[13px] text-slate-800 py-3 font-bold'>
                Published 21 Dec 2023
            </h2>
            <h1 className='font-bold text-[21px] cursor-pointer hover:text-yellow-400 mb-3'>
                HTML & CSS foundations
            </h1>
            <p className='text-[15px] text-gray-500'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <picture className='flex items-center '>
            <img className='w-[32px]' src={imgUser} alt="imgUser" />
            <h1 className='ml-4 font-bold text-[14px]'>Greg Hooper</h1>
        </picture>
    </article>
    
  )
}

