import React, {useCallback, useState} from "react";
import shortid from "shortid"
import {Theme} from "@/theme/theme";
import {createBox} from "@shopify/restyle";
import ThemeToggle from "@/components/theme-toggle";
import TaskList, {TaskItemData} from "@/components/task-list";
import Feb from "@/components/feb";
import Masthead from "@/components/masthead";
import NavBar from "@/components/nav-bar";
import {Text} from "@/components/atom";

const initData = [
    {id: '1', subject: 'Buy milk', done: false},
    {id: '2', subject: 'Buy bread', done: false},
    {id: '3', subject: 'Buy eggs', done: false},
]

const Box = createBox<Theme>();
const Index = () => {
    const [data, setData] = useState<TaskItemData[]>(initData)
    const [editId, setEditId] = useState<string | null>(null)
    const handleChangeTaskItem = useCallback((taskItem: TaskItemData) => {
        setData(prev => prev.map(item => item.id === taskItem.id ? taskItem : item))
    }, [])
    const onRemoveTaskItem = useCallback((taskItem: TaskItemData) => {
        setData(prev => prev.filter(item => item.id !== taskItem.id))
    }, [])

    const onFinishEditing = useCallback((taskItem: TaskItemData) => {
        setEditId(null)
    }, [])
    const onToggleCheckBox = useCallback((taskItem: TaskItemData) => {
        setData(prev => prev.map(item => item.id === taskItem.id ? {...item, done: !item.done} : item))
    }, [])
    const onPressLabel = useCallback((taskItem: TaskItemData) => {
        setEditId(taskItem.id)
    }, [])
    const onAddTaskItem = useCallback(() => {
        const id = shortid.generate()
        setData(prev => ([{
            id,
            subject: '',
            done: false,
        }, ...prev]))
        setEditId(id)
    }, [setData])


    return (
        <Box bg={"bg"} flex={1} justifyContent='center' alignItems={'center'}>
            <Masthead source={require("@/assets/images/masthead.png")} title="What's up">
                <NavBar />
            </Masthead>
            <Box flex={1} width={'100%'} bg={'bg'} marginTop={'-lg'} pt={'lg'} borderTopRightRadius={20}
                 borderTopLeftRadius={20}>
                <TaskList data={data}
                          onChangeTaskItem={handleChangeTaskItem}
                          onRemoveTaskItem={onRemoveTaskItem}
                          onFinishEditing={onFinishEditing}
                          onToggleCheckBox={onToggleCheckBox}
                          onPressLabel={onPressLabel} editId={editId}/>
            </Box>
            <Feb onPress={onAddTaskItem}/>
        </Box>
    )
};

export default Index;
