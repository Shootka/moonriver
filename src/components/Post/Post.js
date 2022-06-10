import React from 'react';
import './Post.scss'

const Post = () => {
  return (
    <section style={{paddingTop: "200px"}}>
      <div className={'post'}>
        <div className={'post-typography'}>
          <h1 className={'post-title'}>HIGH JEWELRY</h1>
          <a href="#" className={'post-more'}>Смотреть коллекцию</a>
        </div>
        <div >
          <img className={'post-image'} src="../images/silver-ring.png" alt=""/>
        </div>
      </div>

      <div className={'bottom-block'}>
        <div className={'lang-selector'}>
          <div className={'active'}>RU</div>
          <div>EN</div>
        </div>

        <div className={'prod-block'}>
          <h3 className={'prod-name'}>КОЛЬЦО TRINITY, Cartier</h3>
          <p className={'prod-desc'}>Белое золото, бриллианты</p>
          <p className={'prod-price'}>2449 $</p>
        </div>
      </div>

    </section>
  );
};

export default Post;