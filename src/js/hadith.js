// DOM ELEMENTS
const hadithContent = document.querySelector('.content');
const hadithFrom = document.querySelector('.frombook');
const getCatogory = localStorage.getItem('lanCategory');
const getAraFont = localStorage.getItem('setFont');
const copyBtn = document.querySelector('.copybtn');
const nextArrBtn = document.querySelector('.right_btn');
const prevArrBtn = document.querySelector('.left_btn');
const homeBtn = document.querySelector('.homeBtn');
const photoSaverBtn = document.querySelector('.savePhotoBtn');
const downloadBg = document.querySelector('.download_bg');
const downloadContent = document.querySelector('.download_content');
const hadithPopup = document.querySelector('.hadith_pop');

let images = [
    '/src/images/1 (1).jpeg',
    '/src/images/1 (2).jpg',
    '/src/images/1 (3).jpg',
    '/src/images/1 (4).jpg',
    '/src/images/1 (5).jpg',
    '/src/images/1 (6).jpg',
    '/src/images/1 (7).jpg',
    '/src/images/1 (8).jpg',
    '/src/images/1 (9).jpg',
    '/src/images/1 (10).jpg',
    '/src/images/clear.jpg',
    '/src/images/12.jpg',
    '/src/images/cloud.jpg',
    '/src/images/haze.jpg',
    '/src/images/rain.jpg'
];

// GENERATE RANDOM IMAGES

let randImage = Math.floor(Math.random() * images.length);

// document.body.style.backgroundImage = `url("${images[randImage]}")`;
hadithPopup.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("${images[randImage]}")`;
downloadBg.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("${images[randImage]}")`;






const fetchHadithData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    let randHadith = Math.floor(Math.random() * data.hadiths.length);
    hadithContent.innerHTML = data.hadiths[randHadith].text;
    hadithContent.classList.add(getAraFont);

    downloadContent.innerHTML = data.hadiths[randHadith].text + `<br /><br /> (Sahih Al-Bukhari, ${data.hadiths[randHadith].hadithnumber})`;

    if (getAraFont) {
        downloadContent.style.fontFamily = 'Hafs';
    }
    hadithFrom.innerHTML = (`(Sahih Al-Bukhari, ${data.hadiths[randHadith].hadithnumber})`);
};


copyBtn.addEventListener('click', () => {
    document.querySelector('.copy_popup').classList.add('active');
    navigator.clipboard.writeText(hadithContent.innerHTML);
    setTimeout(() => {
        document.querySelector('.copy_popup').classList.remove('active');
    }, 1500);
});

fetchHadithData(`/data/${getCatogory}.json`);


nextArrBtn.addEventListener('click', () => {
    fetchHadithData(`/data/${getCatogory}.json`);

    let images = [
        '/src/images/1 (1).jpeg',
        '/src/images/1 (2).jpg',
        '/src/images/1 (3).jpg',
        '/src/images/1 (4).jpg',
        '/src/images/1 (5).jpg',
        '/src/images/1 (6).jpg',
        '/src/images/1 (7).jpg',
        '/src/images/1 (8).jpg',
        '/src/images/1 (9).jpg',
        '/src/images/1 (10).jpg',
        '/src/images/clear.jpg',
        '/src/images/12.jpg',
        '/src/images/cloud.jpg',
        '/src/images/haze.jpg',
        '/src/images/rain.jpg'
    ];

    let randImage = Math.floor(Math.random() * images.length);

    // document.body.style.backgroundImage = `url("${images[randImage]}")`;
    hadithPopup.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("${images[randImage]}")`;
    downloadBg.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("${images[randImage]}")`;

});
prevArrBtn.addEventListener('click', () => {
    fetchHadithData(`/data/${getCatogory}.json`);
    let images = [
        '/src/images/1 (1).jpeg',
        '/src/images/1 (2).jpg',
        '/src/images/1 (3).jpg',
        '/src/images/1 (4).jpg',
        '/src/images/1 (5).jpg',
        '/src/images/1 (6).jpg',
        '/src/images/1 (7).jpg',
        '/src/images/1 (8).jpg',
        '/src/images/1 (9).jpg',
        '/src/images/1 (10).jpg',
        '/src/images/clear.jpg',
        '/src/images/12.jpg',
        '/src/images/cloud.jpg',
        '/src/images/haze.jpg',
        '/src/images/rain.jpg'
    ];

    let randImage = Math.floor(Math.random() * images.length);



    // document.body.style.backgroundImage = `url("${images[randImage]}")`;
    hadithPopup.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("${images[randImage]}")`;
    downloadBg.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("${images[randImage]}")`;
});



homeBtn.addEventListener('click', () => {
    location.href = '/index.html';
});



photoSaverBtn.addEventListener('click', () => {
    html2canvas(downloadBg).then((canvas) => {
        console.log(canvas);
        canvas.toBlob(blob => {
            saveAs(blob, "image.png");
        });
    });
});



