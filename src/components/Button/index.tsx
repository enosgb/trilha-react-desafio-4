import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disable }: IButtonProps) => {
  return (
    <ButtonContainer disabled={disable} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
