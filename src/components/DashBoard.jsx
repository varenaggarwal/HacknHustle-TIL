import React, { useEffect, useState } from "react";
import Carousel from 'react-material-ui-carousel';
import { getDatafromServer } from "../requests/serverRequest";
import "./../css/dashboard.css";
import "./../css/modal.css";
import CMSEditor from "./CMSEditor.jsx";
import Header from "./Header.jsx";
import Modal from "./Modal.jsx";
import TweetContainer from "./TweetContainer";
import TweetCountChart from "./TweetCountChart";

const DashBoard = () => {
  const [show, setShow] = useState({ show: false });
  const [activeHashtag, setActiveHashtag] = useState({ active: null });
  const [state, setState] = useState({});
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getDatafromServer();
      setState(data?.data[0]);
      setActiveHashtag({ active: data?.data[0].trends[0] });
    }
    fetchData();
  }, []);

  useEffect(()=> {
    if(!flag){
      setFlag(true);
    }
  }, [flag]);

  const showModal = () => {
    setShow({ show: true });
  };

  const hideModal = () => {
    setShow({ show: false });
  };

  const Slider = (slides) => {
    const dataArr = slides.slides;
    console.log(dataArr.length);
    const sliderItems = dataArr.length > 2 ? 2 : dataArr.length;
    console.log(sliderItems);
    const items = [];
    for (let i = 0; i < dataArr.length; i += sliderItems) {
      if (i % sliderItems === 0) {
        items.push(
          <div className="twitslide">
            {dataArr.slice(i, i + sliderItems).map((da, index) => {
              return <TweetContainer id={da} />;
            })}
          </div>
        );
      }
    }
    return (
      <Carousel animation="slide" indicators={false}  navButtonsAlwaysVisible={true} autoPlay={false} cycleNavigation timeout={300}>
        {items}
      </Carousel>
    );
  }

  return (
    <main>
      <Header />
      <div className="content-wrapper-before purple45"></div>
      <div className="open_btn">
        {/* <button className="button-3d " type="button" onClick={showModal}>
      Open<img src="open-icon.png" ></img>
    </button> */}

        <div onClick={showModal}>
          <img src="twitericon.png" alt=""></img>
          <span className="blink"></span>
        </div>
      </div>
      <div className="cms-editior">
        <CMSEditor />
      </div>
      <Modal show={show.show} handleClose={hideModal}>
        <div className="modal-header">Whats Trending in Twitter</div>
        <div className="trending-info-sec">
          <div className="trending-twitter-list">
            <ul>
              {state?.trends?.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      setActiveHashtag({ active: item });
                      setFlag(false);
                    }}
                    className={
                      activeHashtag.active?.name === item.name ? "active" : null
                    }
                  >
                    <span className="circle-icon">
                      {Math.ceil(item.tweet_volume / 1000)}K
                    </span>
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
                { activeHashtag.active ? <TweetCountChart tag = {activeHashtag.active} query={activeHashtag.active.query}/> : ""}
                {/* <canvas id="myChart"></canvas> */}
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
              {/* <div className="top-embed-heading">Top Embeds</div> */}
              <div className="top-embed-box-area">
                <div className="top-embed-box">
                  {console.log(activeHashtag)}
                  {flag && activeHashtag.active && activeHashtag.active.ids && <Slider slides={activeHashtag.active.ids} />}
                </div>
              <div className="loader"><img src="http://www.encephalopathy.or.kr/common/images/loader/ajax-loader/ajax_loader_blue_128.gif"></img></div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default DashBoard;
