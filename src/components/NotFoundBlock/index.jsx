import React from 'react';
import s from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={s.root}>
        <span>😕</span>
        <br />
        <p>Ничего не найдено...</p>
    </div>

  )
}

export default NotFoundBlock