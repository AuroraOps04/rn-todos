import {Pressable, TouchableOpacity, TouchableOpacityProps, View} from "react-native";
import {AntDesignIcon} from "@/components/atom";
import {
    backgroundColor,
    BackgroundColorProps, border, BorderProps,
    color,
    ColorProps,
    createRestyleComponent,
    layout,
    LayoutProps,
    spacing,
    SpacingProps
} from "@shopify/restyle";
import {Theme} from "@/theme/theme";
import Animated from "react-native-reanimated";

type FebProps = {
    onPress?: () => void
}
const StyledTouchableOpacity = Animated.createAnimatedComponent(createRestyleComponent<
    TouchableOpacityProps & BackgroundColorProps<Theme>
    & ColorProps<Theme> & SpacingProps<Theme>
    & LayoutProps<Theme>, Theme>([color, spacing, layout, backgroundColor], TouchableOpacity))
const Feb = ({onPress}: FebProps) => {
    return (
        <StyledTouchableOpacity
            style={{borderRadius: '50%', position: 'absolute', bottom: 20, right: 20}}
            backgroundColor={'febBg'} height={56} width={56} alignItems={'center'}
            justifyContent={'center'}
            onPress={onPress}>
            <AntDesignIcon name={'plus'} size={24} color={'white'}/>
        </StyledTouchableOpacity>
    )
}
export default Feb