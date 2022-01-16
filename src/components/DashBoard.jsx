import React, { useEffect, useState } from "react";
import { getDatafromServer } from "../serverRequest";
import "./../css/dashboard.css";
import "./../css/modal.css";
import CMSEditor from "./CMSEditor.jsx";
import Header from "./Header.jsx";
import Modal from "./Modal.jsx";
import TweetContainer from "./TweetContainer";

const DashBoard = () => {
  const [show, setShow] = useState({ show: false });
  const [activeHashtag, setActiveHashtag] = useState({ active: null });
  const [state, setState] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getDatafromServer();
      setState(data.data[0]);
      setActiveHashtag({ active: data.data[0].trends[0] });
    }
    fetchData();
  }, []);

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
              {state.hasOwnProperty("trends") &&
                state?.trends?.map((item, index) => {
                  return (
                    <li
                      onClick={() => {
                        setActiveHashtag({ active: item });
                      }}
                      className={
                        activeHashtag.active?.name === item.name
                          ? "active"
                          : null
                      }
                    >
                        <span className="circle-icon">{Math.ceil(item.tweet_volume / 1000)}K</span>
                          {item.name}
                        <span className="category">{item.category}</span>
                    </li>
                  );
                })}
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
                <div className="top-embed-box">
                  {console.log(activeHashtag)}
                  {activeHashtag.active?.ids?.map((item, index) => {
                    return (
                      <>
                        {console.log(item)}
                        {index < 4 ? (
                          <TweetContainer id={item} />
                        ) : null}
                      </>
                    );
                  })}
                </div>
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
