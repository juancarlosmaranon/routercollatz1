import React, { Component } from 'react'

export default class Collatz extends Component {
  
  //CREAMOS STATE Y GUARDAMOS EL ARRAY
  state={
    arrayCollatz :[]
  }

  //CREAMOS EL METODO PARA GENERAR EL COLLATZ
  generarCollatz = ()=>{
    //CREAMOS ARRAY DONDE VAMOS A GUARDAR LOS NUMEROS
    //DEL COLLATZ
    var numeros = [];
    //RECOGEMOS EL NUMERO CON EL PROPS DE MENURUTAS
    //Y LO CONVERTIMOS EN parseInt PORQUE LOS PROPS
    //SE RECOGEN COMO TEXTO
    var numCollatz = parseInt(this.props.numeroColl);
    //HACEMOS UN WHILE PARA HACER EL METODO COLLATZ
    while(numCollatz != 1){

      if(numCollatz %2==0){
        numCollatz = numCollatz/2;
      }else{
        numCollatz = numCollatz*3+1;
      }
      //AÑADIMOS LOS numCollatz AL ARRAY numeros[]
      numeros.push(numCollatz);
    }

    //CAMBIAMOS EL STATE Y AÑADIMOS LOS NUMEROS DE numeros[]
    //AL arrayCollatz[]
    this.setState({
      arrayCollatz:numeros
    })
  }

  //LLAMAMOS A LA FUNCION DidMount
  componentDidMount = () => {
    this.generarCollatz();    
  }

  //LLAMAMOS A LA FUNCION didUpdate PARA ACTUALIZAR LOS RESULTADOS
  //UTILIZANDO COMO PARAMETRO oldProps Y HACIENDO EL IF PARA 
  //COMPROBAR QUE SON DISTINTOS Y ENTONCES IMPRIMIR
  componentDidUpdate = (oldProps)=>{
    if(this.props.numeroColl != oldProps.numeroColl){
      this.generarCollatz();
    }
  }
  
  render() {

    return (
        <div>
            <h1>{this.props.numeroColl}</h1>
            <div>
                <table style={{border:5}}>
                  <tbody>
                  {
                    // CREAMOS EL MAPA PARA RECORRER EL ARRAY Y DIBUJARLO
                    this.state.arrayCollatz.map((valor,index)=>{
                      // EL RETURN!!!!!!
                      return(
                        // CERAMOS LOS ELEMENTOS DE LA LISTA SEGUN LOS VALORES (valor) DEL ARRAY 
                        <tr>
                          <td key={index}>{valor}</td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </table>
            </div>
        </div>
    )
  }
}
