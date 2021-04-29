import { Provider } from 'react-redux';
import store from '../container/store';

export default function App({ Component, pageprops}) {
    return (
        <div>
            <Provider store={store}>
            <Component{...pageprops}/>
            </Provider>
        </div>
    )
}
