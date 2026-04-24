import React from 'react'

const Container = ({Children}) => {
  return (
     <>
         <div className='max-w-[1320px] mx-auto bg-red-500'>
            {Children}
         </div>
     </>
  )
}

export default Container