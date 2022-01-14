import React from 'react';
import './gallery.css';

let imagesPool= ["https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
            "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
            "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
            "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        ]

const Gallery = () => {
    return (
        <div className="display_my_nft">
            <button type="button"/>
        </div>

        <div className="shirt__gallery">
                {imagesPool.map(image => (<img src={image} key={image} />))}
        </div>
    )
}

export default Gallery;
