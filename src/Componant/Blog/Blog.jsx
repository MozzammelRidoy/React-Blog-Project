import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    // console.log(blog);
    const {cover, title, reading_time, posted_date, author_img, author, hashtags} = blog;
    return (
        <div className='mb-8 md:mb-20 space-y-4'>
            <img className="w-full mb-4 rounded-lg" src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex justify-center items-center'>
                        <img className='w-14 rounded-full h-14 border-2' src={author_img} alt="" />
                        <div className='ml-4'>
                            <h3 className='text-1xl font-bold'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                </div>
                <div className='flex justify-center items-center'>
                        <span>{reading_time} min read </span>
                        <button onClick={()=>handleAddToBookmarks(blog)} className='ml-2 text-1xl md:text-2xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-2xl md:text-3xl mb-6">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href='#'>{hash} </a> </span>)
                }
            </p>
            <button className='text-purple-600 text-sm font-semibold underline ' onClick={()=> handleMarkAsRead(reading_time)}>Mark As Read</button>
            
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;