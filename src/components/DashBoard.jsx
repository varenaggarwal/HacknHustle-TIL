import React from 'react';
import "./../css/dashboard.css";
import "./../css/modal.css";
import CMSEditor from "./CMSEditor.jsx";
import Header from "./Header.jsx";
import Modal from "./Modal.jsx";

const DashBoard = () => {
  const [show , setShow] = React.useState({ show: false });

  const showModal = () => {
    setShow({ show: true });
  };

  const hideModal = () => {
    setShow({ show: false });
  };

  return (
    <main>
      <Header />
      <div class="content-wrapper-before purple45"></div>
      <div className="open_btn">
        {/* <button className="button-3d " type="button" onClick={showModal}>
      Open<img src="open-icon.png" ></img>
    </button> */}

        <div onClick={showModal}>
          <img src="twitericon.png" className=""></img>
          <span className="blink"></span>
        </div>
      </div>
      <div className="cms-editior">
        <CMSEditor />
      </div>
      <Modal show={show.show} handleClose={hideModal}>
        <div className="modal-header">Whats Trending Twitter</div>
        <div className="trending-info-sec">
          <div className="trending-twitter-list">
            <ul>
              <li className="active">
                <a href="#">
                  <span>7</span>#YogiWillBeBack
                </a>
              </li>
              <li>
                <a href="#">
                  <span>5</span>#OnePlus9RT5G
                </a>
              </li>
              <li>
                <a href="#">
                  <span>5</span>#INDvSA
                </a>
              </li>
              <li>
                <a href="#">
                  <span>25</span>#HumanOnHotstar
                </a>
              </li>
              <li>
                <a href="#">
                  <span>5</span>#Modi4Sikhi
                </a>
              </li>
              <li>
                <a href="#">
                  <span>5</span>#OnePlus9RT5G
                </a>
              </li>
              <li>
                <a href="#">
                  <span>5</span>#INDvSA
                </a>
              </li>
              <li>
                <a href="#">
                  <span>25</span>#HumanOnHotstar
                </a>
              </li>
              <li>
                <a href="#">
                  <span>5</span>#Modi4Sikhi
                </a>
              </li>
              <li>
                <a href="#">
                  <span>5</span>#INDvSA
                </a>
              </li>
              <li>
                <a href="#">
                  <span>25</span>#HumanOnHotstar
                </a>
              </li>
            </ul>
          </div>
          <div className="trending-twitter-right-area ">
            <div className="trending-twitter-info">
              <div className="trending-twitter-graph">
                <canvas id="myChart"></canvas>
              </div>
              <div className="trending-twitter-infobox">
                <div className="trending-infobox-title">#YogiWillBeBack</div>
                <div className="trending-infobox-tweet">
                  <span>Retweets</span>
                  1.6K
                </div>
                <div className="trending-infobox-tweet">
                  <span>Growth</span>
                  65%
                </div>
              </div>
            </div>
            <div className="top-embed-sec">
              <div className="top-embed-heading">Top Embeds</div>
              <div className="top-embed-box-area">
                <div className="top-embed-box"></div>
                <div className="top-embed-box"></div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default DashBoard;
// class Dashboard extends Component {
//     constructor() {
//         super();
//         this.state = {
//           show: false
//         };
//         this.showModal = this.showModal.bind(this);
//         this.hideModal = this.hideModal.bind(this);
//     }

//     showModal = () => {
//       this.setState({ show: true });
//     };

//     hideModal = () => {
//       this.setState({ show: false });
//     };

//     render() {
//         return (
//             <main>
//                 <Header/>
//                 <div class="content-wrapper-before purple45"></div>
//                 <div className="open_btn">
//                 {/* <button className="button-3d " type="button" onClick={this.showModal}>
//                   Open<img src="open-icon.png" ></img>
//                 </button> */}

//                  <div  onClick={this.showModal}>
//                    <img src="twitericon.png" className=""></img>
//                    <span className="blink"></span>
//                    </div>

//                 </div>
//               <div className="cms-editior">
//                 <CMSEditor/>
//                 </div>
//                 <Modal show={this.state.show} handleClose={this.hideModal}>
//                       <div className="modal-header">Whats Trending Twitter</div>
//                         <div className="trending-info-sec">
//                           <div className="trending-twitter-list">
//                             <ul>
//                               <li className="active"><a href="#"><span>7</span>#YogiWillBeBack</a></li>
//                               <li ><a href="#"><span>5</span>#OnePlus9RT5G</a></li>
//                               <li><a href="#"><span>5</span>#INDvSA</a></li>
//                               <li><a href="#"><span>25</span>#HumanOnHotstar</a></li>
//                               <li><a href="#"><span>5</span>#Modi4Sikhi</a></li>
//                               <li ><a href="#"><span>5</span>#OnePlus9RT5G</a></li>
//                               <li><a href="#"><span>5</span>#INDvSA</a></li>
//                               <li><a href="#"><span>25</span>#HumanOnHotstar</a></li>
//                               <li><a href="#"><span>5</span>#Modi4Sikhi</a></li>
//                               <li><a href="#"><span>5</span>#INDvSA</a></li>
//                               <li><a href="#"><span>25</span>#HumanOnHotstar</a></li>
//                             </ul>
//                           </div>
//                           <div className="trending-twitter-right-area ">
//                             <div className="trending-twitter-info">
//                                 <div className="trending-twitter-graph" >
//                                   <canvas id="myChart"></canvas>
//                                 </div>
//                                 <div className="trending-twitter-infobox">
//                                     <div className="trending-infobox-title">#YogiWillBeBack</div>
//                                     <div className="trending-infobox-tweet">
//                                         <span>Retweets</span>
//                                         1.6K
//                                     </div>
//                                     <div className="trending-infobox-tweet">
//                                         <span>Growth</span>
//                                         65%
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="top-embed-sec">
//                               <div className="top-embed-heading">Top Embeds</div>
//                               <div className="top-embed-box-area">
//                                 <div className="top-embed-box"></div>
//                                 <div className="top-embed-box"></div>
//                               </div>
//                             </div>
//                            </div>
//                       </div>
//                 </Modal>
//             </main>
//         );
//     }
// }
