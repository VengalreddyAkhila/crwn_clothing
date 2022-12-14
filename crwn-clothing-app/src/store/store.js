import {compose,createStore,applyMiddleware} from 'redux'

import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

const middleWares = [logger]
const composedEnchancers = compose(applyMiddleware(...middleWares))

export const Store = createStore(rootReducer,undefined,composedEnchancers)

