import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog);
    const {cover, title, reading_time, posted_date, author_img, author, hashtags} = blog;
    return (
        <div className='mb-8 md:mb-20'>
            <img className="w-full mb-8 rounded-lg" src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex justify-center items-center'>
                        <img className='w-14 rounded-full h-14 border-2' src={author_img} alt="" />
                        <div className='ml-4'>
                            <h3 className='text-1xl font-bold'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                </div>
                <div>
                        <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-2xl md:text-3xl mb-6">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href='#'>{hash} </a> </span>)
                }
            </p>
            
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object
}
export default Blog;