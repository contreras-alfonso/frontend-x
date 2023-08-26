import React from 'react'

const Publicacion = () => {
  return (
        <div className=' border border-t-0 border-slate-200 p-5'>
            <div className='flex items-start gap-4'>
                <i className="fa-solid fa-user text-white bg-black rounded-full p-3"></i>
                <div>
                    <p>Alfonso Contreras</p>
                    <p className='text-slate-500'>@LinoDev</p>
                </div>
            </div>

            <p className='py-3'>Morbi aliquam at augue id porttitor. Integer faucibus sapien id odio convallis, et sagittis augue mattis. Nunc felis nisi, varius sit amet lectus tincidunt, imperdiet varius leo. Etiam non lacinia nunc. Morbi at tellus hendrerit, rhoncus ex in, tristique .</p>

            <div className='flex gap-2'>
                <i className="fa-regular fa-comment cursor-pointer "></i>
                <i className="fa-regular fa-heart cursor-pointer text-pink-500"></i>
                <i className="fa-regular fa-retweet cursor-pointer"></i>
            </div>

        </div>
  )
}

export default Publicacion