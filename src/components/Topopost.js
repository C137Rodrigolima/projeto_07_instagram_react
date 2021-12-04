export default function Topopost({imagem, texto}){
    return (
        <div class="topo">
            <div class="usuario">
                <img src={imagem} />
                {texto}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}