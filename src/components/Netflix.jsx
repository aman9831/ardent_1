import React from "react";
import './css/movie.css';

const image = 'img/search.png';
const game = 'img/Game of thrones.jpg'; 
const inter = 'img/interstellar.jpg'; 
const luci = 'img/lucifier.jpg'; 
const money = 'img/money heist.jpg'; 
const oppen = 'img/oppenheimer.jpg'; 
const peak = 'img/Peaky Blinders.jpg';
const squid = 'img/squid Game.jpg';
const stranger = 'img/stranger things.jpg';
const last = 'img/the last kingdom.jpg';
const viki = 'img/vikings valhalla.jpg';
const Netflix = () =>{
    return(
        <>
            <div className="container-fluid">
                <div id="top">
                    <div class="netflixIcon">  
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240313101431/Netflix-Logo.png" class="img-netflixIcon" alt="Random "/>
                
                
                
                
                
                </div>
                    <div class="bar">
                        <img src={image} alt={image} ></img>
                        <input type="text" name="search" placeholder="Search" id="s"></input>
                    </div>
                    <button type="button" id="btn">Sign In</button>
                    <div class="l">
                    <select name="Language" id="lang">
                        <option disabled selected value={''}>Language</option>
                        <option value={'hindi'}>Hindi</option>
                        <option value={'english'}>English</option>
                    </select>
                    </div>
                </div>
                <div id="lower">
                    <h5 id="p">Flims  </h5>
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="card">
                            <img src={game} alt={game} ></img>
                            <h6 className="text-center">Games Of Thrones</h6>
                            <button>Watch Now</button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="card">
                            <img src={inter} alt={inter} ></img>
                            <h6 className="text-center">Interstellar</h6>
                            <button>Watch Now</button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="card">
                            <img src={luci} alt={luci} ></img>
                            <h6 className="text-center">Lucifier</h6>
                            <button>Watch Now</button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="card">
                            <img src={money} alt={money} ></img>
                            <h6 className="text-center">Money Heist</h6>
                            <button>Watch Now</button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="card">
                            <img src={oppen} alt={oppen} ></img>
                            <h6 className="text-center">Oppenheimer</h6>
                            <button>Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="row1">
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="card">
                            <img src={squid} alt={squid} ></img>
                            <h6 className="text-center">Squid Game</h6>
                            <button>Watch Now</button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="card">
                            <img src={peak} alt={peak} ></img>
                            <h6 className="text-center">Peaky Blinders</h6>
                            <button>Watch Now</button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="card">
                            <img src={stranger} alt={stranger} ></img>
                            <h6 className="text-center">Stranger Things</h6>
                            <button>Watch Now</button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="card">
                            <img src={last} alt={last} ></img>
                            <h6 className="text-center">The Last Kingdom</h6>
                            <button>Watch Now</button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                            <div className="card">
                            <img src={viki} alt={viki} ></img>
                            <h6 className="text-center">Vikings Valhalla</h6>
                            <button>Watch Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Netflix