import React from 'react';

const Icon = ({path, width, height, color = 'none', url = '/'}) => {

  return (
    <a href={url}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 35 35" fill={color}>
        {Array.isArray(path)
          ? path.map((pt) => {return (<path key={Math.random()} fillRule="evenodd" clipRule="evenodd" d={pt} fill="white"/>)})
          : <path fillRule="evenodd" clipRule="evenodd" d={path} fill="white"/>}
      </svg>
    </a>
  )
};

export default Icon;