export default function Fundopost(props){
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
                <img src={props.imagem2} />
                <div class="texto">
                    Curtido por <strong>{props.texto2}</strong> e <strong>outras {props.texto3} pessoas</strong>
                </div>
            </div>
        </div>
    );

}