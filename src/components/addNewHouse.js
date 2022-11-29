// import React from "react";
// import useSrate from "react";

// //  add a new house form
// consr addNewHouse = () => {

//     const url = "http://localhost:3000/houses";
//     const [house, setHouse] = useState({

//         name: "",
//         location: "",
//         price: "",
//         description: "",
//         image: "",
//     });

//     const handleChange = (e) => {
//         setHouse({ ...house, [e.target.name]: e.target.value });
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(house)
//         })
//             .then(res => res.json())
//             .then(data => console.log(data))
//             .catch(err => console.log(err))
//         setHouse({
//             name: "",
//             location: "",
//             price: "",
//             description: "",
//             image: "",
//         })
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input

//                     type="text"
//                     name="name"
//                     placeholder="name"
//                     value={house.name}

//                     onChange={handleChange}
//                 />
//                 <input

//                     type="text"
//                     name="location"
//                     placeholder="location"
//                     value={house.location}

//                     onChange={handleChange}
//                 />
//                 <input

//                     type="text"
//                     name="price"
//                     placeholder="price"
//                     value={house.price}

//                     onChange={handleChange}
//                 />
//                 <input

//                     type="text"
//                     name="description"
//                     placeholder="description"
//                     value={house.description}

//                     onChange={handleChange}
//                 />
//                 <input

//                     type="text"
//                     name="image"
//                     placeholder="image"
//                     value={house.image}

//                     onChange={handleChange}
//                 />
//                 <button type="submit">Add House</button>
//             </form>
//         </div>
//     )
// }

// export default addNewHouse;
