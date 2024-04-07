import React from 'react';
import '../home/Home.css';
import './Tour.css';
import GoToTop from '../functions/GoToTop';

const Tour = React.memo(() => {
  return (
    <div className="virtualcontainer">
      <h1>Virtual tours</h1>
      <div className="virtualcomponent">
        <iframe
          frameBorder="0"
          allow="vr;fullscreen"
          mozAllowFullScreen
          webkitAllowFullScreen
          src="https://sh.smartviewmedia.com.au/m/kyd7182/?v=kyd7182"
          title="Virtual Tour 1"
        ></iframe>
      </div>
      <div className="virtualcomponent">
        <iframe
          frameBorder="0"
          allow="vr;fullscreen"
          mozAllowFullScreen
          webkitAllowFullScreen
          src="https://sh.smartviewmedia.com.au/m/ghk6493/?v=ghk6493"
          title="Virtual Tour 1"
        ></iframe>
      </div>
      <div className="virtualcomponent">
        <iframe
          frameBorder="0"
          allow="vr;fullscreen"
          mozAllowFullScreen
          webkitAllowFullScreen
          src="https://sh.smartviewmedia.com.au/m/xre6796/?v=xre6796"
          title="Virtual Tour 2"
        ></iframe>
      </div>
      <div className="virtualcomponent">
        <iframe
          frameBorder="0"
          allow="vr;fullscreen"
          mozAllowFullScreen
          webkitAllowFullScreen
          src="https://sh.smartviewmedia.com.au/m/yni6491/?v=yni6491"
          title="Virtual Tour 3"
        ></iframe>
      </div>
      <GoToTop />
    </div>
  );
});

export default Tour;
