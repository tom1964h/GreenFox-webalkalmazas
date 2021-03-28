let photos = [
    '.\\images\\01nyaron-kekben.jpg',
    '.\\images\\02nyaron-szinesben.jpg',
    '.\\images\\03nyaron-zoldben.jpg',
    '.\\images\\04liget.jpg',
    '.\\images\\05viragok1.jpg',
    '.\\images\\07honlap.jpg',
    '.\\images\\10alfoldi-domb1.jpg',
    '.\\images\\11alfoldi-domb2.jpg',
    '.\\images\\12alfoldi-domb3.jpg',
    '.\\images\\16talalkozas-a-nyullal.jpg'];
let th = [
    '.\\images\\thumbnails\\th01nyaron-kekben.jpg',
    '.\\images\\thumbnails\\th02nyaron-szinesben.jpg',
    '.\\images\\thumbnails\\th03nyaron-zoldben.jpg',
    '.\\images\\thumbnails\\th04liget.jpg',
    '.\\images\\thumbnails\\th05viragok1.jpg',
    '.\\images\\thumbnails\\th07honlap.jpg',
    '.\\images\\thumbnails\\th10alfoldi-domb1.jpg',
    '.\\images\\thumbnails\\th11alfoldi-domb2.jpg',
    '.\\images\\thumbnails\\th12alfoldi-domb3.jpg',
    '.\\images\\thumbnails\\th16talalkozas-a-nyullal.jpg'];
let thNames = [
    'nyitókép',
    'I.',
    'II.',
    'III.',
    'IV.',
    'V.',
    'VI.',
    'VII',
    'VIII',
    'zárókép']
let titles = [
        'Miért jó dolog? Az arborétum ...',
        'Már csak a szemünknek is jót tesz ...',
        'Azon túl, hogy jót tesz a szemünknek ...',
        'Az oxigén...',
        'Vannak, akiket a virágok vonzanak (az emberek között is),....',
        'Ahhoz, hogy tudjuk, ...',
        'Vannak akik eskövői',
        'Mások szerint...',
        'Sokan futni ...',
        'Végül hadd osszak meg'
]
let descriptions = [
    'Nem kérdés, hogy minden városi embernek fontos rendszeresen kimozdulni a betonrengetegből és autók meg házak helyett valami természetes környezetet választani. És még csak nem is beszéltem másról, csak az "ott-levés"-ről.',
    'ha szürke, lila, kék és vörös mesterséges színek helyett természetes zöld, bordó, barna, sárga és kék színeket nézünk velük. A világító kijelzők helyett vibrálásmentes természetes fényt kapunk.',
    'még meg is nyugtatja az embert a természetes zöld fény. A zöld sugárzás! Ezek a színek azt jelentik, hogy a dús vegetáció szén-dioxidot nyel el, szűri a levegőt, oxigént termel. Ezek fontosak, máshogy sokkal nehezebb lenne: ha minden zugban por és kohósalak figyelne, hamar végünk lenne.',
    'amely, mint tudjuk a vízből is előállítható, az arborétum növényeinek terméke, a fotoszintézis eredménye. Megnyugtató a sok kis tisztás, ahol elhúzódhat az ember a nyüzsgés elől, autómentes környezetben pihenhet.',
    'másokat inkább a séta, a friss levegő. Az ember óhatatlanul is elgondolkodik ilyen szép tájban, ami kézzelfogható közelségben van.',
    'mikor és hol lehet arborétumhoz juttatni magunkat, tájékozódjunk, érdeklődjünk! Az interneten szinte mindegyik arborétumnak van honlapja, ahol a "házirend", a nyitvatartás mellett még speciális programokról is értesülhetünk.',
    'helyszínként tekintenek az arborétumra.',
    'a dombos-buckás táj télen kiváló szánkózási lehetőséget kínál ...',
    'az arborétumba, hatalmas köröket járnak be zenével a fülükben',
    'egy személyes élményt: egyszer egy nyúllal találkoztam ebben a kis szegletben. Rámmeredt, majd elrohant. Talán otthon felejtette a zsebóráját...'
]

let imagesData = [
    {photo:photos[0], title:titles[0], description:descriptions[0]},
    {photo:photos[1], title:titles[1], description:descriptions[1]},
    {photo:photos[2], title:titles[2], description:descriptions[2]},
    {photo:photos[3], title:titles[3], description:descriptions[3]},
    {photo:photos[4], title:titles[4], description:descriptions[4]},
    {photo:photos[5], title:titles[5], description:descriptions[5]},
    {photo:photos[6], title:titles[6], description:descriptions[6]},
    {photo:photos[7], title:titles[7], description:descriptions[7]},
    {photo:photos[8], title:titles[8], description:descriptions[8]},
    {photo:photos[9], title:titles[9], description:descriptions[9]}
]
/*console.log('beolvasott imagesData: '+imagesData.length);
console.log('=================');
console.log('beolvasott thumbnails: '+th.length);
console.log('=================');
console.log('beolvasott thumbnail képek indexei');*/
let currentPhoto = 0
let thumbnailIndex = 0
th.forEach(function(entry) {
    $("#th").append(`<img src=${entry} data-number=${th.indexOf(entry)} class="thumbnail"></img>`)
});
thNames.forEach(function(entry) {
    $("#thNames").append(`<p class="thName" data-number=${thNames.indexOf(entry)}>${entry}</p>`)
});

let loadPhoto = (currentPhoto) => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);
    activateThumbnail(currentPhoto);
    }

let activateThumbnail = (currentPhoto) => {
    $(`.thumbnail[data-number="${thumbnailIndex}"]`).removeAttr("style")
    /*$(`.thName[data-number="${thumbnailIndex}"]`).css("display", "none")*/
    thumbnailIndex = currentPhoto
    $(`.thumbnail[data-number="${thumbnailIndex}"]`).css("width", "110px")
    $(`.thumbnail[data-number="${thumbnailIndex}"]`).css("height", "110px")
    /*$(`.thName[data-number="${thumbnailIndex}"]`).css("display", "block")*/
}
loadPhoto(currentPhoto);

$('#jobb').click(() => {
    currentPhoto++;
    if(currentPhoto>(imagesData.length-1)) {
        currentPhoto = 0
    }
    loadPhoto(currentPhoto);
    console.log(currentPhoto);
    })

$('#bal').click(() => {
    currentPhoto--;
    if(currentPhoto < 0) {
        currentPhoto = imagesData.length-1
    }
    loadPhoto(currentPhoto);
    console.log(currentPhoto)
})

$('#th').on('click', '.thumbnail', function(event) {
    //console.log("kattintás az indexképen")
    currentPhoto = $(event.target).attr('data-number')
    //console.log(clicked)
    loadPhoto(currentPhoto);
  });