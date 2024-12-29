import React, { useEffect, useState } from "react";
import { getSingleChapter } from "../service/apiService";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import { numberOfChapter } from "../data/data";

function ChapterDetail() {
  const [singleChapter, setSingleChapter] = useState();
  const params = useParams();
  console.log("params", params);

  useEffect(() => {
    getSingleChapter(params.id).then((data) => {
      console.log("Single Chapter Data", data);
      setSingleChapter(data);
    });
  }, [params.id]);

  if (!singleChapter) return <Loading />;

  function getPreviousLink() {
    if (params.id > 1) {
      return `/chapter/${params.id - 1}`;
    } else {
      if (params.id > 1) {
        return `/chapter/${1}`;
      }
    }
  }

  function getNextLink() {
    if (params.id < numberOfChapter) {
      return `/chapter/${Number(params.id) + 1} `;
    } else {
      if (params.id < 18) {
        return `/chapter/${1}`;
      }
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 py-16">
        <h2 className="text-[20px] text-[#c8763b] font-semibold ">
          CHAPTER {singleChapter.chapter_number}
        </h2>
        <p className="mt-2 mb-4 text-[23px] text-[#6a4932] font-semibold font-serif max-w-[500px] text-center">
          {singleChapter.name_meaning} / {singleChapter.name}
        </p>
        <p className="text-center max-w-[950px] text-[17px] text-neutral-900 font-serif">
          {singleChapter.chapter_summary}
        </p>
      </div>

      <div class="relative z-10">
        <a
          class="fixed left-3 top-1/2 flex h-10 w-10 items-center justify-center rounded-full  bg-white  hover:cursor-pointer hover:brightness-95 border border-neutral-400"
          href={getPreviousLink()}
        >
          <svg
            width="6"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="dark:text-gray-500"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.707.293a1 1 0 0 1 0 1.414L2.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <a
          class="fixed right-3 top-1/2 flex h-10 w-10 items-center justify-center rounded-full  bg-white  hover:cursor-pointer hover:brightness-90 border border-neutral-400"
          href={getNextLink()}
        >
          <svg
            width="6"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="dark:text-gray-600"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M.293 9.707a1 1 0 0 1 0-1.414L3.586 5 .293 1.707A1 1 0 0 1 1.707.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}

export default ChapterDetail;
