import { Product } from "../../models/Products";

interface SortButtonsInterface {
    products: Product [],
    setProducts: (products: Product[]) => void
    }



function SortButtons(props: SortButtonsInterface) {
    const sortAZ = () => {
        props.products.sort((a,b) => a.title.localeCompare(b.title));
        props.setProducts(props.products.slice());
      }
    
      const sortZA = () => {
        props.products.sort((a,b) => b.title.localeCompare(a.title));
        props.setProducts(props.products.slice());
      }
    
      const sortPriceAZ = () => {
        props.products.sort((a,b) => Number(a.price) - Number(b.price));
        props.setProducts(props.products.slice());
      }
    
      const sortPriceZA = () => {
        props.products.sort((a,b) => Number(b.price) - Number(a.price));
        props.setProducts(props.products.slice());
      }
    
      const sortRatingAZ = () => {
        props.products.sort((a,b) => Number(a.rating.rate) - Number(b.rating.rate));
        props.setProducts(props.products.slice());
      }
    
      const sortRatingZA = () => {
        props.products.sort((a,b) => Number(b.rating.rate) - Number(a.rating.rate));
        props.setProducts(props.products.slice());
      }
    
      
  return (
    <div>
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAZ}>Sort price A-Z</button>
      <button onClick={sortPriceZA}>Sort price Z-A</button>
      <button onClick={sortRatingAZ}>Sort rating A-Z</button>
      <button onClick={sortRatingZA}>Sort rating Z-A</button>
    </div>
  )
}

export default SortButtons