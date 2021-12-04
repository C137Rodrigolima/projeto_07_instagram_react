const Arraysugestoes = [
    {img: "bad.vibes.memes.svg", text: "bad.vibes.memes"}, 
    {img: "chibirdart.svg", txt: "chibirdart"}, 
    {img: "razoesparaacreditar.svg", txt: "razoesparaacreditar"}, 
    {img: "adorable_animals.svg", txt: "adorable_animals"}, 
    {img: "smallcutecats.svg", txt: "smallcutecats"}];

export default function Sugestões(){

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {Arraysugestoes.map(({img, txt}) => 
            <div class="sugestao">
                <div class="usuario">
                    <img src={`assets/img/${img}`}/>
                    <div class="texto">
                        <div class="nome">{txt}</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
            )}
        </div>
    );
}