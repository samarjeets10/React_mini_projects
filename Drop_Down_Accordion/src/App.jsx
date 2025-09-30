import { React } from 'react'
import './App.css'
import Card from './assets/components/Card';

function App() {
  
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="wrapper_header">
            <h1>FAQ's</h1>
          </div>
          <div className="accordion_wrapper">
            <Card que="What are some common FAQ questions?" ans=" The goal of frequently asked questions is to provide clear, concise answers to common customer or user inquiries, helping them find information quickly without needing direct assistance. " />
            <Card  que="What are general FAQs?" ans="General FAQs are questions that are commonly asked by a wide range of people, and are not specific to a particular product or service." />
            <Card  que="What is the full form of ASAP?" ans="ASAP stands for 'As Soon As Possible'." />
            <Card  que="What are good FAQs?" ans="Good FAQs are clear, concise, and easy to understand. They should provide accurate and helpful information that is relevant to the reader's question." />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
