import React, { Component } from "react";
import { homePianoList } from "../data/HomePage/piano_data";
import { homeGuitarList } from "../data/HomePage/guitar_data";
import { homeTrendingList } from "../data/HomePage/trending_data";
import ProductListSlide from "../components/homeComponents/productListSlide/productListSlide";
import HomeAdvertisements from "../components/homeComponents/homeAdvertisements";

const ad1 =
  "https://carpentersmusic.com/wp-content/uploads/2021/06/Carpenters-Promo-June-2021.jpg";
const ad2 =
  "https://carpentersmusic.com/wp-content/uploads/2021/02/Carpenters-Peavey-Promo2-a.png";
const ad3 =
  "https://carpentersmusic.com/wp-content/uploads/2020/07/Showroom-with-Logo2.jpg";
const ad4 =
  "https://carpentersmusic.com/wp-content/uploads/2019/07/services.png?resize=1024%2C550&ssl=1";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <HomeAdvertisements
            advertisement1={ad1}
            advertisement2={ad2}
            advertisement3={ad3}
            advertisement4={ad4}
          />
          <ProductListSlide
            title="Sản phẩm nổi bật"
            dataList={homeTrendingList}
          />
          <ProductListSlide title="Piano" dataList={homePianoList} />
          <ProductListSlide title="Guitar" dataList={homeGuitarList} />
        </div>
      </>
    );
  }
}
