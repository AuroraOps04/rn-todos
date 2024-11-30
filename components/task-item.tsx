import {createBox, createRestyleComponent, all, BoxProps, TextProps, color} from "@shopify/restyle";
import {theme, Theme, useColorModeValue} from "@/theme/theme";
import AnimatedCheckbox from "@/components/animated-checkbox";
import {Pressable, TextInput} from "react-native";
import AnimatedTaskLabel from "@/components/animated-task-label";
import SwipeableView from "@/components/swipeable-view";
import {Feather} from "@expo/vector-icons";
import {ComponentProps} from "react";
import {FeatherIcon} from "@/components/atom";

const Box = createBox<Theme>()
const Input = createRestyleComponent<BoxProps<Theme> & TextProps<Theme> & ComponentProps<typeof TextInput>, Theme>([color], TextInput)
type TaskItemProps = {
    isDone: boolean
    onToggleCheckBox: () => void
    isEditing: boolean
    onChangeSubject?: (subject: string) => void
    subject: string
    onPressLabel?: () => void
    onRemove?: () => void
    onFinishEditing: () => void
}
const TaskItem = ({
                      isDone,
                      onToggleCheckBox,
                      isEditing,
                      onFinishEditing,
                      onRemove,
                      onChangeSubject,
                      subject,
                      onPressLabel
                  }: TaskItemProps) => {
    const highlightColor = useColorModeValue('highlight')
    const checkmarkColor = useColorModeValue('white')
    const boxStroke = useColorModeValue('boxStroke')
    const activeTextColor = useColorModeValue('activeText')
    const doneTextColor = useColorModeValue('doneText') // muted 400, 600
    const placeholderTextColor = useColorModeValue('placeholderText')
    return <SwipeableView
        onSwipeLeft={onRemove}
        backView={<Box height={'100%'} bg={'danger'} pr={'lg'} justifyContent={'center'} alignItems={'flex-end'}>
            <FeatherIcon name={'trash'} color={'white'} size={20}/>
        </Box>}>
        <Box p={'md'} width={'100%'} bg="itemBg" alignItems={'center'} flexDirection={'row'}>
            <Box width={30} height={30} mr={"sm"}>
                <Pressable onPress={onToggleCheckBox}>
                    <AnimatedCheckbox checked={isDone} boxOutlineColor={boxStroke} highlightColor={highlightColor}
                                      checkmarkColor={checkmarkColor}/>
                </Pressable>
            </Box>
            {
                isEditing ? (
                    <Input width={'100%'}
                           onBlur={onFinishEditing}
                           color={'text'}
                           autoFocus
                           placeholder={'Task'}
                           value={subject}
                           placeholderTextColor={placeholderTextColor}
                           fontSize={19} px={'sm'}  onChangeText={onChangeSubject}/>
                ) : (
                    <AnimatedTaskLabel onPress={onPressLabel} strikethrough={isDone} textColor={activeTextColor}
                                       inactiveTextColor={doneTextColor}>
                        {subject}
                    </AnimatedTaskLabel>
                )
            }
        </Box>
    </SwipeableView>
}
export default TaskItem