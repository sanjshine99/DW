import React, { useEffect } from 'react';
import '../home/Home.css';
import './Blog.css';
import { Helmet } from 'react-helmet';

function Blog() {
  useEffect(() => {
    // Load the ElfSight script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.async = true;

    // Append the script to the body of the document
    document.body.appendChild(script);

    return () => {
      // Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div className="blog_component">
        <div>
          <h1 className='blog_title'>Our Stories..</h1>
        </div>
        {/* Embed ElfSight widget */}
        <div className="elfsight-app-7d26f6be-2b62-44e3-a913-7a9421fc54e5"></div>
      </div>
      {/* Add the ElfSight script to the head using Helmet */}
      <Helmet>
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
      </Helmet>
    </div>
  );
}

export default Blog;
