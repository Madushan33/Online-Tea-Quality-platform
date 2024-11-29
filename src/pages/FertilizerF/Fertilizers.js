import React from 'react';
import './Fertilizers.css'; // Import the CSS file for styling
import image6 from '../../assets/Fertilizer/6.png'
import image7 from '../../assets/Fertilizer/7.png'
import image8 from '../../assets/Fertilizer/8.jpeg'


const Fertilizers = () => {
 

  return (
    <div className="tea-factories-container">
      <h2>Fertilizer factories</h2>

      <div class="table-container">
        <table>
          <tr>
            <td>
              <img src={image6} alt=''/>
            </td>
            <td>
              <p>Hayleys fertilizer</p>
              <button>Search Iteam</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image7} alt=''/>
            </td>
            <td>
              <p>Getwin fertilizer.</p>
              <button>Search Iteam</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image8} alt=''/>
            </td>
            <td>
              <p>lakpohora fertilixer.</p>
              <button>Search Iteam</button>
            </td>
          
           
            
         
            
            
          </tr>
        </table>
      </div>

      

    </div>
  );
}

export default Fertilizers;