import React from 'react'
import Ball from '../components/Ball'
const HomePage = () => {
  return (
    <>
      <div className='absolute flex w-auto h-auto top-40   left-64' >
        <div className='relative block left-10 h-fit'>
          <Ball Deg="122.08" />

        </div>
        <div className='relative font-normal text-8xl top-16'>
          MECHBOTS
          <h1>STUDENT CHAPTER</h1>
          <div className='relative bg-white w-28 h-1 '></div>
          <h3 className='text-2xl my-6 flex'> LEARN MORE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>

          </h3>


        </div>

        <div className='relative block h-fit top-44 right-16'>
          <Ball Deg="324.3" />
        </div>
        <div className='relative right-28 top-96 flex flex-row justify-center items-center p-0 w-72 h-fit gap-3'>
          <div className='relative bg-white w-1 h-28 '>

          </div>
          <h3 className='realative'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</h3>


        </div>
      </div>
    </>

  )
}

export default HomePage