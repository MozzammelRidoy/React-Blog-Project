import Bookmark from "../Bookmark/Bookmark";
import { IoBookmark } from "react-icons/io5";
import { LuTimer } from "react-icons/lu";
import PropTypes from 'prop-types';



const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ms-0 md:ms-10 border-2 mb-8 md:mb-20 rounded-lg bg-slate-200 ">
            
            <h3 className="font-semibold   flex justify-center items-center border-2 bg-purple-600 p-4 m-4 rounded-lg text-white"><span className="text-2xl"> <LuTimer /> </span>  Reading Time : {readingTime} min </h3>

            <h3 className="m-4 px-4  font-semibold  text-2xl flex justify-center items-center"><span><IoBookmark></IoBookmark></span> Bookmarks : {bookmarks.length} </h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;