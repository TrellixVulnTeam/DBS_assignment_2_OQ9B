import React from "react";
import {
  ListWrapper,
  ListTitle,
  AdContainer,
  AdContainerRow,
  ListBtn,
  ListTitleRow,
  AdImage,
} from "./homePageElements";

function HomeAdvertisements(props) {
  return (
    <AdContainer>
      <AdContainerRow>
        <div className="col">
          <AdImage
            src={props.advertisement1}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col">
          <AdImage
            src={props.advertisement2}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </AdContainerRow>
      <AdContainerRow>
        <div className="col">
          <img
            src={props.advertisement3}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col">
          <img
            src={props.advertisement4}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </AdContainerRow>
    </AdContainer>
  );
}

export default HomeAdvertisements;
