import Head from 'next/head'
import Navbar from '../Components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      hi
      <Navbar />
    </div>
  )
}