import TitleComponent from 'components/TitleComponent/TitleComponent';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NewsList from 'components/NewsList/NewsList';
import { Wrapper } from './NewsPage.styled';

const NewsPage = () => {
  return (
    <Wrapper>
      <TitleComponent name="News" />
      <NoticesSearch />
      <NewsList />
    </Wrapper>
  );
};

export default NewsPage;
