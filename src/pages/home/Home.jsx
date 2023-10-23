import { useState } from "react";
import { toursList } from "../../data";
import { paginate } from "../../utils/pagination";
import HeroHeader from "../../components/hero-header/HeroHeader";
import NewsLetter from "../../components/news-letter/NewsLetter";
import Pagination from "../../components/pagination/Pagination";
import Services from "../../components/services/Services";
import SortInput from "../../components/sort-input/SortInput";
import TourList from "../../components/tours/TourList";
import Banner from "../../components/banner/Banner";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortItem, setSortItem] = useState("recomended");

  const sortedTourList =
    sortItem === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItem === "high"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating);

  const { pages, orderedTourList } = paginate(
    sortedTourList.length,
    sortedTourList,
    currentPage
  );
  return (
    <div>
      <HeroHeader />
      <Services />
      <SortInput
        toursLength={sortedTourList.length}
        setSortItem={setSortItem}
        sortItem={sortItem}
      />
      <TourList toursList={orderedTourList} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
    </div>
  );
};

export default Home;
