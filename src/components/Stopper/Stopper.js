import React from 'react';
import Button from "../Button/Button";

const Stopper = () => {
  return (
    <div style={{padding: "150px 0", background: "#3c4043"}} >
      <h1 style={{color: 'white', fontSize: '50px'}}>Coming soon</h1>
      <p style={{color: "white", fontSize:"20px", marginBottom: "50px"}}>We already make this page, give us some time.</p>
      {/*<button>GO HOME</button>*/}
      <Button link={'/'} name={'GO HOME'}/>
    </div>
  );
};

export default Stopper;