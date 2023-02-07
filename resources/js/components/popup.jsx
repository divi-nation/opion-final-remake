import React from 'react';
import '../../css/components/popup.css';



const Popup = () => {
  return (
    <div className = 'popup'>
        <div className="p_tabs cen">
            <div className ="p_tab active" onclick="underline('a', 'b', 'c', 'd')">Hostel</div>
                    <div className ="p_tab" onclick="underline('b', 'a', 'c', 'd')">Homestel</div>
                    <div className ="p_tab" onclick="underline('c', 'b', 'a', 'd')">Hotel</div>
                    <div className ="p_tab" onclick="underline('d', 'b', 'c', 'a')">Guest House</div>
            </div>
            <div className ="u">
                <div className ="line"></div>
            </div>
            <div className ="content">
                <div className ="specs cen t1 bb">
                    <div className ="s_item cen serinity" onclick="select('serinity')">
                        <div className ="s_i cen"><i className ="bi bi-mortarboard"></i></div>
                        <div className ="s_t">SERINITY</div>
                        
                    </div>
                    <div className ="s_item cen elegance" onclick="select('elegance')">
                        <div className ="s_i cen"><i className ="bi bi-stars"></i></div>
                        <div className ="s_t">ELEGANCE</div>
                        
                    </div>
                    <div className ="s_item cen distance" onclick="select('distance')">
                        <div className ="s_i cen"><i className ="bi bi-clock-history"></i></div>
                        <div className ="s_t">DISTANCE</div>
                        
                    </div>
                    <div className ="s_item cen price" onclick="select('price')">
                        <div className ="s_i cen" ><i className ="bi bi-cash-coin"></i></div>
                        <div className ="s_t">AFFORDABILITY</div>
                        
                    </div>
                  
                        
                </div>
                <div className ="specs cen t2 bb">
                    <div className ="s_item cen">
                        <div className ="s_i cen"><i className ="bi bi-geo-fill"></i></div>
                        <div className ="s_t">AFFORDABILITY</div>
                        
                    </div>

                    <div className ="s_item cen">
                        <div className ="s_i cen"><i className ="bi bi-shield-lock-fill"></i></div>
                        <div className ="s_t">PRIVACY</div>
                        
                    </div>
                    
                   
                    <div className ="s_item cen">
                        <div className ="s_i cen"><i className ="bi bi-clock-history"></i></div>
                        <div className ="s_t">DISTANCE</div>
                        
                    </div>
                    <div className ="s_item cen">
                        <div className ="s_i cen"><i className ="bi bi-clock-history"></i></div>
                        <div className ="s_t">DISTANCE</div>
                        
                    </div>
                     <div className ="s_item cen" >
                        <div className ="s_i cen"><i className ="bi bi-stars"></i></div>
                        <div className ="s_t">ELEGANCE</div>
                        
                    </div>
                 
                  
                  
    
                </div>
                <div className ="specs cen t3 bb">
               
                    <div className ="s_item cen">
                        <div className ="s_i cen"><i className ="bi bi-hearts"></i></div>
                        <div className ="s_t">POPULARITY</div>
                        
                    </div>
                 

                    <div className ="s_item cen">
                        <div className ="s_i cen"><i className ="bi bi-clock-history"></i></div>
                        <div className ="s_t">ELEGANCE </div>
                        
                    </div>
                      <div className ="s_item cen">
                        <div className ="s_i cen"><i className ="bi bi-water"></i></div>
                        <div className ="s_t">POOL </div>
                        
                    </div>
                    <div className ="s_item cen">
                        <div className ="s_i cen">                    <i className ="bi bi-cup-straw"></i>
                        </div>
                        <div className ="s_t">BAR </div>
                        
                    </div>

                      <div className ="s_item cen">
                        <div className ="s_i cen"><i className ="bi bi-cash-coin"></i></div>
                        <div className ="s_t">AFFORDABILITY </div>
                        
                    </div>
                 
                  
                  
    
                </div>
                <div className ="specs cen t4 bb">
                    <div className ="s_item cen">
                        <div className ="s_i cen"><i className ="bi bi-geo-fill"></i></div>
                        <div className ="s_t">AFFORDABILITY</div>
                        
                    </div>
                    <div className ="s_item cen" >
                        <div className ="s_i cen"><i className ="bi bi-stars"></i></div>
                        <div className ="s_t">ELEGANCE</div>
                        
                    </div>
                     <div className ="s_item cen" >
                        <div className ="s_i cen"><i className ="bi bi-stars"></i></div>
                        <div className ="s_t">ELEGANCE</div>
                        
                    </div>
                 
                    
                 
                  
                  
    
                </div>




            </div>

            <div className ="btn cen">
                <button>Show Me                 
                    <i className ="bi bi-arrow-right"></i>
                </button>
            </div>

        
    </div>
  )
}

export default Popup