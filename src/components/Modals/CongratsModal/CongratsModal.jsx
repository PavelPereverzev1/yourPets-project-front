// import { Button } from "components/ButtonComponent/ButtonComponent.styled";
import Modal from "../Modal/Modal";
import { ButtonBlue, Container, Icon, Text, Title } from "./CongratsModal.styled";
import sprite from '../../../images/icons/sprite.svg';

export default function CongratsModal({ active, setActive}) {
    return (
        <Modal active={active} setActive={setActive}>
            <Container>
                <Title>Congrats!</Title>
                <Text>Youre registration is success</Text>
                <ButtonBlue onClick={()=>setActive(false)}>
                Go to profile 
                    <Icon>
                    <use href={`${sprite}#icon-pawprint-1`} />
                    </Icon>
                </ButtonBlue>
            </Container>
        </Modal>
    )
}