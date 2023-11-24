import TitleComponent from "components/TitleComponent/TitleComponent";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
// import NewsList from "components/NewsList/NewsList";

const NewsPage = () => {
  return (
    <>
   <TitleComponent name="News"/>
   <NoticesSearch />
  {/* <NewsList /> */}
  </>
  );
};

export default NewsPage;