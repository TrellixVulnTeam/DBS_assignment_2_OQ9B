import './Sidebar.css';


const Sidebar = props => {



    return <section id="sidebar">
    <div className="input-group">
        <div className="form-outline">
            <input type="search" id="form1" className="form-control rounded-0" placeholder='Tìm kiếm sản phẩm'/>
        </div>
        <button type="button" className="btn btn-primary rounded-0">
            <i className="fas fa-search"></i>
        </button>
    </div>
    
</section>
}

export default Sidebar;


/* 
<div>
        <h6 className="p-1 border-bottom">Loại</h6>
        <ul>
            <li><a href="#">Living</a></li>
            <li><a href="#">Dining</a></li>
            <li><a href="#">Office</a></li>
            <li><a href="#">Bedroom</a></li>
            <li><a href="#">Kitchen</a></li>
        </ul>
    </div>
    <div>
        <h6 className="p-1 border-bottom">Lọc bởi</h6>
        <p className="mb-2">Color</p>
        <ul className="list-group">
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span className="fa fa-circle pr-1" id="red"></span>Red </a></li>
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span className="fa fa-circle pr-1" id="teal"></span>Teal </a></li>
            <li className="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span className="fa fa-circle pr-1" id="blue"></span>Blue </a></li>
        </ul>
    </div>
    <div>
        <h6>Type</h6>
        <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2"> <input type="radio" name="type" id="boring" /> <label for="boring" className="pl-1 pt-sm-0 pt-1">Boring</label> </div>
            <div className="form-inline border rounded p-sm-2 my-2"> <input type="radio" name="type" id="ugly" /> <label for="ugly" className="pl-1 pt-sm-0 pt-1">Ugly</label> </div>
            <div className="form-inline border rounded p-md-2 p-sm-1"> <input type="radio" name="type" id="notugly" /> <label for="notugly" className="pl-1 pt-sm-0 pt-1">Not Ugly</label> </div>
        </form>
    </div>
*/