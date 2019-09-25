import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import data from 'Data/pick';
import '../Style/custom.scss';

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
export default SliderMain;
