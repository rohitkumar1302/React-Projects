import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'royalblue',
      intro:'',
      tag:'Satisfied'
    },
    {img:'https://plus.unsplash.com/premium_photo-1661589932346-20fb0a8c13e4?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'lightseagreen',
      intro:'',
      tag:'Underserved'
    },
    {img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color:'orange',
     intro:'',
    tag:'Underbanked'
    },
    {img:'https://media.istockphoto.com/id/2233988920/photo/making-decision-on-the-move.jpg?s=612x612&w=0&k=20&c=-hQ1G1LO1Dc80FrNv8O16odwjiKv2XlSvPnf8A3m5WY=',
     color:'pink',
     intro:'',
    tag:'Outsider'
    },
    {img:'https://media.istockphoto.com/id/2221280710/photo/business-colleagues-discuss-a-project-in-a-modern-office-environment-collaborating-on-ideas.jpg?s=612x612&w=0&k=20&c=ZOj5rqymzS_9A0WrOa6RJlMScXPH9Mbbn-XHZCF7mJ8=',
     color:'black',
     intro:'',
    tag:'Disadvantaged'
    }

  ]


  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App