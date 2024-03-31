import {Component} from 'react'
import Login from '../Login'
import Message from '../Message'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {islogin: false}

  status = () => {
    this.setState(prev => {
      
      return {islogin: !prev.islogin}
    })
  }

  render() {
    const {islogin} = this.state
    let message = islogin ? 'Welcome User' : 'Please Login'

    return (
      <div className="bg-container">
        <div className="text-container">
          <Message message={message} />
          {islogin ? (
            <Logout click={this.status} />
          ) : (
            <Login click={this.status} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
