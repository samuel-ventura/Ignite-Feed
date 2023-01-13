import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css'
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";


export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Samuel Ventura"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti est cupiditate totam ad ea exercitationem, aliquid iste perferendis autem reiciendis nobis harum velit. Non sapiente cumque iusto ut dolor."
          />
          <Post
            author="Jânio Quadros"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti est cupiditate totam ad ea exercitationem, aliquid iste perferendis autem reiciendis nobis harum velit. Non sapiente cumque iusto ut dolor."
          />
        </main>
      </div>
    </>
  )
}
