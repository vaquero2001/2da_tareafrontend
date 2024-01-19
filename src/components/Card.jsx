import imgCard from '../assets/images/illustration-article.svg'
import imgUser from '../assets/images/image-avatar.webp' 

export const Card = () => {
  return (
    <article className="bg-slate-50 mx-3 py-5 pl-3 w-[193px]">
        <div className='flex center mb-5 w-[170px]'>
            <picture className=''>
                <img src={imgCard} alt="imgCard" />
            </picture>
        </div>
        
        <div className="flex-center">
            <h3>
                Learning
            </h3>
            <h2>
                Published 21 Dec 2023
            </h2>
            <h1>
                HTML & CSS foundations
            </h1>
            <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <picture>
            <img src={imgUser} alt="imgUser" />
            <h1 className='font-bold'>Greg Hooper</h1>
        </picture>
    </article>
    
  )
}
