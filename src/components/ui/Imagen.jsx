import React, {Component} from "react";


export default class Imagen extends Component{

        state = {
                mostrar: true,
        }

        entrar = () => {
                this.setState({
                        mostrar: false,
                })
        }

        salir = () => {
                this.setState({
                        mostrar:true,
                })
        }
        
        render(){
                return(
                        <>
                                {this.state.mostrar ? <img onMouseEnter={this.entrar} src={this.props.url_vivo}/> : <img onMouseLeave={this.salir} className="imagenHerido" src={this.props.url_herido}/>} 
                        </>

                )
        }

}
        

        


