// import React, { useState } from 'react'
import React from 'react'

export default function About(props) {

    // const [mystyle, setMystyle]=useState({
    //     color: 'black',
    //     backgroundColor:'white'
    // })
    let mystyle={
        color:props.mode === 'dark'?'white':'black',
        backgroundColor:props.mode ==='dark'?'#006284':'white',

    }
  //  const [btntext, setbtntext]=useState("Enable Dark Mode")

    // const togglebutton=()=>{
    //     if(mystyle.color ==='white'){
    //         setMystyle({
    //             color: 'black',
    //             backgroundColor:'white'
    //     })
    //     setbtntext("Enable light Mode")
    //     }
    //     else{
    //         setMystyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setbtntext("Enable Dark Mode")
    //     }

    // }
    return (
        <>
       
        <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                             These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
                             It's also worth noting that just about any 
                            HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default,
                             until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,
                              as well as the showing and hiding via CSS transitions. 
                             You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                             These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={togglebutton} className="btn btn-outline-secondary my-3">{btntext}</button> */}
            </div>
        </>
    )
}
