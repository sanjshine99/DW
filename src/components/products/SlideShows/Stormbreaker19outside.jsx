import React, { useEffect } from "react";
import "./Stormbreaker19outside.css";

function Strombreaker19outside() {
  useEffect(() => {
    var $cont = document.querySelector(".cont_19_o");
    var $elsArr = [].slice.call(document.querySelectorAll(".el_19_o"));
    var $closeBtnsArr = [].slice.call(
      document.querySelectorAll(".el__close-btn_19_o")
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
    <div className="cont_19_o s--inactive">
      <div className="cont__inner_19_o">
        <div className="el_19_o">
          <div className="el__overflow_19_o">
            <div className="el__inner_19_o">
              <div className="el__bg_19_o">
                <img
                  className="el__bg_19_o"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-3.jpg"
                  alt="1"
                />
              </div>
              <div className="el__preview-cont_19_o">
                <h2 className="el__heading_19_o">On</h2>
              </div>
              <div className="el__content_19_o">
                {/* <div className="el__text">Whatever</div> */}
                <div className="el__close-btn_19_o"></div>
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
        <div className="el_19_o">
          <div className="el__overflow_19_o">
            <div className="el__inner_19_o">
              <div className="el__bg_19_o">
                <img
                  className="el__bg_19_o"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-4.jpg"
                  alt="2"
                />
              </div>
              <div className="el__preview-cont_19_o">
                <h2 className="el__heading_19_o">the</h2>
              </div>
              <div className="el__content_19_o">
                {/* <div className="el__text">Whatever</div> */}
                <div className="el__close-btn_19_o"></div>
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
        <div className="el_19_o">
          <div className="el__overflow_19_o">
            <div className="el__inner_19_o">
              <div className="el__bg_19_o">
                <img
                  className="el__bg_19_o"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-5.jpg"
                  alt="3"
                />
              </div>
              <div className="el__preview-cont_19_o">
                <h2 className="el__heading_19_o">Outside</h2>
              </div>
              <div className="el__content_19_o">
                {/* <div className="el__text">Whatever</div> */}
                <div className="el__close-btn_19_o"></div>
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

        
      </div>
    </div>
  );
}

export default Strombreaker19outside;