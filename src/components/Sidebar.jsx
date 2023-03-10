import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
        
        <div className={styles.profile}>
          <strong>Samuel Ventura</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}