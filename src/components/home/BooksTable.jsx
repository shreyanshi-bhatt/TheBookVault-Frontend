import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  const sortedBooks = [...books].sort((a, b) => b.publishYear - a.publishYear);
  return (
    <table className='w-full border-separate border-spacing-2 px-5'>
      <thead>
        <tr>
          <th className='border  rounded-md p-2 bg-slate-300'>No</th>
          <th className='border  rounded-md p-2 bg-slate-300'>Title</th>
          <th className='border  rounded-md max-md:hidden p-2 bg-slate-300'>
            Author
          </th>
          <th className='border  rounded-md max-md:hidden p-2 bg-slate-300'>
            Publish Year
          </th>
          <th className='border  rounded-md p-2 bg-slate-300'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {sortedBooks.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border  rounded-md text-center bg-slate-300'>
              {index + 1}
            </td>
            <td className='border  rounded-md text-center bg-slate-200'>
              {book.title}
            </td>
            <td className='border  rounded-md text-center max-md:hidden bg-slate-200'>
              {book.author}
            </td>
            <td className='border  rounded-md text-center max-md:hidden bg-slate-200'>
              {book.publishYear}
            </td>
            <td className='border  rounded-md text-center bg-slate-200'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;