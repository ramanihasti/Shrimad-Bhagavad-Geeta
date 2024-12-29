import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chapter from "./pages/Chapter";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Verses from "./pages/Verses";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Acknowledgements from "./pages/Acknowledgements";
import Blog from "./pages/Blog";
import RadhaBlog from "./pages/blogDetails/RadhaBlog";
import SrimatiRadharani from "./pages/blogDetails/SrimatiRadharani";
import KrishnaStory2 from "./pages/blogDetails/KrishnaStory2";
import KrishnaStory1 from "./pages/blogDetails/KrishnaStory1";

function App() {
  return (
    <div>
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="chapter/:id" element={<Chapter />} />

            <Route path="blog" element={<Blog />} />
            <Route path="blog/blogDetails/radha-blog" element={<RadhaBlog />} />
            <Route
              path="blog/blogDetails/krishna-story-1"
              element={<KrishnaStory1 />}
            />
            <Route
              path="blog/blogDetails/krishna-story-2"
              element={<KrishnaStory2 />}
            />
            <Route
              path="blog/blogDetails/srimati-radharani"
              element={<SrimatiRadharani />}
            />

            <Route
              path="chapter/:chapterId/:verses/:verseId"
              element={<Verses />}
            />
            <Route path="knowledge" element={<Acknowledgements />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route path="policy" element={<PrivacyPolicy />} />
            <Route path="acknowledgements" element={<Acknowledgements />} />
            <Route path="app" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
