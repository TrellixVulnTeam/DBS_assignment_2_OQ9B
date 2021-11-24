import { useRef } from "react";
import { login } from "../api/services";
import { getUser, setUser } from "../utils/func";
import {Navigate, useNavigate} from "react-router";
import { Link } from "react-router-dom";

const SignInPage = props => {

    const accountRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleLogin = () =>
    {
      
      login(accountRef.current.value, passwordRef.current.value)
      .then(
        result => {
          if (result.data.isSuccess)
            setUser(result.data.data);
            navigate('/');
        }
      )
    }

    return !getUser() ? (
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"
                  alt="Sample image" />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  
                  <div className="form-outline mb-4">
                    <input type="text" name="account" className="form-control form-control-lg"
                      placeholder="Nhập tên tài khoản" ref={accountRef}/>
                    
                  </div>

                  
                  <div className="form-outline mb-3">
                    <input type="password" name="password" className="form-control form-control-lg"
                      placeholder="Nhập mật khẩu" ref={passwordRef}/>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#!" className="text-body">Quên mật khẩu?</a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-outline-primary btn-lg"
                      onClick={handleLogin}
                      >Đăng nhập</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Bạn chưa có tài khoản? <Link to='/signup'>Đăng ký đi nào</Link></p>
                  </div>

                </form>
              </div>
            </div>
          </div>
  
        </section>
    ): <Navigate to='/' />
}


export default SignInPage;