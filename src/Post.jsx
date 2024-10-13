// Post.jsx
import React from 'react';
import './Post.css'; // Import the CSS specific to this component

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <img 
          src="https://media.gettyimages.com/id/1288827929/photo/elon-musk-visits-germany.jpg?s=1024x1024&w=gi&k=20&c=8XDR4OBKPSLFU5uqC_h1vgCq7hra0njQotBY1PsIL10=" 
          alt="Profile" 
          className="profile-pic" 
        />
        <div className="post-info">
          <h4>SURAJ PATIL</h4>
          <p>Intern @Wolters Kluwer | AI & Data Science Enthusiast</p>
          <p>21h • 🌍</p>
        </div>
      </div>

      <div className="post-content">
        <p>Thrilled to announce the publication of our research paper in AIP (Scopus Indexed)! 🎉</p>
        <div className="post-link">
          <img 
            src="https://via.placeholder.com/150" 
            alt="AIP Publishing" 
            className="link-image" 
          />
          <div className="link-info">
            <h4>A novel study on explainable artificial intelligence powered churn prediction in businesses</h4>
            <p>pubs.aip.org</p>
          </div>
        </div>
      </div>

      <div className="post-actions">
        <p>❤️ 28 • 3 comments • 1 repost</p>
      </div>
    </div>
  );
}

export default Post;
