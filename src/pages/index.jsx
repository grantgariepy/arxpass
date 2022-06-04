import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import App from '../App';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Helmet> <title>ARX OCCULTUS</title> </Helmet>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <App />
      
    </>
  )
}

export default Home
