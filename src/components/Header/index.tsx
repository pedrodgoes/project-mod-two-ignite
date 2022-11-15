import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  onOpenModalTransaction: () => void;
}

export function Header({ onOpenModalTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenModalTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
