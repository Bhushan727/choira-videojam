import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerContainer'>

        <div className="leftFoot">
            <div className="cellCont">
                <div className="cell"><i class="fa-regular fa-triangle-exclamation"></i></div>
                <div className="cell"><span className='cellSpan'>0004</span>Bar</div>
                <div className="cell"><span className='cellSpan'>1</span>Beat</div>
                <div className="cell"><span className='cellSpan'>- 120 +</span>Tempo</div>
                <div className="cell"><span className='cellSpan'>4/4</span>Cmaj</div>
            </div>
            <i class="fa-regular fa-record-vinyl"></i>
        </div>

        <div className="rightFoot">
            <div className="btns btn">End Jam</div>
            <div className="btns"><i class="fa-solid fa-microphone"></i></div>
            <div className="btns"><i class="fa-solid fa-video"></i></div>
            <div className="btns"><i class="fa-sharp fa-solid fa-volume-high"></i></div>
            <div className="btns"><i class="fa-solid fa-ellipsis"></i></div>
        </div>

    </div>
  )
}

export default Footer