import './customers.css'
import Title from '../../components/Title'
import Header from '../../components/Header'
import { useState } from 'react'

import { FiUser } from 'react-icons/fi'

function handleAdd(e) {
  e.preventDefault()
  alert('teste')
}

function Customers() {
  const [nomeFantasia, setNomeFantasia] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState('')
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
