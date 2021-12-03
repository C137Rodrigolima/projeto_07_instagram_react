const array = [
    {img: "assets/img/9gag.svg", txt: "9gag"},
    {img: "assets/img/meowed.svg", txt: "meowed"},
    {img: "assets/img/barked.svg", txt: "barked"},
    {img: "assets/img/nathanwpylestrangeplanet.svg", txt: "nathanwpylestrangeplanet"},
    {img: "assets/img/wawawicomics.svg", txt: "wawawicomics"},
    {img: "assets/img/respondeai.svg", txt: "respondeai"},
    {img: "assets/img/filomoderna.svg", txt: "filomoderna"},
    {img: "assets/img/memeriagourmet.svg", txt: "memeriagourmet"}

];

export default function Stories(){

    return(
        <div class="stories">

            {array.map((item) =>
            <div class="story">
                <div class="imagem">
                    <img src={item.img} />
                </div>
                <div class="usuario">
                    {item.txt}
                </div>
            </div>
            )}

            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}