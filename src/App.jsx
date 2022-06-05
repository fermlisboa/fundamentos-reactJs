import { useState } from 'react'

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebarr/Sidebar';
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Fernando"
            content="Post Legal"
          />
          <Post
            author="Fernando"
            content="Post Legal"
          />
        </main>
      </div>
    </div>
  )
}
