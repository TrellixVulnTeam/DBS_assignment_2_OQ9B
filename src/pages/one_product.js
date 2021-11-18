import React, {useState, useEffect} from "react";
import Description from "../components/OneProduct/Description";
import Display from '../components/OneProduct/Display'
import ReviewContainer from "../components/OneProduct/Review";
import SimilarProducts from "../components/OneProduct/SimilarProducts";
import { homeGuitarList } from "../data/HomePage/guitar_data";
import {withRouter} from 'react-router-dom';
import { featureProd } from "../data/ProductData/feature_products";
import Axios from 'axios';

const ProductInfo = (props) => {

  const id = props.match.params.id;


  return (
    <div>
      <Display display= {featureProd[id - 1]}
      />
      <Description description= {featureProd[id -1]} />   
      <ReviewContainer />
      <SimilarProducts />
    </div>
  );
};

export default withRouter(ProductInfo);
