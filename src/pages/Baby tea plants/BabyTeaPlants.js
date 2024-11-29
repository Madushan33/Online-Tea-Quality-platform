import React from 'react';
import './BabyTeaPlants.css'; // Import the CSS file for styling
import image15 from '../../assets/baby tea plants/15.jpeg'
import image13 from '../../assets/baby tea plants/13.jpeg'
import image14 from '../../assets/baby tea plants/14.jpeg'


const BabyTeaPlants = () => {
 

  return (
    <div className="tea-factories-container">
      <h2>Baby Tea Plants Suppliers</h2>

      <div class="table-container">
        <table>
          <tr>
            <td>
              <img src={image15} alt=''/>
            </td>
            <td>
              <p>kasun tea plant suppliers</p>
              <button>Search Iteam</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image13} alt=''/>
              
            </td>
            <td>
              <p>samarasekara tea plants suppliers.</p>
              <button>Search Iteam</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image14} alt=''/>
            </td>
            <td>
              <p>new lanka tea plants suppliers.</p>
              <button>Search Iteam</button>
            </td>
          
           
            
         
            
            
          </tr>
        </table>
      </div>

      

    </div>
  );
}

export default BabyTeaPlants;