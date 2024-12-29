import React, { useEffect, useState } from "react";
import Carousel from "../components/carousel/Carousel";
import ChaptersRow from "../components/chapters/ChaptersRow";
import { getAllChapter } from "../components/service/apiService";
import Loading from "../components/loading/Loading";
import VerseOfTheDay from "../components/home/VerseOfTheDay";

const sliderData = [
  {
    id: 1,
    img: "/images/03.jpg",
  },
  {
    id: 2,
    img: "/images/02.jpg",
  },
  {
    id: 3,
    img: "/images/01.jpg",
  },
  {
    id: 4,
    img: "/images/04.jpg",
  },
  {
    id: 5,
    img: "/images/05.jpg",
  },
  {
    id: 6,
    img: "/images/06.jpg",
  },
  {
    id: 7,
    img: "/images/07.jpg",
  },
  {
    id: 8,
    img: "/images/08.jpg",
  },
  {
    id: 9,
    img: "/images/09.jpg",
  },
];

function Home() {
  const [allChapter, setAllChapter] = useState();

  useEffect(() => {
    getAllChapter().then((data) => {
      console.log("All Chapter Data", data);
      setAllChapter(data);
    });
  }, []);

  if (!allChapter) return <Loading />;

  return (
    <div>
      <Carousel sliderData={sliderData} />
      <VerseOfTheDay />
      <ChaptersRow allChapter={allChapter} />
    </div>
  );
}

export default Home;
