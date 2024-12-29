import React, { useEffect, useState } from "react";
import ChaptersRow from "../components/chapters/ChaptersRow";
import { getAllChapter } from "../components/service/apiService";
import ChapterDetail from "../components/chapterDetails/ChapterDetail";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";
import Verses from "../components/chapterDetails/Verses";
import { numberOfChapter } from "../components/data/data";
import Chapters from "./Chapters";

function Chapter() {
  //   const [allChapter , setAllChapter] = useState();
  //   const params = useParams();

  // useEffect(() => {
  //   getAllChapter(params.id).then((data) => {
  //     console.log("All Chapter Data" , data);
  //     setAllChapter(data);
  //   });
  // } , [])

  // if(!allChapter) return <Loading/>;

  return (
    <div>
      {/* <ChaptersRow allChapter={allChapter}/> */}
      <ChapterDetail />
      <Verses />
    </div>
  );
}

export default Chapter;
