const ReviewRow = ({review, number}) => {

    

   
    return (
        <tr>
      <th scope="row">{number + 1}</th>
        <td >{review.firstname + " " + review.lastname}</td>
        <td>{review.content}</td>
    
    </tr>
    )
}

export default ReviewRow;


