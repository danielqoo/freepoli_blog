import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/performing-arts_hires.png",
    userName: "모두가 맹신하는 약 ‘시간’",
    subtitle: "1",
    review:
      ["2022년을 지나오며 우리는 참 많은 일을 겪었습니다. 코로나부터 시작해서 전쟁, 태풍, 대형 참사에 이르기까지. 하지만 공동체 사회가 무너지고, 개인주의와 피상적인 관계가 보편적인 흐름이 된 가운데, 비대면과 디지털화가 가속되면서 애도와 슬픔은 오롯이 개인의 영역으로 남았습니다.",
      ]
  },
  {
    id: 2,
    avatar: "images/dove-emoji_hires.png",
    userName: "그 많던 죽음은 어디로 갔을까?",
    subtitle: "2",
    review:
      ["2019년 29만 5110명, 2020년 30만 4900명, 2021년 31만 7680명. 통계청의 발표에 따르면 한국에서는 매년 30만 명이 죽음을 맞이합니다. 최근 코로나로 인한 누적 사망자 수는 3만 명에 이릅니다. (2022년 11월 기준) 더욱이 코로나 사망자의 경우 장례를 치르지 못한 경우가 대다수였습니다. 뉴스로 접한 누군가의 삶과 죽음은 숫자에 가려진 채 손쉽게 처리되었고, 서로 만날 수 없는 가운데, 죽음은 더욱 외로웠습니다.",
      ]
  },
  {
    id: 3,
    avatar: "images/emoji-reminder_hires.png",
    userName: "너와 나의 연결 고리",
    subtitle: "3",
    review:
      ["1명이 사망할 때, 최소 1명 이상의 주변 사람이 영향을 받는다고 한다면, 매일 얼마나 많은 사람이 고통을 겪는 걸까요? 그들은 어떻게 슬픔을 이겨내고 있을까요? 오늘날 이 시점, 자조모임을 통해 보다 성숙한 애도문화에 대한 논의가 필요한 이유이기도 합니다. 친밀한 관계에서의 죽음을 넘어 낯선 타인의 죽음까지 함께 슬퍼한다면, 그 죽음이 나의 삶과 어떤 연결 고리를 갖고 있는지 고민한다면, 보다 긴밀한 연대를 바탕으로 사회적 결속을 향해 나아갈 수 있으리라 생각합니다.",
      ]
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="AEDO(애도) 제작 동기" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
