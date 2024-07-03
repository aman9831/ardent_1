import React from "react";

import QQr from "./Qr_code"

const me="img/me.jpg"
const am="img/amity.png"

const Idcard=()=>{
    return(
        <div className="container pt-5">
            <div className="box">
            <div id="a">
            <img src={am} alt="amity" id="p"></img>
            <img src={me} alt="me" class="rounded" id="pic"></img>
                <h6 className="name">Aman Shaw</h6>
                <h6 className="details">B.C.A</h6>
                <h6 className="details">2022-2025</h6>
                <h6 className="details">ID Card No : A91404822050</h6>
                <div>
                    <QQr />
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Idcard