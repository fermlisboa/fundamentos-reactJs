import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comments.module.css';
import { useState } from 'react';

export function Comments ({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/75635566?v=4" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>
                  Fernando Lisboa
                </strong>

                <time title='04 de junho de 2022 às 08:00' dateTime='2022-06-04 08:00:00' >Cerca de 1h atrás </time>
              </div>
              <button onClick={handleDeleteComment} title='Deletar comentário'>
                <Trash size={24} />
              </button> 
            </header>
            <p>
              {content}
            </p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span> {likeCount} </span>
            </button>
          </footer>
        </div>
      </div>
  );
}