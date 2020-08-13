import React from 'react';

import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/Carouseltem';

import '../assets/styles/App.scss';

import Header from '../components/Header';

const Home = ({ myList, trends, originals, search, prueba }) => {
    console.log(prueba);
    return (
        <>
            <Header />
            <Search isHome />
            {search.length > 0 && 
                <Categories title="Busqueda">
                    <Carousel>
                        {search.map( item =>
                                <CarouselItem 
                                    key={item.id}  
                                    {...item} 
                                />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            {myList.length > 0 && 
                <Categories title="Mi lista">
                    <Carousel>
                        {myList.map( item =>
                                <CarouselItem 
                                    key={item.id}  
                                    {...item} 
                                    isList
                                />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            {trends.length > 0 && 
                <Categories title="Tendencias">
                    <Carousel>
                        {trends.map( item =>
                                <CarouselItem key={item.id}  {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            {originals.length > 0 && 
                <Categories title="Originales de PlatziVideo">
                    <Carousel>
                        {originals.map( item =>
                                <CarouselItem key={item.id}  {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
        </>
    )
};
// con esto se especifica que información del estado se va a manejar en este componente
// luego esto se recibe por parametros en la funcion del render del componente
// el nombre que se asigne debe coincidir con el nombre de la propiedad
const mapStateToProps = (state) => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        search: state.search,
        prueba: "Luis"
    };
};

export default connect(mapStateToProps, null)(Home);