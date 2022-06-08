import React, {useEffect, useState} from 'react';
import Chapter from "../../components/Chapter/Chapter";
import './Chapters.scss'
import axios from "axios";

const Chapters = () => {
  const [chapters, setChapters] = useState([])

  useEffect(() => {
      axios('/chapterList.json')
        .then(res => setChapters(res.data)  )
        .catch(err => console.log(err))
  }, [])

  console.log(chapters)
  return (
    <div className={'box'}>
      { chapters.map((ch) => {
        return   <Chapter key={ch.id} url={ch.url} desc={ch.desc} about={ch.about}/>
        })
      }
    </div>
  );
};

export default Chapters;