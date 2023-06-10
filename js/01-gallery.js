import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
  </li>`
);
galleryEl.insertAdjacentHTML('beforeend', markup.join(''));

galleryEl.addEventListener("click", onClick);

 
    const instance = basicLightbox.create(
      `<img width="1280" height="auto" src="">`,
    );
    
    function onClick(e) {
      e.preventDefault();
     
      const datasetSource = e.target.dataset.source;
      if (!datasetSource) return;
      instance.element().querySelector('img').src = datasetSource;
      instance.show();
    }

  