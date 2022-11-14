import React from "react";
import './style.css';
import items from '../data'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: "",
        }
    }
    handleClick = (cat) => this.setState({ active: cat })

    render() {
        console.log(items)
        let categories = ["All", "Breakfast", "Lunch", "Snacks"]
        return (
            <>
                <center><h1>Our Menu</h1></center>
                <center>
                    {categories.map(cat =>
                        <button key={cat} onClick={() => this.handleClick(cat)} className={this.state.active === cat ? 'active' : ""}>{cat}</button>)}
                </center>
                <center>
                    {
                    !this.state.active ?  items.map((item, i) =>
                        <div key={i} className="cont flex justify-start align-start align-c-start flex-wrap">

                            <div className="img-container" > <img src={item.img} alt={item.title} /></div>

                            <h1>{(item.title.charAt(0).toUpperCase() + item.title.slice(1))}</h1>

                            <h1>{item.price}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ): <h1>Work in progress</h1>  
                     }
                
                
                    
                </center>
            </>
        )
    }
}
export default App;