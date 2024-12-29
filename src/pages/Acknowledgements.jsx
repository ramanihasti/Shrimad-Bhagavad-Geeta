import React from "react";

function Acknowledgements() {
  return (
    <>
      <div class="flex-1 ">
        <img
          alt="BG About Banner Image"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          class="xl:rounded-lg"
          sizes="100vw"
          src="/images/12.jpg"
          className="h-[40vh] md:h-full w-full object-cover position: absolute; height: 100%; width: 100%; inset: 0px; object-fit: cover; object-position: center center; color: transparent;"
        />
        <div class="mt-[-350px] md:mt-[-400px] flex h-4/5 flex-col px-8 py-36">
          <h1 class="text-shadow z-20 text-center text-3xl font-extrabold uppercase text-white md:text-5xl">
            Acknowledgements
          </h1>
        </div>
      </div>
      <div class="md:mt-12 font-serif text-neutral-800 mx-auto max-w-5xl px-4 py-12 font-inter sm:px-6">
        <p class="mb-6">
          We extend our heartfelt gratitude to the esteemed organizations listed
          below for allowing us to feature their invaluable publications. All
          copyrights are retained by the respective organizations. For acquiring
          individual copies of any books, please directly contact the relevant
          organization.
        </p>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-2 text-xl font-semibold text-[#d37e39]">
              Advaita Ashrama
            </h2>
            <address class="mb-4 not-italic">
              Located at 5 Dehi Entally Road, Calcutta, India.
              <br />
              Contact: Various phone lines and Fax available.
              <br />
              Email:{" "}
              <a href="mailto:advaita@giascl01.vsnl.net.in">
                advaita@giascl01.vsnl.net.in
              </a>
            </address>
            <p>
              Featured Work: Commentary on Bhagavadgita by Sankaracarya,
              translated by Swami Gambhirananda (Published in 1995).
            </p>
          </div>
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-2 text-xl text-[#d37e39] font-semibold">
              Central Chinmaya Mission Trust
            </h2>
            <address class="mb-4 not-italic">
              Located at Sandeepany Sadhanalaya, Saki Vihar Road, Mumbai 400
              072, India.
              <br />
              Phone: 91-22-8572367/8575806; Fax: 91-22-8573065
              <br />
              Email:{" "}
              <a href="mailto:chinmaya@bom2.vsnl.net.in">
                chinmaya@bom2.vsnl.net.in
              </a>
            </address>
            <p>
              Featured Work: Srimadbhagavadgita translated by Swami
              Tejomayananda (1993, Central Chinmaya Mission Trust, Bombay)
              [Hindi translation of The Holy Geeta by Swami Chinmayananda]
            </p>
          </div>
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-2 text-[#d37e39] text-xl font-semibold">
              Divine Life Society
            </h2>
            <address class="mb-4 not-italic">
              Located at P.O. Shivanandanagar 249192, District Tehri-Garhwal,
              Uttar Pradesh, Himalayas, India.
              <br />
            </address>
            <p>
              Featured Work: The Bhagavad Gita by Swami Sivananda (1995, The
              Divine Life Society, Shivanandanagar)
            </p>
          </div>
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-2 text-[#d37e39] text-xl font-semibold">
              Gita Press, Gorakhpur
            </h2>
            <address class="mb-4 not-italic">
              Located at Govind Bhawan Karyalaya, Gitapress, Gorakhpur 273005,
              Uttar Pradesh, India. Phone: 334721
              <br />
            </address>
            <p>
              Featured Works:
              <ul>
                <li>
                  Srimadbhagavadgita: with Hindi translation of Sankarabhashya
                  translated by Sri Harikrishandas Goenka (1998, Gita Press,
                  Gorakhpur)
                </li>
                <li>
                  Srimadbhagavadgita: Sadhaka Sanjivani (Hindi Commentary) by
                  Swami Ramsukhdas (1995, Gita Press, Gorakhpur)
                </li>
              </ul>
            </p>
          </div>
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-2 text-[#d37e39] text-xl font-semibold">
              Sri Venkateswara University, Tirupati
            </h2>
            <address class="mb-4 not-italic">
              Located at Oriental Research Institute, Sri Venkateswara
              University, Tirupati 517502, Andhra Pradesh, India.
              <br />
              Phone: 91-8574-24166-Extension 291; Fax: 91-8574-24111
              <br />
            </address>
            <p>
              Featured Work: Srimadbhagavadgita with Gitarthasangraha of
              Abhinavagupta Part 1 &amp; 2. Translation by Dr. S Sankaranarayan
              (1985, Sri Venkateswara University, Tirupati)
            </p>
          </div>
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h2 class="mb-2 text-[#d37e39] text-xl font-semibold">
              Gita Supersite IITK Team
            </h2>
            <address class="mb-4 not-italic">
              Website:{" "}
              <a
                href="https://gitasupersite.iitk.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                gitasupersite.iitk.ac.in
              </a>
              <br />
            </address>
            <p>
              We extend special thanks to the team at Gita Supersite by IIT
              Kanpur for their hard work in collating various translations and
              commentaries of the Bhagavad Gita in one comprehensive platform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acknowledgements;
