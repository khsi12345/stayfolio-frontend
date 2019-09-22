import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import data from 'Data/pick';
import '../Style/custom.scss';

const SliderMain = () => {
  // console.log(Imges);
  return (
    <>
      <Carousel atoPlay infiniteLoop>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
        <div>
          <img src={data.pick_info.pick_info_list[0].large_img} />
        </div>
      </Carousel>
    </>
  );
};


export default SliderMain;