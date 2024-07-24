import styled from "@emotion/styled";
import Button from "@mui/material/Button";

type StyledProps = {
  buttonType: string;
};

export const UIButtonContainer = styled(Button)<StyledProps>`
	backgroundColor: ${(props) =>
    props.buttonType === "primary" ? "white" : "black"}
	color: ${(props) => (props.buttonType === "primary" ? "black" : "white")};
`;
