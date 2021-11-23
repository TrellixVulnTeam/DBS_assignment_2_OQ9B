


const Tablerow = ({product, number}) => {


    return (
        <tr>
      <th scope="row">{number + 1}</th>
        <td >{product.name}</td>
        <td>{product.type}</td>
        <td>{product.price}</td>
        <td>{product.amount}</td>
        <td><button className='btn bg-main text-white'><i class="fas fa-edit"></i></button></td>
        <td><button className='btn btn-info'><i class="fas fa-info-circle"></i></button></td>
        <td><button className='btn btn-danger'><i class="fas fa-trash-alt"></i></button></td>
    </tr>
    )
}

export default Tablerow;


