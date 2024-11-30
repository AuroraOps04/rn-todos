import {PropsWithChildren, useEffect} from "react";
import Animated, {
    Easing,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue, withDelay,
    withSequence, withTiming
} from "react-native-reanimated";
import {Box, Text} from "@/components/atom";
import {Pressable} from "react-native-gesture-handler";

type AnimatedTaskLabelProps = {
    strikethrough: boolean,
    textColor: string,
    inactiveTextColor: string,
    onPress?: () => void

} & PropsWithChildren
const AnimatedBox = Animated.createAnimatedComponent(Box)
const AnimatedText = Animated.createAnimatedComponent(Text)

const AnimatedTaskLabel = ({
                               strikethrough,
                               textColor,
                               inactiveTextColor,
                               onPress,
                               children
                           }: AnimatedTaskLabelProps) => {
    const colorProgress = useSharedValue(0)
    const offsetProgress = useSharedValue(0)
    const strikethroughProgress = useSharedValue(0)
    const easing = Easing.out(Easing.quad)
    const boxAnimatedStyles = useAnimatedStyle(() => ({
        transform: [{translateX: offsetProgress.value}]
    }), [strikethrough])
    const textColorStyles = useAnimatedStyle(() => ({
        color: interpolateColor(colorProgress.value, [0, 1], [textColor, inactiveTextColor], 'RGB')
    }), [strikethrough, textColor, inactiveTextColor])
    const strikethroughStyles = useAnimatedStyle(() => ({
            width: `${100 * strikethroughProgress.value}%`,
            borderBottomColor: interpolateColor(colorProgress.value, [0, 1], [textColor, inactiveTextColor], 'RGB')
        }), [strikethrough, textColor, inactiveTextColor]
    )

    useEffect(() => {
        if (strikethrough) {
            offsetProgress.value = withSequence(
                withTiming(4, {duration: 200, easing}),
                withTiming(0, {
                    duration: 200,
                    easing
                }))
            strikethroughProgress.value = withTiming(1, {duration: 400, easing})
            colorProgress.value = withDelay(1000, withTiming(1, {duration: 400, easing}))
        } else {
            strikethroughProgress.value = withTiming(0, {duration: 400, easing})
            colorProgress.value = withTiming(0, {duration: 400, easing})
        }
    }, [strikethrough]);

    return <Pressable onPress={onPress}>
        <AnimatedBox flex={1} flexDirection={'row'} alignItems={'center'} style={[boxAnimatedStyles]}>
            <AnimatedText color={'text'} numberOfLines={1} px={'sm'} fontSize={19}
                          style={[textColorStyles]}>{children}</AnimatedText>
            <AnimatedBox style={[strikethroughStyles]} position={'absolute'} height={1} borderBottomWidth={1}/>
        </AnimatedBox>
    </Pressable>
}

export default AnimatedTaskLabel;