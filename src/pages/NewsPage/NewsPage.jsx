import TitleComponent from "components/TitleComponent/TitleComponent";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NewsList from "components/NewsList/NewsList";
import Pagination from "components/Pagination/Pagination";

const NewsPage = () => {
  return (
    <>
   <TitleComponent name="News"/>
   <NoticesSearch />
  <NewsList />
  <Pagination />
  </>
  );
};

export default NewsPage;