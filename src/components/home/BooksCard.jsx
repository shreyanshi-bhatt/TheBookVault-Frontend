import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  // Sort the books array by publish year in descending order
  const sortedBooks = [...books].sort((a, b) => b.publishYear - a.publishYear);

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5'>
      {sortedBooks.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};


export default BooksCard;