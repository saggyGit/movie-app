// import React,{useState} from 'react';
// import axios from 'axios';

// const Context = () => {

//     const[movie,setmovie]=useState([]);

//     const fecthApi=()=>{

//         axios.get('http://www.omdbapi.com/?s=pol&apikey=c4b2c6e5')
//         .then((res)=>{

//             console.log(res);
//             setmovie(res.data.Search);

//         })
//         .catch(err=>console.log(err));
//     }
//     return (
//         <>

//         <button onClick={fecthApi}>fecth api</button>

//         {movie.map((row,index)=>{
//             return(

                
//                 <h1 key={index}>{row.Title}</h1>
                
//             );

    
//         })}
            
//         </>
//     );
// };

// export default Context;