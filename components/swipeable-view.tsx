import {Box} from "@/components/atom";
import Animated, {runOnJS, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {Gesture, GestureDetector, } from "react-native-gesture-handler";
import {Dimensions} from 'react-native'
import {ReactNode} from "react";

const {width: SCREEN_WIDTH} = Dimensions.get("window")
const SWIPE_THRESHOLD = -SCREEN_WIDTH * .2
const AnimatedBox = Animated.createAnimatedComponent(Box)

type SwipeableViewProps = {
    onSwipeLeft?: () => void
    children: ReactNode,
    backView?: ReactNode,
}


const SwipeableView = ({onSwipeLeft, children, backView}: SwipeableViewProps) => {
    const translateX = useSharedValue(0)
    const pan = Gesture.Pan().onUpdate(e => {
        translateX.value = Math.max(-128, Math.min(0, e.translationX))
    }).onEnd(e => {
        const shouldBeDismissed = e.translationX < SWIPE_THRESHOLD
        if (shouldBeDismissed) {
            translateX.value = withTiming(-SCREEN_WIDTH)
            onSwipeLeft && runOnJS(onSwipeLeft)()
        } else {
            translateX.value = withTiming(0)
        }
    });
    const facadeStyle = useAnimatedStyle(() => ({
        transform: [{translateX: translateX.value}]
    }))
    return <Box position='relative'>
        {
            backView && (
                <Box position="absolute" top={0} bottom={0} left={0} right={0}>
                    {backView}
                </Box>
            )
        }
        <GestureDetector gesture={pan}>
            <AnimatedBox style={[facadeStyle]}>
                {children}
            </AnimatedBox>
        </GestureDetector>
    </Box>
}
export default SwipeableView