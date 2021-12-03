import Usuario from './Usuario.js';
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

