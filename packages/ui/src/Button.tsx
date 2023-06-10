'use client';

import styles from './Button.module.scss';

export function Button() {
  return (
    <button
      className={styles.Button}
      type="button"
      // eslint-disable-next-line no-alert
      onClick={() => alert('boop')}
    >
      Boop
    </button>
  );
}
