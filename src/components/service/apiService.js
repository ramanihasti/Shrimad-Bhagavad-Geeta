export function getAllChapter() {
  const result = fetch(
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b4e5959134msh2ca37c59bcca410p1aef55jsn4c32025704d5",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
    .then((responce) => {
      console.log("All Chapter Responce", responce);
      return responce.json();
    })
    .catch((error) => {
      console.log("All Chapter Error : ", error);
    });

  console.log("All Chapter Result", result);
  return result;
}

export function getSingleChapter(id) {
  const result = fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b4e5959134msh2ca37c59bcca410p1aef55jsn4c32025704d5",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
    .then((responce) => {
      console.log("Single Chapter Responce", responce);
      return responce.json();
    })
    .catch(() => {});

  console.log("Single Chapter Result", result);
  return result;
}

export function getAllVerse(chapterId) {
  const result = fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b4e5959134msh2ca37c59bcca410p1aef55jsn4c32025704d5",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
    .then((responce) => {
      console.log("All Verse Responce", responce);
      return responce.json();
    })
    .catch(() => {});

  console.log("All Verse Result", result);
  return result;
}

export function getSingleVerse(chapterId, verseId) {
  const result = fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/${verseId}/`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b4e5959134msh2ca37c59bcca410p1aef55jsn4c32025704d5",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
    .then((responce) => {
      console.log("Single Verse Responce", responce);
      return responce.json();
    })
    .catch(() => {});

  console.log("Single Verse Result", result);
  return result;
}
