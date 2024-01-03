import type {Meta, StoryObj} from '@storybook/react';
import React from "react";
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {combineReducers, legacy_createStore} from "redux";
import {tasksReducer} from "./state/tasks-reducer";
import {todolistsReducer} from "./state/todolists-reducer";
import {v1} from "uuid";



// Store for Story

const initialStateStory = {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all"},
        {id: "todolistId2", title: "What to buy", filter: "all"}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", isDone: false},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }
};

const rootReducerStory = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

type rootReducerStory = ReturnType<typeof rootReducerStory>

const storeStory = legacy_createStore(rootReducerStory, initialStateStory as rootReducerStory)




// Story

const meta: Meta<typeof AppWithRedux> = {
    title: 'todolist/AppWithRedux',
    component: AppWithRedux,
    decorators: [(storyFn: any) => {
        return (<Provider store={storeStory}>
            {storyFn()}
        </Provider>)
    }],
    parameters: {layout: "centered"},
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof AppWithRedux>;

// export const AppWithReduxExample: Story = {
//     render: () => {
//         return (<Provider store={store}>
//             <AppWithRedux/>
//         </Provider>)
//     }
// };

export const AppWithReduxExample: Story = {};