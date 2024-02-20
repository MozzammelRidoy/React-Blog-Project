import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]); 

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])

    return (
        <div className="md:w-2/3">
            {
                blogs.map((blog, idx) => <Blog blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead} key={idx}></Blog>)
            }


            
        </div>
    );
};


Blogs.propTypes ={
    handleAddToBookmarks : PropTypes.func, 
    handleMarkAsRead: PropTypes.func

}
export default Blogs;