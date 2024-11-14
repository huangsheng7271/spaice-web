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

interface MasonryItemProps {
  item: ItemOption;
  onlyImage?: boolean;
  noImage?: boolean;
  width?: string;
}

const MasonryItem: React.FC<MasonryItemProps> = ({ 
  item, 
  onlyImage = false, 
  noImage = false, 
  width = '100%' 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [height, setHeight] = useState('auto');
  const imageColor = "rgb(29, 33, 41)";

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
          </div>
        </div>
      )}
      <div className="cover">
        <img src={item.url} alt="图片" />
      </div>

      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column-reverse;
          width: ${width};
          height: ${height};
          background: var(--background-panel);
          border-radius: 8px;
          cursor: pointer;
          overflow: hidden;
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
          height: 84px;
          padding: 12px;
          background-color: ${imageColor};
        }
        .body h3 {
          margin: 0;
          padding: 0;
          font-weight: bolder;
          font-size: 14px;
          color: #fffefe;
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
          color: #fffefe;
          font-size: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      `}</style>
    </article>
  );
};

export default MasonryItem;