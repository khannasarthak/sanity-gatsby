import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
{
  allSanityProject {
    edges {
      node {
      	title
        summary
        technologies
        code_repository        
          
        }
      }
    }
  }
`
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Projects</h1>
    <ul style = {{ listStyle : 'none', display: 'flex' , alignItems:'space-between', padding:0}}>
      {data.allSanityProject.edges.map(( {node: project}) =>
      <li key ={project.title} style = {{flex:'1 45%', maxWidth:'45%'}}>
        <h2>{project.title}</h2>
      </li>

      )}
    </ul>
    
  </Layout>
)

export default IndexPage
