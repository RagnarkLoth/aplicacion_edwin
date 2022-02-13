import React, { Component } from 'react';
import Main from '../layouts/Main';
import Header from '../layouts/Header';
import dataHeader from '../../helpers/dataHeader.json'
import dataFooter from '../../helpers/dataFooter.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../layouts/Footer';

export default class Home extends Component{

    state = {
        pilaresHeader: dataHeader.pilares,
        pilaresFooter: dataFooter.pilares,
        rutas: dataHeader.rutas
    }


    render(){
        return(

            <BrowserRouter>
                <Routes>
                    {
                        this.state.pilaresHeader.map((pilar) => 
                            <Route path={pilar.ruta} element={
                            <>
                                <Header pilares={this.state.pilaresHeader}/>
                                <Main vivo={pilar.imagen_vivo} herido={pilar.imagen_mal_herido}/>
                                <Footer pilares={this.state.pilaresFooter}/>

                            </>
                        }/>
                        )
                    }
                                        {
                        this.state.pilaresFooter.map((pilar) => 
                            <Route path={pilar.ruta} element={
                            <>
                                <Header pilares={this.state.pilaresHeader}/>
                                <Main vivo={pilar.imagen_vivo} herido={pilar.imagen_mal_herido}/>
                                <Footer pilares={this.state.pilaresFooter}/>

                            </>
                        }/>
                        )
                    }
                </Routes>
            </BrowserRouter>
        )
    }

}