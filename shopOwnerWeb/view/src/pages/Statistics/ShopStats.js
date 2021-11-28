import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { getProduct } from "../../api/services";

const ShopStats = props => {

    const [products, setProducts] = useState([]);
    let types = [];
    useEffect(() => {

        getProduct().
        then(result => {
            console.log(result);
            setProducts(result)})
        .catch(error => setProducts([]));
    }, []);

    function generateTypes() {

        products.map((product) => {

            types.map(type => {

                if (type.value === product.type)
                    type.count++;
                return type;
            });

        });
    }

    return <div className='w-25'>
        <Doughnut
        data={{
          labels: [
            "SUCCESS",
            "CANCEL",
            "PENDING",
            "PENDING "
          ],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9"
              ],
              data: [2478, 5267, 734, 784]
            }
          ]
        }}
        option={{
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050"
          }
        }}
      />
    </div>
}

export default ShopStats;

