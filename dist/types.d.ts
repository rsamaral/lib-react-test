import { ButtonProps } from '@mui/material/Button';
import * as _emotion_styled from '@emotion/styled';
import * as _mui_system from '@mui/system';
import * as _mui_material_styles from '@mui/material/styles';
import * as react from 'react';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import * as _mui_material_Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material/Typography';

interface UIButtonProps extends ButtonProps {
    label: string;
    buttonType: 'black' | 'white';
}
declare const UIButton: React.FC<UIButtonProps>;

interface CustomTypographyProps extends TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
    fontWeight?: string;
    fontSize?: string;
}
declare const CustomTypography: _emotion_styled.StyledComponent<_mui_material_Typography.TypographyOwnProps & _mui_material_OverridableComponent.CommonProps & Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void | react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | react.RefObject<HTMLSpanElement> | null | undefined;
}, "zIndex" | "typography" | "fontFamily" | "fontSize" | "fontWeight" | "lineHeight" | "className" | "style" | "classes" | "children" | "sx" | "border" | "boxShadow" | "alignContent" | "alignItems" | "alignSelf" | "bottom" | "boxSizing" | "color" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontStyle" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "justifyContent" | "justifyItems" | "justifySelf" | "left" | "letterSpacing" | "marginBlockEnd" | "marginBlockStart" | "marginBottom" | "marginInlineEnd" | "marginInlineStart" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "order" | "paddingBlockEnd" | "paddingBlockStart" | "paddingBottom" | "paddingInlineEnd" | "paddingInlineStart" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "rowGap" | "textAlign" | "textOverflow" | "textTransform" | "top" | "visibility" | "whiteSpace" | "width" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "flex" | "gap" | "gridArea" | "gridColumn" | "gridRow" | "margin" | "marginBlock" | "marginInline" | "overflow" | "padding" | "paddingBlock" | "paddingInline" | "bgcolor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "paddingX" | "py" | "paddingY" | "displayPrint" | "variant" | "align" | "gutterBottom" | "noWrap" | "paragraph" | "variantMapping"> & _mui_system.MUIStyledCommonProps<_mui_material_styles.Theme> & CustomTypographyProps, {}, {}>;

export { UIButton, CustomTypography as UITypo };
