import Sugestões from './Sugestões.js';

export default function Sidebar(){
    return (
        <div class="sidebar">
            
            <Usuario imgfonte="assets/img/catanacomics.svg" user="catanacomics" name="Catana"/>
            <Sugestões />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

function Usuario(props){
    return (
        <div class="usuario">
            <img src={props.imgfonte}/>
            <div class="texto">
                <strong>{props.user}</strong>
                {props.name}
            </div>
        </div>
    );
}