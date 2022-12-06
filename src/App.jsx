import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import Todo from './components/Todo'

function App() {

  document.title = 'Pomotodo'


  return (
    <div className="App">
      <Header />
      <Counter />
      <Todo />
    </div>
  )
}

export default App
