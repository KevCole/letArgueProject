import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux'


const AppContainer = () => {
    <Provider>
        <App/>
    </Provider>
}


AppRegistry.registerComponent('letsArgueProject', () => AppContainer);