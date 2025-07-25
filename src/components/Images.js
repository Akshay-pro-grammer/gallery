// images.js
let w=600;
let h=600;
const images = Array.from({ length: 10 }, (_, i) => ({
    src: `https://picsum.photos/id/${i + 10}/${w}/${h}`,
    title: `Image ${i + 1}`,
    imgw: w,
    imgh: h
}));
export default images;
