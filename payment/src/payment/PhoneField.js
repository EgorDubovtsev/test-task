import React from "react";

function PhoneField({handleChangeNumber}) {
    return (
        <div className="maskedInput phone">
            +7(<input type="text" id="1" maxLength="3" onChange={(e) => handleChangeNumber(e)}
                      className="num clean"/>)
            <input type="text" id="2" maxLength="3" onChange={(e) => handleChangeNumber(e)}
                   className="num clean"/>
            -<input type="text" id="3" maxLength="2" onChange={(e) => handleChangeNumber(e)}
                    className="num-short clean"/>
            -<input type="text" id="4" maxLength="2" onChange={(e) => handleChangeNumber(e)}
                    className="num-short clean"/>
        </div>
    )
}

export default PhoneField