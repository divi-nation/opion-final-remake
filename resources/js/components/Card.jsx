import React from 'react';
import '../../css/components/card.css';
import { Button } from './';


const Card = () => {
  return (
    <div className = 'card ov-hidden'>
        <div className = 'image'>
            <img src = '/images/image.jpeg' className =  'obj-fit' />
        </div>

        <div className = 'info'>
            <div className =  'info-item flex-row name'>
                <div className =  'icon'>
                    <i className = 'bi bi-square-fill'></i>
                </div>

                <div className =  'item-text'>Jakaranta Hostels</div>
            </div>

            <div className =  'flex-row flex-between small'>
                <div className =  'info-item flex-row'>
                    <div className =  'icon'>
                        <i className = 'bi bi-geo-alt-fill'></i>
                    </div>

                    <div className =  'item-text'>Ayeduase New Site </div>
                </div>

                <div className =  'info-item flex-row'>
                    <div className =  'icon'>
                        <i className = 'bi bi-watch'></i>
                    </div>

                    <div className =  'item-text'>5 min</div>
                </div>
            </div>

            <div className = 'flex-row'>
                <Button name = 'Book Now' />
                <div className =  'price flex-center'>
                    <span>Ghc</span>
                    <span>6400</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card