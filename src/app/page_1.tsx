"use client"

import React from 'react';
import Masonry from '@/components/ui/Masonry';
import MasonryItem from '@/components/ui/MasonryItem';
import useMasonry from '@/hooks/useMasonry';

export default function Home() {
  const {data,calcItemHeight,backTop} = useMasonry();
  

  return (
    <> 
      <Masonry
        items={data.list}
        calcItemHeight={calcItemHeight}
      >
      {(item)=>(
        <MasonryItem
          item={item}
          onlyImage={false}
        />
      )}
      </Masonry>
      <button style={{"position":"fixed","right":"20px","bottom":"20px"}} onClick={backTop}>回到顶部</button>
    </> 
  );
};
