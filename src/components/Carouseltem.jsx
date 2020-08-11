import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from "../actions";
import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss';

import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';
import RemoveIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props)  => {
    const { id, cover, title, year, contentRating, duration, isList } = props;

    const handleSetFavorite = () => {
        props.setFavorite({ 
            id, cover, title, year, contentRating, duration 
        });
    }

    const handleDeleteFavorite = (id) => {
        props.deleteFavorite(id);
    }

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={ cover } alt={ title }  />
            <div className="carousel-item__details">
                <div>
                    <img 
                        className="carousel-item__details--img" 
                        src={ PlayIcon } 
                        alt="Play Icon" 
                    />
                    {isList? 
                        <img 
                            className="carousel-item__details--img" 
                            src={ RemoveIcon } 
                            alt="Plus Icon"
                            onClick={()=>handleDeleteFavorite(id)}
                        />
                    :
                        <img 
                            className="carousel-item__details--img" 
                            src={ PlusIcon } 
                            alt="Plus Icon"
                            onClick={handleSetFavorite}
                        />
                    }
                </div>
                <p className="carousel-item__details--title">{ title }</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    );
}
// definir cada tipo de dato de los elemento de las props
CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

const mapDispachToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(null, mapDispachToProps)(CarouselItem);