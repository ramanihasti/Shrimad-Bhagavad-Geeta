import React, { useEffect, useState } from "react";
import { getAllVerse } from "../service/apiService";
import Loading from "../loading/Loading";
import { useNavigate, useParams } from "react-router-dom";

function Verses() {
  const [allVerse, setAllVerse] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAllVerse(params.id).then((data) => {
      console.log("All Verse Data", data);
      setAllVerse(data);
    });
  }, [params.id]);

  function goToVerseDetail(verseId) {
    navigate(`/chapter/${params.id}/verses/${verseId}`);
  }

  if (!allVerse) return <Loading />;

  return (
    <div className="max-w-4xl mx-auto ">
      <div className="mt-4 py-6 border-t  border-t-neutral-400 border-b border-b-neutral-400">
        <p className="font-[cursive] text-[17px] font-semibold text-[#b8855c]">
          {allVerse.length} Verses
        </p>
      </div>
      <ul className="flex flex-col gap-4 mt-8 py-8 px-4">
        {allVerse.map((verse) => {
          const englishTranslation = verse.translations.find((value) => {
            return value.author_name === "Swami Sivananda";
          });
          return (
            <li
              className="flex items-center gap-8 px-8 py-6 bg-[#f3eada] cursor-pointer hover:border hover:border-neutral-400"
              onClick={() => {
                goToVerseDetail(verse.verse_number);
              }}
            >
              <p className="text-[#ebaf61] drop-shadow-md shrink-0 font-semibold font-[italic]">
                VERSES {verse.verse_number}
              </p>
              <p className="font-serif text-neutral-800">
                {englishTranslation.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Verses;
