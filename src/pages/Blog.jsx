import React from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();

  function goToRadhaBlog() {
    navigate(`/blog/blogDetails/radha-blog`);
  }

  function goToKrishnaStory1() {
    navigate(`/blog/blogDetails/krishna-story-1`);
  }

  function goToKrishnaStory2() {
    navigate(`/blog/blogDetails/krishna-story-2`);
  }

  function goToSrimatiRadharani() {
    navigate(`/blog/blogDetails/srimati-radharani`);
  }

  return (
    <main class="mb-auto bg-[#1e1d1d] px-12 py-8 font-serif">
      <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p class="text-[19px] leading-7 text-gray-400 dark:text-gray-400">
            Dedicated to the eternal couple Shri Radha Krishna! Radha Krishna
            stories, bhajans, wallpapers, prayers, aarti, audio, video, photos.
          </p>
        </div>

        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-12">
            <article>
              <div class=" space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt class="sr-only">Published on</dt>
                  <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time
                      datetime="2018-08-13T00:00:00.000Z"
                      className="text-[16px] font-[cursive]"
                    >
                      August 13, 2018
                    </time>
                  </dd>
                </dl>

                <div class="space-y-5 xl:col-span-3">
                  <div class="space-y-6">
                    <div>
                      <h2 class="text-[26px]  text-[#e3c5ad] font-bold tracking-tight">
                        Radha Sahastra Naam Yatra Lyrics
                      </h2>
                      <div class="flex flex-wrap ">
                        <p className="mt-4 text-[18px] text-[#7cb5b2]">
                          Radha Bhajan Lyrics
                        </p>
                        {/* <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/radha">Radha</a>
                        <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/bhajan">Bhajan</a>
                        <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/lyrics">Lyrics</a> */}
                      </div>
                    </div>
                    <div class="prose text-gray-500 text-[18.5px] max-w-none dark:text-gray-400">
                      Lyrics for Shri Radha Sahastra Naam Yatra bhajan by
                      Shradheya Gaurav Krishan Goswami Ji.
                    </div>
                  </div>
                  <div class="text-base font-medium leading-6">
                    <a
                      class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label='Read "Radha Sahastra Naam Yatra Lyrics"'
                      onClick={goToRadhaBlog}
                      className="cursor-pointer text-xl text-[#a38c6b]"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </li>
          {/* <li class="py-12"><article>
            <div class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <dl><dt class="sr-only">Published on</dt><dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time datetime="2018-01-14T00:00:00.000Z" className='text-[16px] font-[cursive]' >January 14, 2018</time>
              </dd></dl>
              <div class="space-y-5 xl:col-span-3">
                <div class="space-y-6">
                  <div>
                    <h2 class="text-[26px]  text-[#e3c5ad] font-bold leading-8 tracking-tight">
                      Hare Krishna Hare Rama Mantra</h2>
                      <div class="flex flex-wrap">
                        <p className='mt-4 text-[18px] text-[#7cb5b2]'>Krishna Bhajan Lyrics Mantra</p>
                        
                      </div>
                    </div>
                    <div class=" text-[18.5px] prose text-gray-500 max-w-none dark:text-gray-400">Hare Krishna Hare Krishna, Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama Hare Hare.
                    </div>
                  </div>
                  <div class="text-base font-medium leading-6">
                    <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Read &quot;Hare Krishna Hare Rama Mantra&quot;" onClick={goToKrishnaBlog} className='cursor-pointer text-xl text-[#a38c6b]'>Read more →</a>
                  </div>
                </div>
                </div>
              </article>
            </li> */}

          <li class="py-12">
            <article>
              <div class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt class="sr-only">Published on</dt>
                  <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time
                      datetime="2017-11-28T00:00:00.000Z"
                      className="text-[16px] font-[cursive]"
                    >
                      November 28, 2017
                    </time>
                  </dd>
                </dl>
                <div class="space-y-5 xl:col-span-3">
                  <div class="space-y-6">
                    <div>
                      <h2 class="text-[26px]  text-[#e3c5ad] font-bold leading-8 tracking-tight">
                        Krishna Story - When Draupadi met Krishna's Queens
                      </h2>
                      <div class="flex flex-wrap">
                        <p className="mt-4 text-[18px] text-[#7cb5b2]">
                          {" "}
                          Krishna Story
                        </p>
                      </div>
                    </div>
                    <div class=" text-[18.5px] prose text-gray-500 max-w-none dark:text-gray-400">
                      Before the Mahabharat war, Yādavas and many other kings
                      met at Kurukṣetra during a solar eclipse. Krishna also met
                      the residents of Vrindavana after a long time and gave
                      them great joy...
                    </div>
                  </div>
                  <div class="text-base font-medium leading-6">
                    <a
                      class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label='Read "Krishna Story - When Draupadi met Krishna&apos;s Queens"'
                      onClick={goToKrishnaStory1}
                      className="cursor-pointer text-xl text-[#a38c6b]"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </li>

          <li class="py-12">
            <article>
              <div class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt class="sr-only">Published on</dt>
                  <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time
                      datetime="2017-11-28T00:00:00.000Z"
                      className="text-[16px] font-[cursive]"
                    >
                      November 28, 2017
                    </time>
                  </dd>
                </dl>
                <div class="space-y-5 xl:col-span-3">
                  <div class="space-y-6">
                    <div>
                      <h2 class="text-[26px]  text-[#e3c5ad] font-bold leading-8 tracking-tight">
                        Krishna Story - Why does Krishna wear Peacock Feathers
                        on his head
                      </h2>
                      <div class="flex flex-wrap">
                        <p className="mt-4 text-[18px] text-[#7cb5b2]">
                          Krishna Story
                        </p>
                        {/* <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/krishna">Krishna</a>
                  <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/story">Story</a> */}
                      </div>
                    </div>
                    <div class="prose  text-[18.5px] text-gray-500 max-w-none dark:text-gray-400">
                      There's a real story behind Krishna wearing peacock
                      feathers on his head. One afternoon, when Krishna woke up
                      from a rest in the forest while his cowherd friends were
                      still asleep ...
                    </div>
                  </div>
                  <div class="text-base font-medium leading-6">
                    <a
                      class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label='Read "Krishna Story - Why does Krishna wear Peacock Feathers on his head"'
                      onClick={goToKrishnaStory2}
                      className="cursor-pointer text-xl text-[#a38c6b]"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </li>

          <li class="py-12">
            <article>
              <div class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt class="sr-only">Published on</dt>
                  <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time
                      datetime="2017-11-27T00:00:00.000Z"
                      className="text-[16px] font-[cursive]"
                    >
                      November 27, 2017
                    </time>
                  </dd>
                </dl>
                <div class="space-y-5 xl:col-span-3">
                  <div class="space-y-6">
                    <div>
                      <h2 class="text-[26px]  text-[#e3c5ad] font-bold leading-8 tracking-tight">
                        Story of Birth of Srimati Radharani
                      </h2>
                      <div class="flex flex-wrap">
                        <p className="mt-4 text-[18px] text-[#7cb5b2]">
                          Radha Story
                        </p>
                        {/* <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/radha">Radha</a>
                  <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/story">Story</a> */}
                      </div>
                    </div>
                    <div class="prose  text-[18.5px] text-gray-500 max-w-none dark:text-gray-400">
                      There's a story mentioned in the Puranas about the birth
                      of Radha, the eternal consort of Shri Krishna. Radha is
                      considered to be an incarnation of Goddess Lakshmi.
                    </div>
                  </div>
                  <div class="text-base font-medium leading-6">
                    <a
                      class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label='Read "Story of Birth of Srimati Radharani"'
                      onClick={goToSrimatiRadharani}
                      className="cursor-pointer text-xl text-[#a38c6b]"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <div class="flex justify-end text-base font-medium leading-6">
        <a
          class="text-[#6f8b8b] hover:text-[#ceb2a7] text-[18.5px] font-bold cursor-pointer"
          aria-label="all posts"
          href="/blog"
        >
          All Posts →
        </a>
      </div>
    </main>
  );
}

export default Blog;
