import React, { Component } from 'react';

import imgBootstrap from '../assets/img/bootstrap.svg';
import imgReact from '../assets/img/React Logo.svg';
import imgNetcore from '../assets/img/netcore.svg';

export class Home extends Component {

  static displayName = Home.name;

  render() {
    return (
      <div class='container'>
        <div class='homepage'>
          <section class='home-section col-md-auto col-lg-auto'>
          </section>
        </div>

        <div class='container-md bg-white'>
          <section>
            <div class='card-group'>           
              <div class='card'>
                <img class='card-img-top rounded mx-auto col-4' src={imgNetcore} alt='Card image0 cap' ></img>                              
                <div class='card-body'>                  
                  <h5 class='card-title'>ASP.NET Core</h5>
                  <p class='card-text'><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</p>
                  <div class='card-footer text-center'>
                    <a class="btn btn-primary btn-sm col" href='https://dotnet.microsoft.com/' target='_blank'>.Net Core</a>
                  </div>
                </div>
              </div>    
              <div class='card'>
                <img class='card-img-top rounded mx-auto col-4' src={imgReact} alt='Card image2 cap' ></img>
                <div class='card-body'>                 
                  <h5 class='card-title'>React</h5>
                  <p class='card-text'>A JavaScript library for building user interfaces.<a href='https://facebook.github.io/react/'>React</a> for client-side code.</p>
                  <div class='card-footer text-center'>
                    <a  class="btn btn-primary btn-sm col" href='https://reactjs.org/' target='_blank'>React</a>                  
                  </div>                                    
                </div>
              </div>
              <div class='card'>
                <img class='card-img-top rounded mx-auto col-4' src={imgBootstrap} alt='Card bootstrap' ></img>
                <div class='card-body'>                  
                  <h5 class='card-title'>Bootstrap 4</h5>                 
                  <p class='card-text'>Build fast, responsive sites with Bootstrap.<a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling.</p>
                  <div class='card-footer text-center'>                                                                        
                    <a class='btn btn-primary btn-sm col' href='https://getbootstrap.com/' target='_blank'>Bootstrap</a>                  
                  </div>                                    
                </div>
              </div>               
             </div> 
          </section>
        </div>
        <div class='container'>
          <section>
           
          </section>
        </div>         
      </div>
    );
  }
}