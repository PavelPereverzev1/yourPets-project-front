import TitleComponent from "components/TitleComponent/TitleComponent";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NewsList from "components/NewsList/NewsList";
import Pagination from "components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "redux/news/news-thunk";

const NewsPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage);
  const totalPages = useSelector(state => state.totalPages);

  const handlePageChange = page => {
    dispatch(fetchNews({ page }));
  };

  return (
    <>
   <TitleComponent name="News"/>
   <NoticesSearch />
  <NewsList />
  <Pagination 
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
  />
  </>
  );
};

export default NewsPage;