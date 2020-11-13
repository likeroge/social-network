import React from "react";
import styled from 'styled-components'

const Styled = styled.div`
    .description-block{
        padding: 10px;
    }
`

export const ProfileInfo = () => {
  return (
    <Styled>
      <div>
        <img
          className="h-3 inline-block"
          src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
        />
      </div>
      <div className='description-block'>Ava + desc</div>
    </Styled>
  );
};
