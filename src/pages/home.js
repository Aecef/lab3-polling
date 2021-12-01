import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

const IndexPage = ({data,e }) => {
  let MyInfo = JSON.parse(window.localStorage.getItem('MyInfo'))
  let name = MyInfo ? MyInfo[0].UserName : ''
  let token = MyInfo ? MyInfo[0].Token : ''

  return (
    <Layout>
      <p>Hi, {name} {token == '123' ? 'Admin' : 'User'}</p>
    </Layout>
  )
}

export default IndexPage
