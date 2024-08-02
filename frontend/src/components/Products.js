// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/actions";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState(data);
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();

//   const addProduct = (product) => {
//     dispatch(addCart(product));
//   };

//   useEffect(() => {
//     let componentMounted = true;

//     const getProducts = async () => {
//       setLoading(true);
//       const response = await fetch("https://fakestoreapi.com/products/");
//       if (componentMounted) {
//         const products = await response.clone().json();
//         setData(products);
//         setFilter(products);
//         setLoading(false);
//       }
//       return () => {
//         componentMounted = false;
//       };
//     };

//     getProducts();
//   }, []);

//   const Loading = () => {
//     return (
//       <>
//         {[...Array(6)].map((_, index) => (
//           <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={index}>
//             <Skeleton height={592} />
//           </div>
//         ))}
//       </>
//     );
//   };

//   const filterProduct = (category) => {
//     const updatedList = data.filter((item) => item.category === category);
//     setFilter(updatedList);
//   };

//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="buttons text-center py-5">
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
//             All
//           </button>
//           <button
//             className="btn btn-outline-dark btn-sm m-2"
//             onClick={() => filterProduct("men's clothing")}
//           >
//             Men's Clothing
//           </button>
//           <button
//             className="btn btn-outline-dark btn-sm m-2"
//             onClick={() => filterProduct("women's clothing")}
//           >
//             Women's Clothing
//           </button>
//           <button
//             className="btn btn-outline-dark btn-sm m-2"
//             onClick={() => filterProduct("jewelery")}
//           >
//             Jewelery
//           </button>
//           <button
//             className="btn btn-outline-dark btn-sm m-2"
//             onClick={() => filterProduct("electronics")}
//           >
//             Electronics
//           </button>
//         </div>

//         <div className="row justify-content-center">
//           {filter.map((product) => (
//             <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//               <div className="card text-center h-100">
//                 <img
//                   className="card-img-top p-3"
//                   src={product.image}
//                   alt={product.title}
//                   height={300}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">
//                     {product.title.length > 12
//                       ? `${product.title.substring(0, 12)}...`
//                       : product.title}
//                   </h5>
//                   <p className="card-text">
//                     {product.description.length > 90
//                       ? `${product.description.substring(0, 90)}...`
//                       : product.description}
//                   </p>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                   <li className="list-group-item lead">$ {product.price}</li>
//                 </ul>
//                 <div className="card-body">
//                   <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
//                     Buy Now
//                   </Link>
//                   <button
//                     className="btn btn-dark m-1"
//                     onClick={() => addProduct(product)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="container my-3 py-3">
//       <div className="row">
//         <div className="col-12">
//           <h2 className="display-5 text-center">Latest Products</h2>
//           <hr />
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         {loading ? <Loading /> : <ShowProducts />}
//       </div>
//     </div>
//   );
// };

// export default Products;
