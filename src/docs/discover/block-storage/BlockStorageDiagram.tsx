import React from 'react';
import ThemedImage from '@site/src/components/ThemedImage';

export default function BlockStorageDiagram(): JSX.Element {
  return (
    <div className="p-6 my-6 block rounded-xl dark:bg-white/10 bg-pink-50 drop-shadow-xl">
      <ThemedImage 
        src="/img/docs/discover/block-storage/BlockStorage.png" 
        alt="A diagram depicting the block storage" 
      />
    </div>
  );
} 