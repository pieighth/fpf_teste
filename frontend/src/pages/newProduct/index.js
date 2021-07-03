import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import api from '../../services/api';

import 'react-confirm-alert/src/react-confirm-alert.css'; 

import './styles.css';
export default function NewProduct(){
    
    const[nome, setNome] = useState('');
    const[preco, setPreco] = useState('');
    const[estoque, setEstoque] = useState('');
    
    const history = useHistory();
    
    async function sendData(e){
        const data = {
            nome,
            preco,
            estoque
        }
        try {
            const response = await api.post('produtos', data);
            alert('Inserido com sucesso');
            history.push('/');
        } catch (error) {
            alert(error);
        }
    }
    async function handleNewProduct(e){
        e.preventDefault();
        console.log('handleNewProduct')
        if (!nome){
            alert('informar o nome do produto');
            return;
        }
        if (!preco){
            alert('informar o preço do produto');
            return;
        }
        if (!estoque){
            alert('informar a quantidade em estoque do produto');
            return;
        }
        sendData(e);
       
        
    }
    function handleClear(){
        setNome('');
        setEstoque('');
        setPreco('')

    }
    function handleBack(){
        history.push('/');
    }
    return(
        <div>
            <form onSubmit={handleNewProduct}>
            <h1>
                Cadastro de novo produto
            </h1>    
            <p><input
                placeholder="Nome do Produto"
                value={nome}
                onChange={e=> setNome(e.target.value)}
            />
            </p>
            <p>
            <input 
                placeholder="Valor do Produto"
                value={preco}
                onChange={e=> setPreco(e.target.value)}
            />
            </p>
            <p>
            <input
                placeholder="Quantidade em estoque"
                value={estoque}
                onChange={e=>setEstoque(e.target.value)}
            />
            </p>
            <p>
            <button type="submit">Salvar</button>
            
            <button type="reset" onClick={() =>handleClear()}>Limpar</button>
            <button type="button" onClick={() =>handleBack()}>Voltar</button>
            </p>
            </form>
            
        </div>
    )
}