
'use client'

import Evento from './Evento'
import styles from '../styles/Card.module.css'
import Image from 'next/image'
import { useState } from 'react'


export default function Card({ todo }) {
    const [idImg, setidImg] = useState();
    
    function Reload() {
        location.reload();
    }
   
    
    
    return (
        
        <>
            <div><button className={styles.btn} onClick={Reload}>Recomeçar</button></div>
            <div className={styles.containerImg}>
          
            {todo.map((card)=>(<Evento key={card.id} idImg={card}/>)) }
           
          
                

          
            
            
            </div>
        </>

    )
}