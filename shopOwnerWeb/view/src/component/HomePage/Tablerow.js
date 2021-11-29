import { useNavigate } from "react-router";
import { deleteProduct } from "../../api/services";


const Tablerow = ({product, number, changeEditModalItem, action}) => {

    const navigate = useNavigate();

    const handleOnDelete = (event) => {
      
      deleteProduct(product.id).then(result => action());
      event.preventDefault();
    }

    const navigateToStats = (id) => {
        navigate(`/stats/${id}`);
    }

    return (
        <tr>
      <th scope="row">{number + 1}</th>
        <td >{product.name}</td>
        <td>{product.type}</td>
        <td>{product.price}</td>
        <td>{product.amount}</td>
        <td><button className='btn bg-main text-white'
          data-toggle="modal" data-target="#editModalItem"
         onClick={() => changeEditModalItem(product)}>
        <i class="fas fa-edit"></i></button></td>
        <td>
          <button className='btn btn-info' onClick={() => navigateToStats(product.id)}>
            <i class="fas fa-info-circle"></i>
          </button>
        </td>
        <td><button className='btn btn-danger' onClick={handleOnDelete}><i class="fas fa-trash-alt"></i></button></td>
    </tr>
    )
}

export default Tablerow;


