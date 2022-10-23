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

const refs = document.querySelector(".gallery");
// console.log(refs);

const galleryImg = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="320 px">`);
// console.table(galleryImg);
refs.style.display = "flex";
refs.style.flexDirection = "column";
refs.style.gap = "20px";
refs.style.listStyle = "none";
refs.insertAdjacentHTML("afterbegin", galleryImg);

