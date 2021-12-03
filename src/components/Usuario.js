export default function Usuario(props){
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