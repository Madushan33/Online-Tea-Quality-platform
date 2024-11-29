import React from 'react';
import './TeaFactories.css'; // Import the CSS file for styling
import image1 from '../../assets/Tea factories/1.jpeg'
import image2 from '../../assets/Tea factories/2.jpeg'
import image3 from '../../assets/Tea factories/3.jpeg'
import image4 from '../../assets/Tea factories/4.jpeg'
import image5 from '../../assets/Tea factories/5.jpeg'
import { Link } from 'react-router-dom';

const TeaFactories = () => {
 

  return (
    <div className="tea-factories-container">
      <div className='fregister'>
        <h4>Factrory Registration</h4>
        <Link to='/Tregister' ><button>Register </button></Link>
      </div>
      <hr></hr>
      <h2>Tea Factories</h2>

      <div class="table-container">
        <table>
          <tr>
            <td>
              <img src={image1} alt=''/>
            </td>
            <td>
              <p>Green Valley Tea Factory</p>
              <button>Search Iteam</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image2} alt=''/>
            </td>
            <td>
              <p>Mountain Peak Tea Factory.</p>
              <button>Search Iteam</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={image3} alt=''/>
            </td>
            <td>
              <p>Eagle Eye Tea Factory.</p>
              <button>Search Iteam</button>
            </td>
          </tr><tr>
            <td>
              <img src={image4} alt=''/>
            </td>
            <td>
              <p>Heritage Tea Factory</p>
              <button>Search Iteam</button>
            </td>
          </tr><tr>
            <td>
              <img src={image5} alt=''/>
            </td>
            <td>
              <p>Sunny Hills Tea Factory.</p>
              <button>Search Iteam</button>
            </td>
          </tr>
        </table>
      </div>

      

    </div>
  );
}

export default TeaFactories;