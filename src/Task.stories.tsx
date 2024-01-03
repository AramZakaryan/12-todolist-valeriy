import type {Meta, StoryObj} from '@storybook/react';
import {Task} from "./Task";
import {TaskType} from "./Todolist";
import {action} from "@storybook/addon-actions";
import React, {ChangeEvent, useCallback, useState} from "react";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {EditableSpan} from "./EditableSpan";
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";


const meta: Meta<typeof Task> = {
    title: 'todolist/Task',
    component: Task,
    // parameters: {layout: "centered"},
    argTypes: {
        changeTaskStatus: {
            description: 'changeTaskStatus callback',
            action: "task status changed"
        },
        changeTaskTitle: {
            description: 'changeTaskTitle callback',
            action: "task title changed"
        },
        removeTask: {
            description: 'removeTask callback',
            action: "task removed"
        },
    },
    args: {
        todolistId: 'todolistIdAgfsjl'
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Task>;

export const TaskExampleActive: Story = {
    args: {
        task: {id: 'taskIdAljlkj', title: 'JS', isDone: false},
    }
};

export const TaskExampleCompleted: Story = {
    args: {
        task: {id: 'taskIdAljlkj', title: 'CSS ', isDone: true},
    }
};


const TaskExampleComponent = () => {
    const [task, setTask]
        = useState({id: 'taskIdAljlkj', title: 'JS', isDone: false})

    return (
        <Task changeTaskStatus={() => setTask(
            {
                ...task,
                isDone: !task.isDone
            })}
              changeTaskTitle={(_,newTitle) => setTask({
                  ...task,
                  title: newTitle
              })}
              removeTask={
                  action("task removed")
              }
              task={task}
              todolistId={'todolistIdAgfsjl'}/>
    )
}

export const TaskExample: Story = {
    render: () => <TaskExampleComponent

    />
}