import React, { useEffect } from "react";
import "./Strombreaker21outside.css";

function Strombreaker21outside() {
  useEffect(() => {
    var $cont = document.querySelector(".cont");
    var $elsArr = [].slice.call(document.querySelectorAll(".el"));
    var $closeBtnsArr = [].slice.call(
      document.querySelectorAll(".el__close-btn")
    );

    setTimeout(function () {
      $cont.classList.remove("s--inactive");
    }, 200);

    let activeElement = null;

    $elsArr.forEach(function ($el) {
      $el.addEventListener("click", function () {
        if (this.classList.contains("s--active")) return;
        $cont.classList.add("s--el-active");
        this.classList.add("s--active");
        activeElement = this;
      });
    });

    $closeBtnsArr.forEach(function ($btn) {
      $btn.addEventListener("click", function (e) {
        e.stopPropagation();
        $cont.classList.remove("s--el-active");
        if (activeElement) {
          activeElement.classList.remove("s--active");
          activeElement = null;
        }
      });
    });
  }, []);

  return (
    <div className="cont s--inactive">
      <div className="cont__inner">
        <div className="el">
          <div className="el__overflow">
            <div className="el__inner">
              <div className="el__bg">
                <img
                  className="el__bg"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-3.jpg"
                  alt="1"
                />
              </div>
              <div className="el__preview-cont">
                <h2 className="el__heading">Section 1</h2>
              </div>
              <div className="el__content">
                {/* <div className="el__text">Whatever</div> */}
                <div className="el__close-btn"></div>
              </div>
            </div>
          </div>
          {/* <div className="el__index">
                <div className="el__index-back">1</div>
                <div className="el__index-front">
                  <div className="el__index-overlay" data-index="1">
                    1
                  </div>
                </div>
              </div> */}
        </div>
        <div className="el">
          <div className="el__overflow">
            <div className="el__inner">
              <div className="el__bg">
                <img
                  className="el__bg"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-4.jpg"
                  alt="2"
                />
              </div>
              <div className="el__preview-cont">
                <h2 className="el__heading">Section 2</h2>
              </div>
              <div className="el__content">
                {/* <div className="el__text">Whatever</div> */}
                <div className="el__close-btn"></div>
              </div>
            </div>
          </div>
          {/* <div className="el__index">
                <div className="el__index-back">2</div>
                <div className="el__index-front">
                  <div className="el__index-overlay" data-index="2">
                    2
                  </div>
                </div>
              </div> */}
        </div>
        <div className="el">
          <div className="el__overflow">
            <div className="el__inner">
              <div className="el__bg">
                <img
                  className="el__bg"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-5.jpg"
                  alt="3"
                />
              </div>
              <div className="el__preview-cont">
                <h2 className="el__heading">Section 3</h2>
              </div>
              <div className="el__content">
                {/* <div className="el__text">Whatever</div> */}
                <div className="el__close-btn"></div>
              </div>
            </div>
          </div>
          {/* <div className="el__index">
                <div className="el__index-back">3</div>
                <div className="el__index-front">
                  <div className="el__index-overlay" data-index="3">
                    3
                  </div>
                </div>
              </div> */}
        </div>

        <div className="el">
          <div className="el__overflow">
            <div className="el__inner">
              <div className="el__bg">
                <img
                  className="el__bg"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-6.jpg"
                  alt="4"
                />
              </div>
              <div className="el__preview-cont">
                <h2 className="el__heading">Section 4</h2>
              </div>
              <div className="el__content">
                {/* <div className="el__text">Whatever</div> */}
                <div className="el__close-btn"></div>
              </div>
            </div>
          </div>
          {/* <div className="el__index">
                <div className="el__index-back">4</div>
                <div className="el__index-front">
                  <div className="el__index-overlay" data-index="4">
                    4
                  </div>
                </div>
              </div> */}
        </div>
      </div>
    </div>
  );
}

export default Strombreaker21outside;