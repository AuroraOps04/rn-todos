import {
    all, AllProps, border,
    BoxProps,
    color,
    ColorProps,
    createBox,
    createRestyleComponent,
    createText, layout, LayoutProps, position, PositionProps,
    spacing, spacingShorthand, SpacingShorthandProps,
    TextProps
} from "@shopify/restyle";
import {Theme} from "@/theme/theme";
import {ComponentProps} from "react";
import {AntDesign, Feather} from "@expo/vector-icons";
import {Image} from "react-native"

export const Box = createBox<Theme>()
export const Text = createText<Theme>()
export const FeatherIcon = createRestyleComponent<BoxProps<Theme> & TextProps<Theme> & ComponentProps<typeof Feather>, Theme>([color], Feather)
export const AntDesignIcon = createRestyleComponent<BoxProps<Theme> & TextProps<Theme> & ComponentProps<typeof AntDesign>, Theme>([color], AntDesign)


