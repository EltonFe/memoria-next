


import Evento from './Evento'
import styles from '../styles/Card.module.css'

import { useState } from 'react'
import Link from 'next/link'
export let chave = true;



export const cartasViradas = [];
export default function Card({handleJogadas}) {
    let j = 0;
    
function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }   


    const [contadorCartas, setContadorCartas] = useState(0);
    

    const [cartasViradasSet, setCartasViradasSet] = useState();    
    
    const data = [];
    if (chave) {
        data[0] = { id: 1, url: '/img/imagem-1.jpg' };
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
        data[12] = { id: 13, url: '/img/imagem-7.jpg' };
        data[13] = { id: 14, url: '/img/imagem-8.jpg' };
        data[14] = { id: 15, url: '/img/imagem-9.jpg' };
        data[15] = { id: 16, url: '/img/imagem-10.jpg' };
        data[16] = { id: 17, url: '/img/imagem-11.jpg' };
        data[17] = { id: 18, url: '/img/imagem-12.jpg' };
    
        data[18] = { id: 19, url: '/img/imagem-14.jpg' };
        data[19] = { id: 20, url: '/img/imagem-15.jpg' };
        data[20] = { id: 21, url: '/img/imagem-16.jpg' };
        data[21] = { id: 22, url: '/img/imagem-7.jpg' };
        data[22] = { id: 23, url: '/img/imagem-8.jpg' };
        data[23] = { id: 24, url: '/img/imagem-9.jpg' };
        data[24] = { id: 25, url: '/img/imagem-10.jpg' };
        data[25] = { id: 26, url: '/img/imagem-11.jpg' };
        data[26] = { id: 27, url: '/img/imagem-12.jpg' };
        data[27] = { id: 28, url: '/img/imagem-13.jpg' };
        data[28] = { id: 29, url: '/img/imagem-14.jpg' };
        data[29] = { id: 30, url: '/img/imagem-15.jpg' };
        data[30] = { id: 31, url: '/img/imagem-16.jpg' };
        data[31] = { id: 32, url: '/img/imagem-13.jpg' };
   
    
  
        let contador = 0;
        while (cartasViradas.length) {
            cartasViradas.pop();
        }
  
        while (data.length) {
            let max = 31 - contador;
            let sorteado = randomIntFromInterval(0, max);
            cartasViradas[contador] = data[sorteado];
      
            data.splice(sorteado, 1);
            contador++;
       
        }
        chave = false;
    }
    
    function sortearCarta() {
        chave = true;
        location.reload();
    }
    
    
    
    return (
        
        <>
            <div>
                <button className={styles.btn} onClick={sortearCarta}>Recomeçar</button>
            
            </div>
            
            <div className={styles.containerImg}>
          
                
                {cartasViradas.map((card, index) => (<Evento contadorCartas={contadorCartas} idImg={card} index={index} item={(j++)+1} handleJogadas={ handleJogadas} />))}
                    
                
                     
             
            
            </div>
        </>

    )
}