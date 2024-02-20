
import './App.css'
import Blogs from './Componant/Blogs/Blogs'
import Bookmarks from './Componant/Bookmarks/Bookmarks'
import Header from './Componant/Header/Header'

function App() {

  return (
    <>
  
    <Header></Header>
    <div className='md:flex mt-5 mx-10'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </div>
   
    </>
  )
}

export default App
