import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FeatureWrapper } from "../../container/FeatureWrapper";
import { Link } from "react-router-dom";
function Post() {
  return (
    <div>
      <FeatureWrapper>
        <Link to="/posts" style={{ color: "black", textDecoration: "none" }}>
          <div className="card mb-3 postcard" style={{ width: "420px" }}>
            <div className="row no-gutters">
              <div className="col-md-4 col-lg-4">
                <img
                  src="https://iotcdn.oss-ap-southeast-1.aliyuncs.com/2018-01/83105515-dizain-advertising.jpg"
                  alt="advertise"
                  className="card-img-left"
                />
              </div>
              <div className="col-md-8 col-lg-8">
                <div className="card-body d-flex flex-row-reverse justify-content-center">
                  <h5 className="card-title">
                    Truyền thông tiếp thị tích hợp và hòa nhạc: Có gì chung?
                  </h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </FeatureWrapper>
      <FeatureWrapper>
        <Link to="/posts" style={{ color: "black", textDecoration: "none" }}>
          <div className="card mb-3 postcard" style={{ width: "420px" }}>
            <div className="row no-gutters">
              <div className="col-md-4 col-lg-4">
                <img
                  src="https://userscontent2.emaze.com/images/1013f41f-4583-489e-b108-3ba1d9e28b0a/45f6f19807348a30d3b0fbfa6ce8605f.jpg"
                  alt="advertise"
                  className="card-img-left"
                />
              </div>
              <div className="col-md-8 col-lg-8">
                <div className="card-body d-flex flex-row-reverse justify-content-center">
                  <h5 className="card-title">
                    Kinh doanh nhạc cụ âm nhạc hiệu quả thu hút nhất
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </FeatureWrapper>
    </div>
  );
}

export default Post;
