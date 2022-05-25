import React from 'react';

export default function GlassesList(props) {
    const {glasses, onSelect} = props;

    const styleImage = {
      cursor: 'pointer',
    };

  return (
    <>
        {glasses.map((glass) => {
            return (
                <img 
                  style={styleImage} 
                  key={glass.id} 
                  className='p-2 ml-2 mt-2 border border-width-1' 
                  src={glass.url} 
                  alt={glass.name} width="100"
                  onClick={() => onSelect(glass)}
                />
            )
        })}
    </>
  )
}
