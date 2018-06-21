import React from 'react'
import ReactDOM from 'react-dom'
import IndexCSS from './index.css'

const Index = () => {
  return <div className={IndexCSS['btn-primary']}>Hello React!</div>
}

ReactDOM.render(<Index/>, document.getElementById('index'))