

import Head from "next/head";
import Image from 'next/image'
import Card from '../components/Card'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import {useState} from 'react'
import Link from 'next/link'

export let data = [];
  




export const getStaticProps = () => {

  let cartasViradas = [];
  data[0] ={ id: 1, url: '/img/imagem-1.jpg' };
  data[1] = { id: 2, url: '/img/imagem-2.jpg' };
  data[2] = { id: 3, url: '/img/imagem-3.jpg' };
  data[3] = { id: 4, url: '/img/imagem-4.jpg' };
  data[4] = { id: 5, url: '/img/imagem-5.jpg' };
  data[5] = { id: 6, url: '/img/imagem-6.jpg' };
  data[6] = { id: 7, url: '/img/imagem-1.jpg' };
  data[7] = { id: 8, url: '/img/imagem-2.jpg' };
  data[8] = { id: 9, url: '/img/imagem-3.jpg' };
  data[9] = { id: 10, url: '/img/imagem-4.jpg' };
  data[10] = { id: 11, url: '/img/imagem-5.jpg' };
  data[11] = { id: 12, url: '/img/imagem-6.jpg' };


  let contador = 0;
  

  while (data.length !== 0) {
    let max = 11 - contador;
    let sorteado = randomIntFromInterval(0, max);
    cartasViradas.push(data[sorteado]);
    
    data.splice(sorteado, 1);
    contador++;
     
  }
  
  

  
  return {
    props: { cartasViradas },
}

}


export function sortearCartas(data) {
  
  
      
  let contador = 0;
  

  while (data.length !== 0) {
    let max = 11 - contador;
    let sorteado = randomIntFromInterval(0, max);
    cartasViradas.push(data[sorteado]);
    
    data.splice(sorteado, 1);
    contador++;
     
  }

  console.log(cartasViradas[0].url)

  return {
     cartasViradas, 
}
} 

export function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Home({ cartasViradas }) {

 
  const [jogadas, setJogadas] = useState(0);
  
  const handleJogadas = (r) => {
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
         <p>Número de Jogadas: <span className={styles.jogadas}>{jogadas}</span></p>
        <Card todo={cartasViradas} handleJogadas={handleJogadas} />
        
        

       
        
      </main>
    </>
  );
}
