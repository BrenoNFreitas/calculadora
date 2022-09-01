import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <view style={estilos.container}>
        <div style={estilos.cell}>

          <div style={estilos.barra}>
            <text style={estilos.hora}>21:29</text>
            <text style={estilos.bateria}>73%</text>
          </div>

           <div style = {estilos.conteudo}>
            <div style = {estilos.calculadora}>
              <div style = {estilos.tela}>
                <Text style = {estilos.config1}>.</Text>
                <Text style = {estilos.config2}>.</Text>
                <Text style = {estilos.config3}>.</Text>
                <Text style = {estilos.telaValor}>0</Text>
                <Text style = {estilos.historico}>_</Text>
              </div>
              
              <div style = {estilos.organizar}>

              <div style = {estilos.operacoes}>
                <Text style = {estilos.textoOperacoes}>AC</Text>
              </div>

              <div style = {estilos.operacoes}>
                <Text style = {estilos.textoOperacoes}>( )</Text>
              </div>

              <div style = {estilos.operacoes}>
                <Text style = {estilos.textoOperacoes}>%</Text>
              </div>

              <div style = {estilos.operacoes}>
                <Text style = {estilos.textoOperacoes}>÷</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>7</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>8</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>9</Text>
              </div>

              <div style = {estilos.operacoes}>
                <Text style = {estilos.textoOperacoes}>x</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>4</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>5</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>6</Text>
              </div>

              <div style = {estilos.operacoes}>
                <Text style = {estilos.textoOperacoes}>-</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>1</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>2</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>3</Text>
              </div>

              <div style = {estilos.operacoes}>
                <Text style = {estilos.textoOperacoes}>+</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>0</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>,</Text>
              </div>

              <div style = {estilos.numeros}>
                <Text style = {estilos.textoNumero}>^</Text>
              </div>

              <div style = {estilos.operacoes}>
                <Text style = {estilos.textoOperacoes}>=</Text>
              </div>

              </div>
            </div>
           </div>

           <div style = {estilos.botoes}>
            <div style = {estilos.botaosair}></div>
          </div>

        </div>
      </view>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#732673',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cell: {
    width: '325px',
    height: '660px',
    margin: '5px',
    borderRadius: '20px',
    border: '8px solid #1a1a1a',
  },

  barra: {
    backgroundColor: 'black',
    width: 325,
    height: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderRadius: '10px 10px 0 0',
  },

  hora: {
    color: 'white',
    fontSize: 14,
    margin: '5px 10px',
    padding:'3px',
  },

  bateria: {
    color: 'white',
    fontSize: 14,
    margin: '5px 10px',
    padding:'3px',
  },

  conteudo:{
    width:325,
    height:600,
    backgroundColor:'#b3ccff',
  },

  conteudo:{
    width:325,
    height:600,
  },

  calculadora: {
    width:325,
    height:600,
    flex: 1,
    backgroundColor: '#293d33'
  },

  tela:{
    backgroundColor: '#3d5c4d',
    width:325,
    height:200,
    display:'flex',
    alignItems:'flex-end',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  config1:{
    position:'relative',
    top:'-180px',
    right:'-110px',
    color:'#293d33',
    fontSize:40,
  },

  config2:{
    position:'relative',
    top:'-170px',
    right:'-101px',
    color:'#293d33',
    fontSize:40,
  },

  config3:{
    position:'relative',
    top:'-160px',
    right:'-92px',
    color:'#293d33',
    fontSize:40,
  },

  telaValor:{
    margin:5,
    color: '#527a66',
    fontSize:120,
  },

  historico:{
    position:'relative',
    top:'0px',
    right:'155px',
    color:'#293d33',
    fontSize:50,
  },

  organizar:{
    display:'flex',
    flexWrap: 'wrap',
    width:325,
    height:400,
    margin:'0px 7px',
    justifyContent:'center',
  },

  numeros:{
    width:60,
    height:60,
    backgroundColor: '#3d5c4d',
    margin: 5,
    padding: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    borderRadius:30,
    marginLeft:3,
  },

  textoNumero:{
    textAlign:'center',
    color:'#b3ccbf',
  },

  operacoes:{
    width:60,
    height:60,
    backgroundColor: '#b3ccbf',
    margin: 5,
    padding: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    borderRadius:30,
    marginLeft:3,
  },

  textoOperacoes:{
    textAlign:'#center',
    color:'#293d33'
  },

  botoes:{
    backgroundColor:'#1a1a1a',
    width:325,
    height:40,
    fontSize:30,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0 0 10px 10px',
  },

  botaosair:{
    backgroundColor:'#333333',
    width:30,
    height:30,
    padding:0,
    borderRadius:'30px'
  }
});
