import { Button } from "components/ButtonComponent/ButtonComponent.styled";
import Modal from "../Modal/Modal";
import { Container, Icon, Text, Title } from "./CongratsModal.styled";

export default function CongratsModal({ active, setActive}) {
    return (
        <Modal active={active} setActive={setActive}>
            <Container>
                <Title>Congrats!</Title>
                <Text>Youre registration is success</Text>
                <Button onClick={()=>setActive(false)}>
                Go to profile 
                    <Icon/>
                </Button>
            </Container>
        </Modal>
    )
}