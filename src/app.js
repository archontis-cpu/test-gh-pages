import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store.js';
import { Counter } from './features/index.js';

import Icon from './icon.js';
import { EditLesson } from './features/edit-lesson/edit-lesson.js';
import { AddLesson } from './features/add-lesson/add-lesson.js';
// import editIcon from './assets/svg/Edit.svg';

// console.log(editIcon);

const store = configureStore();

export const App = () => (
  <Provider store={store}>
    <h1>Hello, I`m App Component!</h1>
    <Counter />
    {/* <EditLesson />
    <AddLesson />
    <Icon icon="Plus" size={32} />
    <Icon icon="Edit" viewBox="0 0 50 50" />
    <Icon icon="Plus" size={32} className="icon" color="#FFFFFF" /> */}
    <Icon icon="Plus" size={32} className="icon" color="#FFB800" />
    {/* <Icon icon="Edit" viewBox="0 0 50 50" color="#000" /> */}
  </Provider>
);
