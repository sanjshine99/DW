import React, { useEffect } from "react";
import "./Stormbreaker19inside.css";
import SB196Ext from '../../../assets/Product renders/SB196Exterior.png';
import SB196layout from '../../../assets/Product renders/SB196 layout.png';

function Strombreaker19inside() {
  useEffect(() => {
    var $cont = document.querySelector(".cont_19_i");
    var $elsArr = [].slice.call(document.querySelectorAll(".el_19_i"));
    var $closeBtnsArr = [].slice.call(
      document.querySelectorAll(".el__close-btn_19_i")
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
    <div className="cont_19_i s--inactive">
      <div className="cont__inner_19_i">
        <div className="el_19_i">
          <div className="el__overflow_19_i">
            <div className="el__inner_19_i">
              <div className="el__bg_19_i">
                <img
                  className="el__bg_19_i"
                  src={SB196Ext}
                  alt="1"
                />
              </div>
              <div className="el__preview-cont_19_i">
                <h2 className="el__heading_19_i">Exterior</h2>
              </div>
              <div className="el__content_19_i">
                 <div className="el__text_19_i">Identically designed to the Storm breaker 21’6 with its solid, matte finish, our family caravan isn’t just a treat on the inside but is extremely easy on the eyes too. Designed to take on the diversity of Australia’s landscape and terrain with a high checker plate, the Storm breaker possesses advanced mechanical systems including a powerful 6“chassis and OFF-ROAD suspension system.
                    Enjoy powerful features like our heavy-duty 16” wheels and family-friendly add-ons like a foldable picnic table, bike rack, large toolbox to enjoy a caravan experience you’ve only seen in movies.</div>
                <div className="el__close-btn_19_i"></div>
              </div>
            </div>
          </div>
          {/* <div className="el__index_19_i">
                <div className="el__index-back_19_i">1</div>
                <div className="el__index-front_19_i">
                  <div className="el__index-overlay_19_i" data-index="1">
                    1
                  </div>
                </div>
              </div> */}
        </div>
        <div className="el_19_i">
          <div className="el__overflow_19_i">
            <div className="el__inner_19_i">
              <div className="el__bg_19_i">
                <img
                  className="el__bg_19_i"
                  src={SB196layout}
                  alt="2"
                />
              </div>
              <div className="el__preview-cont_19_i">
                <h2 className="el__heading_19_i">Layout</h2>
              </div>
              <div className="el__content_19_i">
                <div className="el__text_19_i">The Storm breaker 19’6 provides you with all the worldly comforts you can expect when you’re on the road. With its plush and compact East-West sleeping arrangements for the main bed and spacious bunks for the kids, large living quarters, and fully equipped angled - kitchen. Rnjoy every moment of your adventures with our world-class features.
                We consider everything too; from your TV to air conditioning, water heating and angled kitchen bench, you have everything you need to take a piece of home with you on every trip.</div> 
                <div className="el__close-btn_19_i"></div>
              </div>
            </div>
          </div>
          {/* <div className="el__index_19_i">
                <div className="el__index-back_19_i">2</div>
                <div className="el__index-front_19_i">
                  <div className="el__index-overlay_19_i" data-index="2">
                    2
                  </div>
                </div>
              </div> */}
        </div>
        <div className="el_19_i">
          <div className="el__overflow_19_i">
            <div className="el__inner_19_i">
              <div className="el__bg_19_i">
                <img
                  className="el__bg_19_i"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/onepgscr-5.jpg"
                  alt="3"
                />
              </div>
              <div className="el__preview-cont_19_i">
                <h2 className="el__heading_19_i">Inside</h2>
              </div>
              <div className="el__content_19_i">
                {/* <div className="el__text_19_i">Whatever</div> */}
                <div className="el__close-btn_19_i"></div>
              </div>
            </div>
          </div>
          {/* <div className="el__index_19_i">
                <div className="el__index-back_19_i">3</div>
                <div className="el__index-front_19_i">
                  <div className="el__index-overlay_19_i" data-index="3">
                    3
                  </div>
                </div>
              </div> */}
        </div>
      </div>
    </div>
  );
}

export default Strombreaker19inside;
