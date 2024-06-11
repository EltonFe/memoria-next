

import Head from "next/head";
import Image from 'next/image'
import Card from '../components/Card'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from '../components/Footer'

import {useState} from 'react'
import Link from 'next/link'


  











export default function Home() {

 
  const [jogadas, setJogadas] = useState(0);
  
  const handleJogadas = r => {
    setJogadas(r);
  }
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Jogo da memória" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/memoria.png" />
        <title>MemóriaNext</title>
      </Head>

      


      <main className={styles.mainContainer}>
        <h1>Jogo da Memória Memória<span>Next</span> </h1>
        <p className={styles.tituloJogadas}>Número de Jogadas: <span className={styles.jogadas}>{jogadas}</span></p>
        <Card handleJogadas={ handleJogadas} />
        
        

       
        
      </main>
      
    </>
  );
}
