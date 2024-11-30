import {PathProps, Path} from "react-native-svg";
import Animated, {
    Easing,
    SharedValue,
    useAnimatedProps,
} from "react-native-reanimated";
import {useCallback, useRef, useState} from "react";
import {Platform} from "react-native"

const AnimatedPath = Animated.createAnimatedComponent(Path);
type Props = {
    progress: SharedValue<number>;
} & PathProps;
const AnimatedStroke = ({progress, ...props}: Props) => {
    const [length, setLength] = useState<number | undefined>();
    const ref = useRef<Path>(null);
    const animatedProps = useAnimatedProps(() => {
        // svg 15.8 has a bug on android
        return {
            strokeDashoffset: Platform.OS === "ios" && length ? Math.max(
                0,
                length -
                length * Easing.bezierFn(0.37, 0, 0.63, 1)(progress.value) -
                0.1,
            ) : undefined,
        };
    });
    const onLayout = useCallback(() => {
        if (Platform.OS === 'ios' && ref.current) {
            setLength(ref.current.getTotalLength() as number)
        }
    }, [])
    return (
        <AnimatedPath
            animatedProps={animatedProps}
            strokeDasharray={length}
            onLayout={onLayout}
            ref={ref}
            {...props}
        />
    );
};

export default AnimatedStroke;
