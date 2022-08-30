import { useContext } from 'react'
import Header from '../../components/Header'
import { AuthContext } from '../../contexts/auth'

function Dashboard() {
  const { signOut } = useContext(AuthContext)
  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
