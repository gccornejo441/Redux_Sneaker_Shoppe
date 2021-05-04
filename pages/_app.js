import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../lib/store';

export default function App({ Component, pageprops}) {
    return (
        <Provider store={store}>
            <Component{...pageprops}/>
        </Provider>
    )
}
