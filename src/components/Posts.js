import Topopost from "./Topopost";
import Fundopost from "./Fundopost";

const post = [
    {
    img: "assets/img/meowed.svg", 
    user:"meowed", 
    conteudo:"assets/img/gato-telefone.svg",
    imgWholiked: "assets/img/respondeai.svg", 
    userWholiked: "respondeai", 
    number: "101.523"
    },
    {
    img: "assets/img/barked.svg", 
    user:"barked", conteudo:"assets/img/dog.svg", 
    imgWholiked: "assets/img/adorable_animals.svg", 
    userWholiked: "adorable_animals", 
    number: "99.159"
    }
];

export default function Posts(){
    return (
        <div class="posts">

        {post.map(({img, user, conteudo, imgWholiked, userWholiked, number})=> 
            <div class="post">
                <Topopost imagem={img} texto={user}/>

                <div class="conteudo">
                    <img src={conteudo} />
                </div>

                <Fundopost imagem2={imgWholiked} texto2={userWholiked} texto3={number}/>
            </div>
            )}

        </div>
    );
}