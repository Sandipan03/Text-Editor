import React, {useState} from 'react'

export default function About(props) {
    document.title='TextUtils -About';
    let myStyle = {
      color: props.mode==='dark'?'white':'black',
      backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'

    }
    // const [btntext, setbtntext] = useState("Enable Dark Mode")
    // const toggleStyle = ()=>{
    //     if(myStyle.backgroundColor==='white'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
                
    //         })
    //         setbtntext("Enable Light MOde");
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtntext("Enable Dark Mode");
    //     }
    // }
  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
         TextUtils is a free character count tool that provides instant character count and word count statistics for a given text.TextUtils reports the number of words and characters  and thus, it is suitable for writing text with word and character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This character count software works in any web browser such as google chrome, mozilla firefox, internet explorer, etc.
      </div>
    </div>
  </div>
  {/* <div className="container my-3">
  <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
  </div> */}
</div>
    </div>
  )
}
