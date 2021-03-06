import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vidList: exampleVideoData,
      currVid: exampleVideoData[0]
    };

    this.handleClick = this.handleClick.bind(this);

  }


  handleClick(video) {
    // var index = exampleVideoData.indexOf(clicked item);
    // console.log(e);
    this.setState({
      currVid: video
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">

            <VideoPlayer video={this.state.currVid} />
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} handleClick={this.handleClick} />

          </div>
        </div>
      </div>);
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">

//         <VideoPlayer video = {exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">

//         <VideoList videos={exampleVideoData} />
//       </div>
//     </div>
//   </div>


// getElementsByClassName("video-list-entry-title").on('click', function() {
//  this.setState({

//  })
// })

// handleClick(e) {
//   console.log(e.target.getAttribute('data-index'));
//   // var index = exampleVideoData.indexOf(item);
//   this.setState({
//     // currVid: exampleVideoData[1]
//   });
// }

// render() {
// var style = {
//   textDecoration: this.state.done ? 'line-through' : 'none'
// };