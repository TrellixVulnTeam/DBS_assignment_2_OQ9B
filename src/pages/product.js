import React, { Component } from "react";
import Title from "../components/title/title";
import { featureProd } from "../data/ProductData/feature_products";
import { Consumer } from "../components/products/content";
import Product from "../components/products/product";
import FilterBar from "../components/title/FilterBar";
import { PaginationProvider, PaginationContext } from "../components/products/Pagination";
import '../ProductStyle/ProductListStyle.css'

const { useContext, useEffect } = React;

const Page = () => {
  const [pagination, setPagination] = useContext(PaginationContext)

  const numberOfPages = Math.ceil(featureProd.length / pagination.limit);

  const navigateToPage = (pageNumber) => {
    setPagination({
      ...pagination,
      page: pageNumber,
      start: (pageNumber - 1) * pagination.limit,
      perPage: (pageNumber * pagination.limit),
    });
  };

  useEffect(() => {
    navigateToPage(1)
  }, [])

  return (
    <>
      <Consumer>
        {value => {
          return value.products.slice(pagination.start, pagination.perPage).map(product => {
            return <Product key={product.id} product={product} />
          })
        }}
      </Consumer>
      <div className="row">
        <div className="col-4 col-md-8 col-lg-9"></div>
        <div className="col-8 col-md-4 col-lg-3 my-4">
          {pagination.page > 2 && <button className="btn pagebtn" onClick={() => { navigateToPage(1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>First</button>}
          {pagination.page > 1 && <button className="btn pagebtn" onClick={() => { navigateToPage(pagination.page - 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Prev</button>}
          {[...Array(100)].slice(0, numberOfPages).map((x, i) =>
            <button className="btn pagebtn" onClick={() => { navigateToPage(i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{i + 1}</button>
          )}
          {pagination.page !== numberOfPages && <button className="btn pagebtn" onClick={() => { navigateToPage(pagination.page + 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Next</button>}
          {pagination.page < Math.ceil(numberOfPages / 2 + 1) && <button className="btn pagebtn" onClick={() => { navigateToPage(numberOfPages); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Last</button>}
        </div>
      </div>
    </>
  )
}
export default class ProductList extends Component {
  state = {
    products: featureProd
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Title title="Sản phẩm" />
          <div className="row">
            <FilterBar />
          </div>
          <div className="row">
            <PaginationProvider>
              <Page />
            </PaginationProvider>
          </div>
        </div>
      </React.Fragment>
    )
  }
}