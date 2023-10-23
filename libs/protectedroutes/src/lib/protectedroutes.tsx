import styles from './protectedroutes.module.css';

/* eslint-disable-next-line */
export interface ProtectedroutesProps {}

export function Protectedroutes(props: ProtectedroutesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Protectedroutes!</h1>
    </div>
  );
}

export default Protectedroutes;
