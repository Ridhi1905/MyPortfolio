import React from 'react'

function Footer(){
    return(
        <div className='py-10'>
            <div className='h-[1px] w-full bg-black'></div>
            <div className='flex items-center justify-center flex-col mt-10 opacity-80'>
                <h1 className='text-tertiary'>
                    Designed and Developed By
                </h1>
                <h1 className='text-secondary'>
                    Ridhima Chauhan
                </h1>
            </div>
        </div>
    )
}
export default Footer