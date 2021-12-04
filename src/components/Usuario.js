export default function Usuario({imgfonte, user, name}){
    return (
        <div class="usuario">
            <img src={`assets/img/${imgfonte}`}/>
            <div class="texto">
                <strong>{user}</strong>
                {name}
            </div>
        </div>
    );
}