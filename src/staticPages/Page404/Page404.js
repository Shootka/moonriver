import React from 'react';
import Button from "../../components/Button/Button";

const Page404 = () => {
  return (
    <div style={{padding: "150px 0", background: "#3c4043"}} >
      <h1 style={{color: 'white', fontSize: '50px'}}>Error 404</h1>
      <p style={{color: "white", fontSize:"20px", marginBottom: "50px"}}>Uuuups...something happened. Try later</p>
      {/*<button>GO HOME</button>*/}
      <Button link={'/'} name={'GO HOME'}/>
    </div>
  );
};

export default Page404;