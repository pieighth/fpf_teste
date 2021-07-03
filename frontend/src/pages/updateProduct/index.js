import React,{useState, useEffect } from 'react';
import {  useHistory } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

import api from '../../services/api';

import 'react-confirm-alert/src/react-confirm-alert.css'; 

import './styles.css';


export default function NewProduct({match}) {
    
    const {i} = match.params;

    
    const[id, setId] = useState(i)
    const[nome, setNome] = useState('');
    const[preco, setPreco] = useState('');
    const[estoque, setEstoque] = useState('');
    
    const history = useHistory();
    useEffect(()=>{
        getProduto();
    })
    

    async function getProduto(){
        console.log('entrei no getproduto')
        const dados = await api.get(`produtos/${id}`);
        setNome(dados.data.nome);
        setPreco(dados.data.preco)
        setEstoque(dados.data.estoque)
   
    }
    


    async function sendData(e){
        const data = {
            id,
            nome,
            preco,
            estoque
        }
        console.log('enviando')
        console.log(data)
        try {
            const response = await api.put(`produtos/${id}`, data);
            alert('alterado com sucesso');
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }
    async function handleUpdateProduct(e){
        e.preventDefault();
        confirmAlert({
            title: 'Confirmação',
            message: 'Deseja salvar o produto?',
            buttons: [
                {
                    label: 'Sim', onClick: () =>{
                        sendData(e);
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
        
    }
    function handleClear(){
        setNome('');
        setEstoque('');
        setPreco('')

    }
    function handleBack(){
        history.push('/');
    }
    function handleInputChange(event){
        setNome(event.nativeEvent.data)
       
        console.log(event.nativeEvent.data)
    }
     return(
        <div>
            <form onSubmit={handleUpdateProduct}>
            <h1>
                Atualização do produto
            </h1>    
            <p><input
                placeholder="Nome do Produto"
                value={nome}
                onChange={handleInputChange}
                required
            />
            </p>
            <p>
            <input 
                placeholder="Valor do Produto"
                value={preco}
                onChange={e=> setPreco(e.target.value)}
                required
            />
            </p>
            <p>
                
            <input
                type="number"
                placeholder="Quantidade em estoque"
                value={estoque}
                onChange={e=> setEstoque(e.target.value)}
                required
            />
            </p>
            <p>
            <button type="submit">Salvar</button>
            
            <button type="reset" onClick={() =>handleClear()}>Limpar</button>
            <button type="button" onClick={() =>handleBack()}>Voltar</button>
            </p>
            </form>
            
        </div>
    );
     
}