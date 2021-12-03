import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from '@reach/router'

import Layout from "../components/layout"
import Seo from "../components/seo"
const isBrowser = typeof window !== "undefined"
const IndexPage = () => {

  const [UserName,setUserName] = useState('')
  const [Password,setPassword] = useState('')
  const [error,setError] = useState()

  const login = () => {
    
    if (isBrowser){
    let userInfoData = JSON.parse(window.localStorage.getItem('UserInfo'))
    const userInfo = userInfoData.userInfo.filter(res => {
      return res.UserName == UserName
    })
    if(userInfo.length > 0) {
      if(userInfo[0].Password == Password) {
        window.localStorage.setItem('MyInfo',JSON.stringify(userInfo))
        window.location = '/home'
      } else {
        setError('error')
      }
    } else {
      setError('error')
    }
  
  }

  return <Layout>
  <Seo title="Home" />
  <form className="form">
    <div className="title">Sign in to your account</div>
    <div style={{color:'red'}}>{error}</div>
    <div className="form-group">
      <p className="p">Username</p>
      <input
        name="username"
        className="form-control"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
    <div className="form-group">
      <p className="p">Password</p>
      <input
        name="password"
        className="form-control"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button className="button" type="button" onClick={login}>Login</button>
    <p className="foot">No Account? <Link to="/sign-up/">Create Account</Link>.</p>
  </form>


</Layout>
  }
}

export default IndexPage
