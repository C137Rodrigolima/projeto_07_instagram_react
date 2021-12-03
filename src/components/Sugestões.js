const Arraysugestoes = [
    {img: "assets/img/bad.vibes.memes.svg", text: "bad.vibes.memes"}, 
    {img: "assets/img/chibirdart.svg", txt: "chibirdart"}, 
    {img: "assets/img/razoesparaacreditar.svg", txt: "razoesparaacreditar"}, 
    {img: "assets/img/adorable_animals.svg", txt: "adorable_animals"}, 
    {img: "assets/img/smallcutecats.svg", txt: "smallcutecats"}];

export default function Sugestões(){

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {Arraysugestoes.map((item) => 
            <div class="sugestao">
                <div class="usuario">
                    <img src={item.img} />
                    <div class="texto">
                        <div class="nome">{item.txt}</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
            )}
        </div>
    );
}