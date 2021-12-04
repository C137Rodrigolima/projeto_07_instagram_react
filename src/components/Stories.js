const array = [
    {img: "9gag.svg", txt: "9gag"},
    {img: "meowed.svg", txt: "meowed"},
    {img: "barked.svg", txt: "barked"},
    {img: "nathanwpylestrangeplanet.svg", txt: "nathanwpylestrangeplanet"},
    {img: "wawawicomics.svg", txt: "wawawicomics"},
    {img: "respondeai.svg", txt: "respondeai"},
    {img: "filomoderna.svg", txt: "filomoderna"},
    {img: "memeriagourmet.svg", txt: "memeriagourmet"}

];

export default function Stories(){

    return(
        <div class="stories">

            {array.map(({img,txt}) =>
            <div class="story">
                <div class="imagem">
                    <img src={`assets/img/${img}`} />
                </div>
                <div class="usuario">
                    {txt}
                </div>
            </div>
            )}

            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}