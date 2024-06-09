import styles from '../styles/Card.module.css'
export let contador = 0;
export let primeiroObjeto = null;
export let imagem = '';
export let clickAtivo = true;

export default function MinhaDiv({ idImg }) {
    
    
    
    function Vira() {
        
        
        
        
        const idImgVira = document.getElementById(idImg.id);
        
        
        if (contador === 0) {
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
              
                    
                    clickAtivo = true;
                
                } else {
                    setTimeout(() => {
                        primeiroObjeto.style.background = "url('/img/img/imagem-1.jpg')";
                        primeiroObjeto.style.backgroundSize = "cover";
                        primeiroObjeto.style.backgroundPosition = "center";
                        idImgVira.style.background = "url('/img/img/imagem-1.jpg')";
                        idImgVira.style.backgroundSize = "cover";
                        idImgVira.style.backgroundPosition = "center";
                        clickAtivo = true;
                    }, 1000)
                
                

                }
        
            } else {
                alert("Click em outro.")
            }

        }

    }
    
    return (
        
        <>
        <div onClick={Vira} id={`${idImg.id}`} key={idImg.id} className={styles.imgBackground}>   

                    
                
        </div>
        </>
    )
    
}