import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import theme from '../../theme/theme';

interface CustomTypographyProps extends TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline';
  fontWeight?: string;
  fontSize?: string;
}

const CustomTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'fontWeight' && prop !== 'fontSize',
})<CustomTypographyProps>(({ fontWeight, fontSize, variant }) => {
  // Apply theme typography variants
  const typographyStyles = theme.typography[variant || 'body1'];
  return {
    fontFamily: typographyStyles.fontFamily,
    fontWeight: fontWeight || typographyStyles.fontWeight,
    fontSize: fontSize || typographyStyles.fontSize,
    lineHeight: typographyStyles.lineHeight,
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
  };
});

export default CustomTypography;
