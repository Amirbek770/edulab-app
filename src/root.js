import React from 'react'
import ThemeManager from 'Themes';
import { Provider } from 'react-redux';
import { store } from 'Store'
import AppNavigator from 'Navigation'

const App = ({ params }) => {

    return (
        <ThemeManager>
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        </ThemeManager>
    )
};

export default App;
