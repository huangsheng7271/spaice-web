import React, { useState, useEffect } from 'react';

interface ItemOption {
  id: number
  title: string
  url: string
  width: number
  height: number
  avatar: string
  user: string
  views: number
}

interface CardProps {
  item: ItemOption;
  onlyImage?: boolean;
  noImage?: boolean;
  width?: string;
}

const Card: React.FC<CardProps> = ({ 
  item, 
  onlyImage = false, 
  noImage = false, 
  width = '100%' 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    if (!noImage) {
      setHeight('100%');
      const image = new Image();
      image.src = item.url;
      if (image.complete) {
        setLoaded(true);
      } else {
        image.onload = () => setLoaded(true);
        image.onerror = (error) => {
          console.error(item.url, error);
          setLoaded(true);
        };
      }
    }
  }, [item.url, noImage]);

  return (
    <article className="card" data-id={item.id}>
      {!onlyImage && (
        <div className="body">
          <h3>{item.title}</h3>
          <div className="author">
            <div className="avatar">
              <img src={item.avatar} alt={item.user} />
              <span>{item.user}</span>
            </div>
            <div className="views">❤️ {item.views > 999 ? '999+' : item.views}</div>
          </div>
        </div>
      )}
      {!noImage && (
        <div className="cover">
          {loaded ? (
            <img src={item.url} alt="图片" />
          ) : (
            <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <g fill="none" fillRule="evenodd" strokeWidth="2">
                <circle cx="22" cy="22" r="1">
                  <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
                  <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
                </circle>
                <circle cx="22" cy="22" r="1">
                  <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
                  <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
                </circle>
              </g>
            </svg>
          )}
        </div>
      )}
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column-reverse;
          width: ${width};
          height: ${height};
          overflow: hidden;
          background: white;
          border: 1px solid #e3e8f7;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
        }
        .cover {
          display: flex;
          flex: 1;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: #e3e8f7;
        }
        .cover img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .body {
          flex-shrink: 0;
          box-sizing: border-box;
          height: fit-content;
          padding: 12px;
        }
        .body h3 {
          margin: 0;
          padding: 0;
          font-weight: bolder;
          font-size: 14px;
        }
        .author {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
        }
        .avatar {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .avatar img {
          width: 20px;
          height: 20px;
          object-fit: cover;
          border-radius: 50%;
        }
        .avatar span {
          margin-left: 4px;
          overflow: hidden;
          color: #333333;
          font-size: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .views {
          color: #333333;
          font-size: 12px;
        }
      `}</style>
    </article>
  );
};

export default Card;