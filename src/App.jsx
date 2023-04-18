import { useState } from 'react'

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/75635566?v=4',
      name: 'Fernando Lisboa',
      role: 'React Student'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      }
    ],
    publishedAt: new Date('2022-07-20 08:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/75635566?v=4',
      name: 'Fernando Marques',
      role: 'React Student n2'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      }
    ],
    publishedAt: new Date('2022-07-22 08:00:00'),
  },
]

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
          })}
        </main>
      </div>
    </div>
  )
}
