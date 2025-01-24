import React from "react";
import "./blog.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={'container'}>
     
      <div className={'blogPosts'}>
        {[1, 2, 3].map((post, index) => (
          <div key={index} className={'post'}>
            <Image
              src={`/blog${index + 1}.png`}
              alt="Blog Post"
              width={500}
              height={500}
              className={'postImage'}
            />
            <div className={'postContent'}>
              <p className={'meta'}>
                <span className={'category'}>Surf Aviation</span>
                <span className={'date'}>Aug 07 2020</span>
              </p>
              <h2 className={'title'}>
                Blog Post Title {index + 1}
              </h2>
              <p className={'description'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </p>
              <a href="#" className={'readMore'}>
                Read More »
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className={'sidebar'}>
        {/* Search */}
        <div className={'widget'}>
          <h3>Search</h3>
          <input type="text" placeholder="Search for posts..." />
        </div>

        {/* Categories */}
        <div className={'styles.widget'}>
          <h3>Categories</h3>
          <ul>
            <li>Fashion (10)</li>
            <li>Technology (5)</li>
            <li>Travel (8)</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className={'widget'}>
          <h3>Recent Posts</h3>
          <ul>
            <li>A new way to travel</li>
            <li>Top 10 gadgets of 2023</li>
            <li>How to style your winter wardrobe</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className={'widget'}>
          <h3>Follow Us</h3>
          <div className={'socialIcons'}>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
