
import './App.css'
import Blogs from './Componant/Blogs/Blogs'
import Bookmarks from './Componant/Bookmarks/Bookmarks'
import Header from './Componant/Header/Header'

function App() {

  return (
    <>
  
    <Header></Header>
    <div className='md:flex max-w-5xl mx-auto mt-10 px-10 md:px-0'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </div>
   
    </>
  )
}

export default App
