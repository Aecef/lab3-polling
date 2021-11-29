import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'

const CreatePoll = () => (
  <Layout>
    <Seo title="Poll Page"/>
    <Button>Create Poll</Button>
  </Layout>
)

export default CreatePoll
