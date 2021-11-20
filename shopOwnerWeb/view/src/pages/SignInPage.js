

const SignInPage = props => {

    return (
        <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" class="img-fluid"
          alt="Sample image" />
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Nhập tên tài khoản" />
            
          </div>

          
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Nhập mật khẩu" />
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <a href="#!" class="text-body">Quên mật khẩu?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-outline-primary btn-lg"
              >Đăng nhập</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Bạn chưa có tài khoản? <a href="#!"
                class="link-danger">Đăng ký đi nào</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
    )
}


export default SignInPage;