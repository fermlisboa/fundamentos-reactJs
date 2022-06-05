import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import unsplash from '../../assets/unsplash.jpg'
import { Avatar } from '../Avatar/Avatar';

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img 
      src={unsplash} 
      className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/75635566?v=4" />

        <strong>Fernando Lisboa</strong>
        <span>React Student</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
          </a>
      </footer>
    </aside>
  )
}