import { Link } from "react-router-dom";
import { getUser, logout } from "../../utils/func";
import {useNavigate} from "react-router";

const Header = props => {

    const navigate = useNavigate();

    const handleLogout = (event) => {

        logout();
        console.log(getUser());
        navigate('/signin');
        event.preventDefault();
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-main p-2'>

            <h3 className='nav-brand text-white col-md-3 d-flex justify-content-start'>HCMUTshopee</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto row">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>
                            <i class="fas fa-home"></i>
                        Trang chủ</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to='/add-product'>Thêm mới</Link>
                    </li>
                    
                </ul>
                {
                !getUser() ?  
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/signin'>Đăng nhập</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to='/signup'>Đăng ký</Link>
                    </li>
                    
                </ul>:
                    <ul className="navbar-nav ml-auto">
                            
                            <li className="nav-item active">
                                <Link className="nav-link" to='/signin'>Thông tin tài khoản</Link>
                            </li>
                            <li className="nav-item active">
                                <button className='btn' onClick={handleLogout}>Đăng xuất</button>
                            </li>
                    </ul>
                }
            </div>

        </nav>

    )


}

export default Header;