import React, { Component } from 'react';
import './style/Home.css';

 
// const home = () => {
//     return (
//        <div>
//           <h1>Home</h1>
//            <p>Home page body content</p>
//        </div>
//     );
// }


class Home extends Component {
    render() {
        const mainHeader = "Monica Valencia Ocampo"; //This variable is used below
        const subHeader = "Junior Software Developer"; //This variable is used below
        return (
            <header> 
                <h1>{mainHeader}</h1> 
                <h3>{subHeader}</h3>
            </header>
        );
    }
};
 
export default Home;