import React, { memo, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../Style/custom.scss';

const SliderMain = memo((datas) => {
  // console.log(datas.datas);
  // const [images, setImages] = useState();
  // useEffect(() => {
  //   if (datas.datas && datas.datas !== undefined) {
  //     setImages(datas.datas);
  //   }
  // }, [datas.datas]);
  const Slider = () => {
    if (datas.datas && datas.datas !== undefined) {
      return datas.datas.map((ele, index) => (
        <div>
          <img key={index + 1} src={ele} />
        </div>
      ));
    }
  }
  ;
  // console.log(images);
  return (
    <Carousel autoPlay infiniteLoop interval={2500} transitionTime={550}>
      {Slider()}
    </Carousel>
  );
});

export default SliderMain;
