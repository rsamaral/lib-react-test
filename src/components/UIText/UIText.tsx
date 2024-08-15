import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import theme from '../../theme/theme';

interface UIButtonProps extends ButtonProps {
  label: string;
  buttonType: 'black' | 'white';
}

const StyledButton = styled(Button)<{ buttonType: 'black' | 'white' }>(
  ({ buttonType }) => ({
    ...(buttonType === 'black' && {
      color: 'white',
      background: 'black',
      border: '1px solid black',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      minWidth: '100px',
      fontFamily: theme.typography.fontFamily,
    }),
    ...(buttonType === 'white' && {
      color: 'black',
      background: 'white',
      border: '1px solid white',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      minWidth: '100px',
      fontFamily: theme.typography.fontFamily,
    }),
  })
);

const UIButton = ({ label, buttonType, ...props }: UIButtonProps) => {
  return (
    <StyledButton buttonType={buttonType} {...props}>
      {label}
    </StyledButton>
  );
};

export default UIButton;
