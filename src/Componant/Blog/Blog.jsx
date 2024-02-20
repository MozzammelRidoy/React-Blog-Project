import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog);
    const {cover} = blog;
    return (
        <div>
            <img className="" src={cover} alt="" />
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object
}
export default Blog;