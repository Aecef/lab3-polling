import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"


const isBrowser = typeof window !== "undefined"
const IndexPage = ({data,e }) => {
  if(isBrowser){let MyInfo = JSON.parse(window.localStorage.getItem('MyInfo'))
  let name = MyInfo ? MyInfo[0].UserName : ''
  let token = MyInfo ? MyInfo[0].Token : ''

  return (
    <Layout>
      <p>Hi, {name} {token == '123' ? 'Admin' : 'User'}</p>
      <Link to="/create-poll/">Create A Poll</Link> <br />

    </Layout>
  )
  }
}

export default IndexPage
