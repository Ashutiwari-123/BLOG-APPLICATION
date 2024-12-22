import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className=' w-full h-screen flex items-center justify-center'>
            <BallTriangle
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    )
}

export default Loader
