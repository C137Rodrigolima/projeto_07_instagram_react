const post = [
    {img: "assets/img/meowed.svg", user:"meowed", conteudo:"assets/img/gato-telefone.svg",
    imgWholiked: "assets/img/respondeai.svg", userWholiked: "respondeai", number: "101.523"},
    {img: "assets/img/barked.svg", user:"barked", conteudo:"assets/img/dog.svg",
    imgWholiked: "assets/img/adorable_animals.svg", userWholiked: "adorable_animals", number: "99.159"}
];

export default function Posts(){
    return (
        <div class="posts">

        {post.map((item)=> 
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={item.img} />
                        {item.user}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={item.conteudo} />
                </div>

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
                        <img src={item.imgWholiked} />
                        <div class="texto">
                            Curtido por <strong>{item.userWholiked}</strong> e <strong>outras {item.number} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
            )}

        </div>
    );
}