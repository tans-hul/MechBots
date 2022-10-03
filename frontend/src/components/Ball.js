import React from 'react'

const Ball = (parmas) => {
    return (
        <>
            <div className=" block" style={{
                width: "138px",
                height: "138px",
                borderRadius: "50%",
                background: `linear-gradient(${parmas.Deg}deg, #002EFF 17.5%, rgba(0, 46, 255, 0) 83.35%)`,
            }}>

            </div>
        </>
    )
}

export default Ball