import React from 'react';
import Navbar from "./components/navbar";
import Image from "./Image/wallpaper.webp";
import "./App.css"

function App() {
	return (
		<React.Fragment>
			<Navbar/>
      <div class="background-image">
        <div class="text-overlay">
            <h1>Journey With Confidence migrate with us</h1>
            <p>This is a description text over the background image.</p>
        </div>
    </div>
      
		</React.Fragment>
	);
}

export default App;