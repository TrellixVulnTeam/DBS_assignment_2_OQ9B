import { ReviewContainer, Review, RatingContainer, RatingItem } from './ReviewElement';
import Person from './Person';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { NormalBtn } from './DisplayElement';
import ReactPaginate from 'react-paginate';
import './review.css';
import axios from 'axios';

function Items({ currentItems }) {
  return (
    <div className="items" style={{ width: '1000px' }}>
      {currentItems && currentItems.map((item) => (
        <div>
          <OneReview firstname={item.fisrtname} lastname={item.lastname} detail={item.content} />
        </div>
      ))}
    </div>
  );
}

function PaginatedItems({ feedback, itemsPerPage }) {

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(feedback.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(feedback.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % feedback.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />

      <div className='container' style={{ marginTop: '30px', paddingLeft: '600px', position: 'absolute', bottom: '10px' }}>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>

    </>
  );
}

function OneReview(props) {

  return (

    <Review>
      <div style={{ display: 'inline-block', width: '200px' }}>
        <Person fisrtname={props.firstname} lastname={props.lastname} />
      </div>
      <div style={{ display: 'inline-block', marginLeft: '30px' }}>
        <div style={{ marginTop: '10px' }}>{props.detail}</div>
      </div>
    </Review>

  );
}

function Rating(props) {

  const [rating, setRating] = useState(0);
  const [detail, setDetail] = useState('');

  const [hoverValue, setHoverValue] = useState(0);
  const [curValue, setCurValue] = useState(0);
  const stars = Array(5).fill(0);

  const handleStarClick = (value) => {
    setCurValue(value);
    setRating(value);
  }

  const handleStarMouseOver = (value) => {
    setHoverValue(value);
  }

  const handleStarMouseLeave = () => {
    setHoverValue(0);
  }

  const detailOnChange = (e) => {
    setDetail(e.target.value);
  }

  const getCurrentTime = () => {
    var today = new Date();
    var cur_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var cur_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return (cur_date + ' ' + cur_time);
  }

  // add value here
  const handleSubmitClick = () => {

    if (rating === '') {
      return;
    }

    const shopID = localStorage.getItem('shopID');
    const customerID = JSON.parse(localStorage.getItem('token'));

    console.log(props.shopID);

    axios.post('http://localhost:5000/products/details/feedback', {
      ownerID: props.shopID,
      customerID: customerID[0].id,
      productID: props.id,
      content: detail,
      timeReview: getCurrentTime()
    }).then((response) => {
      console.log(response.data);
    }).catch(e => {
      console.log(e);
    });
  }

  return <>
    <RatingContainer>
      <RatingItem>
        <h2>Viết nhận xét sản phẩm</h2>
      </RatingItem>

      <RatingItem>
        {stars.map((_, index) => {
          return (
            <FaStar key={index}
              size={40}
              color={(hoverValue || curValue) > index ? 'orange' : 'grey'}
              onMouseOver={() => handleStarMouseOver(index + 1)}
              onMouseLeave={handleStarMouseLeave}
              onClick={() => handleStarClick(index + 1)} />
          )
        })}
      </RatingItem>

      <RatingItem>
        <textarea
          placeholder="Nhận xét sản phẩm"
          style={{ width: '800px', height: '150px' }}
          onChange={detailOnChange}
        />
      </RatingItem>
      <RatingItem>
        <NormalBtn onClick={handleSubmitClick}> Submit </NormalBtn>
      </RatingItem>
    </RatingContainer>
  </>
}

function Reviews(props) {
  return (
    <>
      <ReviewContainer>
        <div className='title' style={{ backgroundColor: '#C4C4C4' }}>Đánh giá sản phẩm</div>
        {props.feedback.length === 0 ? <h2 style={{ textAlign: 'center', marginTop: '200px' }}>Không có đánh giá nào cho sản phẩm này</h2> :
          <PaginatedItems itemsPerPage={4} feedback={props.feedback} />
        }
      </ReviewContainer>
      <Rating id={props.id} shopID={props.shopID} />
    </>
  );
}

export default Reviews;