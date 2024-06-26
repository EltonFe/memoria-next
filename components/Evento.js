'use client'
import styles from '../styles/Card.module.css'
export let contador = 0;
export let contadorJogadas = 0;
export let primeiroObjeto = null;
export let imagem = '';
export let clickAtivo = true;
export let contadorFinalJogo = 0;



function Evento({idImg,item,index,handleJogadas,jogadas}) {
 
    
    
    
    
    function vira() {
        
        
        
        
        const idImgVira = document.getElementById(index);
        
        
        if (contador == 0) {
            if (clickAtivo) {
                primeiroObjeto = idImgVira;
                idImgVira.style.background = `url(${idImg.url})`;
                idImgVira.style.backgroundSize = "cover";
                idImgVira.style.backgroundPosition = "center";
                imagem = idImg.url;
           
            
                contador++;
                clickAtivo = false;
            }
            
            
        } else {
            
            
            if (primeiroObjeto != idImgVira) {

                
                
                idImgVira.style.background = `url(${idImg.url})`;
                idImgVira.style.backgroundSize = "cover";
                idImgVira.style.backgroundPosition = "center";

            
                contador = 0;
                
                if (idImg.url == imagem) {
                    contadorJogadas++;
                    contadorFinalJogo++;
                    if (contadorFinalJogo >15) {
                        setTimeout(() => {
                            if (confirm(`Game chegou ao final com ${jogadas +1} jogadas. Prabéns. Para começar denovo click Ok`)) {
                                location.reload();
                            }
                        },5000);
                    }
                    
                    clickAtivo = true;
                    handleJogadas(contadorJogadas)
                } else {
                    contadorJogadas++;
                    handleJogadas(contadorJogadas)
                    setTimeout(() => {
                        primeiroObjeto.style.background = "url('/img/img/imagem-1.jpg')";
                        primeiroObjeto.style.backgroundSize = "cover";
                        primeiroObjeto.style.backgroundPosition = "center";
                        idImgVira.style.background = "url('/img/img/imagem-1.jpg')";
                        idImgVira.style.backgroundSize = "cover";
                        idImgVira.style.backgroundPosition = "center";
                        clickAtivo = true;
                    }, 1500)
                
                

                }
        
            } else {
                alert("Click em outro.")

               
            }


        }
        

    }

    
    
    return (
        
        <>
            <div className={styles.imgCardContainer}>
                <div>
                    <p className={styles.cartas} >Carta <span>{item}</span></p>
                </div>
                <div id={index} className={styles.imgBackground} onClick={vira}>

                </div>
            </div>
        
        </>
            
                
            
        
    )
    
}

export default Evento;