import React from 'react';
import './header.css';
import headshirt from '../../assets/headshirt.png'

const Header = () => {
    return (
        <div className= "shirt__header section__padding" id="home">
            <div className="shirt__header-content">
                <h1 className="gradient__text">Print your NFT's</h1>
                <p>Turn your favourite nfts into real world items with our print on demand service. Choose your nft and your item we'll do the rest</p>
            </div>
            <div className="shirt__header-image">
                <img src= {headshirt} />
            </div>
        </div>
    )
}

export default Header
