import TitleComponent from "components/TitleComponent/TitleComponent";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NewsItem from "components/NewsItem/NewsItem";

const NewsPage = () => {
  return (
    <>
   <TitleComponent name="News"/>
   <NoticesSearch />
<NewsItem/>
<NewsItem/>
<NewsItem/>
<NewsItem/>
<NewsItem/>
<NewsItem/>
<NewsItem/>
  </>
  );
};

export default NewsPage;