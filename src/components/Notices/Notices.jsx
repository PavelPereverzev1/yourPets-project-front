import { NoticeCategoriesNav } from "../NoticeCategoriesNav/NoticeCategoriesNav"
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
const Notice = () => {
  return(
    <>
        <NoticesSearch></NoticesSearch>
    <NoticeCategoriesNav></NoticeCategoriesNav>
    </>
    );
};

export default Notice;
