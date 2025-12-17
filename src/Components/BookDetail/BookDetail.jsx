import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utility/addToDb';
import { Helmet } from 'react-helmet-async';

const BookDetail = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    //console.log(typeof bookId, typeof Id, typeof data[0].bookId)
    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, image } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    const handleWishList = (id) => {
        addToStoredWishList(id)
    }
    return (
        <div className='my-12'>
            <Helmet>
                <title> book detail | {bookId}</title>
            </Helmet>
            <h2>This is a book details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <button onClick={() => handleMarkAsRead(bookId)} 
            className="btn btn-outline mr-4 btn-accent"
            >Mark as Read</button>

            <button onClick={() => handleWishList(bookId)}
            className="btn btn-accent"
            >Add to WhishList</button>
        </div>
    );
};

export default BookDetail;