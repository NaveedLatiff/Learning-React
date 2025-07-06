import React from 'react'
import Card from '../components/Card'

const Home = ({ data }) => {
  return (
    <div>
      <div id="cards-parent">
        {data.map((x, indx) => (
          <Card key={indx} name={x.username} pass={x.password} email={x.email} />
        ))}
      </div>
    </div>
  )
}

export default Home
