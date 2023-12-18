import './imageList.css';
import ImageShow from './ImageShow';

function ImageList ({ images }) {

    const renderedImages = images.map ((image) => {
        return <ImageShow image={image} />
    });

    return <div className='img-list'>{renderedImages}</div>;
}

export default ImageList;