
'use client'

import Evento from './Evento'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import { useState } from 'react'


export default function Card({ todo, handleJogadas }) {
    let j = 0;
    const [idImg, setidImg] = useState();
    
    const [contadorCartas, setContadorCartas] = useState(0);
    

    const item = () => {
        
        return j++;
        
    }



    function Reload() {
        location.reload();
    }
   
    

    
    
    return (
        
        <>
            <div><button className={styles.btn} onClick={Reload}>Recomeçar</button></div>
            <div className={styles.containerImg}>
          
                {todo.map((card) => (
                    <>
                       
                        <Evento handleJogadas={handleJogadas}  idImg={card} item={item} contadorCartas={(j++)+1} />
                     
                    </>
                ))}
           
          
                

          
            
            
            </div>
        </>

    )
}