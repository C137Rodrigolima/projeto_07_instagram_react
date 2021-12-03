export default function Topopost(props){
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imagem} />
                {props.texto}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}