import { createStore, compose} from 'redux'
import rootReducer from './reducers/rootReducer'

const enhancers = compose(
    // redux-dev-tool setting
    (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
   );

const store = createStore(rootReducer, enhancers)

export default store