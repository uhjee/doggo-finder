import React from "react";

export default function Progress({ rate }){
    const progressRate = `${rate}%`
    return (
        <div className={"progress"}>
            <div className={"home"}/>
            <div className={"goal"}/>
            <div className={"progress painted"} style={{width:progressRate, display:"inline-block"}} />
            <div className={"dog"} style={{ display:"inline-block" }} />
        </div>
    )
}

