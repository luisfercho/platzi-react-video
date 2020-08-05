import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/Carouseltem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

import useInititalState from '../hooks/useInitialState';

const API = `http://localhost:3000/initialState`;

const App = () => {

    const initialState = useInititalState(API);

    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header />
            <Search />
            {initialState.mylist.length > 0 && 
                <Categories title="Mi lista">
                    <Carousel>
                        {initialState.mylist.map( item =>
                                <CarouselItem key={item.id}  {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            {initialState.trends.length > 0 && 
                <Categories title="Tendencias">
                    <Carousel>
                        {initialState.trends.map( item =>
                                <CarouselItem key={item.id}  {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            {initialState.originals.length > 0 && 
                <Categories title="Originales de PlatziVideo">
                    <Carousel>
                        {initialState.originals.map( item =>
                                <CarouselItem key={item.id}  {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            
            <Footer />
        </div>
    )
};

export default App;