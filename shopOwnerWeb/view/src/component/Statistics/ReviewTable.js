
import ReviewRow from "./ReviewRow";

const ReviewTable = ({reviews}) => {



    return (
        <table className="table text-left table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên</th>
            <th scope="col">Nội dung</th>
            
          </tr>
        </thead>
        <tbody className=''>
          
          {
            reviews.map((review, index) => {
                  return <ReviewRow review={review} number = {index} 
                 
                  key={index}/>
              })
          }
        </tbody>
</table>
    )
}

export default ReviewTable;