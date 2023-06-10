import { Button, Header } from 'ui';

import styles from './page.module.scss';

export default function Page() {
  return (
    <div className={styles.Page}>
      <Header text="Web" />
      <Button />
    </div>
  );
}
