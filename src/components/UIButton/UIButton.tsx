import * as S from "./styles";

interface UIButtonProps {
  label: string;
  type: string;
}

const UIButton = ({ label, type }: UIButtonProps) => {
  return <S.UIButtonContainer buttonType={type}>{label}</S.UIButtonContainer>;
};

export default UIButton;
