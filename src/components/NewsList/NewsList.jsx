import React, { useEffect } from 'react';
import NewsItem from 'components/NewsItem/NewsItem';
import { List, NotFoundText } from './NewsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from 'redux/news/news-thunk';
import { selectSearchQuery } from 'redux/notices/noticesSelectors';
import Pagination from 'components/Pagination/Pagination';
import LoaderGif from 'components/LoaderGif/LoaderGif';

function NewsList() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.data.data);
  const query = useSelector(selectSearchQuery);
  const isLoading = useSelector(state => state.news.isLoading);

  const currentPage = useSelector(state => state.news.currentPage);
  const totalNewsNumber = useSelector(state => state.news.data.total);
  const totalPages = Math.ceil(totalNewsNumber / 6);

  const handlePageChange = page => {
    dispatch(fetchNews({ page }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filterNewsByQuery = (news, query) => {
    return news.filter(n =>
      n.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredNews = query && news ? filterNewsByQuery(news, query) : news;

  useEffect(() => {
    dispatch(fetchNews({ page: 1, limit: 6, search: '' }));
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <LoaderGif />
      ) : (
        <>
          <List>
            {filteredNews && filteredNews.length > 0 ? (
              filteredNews.map(n => (
                <NewsItem
                  key={n._id}
                  imgUrl={n.imgUrl}
                  title={n.title}
                  text={n.text}
                  date={n.date}
                  url={n.url}
                />
              ))
            ) : (
              <NotFoundText>No news found</NotFoundText>
            )}
          </List>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default NewsList;
