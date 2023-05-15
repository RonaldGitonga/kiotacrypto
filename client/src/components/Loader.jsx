import React from 'react'

const Loader = () => {
  return (
    <div flex justify-center items-center py-3 >
      <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-blue-700 my-2"></div>
    </div>
  )
}

export default Loader