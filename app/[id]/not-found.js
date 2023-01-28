import React from "react"

const nfStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"calc(100vh - 132px)"
}

export default function NotFound(){
    return(
        <div style={nfStyle}>
            <h1>Blog doesn't exist</h1>
        </div>
    )
}