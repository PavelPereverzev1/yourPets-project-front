import { ImgLoader, LoaderContainer } from "./LoaderGif.styled";
import LoaderImg from "../../images/loader/dog.gif"

export default function LoaderGif() {
    return (
        <LoaderContainer>
        <ImgLoader src={LoaderImg} alt="Loading....." />
      </LoaderContainer>
    )
}