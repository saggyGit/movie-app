import axios from 'axios';
import React,{useState} from 'react';
import Context from './Context';

const Home = () => {
    const[text,setText]=useState('search movie');
    const[movie,setmovie]=useState([]);


    const changetext=(e)=>{

        console.log(e.target.value);
        setText(e.target.value);


    }

    const getmovie=(e)=>{

        e.preventDefault();

        axios.get(`http://www.omdbapi.com/?s=${text}&apikey=c4b2c6e5`)
        .then((res)=>{
            console.log(res.data.Search);
            setmovie(res.data.Search);
        })
        .catch(err=>console.log(err));


    }
    return (
        <>

<nav className="mt-3 navbar navbar-expand-lg bg-light navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Movie App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        
      </ul>
      <form className="d-flex" role="search" onSubmit={getmovie}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={changetext} value={text}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<div className="container my-3c mt-3" >
    <div className="row mb-3" >
        {

            movie.map((row,index)=>{

                return(
                    <div className="col-3">

        <div class="card" style={{width: "18rem"}}>
        <img src={row.Poster} class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title">{row.Year}</h5>
          <p class="card-text">{row.Title}</p>
      </div>
    </div>
</div>
                );


            })
        }
        
    </div>
</div>
   
        </>
    );
};

export default Home;