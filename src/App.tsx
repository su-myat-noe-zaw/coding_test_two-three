import React from 'react'
import MainPage from './pages/MainPage'
import { Provider } from 'react-redux'
import { store } from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainPage/>
    </Provider>
  )
}

export default App