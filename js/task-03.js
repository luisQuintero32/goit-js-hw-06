const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const fhotos = document.querySelector('.gallery');

const fhotosArray = images.map(({url, alt}) => {
  const fhotosItem = document.createElement('li');
  fhotosItem.classList.add('gallery__item');
  fhotosItem.insertAdjacentHTML('beforeend',`<img src="${url}" class="gallery__image" alt="${alt}" width= "250px">`);

  return fhotosItem;
});
fhotos.append(...fhotosArray);
