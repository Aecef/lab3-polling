import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from '@reach/router'

import Layout from "../components/layout"
import Seo from "../components/seo"
import { render } from "react-dom"
const isBrowser = typeof window !== "undefined"
const IndexPage = () => {

  const [UserName,setUserName] = useState('')
  const [Password,setPassword] = useState('')
  const [Email,setEmail] = useState('')
  const [Token,setToken] = useState('')
  if(isBrowser){
  const submit = () => {
    const obj = {
      userInfo: []
    }
    let userInfoData = JSON.parse(window.localStorage.getItem('UserInfo'))
    userInfoData ? userInfoData.userInfo.push({
      'UserName': UserName,
      'Password': Password,
      'Email': Email,
      'Token': Token
    }) : obj.userInfo.push({
      'UserName': UserName,
      'Password': Password,
      'Email': Email,
      'Token': Token
    })
    if(userInfoData) {
      window.localStorage.setItem('UserInfo',JSON.stringify(userInfoData))
    }else {
      window.localStorage.setItem('UserInfo',JSON.stringify(obj))
    }
    navigate('/')
  
}


  return <Layout>
  <Seo title="Home" />
  <form className="form">
    <div className="title">Create a new account</div>
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
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="form-group">
      <p className="p">Email</p>
      <input
        name="password"
        className="form-control"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="form-group">
      <p className="p">Token</p>
      <input
        name="password"
        className="form-control"
        placeholder="Token"
        onChange={(e) => setToken(e.target.value)}
      />
    </div>
    <button className="button" type="button" onClick={submit}>Register</button>
    <p className="foot">Existing account? <Link to="/">Sign in</Link>.</p>
  </form>
</Layout>
  }
  
}

export default IndexPage
