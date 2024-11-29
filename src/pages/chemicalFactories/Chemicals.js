import React from 'react';
import './Chemicals.css'; // Import the CSS file for styling
import image9 from '../../assets/chemicals/9.jpeg'
import image10 from '../../assets/chemicals/10.jpeg'
import image11 from '../../assets/chemicals/11.jpeg'


const Chemicals = () => {
 

  return (
    <div className="tea-factories-container">
      <h2>Chemical Factories</h2>

      <div class="table-container">
        <table>
          <tr>
            <td>
              <img src={image9} alt=''/>
            </td>
            <td>
              <p>pon pure chemical factories</p>
              <button>Search Iteam</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image10} alt=''/>
              
            </td>
            <td>
              <p>harcors chemicals.</p>
              <button>Search Iteam</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image11} alt=''/>
            </td>
            <td>
              <p>new lanka chemical.</p>
              <button>Search Iteam</button>
            </td>
          
           
            
         
            
            
          </tr>
        </table>
      </div>

      

    </div>
  );
}

export default Chemicals;