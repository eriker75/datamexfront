import { Provider } from 'react-redux';
import { store } from './sotre'
import { ChildrenInterface } from '@/models/interfaces/ChildrenInterface'

export const ReduxProvider = ( {children}: ChildrenInterface ) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
