// import React, { Component } from 'react';
// import Pertes from './pertes';
// import Protes from './protes';
// import TesForm from './tesform';


// class TesBoard extends Component{
//     state = {
        
//     }

//     handleSubmit = event => {
//         console.log('The testimonial has stuck the landing')
//         event.preventDefault()
// 		this.props.handleAddTes(this.state)
// 		this.setState({
// 			name: "",
//             locAcq: "",
//             yearsAcq: "",
//             tesType: "",
//             testimonial: "",
//             user: this.props.user
// 		});
//     }

//     render(){
//         return(
//             <div><h1 className="tesTitle">Testimonials</h1>
//             <section className="testimonials">
//                 <div className="pertes-col">

//                     <Pertes
//                     />
//                 </div>
//                 <div className="protes-col">
//                     <Protes 
//                     />
//                 </div>
//             </section>
//             <TesForm
//                 // here you are passing in a function that will update parent state
//                 state={this.props.TesBoard}
//                 user={this.props.user}

//             />
//             </div>
//         )
//     }
// }

// export default TesBoard;