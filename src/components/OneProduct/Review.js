import {Star} from './Star';
import {ReviewContainer, Review} from './ReviewElement';
import Person from './Person';

function Reviews(){
    return (
      <ReviewContainer>
        <div className='title'>Đánh giá sản phẩm</div>
        <div className='rating' style={{backgroundColor: '#C4C4C4'}}>
        <p className='rating-num'>5.0</p>
        <Star value={5} />
        </div>
        <OneReview />
        <OneReview />
        <OneReview />

        </ReviewContainer>
  );
  }
  
  function OneReview(){
    return (
      <Review>
      <Person />
      <span className='comment'>This is a comment</span>
    </Review>
  
    );
  }
  
export default Reviews;