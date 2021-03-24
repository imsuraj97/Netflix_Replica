import React, {Component} from 'react';
import './Netflix.css';


const box = {
    backgroundsize: 'cover',
    backgroundposition: 'center center',
    backgroundImage: 'url("https://occ-0-2232-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdx7S1GJz39i6C132bDdv6bt6iCBd0nM-_LWplFNgPQnPx1nCP-12VEncyX0Mm0JE6CaX5lJxpb1rrKng_w4mrFBMHj6.webp?r=7a0")'
 } 
 /*const boxa = {
    backGroundColor : 'rgb(20,20,20)'
 }*/

class Netflix extends Component
 
{
    render()
    {
           return( 
        <div className="main" >
            <div className="navb black">
                <div className="contents">
                    <img class="header_logo" src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix Logo"/>
                    <img class="account_button" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Account logo"/>
                    <li className="header_list">
                        <a href="ffdf" className="headerlist">Home</a>
                        <a href="fff"className="headerlist">Tv Shows</a>
                        <a href="fdf"className="headerlist">Movies</a>
                        <a href="fdcdf"className="headerlist">New & Popular</a>
                        <a href="ff"className="headerlist">Mylist</a>
                    </li>
                </div>
            </div>
            <div className="headerbanner" style= { box }>
                <div className="headerbanner_contents">
                    <h1 className="headerbanner_title">Fast & Furious</h1>
                <div className="headerbanner_buttons">
                    <button className="headerbanner_button">Play</button>
                    <button className="headerbanner_button">More</button>
                </div>
                <h1 className="headerbanner_description">Fast & Furious (also known as The Fast and the Furious) is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists and spies.</h1>
                </div>
                <div className="fadeBottom"></div>
            </div>
             <div className="row">
                <h2>Popular On Netflix</h2>
                <div className="rowpics" style={{position: 'relative'}}>
    
                    <img className="rowpic zoom" src="https://occ-0-2232-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYCLxv6PrCsKnZQ-t0H6g4_J_Be6cC8e4RjnC7y7KVn56mdnfQ94kFAS9j9VvocgYvdDQvgE6Y9OZvXaPDQiN1tCXTIUxTqDvkUrhnbLzLOFI7mi67pGlQ1X16NKhbpXGjEk4rra-foJpqFXpo6QrvrzOzdlSODEGAG0OCJd13tDAtEhKIN-IfY.jpg?r=c80" alt="Money Heist" /> 
                    <img className="rowpic zoom" src="https://occ-0-2232-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe_qBhgdMw53IT1e9XKPL5YbHygCmYhKUuGsfCzl0JmEmgsT7Jc1CAQRKmpYBDG2H8KBB_yUwFY_LbBlpyvAeluzwMWvqyk1vNyM8BMvipZVtBqZUQM-PWyAUJsl.jpg?r=b23" alt="Peaky Blinders" />
                    <img className="rowpic zoom" src="https://occ-0-2232-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTtBY3mxcLvSvNQBpNYRkBDDorCYhVROwKcLGgzB-2QwozIjMBnYJ_99kVoqCQ_aYrBviQ9Ow7jGsUdN9dnK1BaLFoVb2gdYAqIUqkzrgeNObPcdxciXAAt9Jf8X-cEKMQEyoO_zdnIdumxW7OcivEv38VA.webp?r=57b" alt="Friends" />
                    <img className="rowpic zoom" src="https://occ-0-2232-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ1n7nMsHQU4eAT8s7OtRNBTkRt8KcVP9M0q5ZnZRppX0WwulOFBD6wHx0U4pOga86psNHvwzBvJah7ey3BpIgbMOeE.webp?r=252" alt="Breaking Bad" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//yxMpoHO0CXP5o9gB7IfsciilQS4.jpg" alt="Chilling Adventures of Sabrina" />
                    
                </div>
            </div>
            <div className="row">
                <h2>Continue Watching For Suraj</h2>
                <div class="rowpics" style={{position: 'relative'}}>

                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" alt="Lucifer" /> 
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//hQ8Hobo1RpYuZVQJQOCycNMHAG.jpg" alt="Love Alarm" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//e4aqizYQ8eeTGNZMq6WiFfqoZbz.jpg" alt="Ginny" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//obLBdhLxheKg8Li1qO11r2SwmYO.jpg" alt="Cobra Kai" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//yxMpoHO0CXP5o9gB7IfsciilQS4.jpg" alt="Chilling Adventures of Sabrina" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//wIKQRtc2kKiBmBnkOjjvMqIDfah.jpg" alt="Age of Samurai: Battle for Japan" />
                    
                </div>
            </div>
            <div className="row">
                <h2>Trending Now</h2>
                <div class="rowpics" style={{position: 'relative'}}>
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" alt="Lucifer" /> 
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//hQ8Hobo1RpYuZVQJQOCycNMHAG.jpg" alt="Love Alarm" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//e4aqizYQ8eeTGNZMq6WiFfqoZbz.jpg" alt="Ginny" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//obLBdhLxheKg8Li1qO11r2SwmYO.jpg" alt="Cobra Kai" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//yxMpoHO0CXP5o9gB7IfsciilQS4.jpg" alt="Chilling Adventures of Sabrina" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//wIKQRtc2kKiBmBnkOjjvMqIDfah.jpg" alt="Age of Samurai: Battle for Japan" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//3NTAbAiao4JLzFQw6YxP1YZppM8.jpg" alt="Elite" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//6chvnAakKI2cYW69ODBHZHm8clb.jpg" alt="Daughter From Another Mother" />
                    
                </div>
            </div>
            <div className="row">
                <h2>Because You Watched Money Heist</h2>
                <div class="rowpics" style={{position: 'relative'}}>
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" alt="Lucifer" /> 
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//hQ8Hobo1RpYuZVQJQOCycNMHAG.jpg" alt="Love Alarm" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//e4aqizYQ8eeTGNZMq6WiFfqoZbz.jpg" alt="Ginny" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//obLBdhLxheKg8Li1qO11r2SwmYO.jpg" alt="Cobra Kai" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg" alt="The Umbrella Academy" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//yxMpoHO0CXP5o9gB7IfsciilQS4.jpg" alt="Chilling Adventures of Sabrina" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//wIKQRtc2kKiBmBnkOjjvMqIDfah.jpg" alt="Age of Samurai: Battle for Japan" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//3NTAbAiao4JLzFQw6YxP1YZppM8.jpg" alt="Elite" />
                    <img className="rowpic zoom" src="https://image.tmdb.org/t/p/original//6chvnAakKI2cYW69ODBHZHm8clb.jpg" alt="Daughter From Another Mother" />
                    
                </div>
            </div>
        </div>
            )
    }
}
export default Netflix;
