import './index.css'

const Login = props => {
  const {click} = props
  return (
    <button className="button" onClick={click}>
      Login
    </button>
  )
}
export default Login
