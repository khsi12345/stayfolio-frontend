import React, { memo, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../Style/custom.scss';

<<<<<<< HEAD
const SliderMain = () => (
  <Carousel autoPlay infiniteLoop interval={2500} transitionTime={550}>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
    <div>
      <img src={data.pick_info.pick_info_list[0].large_img} alt="pick" />
    </div>
  </Carousel>
);
=======
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
      return datas.datas.map((ele) => (
        <div>
          <img src={ele} />
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
>>>>>>> 5a3dc377bacaf37c9897ef028a53815cdf491169
export default SliderMain;
