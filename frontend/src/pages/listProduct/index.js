import React, {useEffect, useState, props} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {   FiTrash2, FiEdit } from 'react-icons/fi';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './styles.css';
import api from '../../services/api'


export default function ListProduct(){
    
 
    
    const history = useHistory();
    const [produtos, setProdutos] = useState([]);
    useEffect(()=>{
     
        api.get('produtos'
            ).then(response =>{
                setProdutos(response.data);
                })
    })


    function handleNewProduct(){
        history.push("/product/new");    
    }
    async function handleDeleteProduct(id){

        try{
            await api.delete(`produtos/${id}`);
            setProdutos(produtos.filter(produto => produto.id !== id))
            
        }catch(error){
            alert('ocorreu um erro ao tentar deletar');
        }
    }
    async function handleValidateDelete(id){
        confirmAlert({
            title: 'Confirmação',
            message: 'Deseja deletar o produto?',
            buttons: [
                {
                    label: 'Sim', onClick: () =>{
                        handleDeleteProduct(id);
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }
    async function handleUpdateProduct(id){
   
        history.push(`product/update/${id}`);
    }
    return(
        <div className="list">
            <h1>Cadastro de produtos</h1>

            <ul>
                {produtos.map(produto =>(
                
                   <li key={produto.id} >
                       <p>Produto: {produto.nome}</p>
                       <p>Valor: R${produto.preco} </p>
                       <p>Em Estoque: R${produto.estoque} </p>
                       <button type="button" onClick={() => handleUpdateProduct(produto.id)}>
                       
                           <FiEdit size={20} color="#a8a8b3"/>
                        
                        </button>
                       <button type="button" onClick={() => handleValidateDelete(produto.id)}>
                           <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                   </li> 
                   
                     
                  
                ))}
            </ul>
            <div className="button-center"><button onClick= {handleNewProduct} type="button" className="button-novo" >Novo Produto</button></div>
        </div>
    );


}