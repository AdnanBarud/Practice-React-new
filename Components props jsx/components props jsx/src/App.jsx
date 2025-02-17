import Card from "./components/Card"
import rahulImage from "./assets/rahul.jpg";
import karanImage from "./assets/karan.avif";
import tanveerImage from "./assets/tanveer.avif";

function App() {
 

  return (
   <div className="container">
   <Card discription='Rahul discription' Name='Rahul' image={rahulImage}/>
   <Card discription='Kiran discription' Name='Karan' image={karanImage}/>
   <Card discription='Tamveer discription' Name='Tanveer' image={tanveerImage}/>
   
   </div>
  )
}

export default App
