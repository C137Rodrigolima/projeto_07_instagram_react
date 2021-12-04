export default function Fundopost({imagem2, texto2, texto3}){
    return(
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>


            <div class="curtidas">
                <img src={imagem2} />
                <div class="texto">
                    Curtido por <strong>{texto2}</strong> e <strong>outras {texto3} pessoas</strong>
                </div>
            </div>
        </div>
    );

}