import Animated, {Easing, FadeIn, FadeInDown, FadeOutDown} from "react-native-reanimated";
import TaskItem from "@/components/task-item";
import {useCallback} from "react";

export type TaskItemData = {
    subject: string;
    id: string;
    done: boolean
}

type AnimatedTaskItemProps = {
    taskItem: TaskItemData;
    onChangeTaskItem: (taskItem: TaskItemData) => void;
    onRemoveTaskItem: (taskItem: TaskItemData) => void;
    onFinishEditing: (taskItem: TaskItemData) => void;
    onToggleCheckBox: (taskItem: TaskItemData) => void;
    onPressLabel: (taskItem: TaskItemData) => void;
    editId: string | null;
}
type TaskListProps = {
    data: TaskItemData[]
    onChangeTaskItem: (taskItem: TaskItemData) => void;
    onRemoveTaskItem: (taskItem: TaskItemData) => void;
    onFinishEditing: (taskItem: TaskItemData) => void;
    onToggleCheckBox: (taskItem: TaskItemData) => void;
    onPressLabel: (taskItem: TaskItemData) => void;
    editId: string | null;
}

const AnimatedTaskItem = ({
                              taskItem,
                              onChangeTaskItem,
                              onPressLabel,
                              onRemoveTaskItem,
                              onFinishEditing,
                              onToggleCheckBox,
                              editId,
                          }: AnimatedTaskItemProps) => {
    const handleToggleCheckBox = useCallback(() => {
        onToggleCheckBox(taskItem)
    }, [onToggleCheckBox, taskItem])
    const handleFinishEditing = useCallback(() => {
        onFinishEditing(taskItem)
    }, [onFinishEditing, taskItem])
    const handleRemoveTaskItem = useCallback(() => {
        onRemoveTaskItem(taskItem)
    }, [onRemoveTaskItem, taskItem])
    const handlePressLabel = useCallback(() => {
        onPressLabel(taskItem)
    }, [onPressLabel, taskItem])
    const handleChangeTaskItem = useCallback((subject: string) => {
        onChangeTaskItem({...taskItem, subject})
    }, [onChangeTaskItem, taskItem]);

    return (
        <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
            <TaskItem onRemove={handleRemoveTaskItem}
                      onPressLabel={handlePressLabel}
                      isDone={taskItem.done}
                      onToggleCheckBox={handleToggleCheckBox}
                      onChangeSubject={handleChangeTaskItem}
                      isEditing={taskItem.id === editId}
                      subject={taskItem.subject}
                      onFinishEditing={handleFinishEditing}/>
        </Animated.View>
    )
}


const TaskList = ({
                      data,
                      onChangeTaskItem,
                      onRemoveTaskItem,
                      onFinishEditing,
                      editId,
                      onToggleCheckBox,
                      onPressLabel
                  }: TaskListProps) => {
    return <Animated.ScrollView style={{ width:'100%'}}>
        {data.map(taskItem => <AnimatedTaskItem
            key={taskItem.id}
            taskItem={taskItem}
            onChangeTaskItem={onChangeTaskItem}
            onRemoveTaskItem={onRemoveTaskItem}
            onFinishEditing={onFinishEditing}
            onToggleCheckBox={onToggleCheckBox}
            onPressLabel={onPressLabel}
            editId={editId}
        />)}
    </Animated.ScrollView>
}

export default TaskList;