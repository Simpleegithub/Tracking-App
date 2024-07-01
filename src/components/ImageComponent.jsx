import React from 'react';
import image from '../images/image1.png';

function ImageComponent() {
    return (
        <div>
            <img src={image} alt="Image" className=' w-full' />
        </div>
    )
}

export default ImageComponent;
