
import { useState } from 'react'
import './App.css'
import Blogs from './Componant/Blogs/Blogs'
import Bookmarks from './Componant/Bookmarks/Bookmarks'
import Header from './Componant/Header/Header'
import Fotter from './Componant/Fotter/Fotter'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog => {
    // console.log(blog); 
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = reading_time => {
    // console.log(reading_time);
   
    setReadingTime(readingTime + reading_time);
  }
  return (
    <>
  
    <Header></Header>
    <div className='md:flex max-w-5xl mx-auto mt-10 px-10 md:px-0'>
    <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    <Fotter></Fotter>
   
    </>
  )
}

export default App
