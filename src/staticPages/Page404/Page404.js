import React from 'react';
import Button from "../../components/Button/Button";

const Page404 = () => {
  return (
    <div style={{height: '500px', display: 'block', paddingTop: '200px'}}>
      <h1>Error 404</h1>
      <h3>Not found. Something happened</h3>
      <Button name={'Go back home'} link={'/'}/>
    </div>
  );
};

export default Page404;