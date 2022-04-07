import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

/* vladComment
Общие замечания:
    1) можно ввести email не похожий на email, нет валидации
    2) убрать аттрибут style. В Material UI есть sx/makeStyles/styled
    3) Не использовать <p /> <small /> <div /> <form /> <h1 /> <input /> и т.п.. В Material UI есть альтернатива
    4) Не использовать css файлы. Есть sx/makeStyles/styled
    5) установить Eslint, выбрать там AirBnb

*/

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


