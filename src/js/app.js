//Import Customs Styles
import '../css/estilos.css';
import '../css/scheme.css';

const moreOptions = document.querySelector('#btnMore');
const btnShowMobileLinks = document.querySelector('#btnMenu');
const mobileMenu = document.querySelector('.links');
const moreMenu = document.querySelector('.more .menu');

btnShowMobileLinks.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
})

moreOptions.addEventListener('click', (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
})


videos = [
    {
        id: 'PyMlV5_HRWk'
    },
    {
        id: 'Fmdb-KmlzD8'
    },
    {
        id: 'rFh2i4AlPD4'
    },
    {
        id: 'OkMY1hRAlfc'
    },
    {
        id: 'pxCk6Bca2YU'
    }
]

const sliderContainer = document.getElementById('container');
const currentContainer = document.querySelector('#current');
const videosContainer = document.querySelector('#videosContainer');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let current = 0;

next.addEventListener('click', () => {
    let change = current;
    current = current + 1 < videos.length ? current + 1 : current;  //Cambia valor de Current
    if (current != change) {
        renderVideoCurrent(videos[current].id);
    }
});

prev.addEventListener('click', () => {
    let change = current;
    current = current - 1 >= 0 ? current - 1 : current;     //Cambia valor de Current
    if (current != change) {
        renderVideoCurrent(videos[current].id);
    }
});


const renderImageVideos = () => {
    const html = videos.map((video,index) => {  //Obtener una miniatura de los videos
        return `
        <div class="item">
            <a href="#" videoId=${index}>
                <img src="https://i.ytimg.com/vi/${video.id}/mqdefault.jpg"/>
            </a>
        </div>
    `;
    })

    videosContainer.innerHTML = html.join("");      //Agregar miniaturas en videosContainer

    document.querySelectorAll('.item a').forEach((item) => {
        item.addEventListener('click', (e) =>{
            e.preventDefault();
            const id = +item.getAttribute('videoId');
            current = id;
            renderVideoCurrent(videos[current].id);
        });
    });
}

const renderVideoCurrent = (id) => {
    currentContainer.innerHTML = `
    <iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
}

renderImageVideos();
renderVideoCurrent(videos[current].id)

