import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { ReduxRouter } from 'redux-router';

import { IndexRoute, Route } from 'react-router';

import createStore from 'utils/createStore';

import { EDITOR_PATH } from 'utils/urls';

import { toChangeLevel } from 'state/actions/changeLevel';

import App from 'components/App/App';
import GameContainer from 'components/Game/GameContainer';
import EditorContainer from 'components/Editor/EditorContainer';

import 'styles/base.scss';
import 'styles/utils.scss';
import 'styles/navbar.scss';

const store = createStore();
store.dispatch(toChangeLevel(1));

const app = (
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={App}>
        <IndexRoute component={GameContainer} />
        <Route path={EDITOR_PATH} component={EditorContainer} />
        <Route path="*" component={GameContainer} />
      </Route>
    </ReduxRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
