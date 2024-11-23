import React from 'react'

const IndxContainer = ({showIndex}) => {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  return (
    <>
    {
        alphabet.map(item=>{
            return(
            <div className="numBox" onClick={()=>showIndex(item)} key={item}>
                <h3>{item}</h3>
            </div>
        )})
    }
    </>
  )
}

export default IndxContainer
