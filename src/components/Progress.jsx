import React from "react";

export default function Progress({ rate, prev }){
    const progressRate = `${rate}%`
    let dogStyle = ""
    if(prev % 2 === 0) dogStyle = "dog";
    else dogStyle = "dog2"
    return (
        <div className={"progress"}>
            <div className={"home"}/>
            <div className={"goal"}/>
            <div className={"progress painted"} style={{width:progressRate, display:"inline-block"}}/>
            <div className={dogStyle} style={{ display:"inline-block" }} />
        </div>
    )
}

