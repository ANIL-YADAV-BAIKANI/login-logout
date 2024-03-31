import './index.css'

const Logout = props => {
  const {click} = props
  return (
    <button className="button" onClick={click}>
      Logout
    </button>
  )
}
export default Logout
