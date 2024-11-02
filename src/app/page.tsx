"use client"

// import React from 'react';
// import VirtualWaterfall from '@/components/ui/VirtualWaterfall';
// export default function Home() {
//   return(
//     <div className='container'>
//       <VirtualWaterfall/>

//       <style jsx>{`
//         .container{
//           height: 100vh;
//           background-color: white;
//         }
//       `}
//       </style>
//     </div>
//   );
// }

import React, { useState } from 'react';
import VirtualWaterfall from '@/components/ui/VirtualWaterfall';
import Card from '@/components/ui/Card';
// 模拟数据
// const items = new Array(20).fill(0).map((_, i) => ({ id: i, content: `Item ${i + 1}` }));


export default function Home() {
  const [loading,setLoading] = useState(true);

  const item = {
    url: "https://i.pixiv.re/c/540x540_70/img-master/img/2023/10/19/15/00/01/112673322_p0_master1200.jpg",
    avatar: "https://i.pixiv.re/user-profile/img/2023/05/06/10/25/24/24384457_ea7bab0639d071eb25bb7a216d1be04c_50.png",
    title: "Beautiful Landscape",
    user: "huangsheng",
    views: 534,
  };
  
  // Repeat the item 15 times
  const items = Array.from({ length: 15 }, () => item);
  
  return (
    <VirtualWaterfall
      items={items}
    >
      {(item,index)=>(
        <Card
          item={item}
          onlyImage={false}
        />
      )}
    </VirtualWaterfall>
    // <div className='container'>
          
    //     <Card
    //       imageUrl="https://images.unsplash.com/photo-1682687220566-5599dbbebf11?q=80&w=3270&auto=format&fit=crop"
    //       title="Beautiful Landscape"
    //       description="A serene mountain landscape with a calm lake reflecting the sky."
    //       imageOnly={false}
    //     />

    //   <style jsx>{`
    //     .container{
    //       height: 100vh;
    //       background-color: white;
    //       display: flex;
    //       flex-wrap: wrap;
    //       justify-content: center;
    //       align-items: center;
    //       gap: 16px;
    //     }
    //   `}</style>
    // </div>

  );
};


