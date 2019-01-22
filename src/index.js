import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar/navbar';
import CarouselComponent from './carousel/carousel'
import Footer from './footer/footer'
import Cards from './card/card'
import Friend from './friends/friend'

ReactDOM.render(
            <span>
                <NavBar></NavBar>
                <CarouselComponent></CarouselComponent>
                <Footer></Footer>
                <Cards></Cards>
                <Friend></Friend>
                </span>,
                document.getElementById('root'))