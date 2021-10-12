import React from "react";

export default function Progress({ rate }){
    const progressRate = `${rate}%`
    return (
        <div className={"progress"}>
            <div style={{width:"20px", height:"20px", background:"pink", position:"absolute", right:"0"}}/>
            <div className={"progress painted"} style={{width:progressRate, display:"inline-block"}} />
            <div className={"dog"} style={{ display:"inline-block" }} />
        </div>
    )
}

