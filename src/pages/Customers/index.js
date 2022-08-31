import './customers.css'
import Title from '../../components/Title'
import Header from '../../components/Header'
import { useState } from 'react'

import { toast } from 'react-toastify'

import firebase from '../../services/firebaseConnection'

import { FiUser } from 'react-icons/fi'

function Customers() {
  const [nomeFantasia, setNomeFantasia] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState('')

  async function handleAdd(e) {
    e.preventDefault()

    if (nomeFantasia !== '' && cnpj !== '' && endereco !== '') {
      await firebase
        .firestore()
        .collection('customers')
        .add({
          nomeFantasia: nomeFantasia,
          cnpj: cnpj,
          endereco: endereco
        })
        .then(() => {
          setNomeFantasia('')
          setCnpj('')
          setEndereco('')
          toast.info('Empresa cadastrada com sucesso !')
        })
        .catch(error => {
          console.log(error)
          toast.error('Erro ao cadastrar essa empresa.')
        })
    } else {
      toast.error('Preencha todos os campos')
    }
  }
  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile customers" onSubmit={handleAdd}>
            <label>Nome fantasia</label>
            <input
              type="text"
              value={nomeFantasia}
              onChange={e => setNomeFantasia(e.target.value)}
              placeholder="Nome da sua empresa"
            />

            <label>CNPJ</label>
            <input
              type="text"
              value={cnpj}
              onChange={e => setCnpj(e.target.value)}
              placeholder="Seu CNPJ"
            />

            <label>Endereço</label>
            <input
              type="text"
              value={endereco}
              onChange={e => setEndereco(e.target.value)}
              placeholder="Endereço da empresa"
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Customers
