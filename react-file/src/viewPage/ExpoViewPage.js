import React from 'react';

const Expo = () => {
    return (
        <div className="App_body">
          <div className="title_section">
            <h2>지수함수 랜덤 추출기</h2>
            <p className='subtitleMessage'>랜덤 지수함수 추출을 통한 그래프 시각화</p>
            <p>(Python with sympy)</p>
            <button className='btnStart'>랜덤 추출</button>
          </div>
          <div className="img_section">
            {/* <img src={logo} alt={`logo`} /> */}
          </div>
        </div>
    );
}

export default Expo;