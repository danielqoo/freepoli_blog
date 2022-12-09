import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/watch_google_noto_emoji.png",
    userName: "모두가 맹신하는 약 ‘시간’",
    subtitle: "1",
    review:
      ["오늘날, 상실로 인한 애도와 슬픔은 개인의 영역으로 남아있습니다. 타인의 시선이나 바쁜 일상 등으로 인해 슬퍼하는 시간을 참고 버티며 미루는 경우가 많습니다. 슬픔, 분노, 무력함, 자책감 등의 부정적인 감정을 두려워하며 ‘시간이 약이다’는 식의 말로 애써 회피할 때도 있습니다. 모든 상실은 개인의 역사이자 고유한 서사이기에 충분히 울고, 슬퍼할 시간이 필요합니다.",
      ]
  },
  {
    id: 2,
    avatar: "images/candle-emoji_hires.png",
    userName: "그 많던 죽음은 어디로 갔을까?",
    subtitle: "2",
    review:
      ["최근 통계청의 발표에 따르면 한국에서는 매년 30만 명이 죽음을 맞이합니다. 코로나로 인한 누적 사망자 수는 3만 명에 이릅니다. (2022년 11월 기준) 더욱이 코로나 사망자의 경우 장례를 치르지 못한 경우가 대다수였습니다. 뉴스로 접한 누군가의 삶과 죽음은 숫자에 가려진 채 손쉽게 처리 되었고, 서로 만날 수 없는 가운데, 죽음은 더욱 외로웠습니다.",
      ]
  },
  {
    id: 3,
    avatar: "images/gloves_hires.png",
    userName: "너와 나의 연결 고리",
    subtitle: "3",
    review:
      ["한국에서는 자조모임을 찾아보기 어렵습니다. 주제가 죽음인 경우에는 더욱 그러합니다. 오늘날 이 시점, 자조모임을 통해 보다 성숙한 애도문화에 대한 논의가 필요한 이유이기도 합니다. 친밀한 관계에서의 죽음을 넘어 낯선 타인의 죽음까지 함께 슬퍼한다면, 그 죽음이 나의 삶과 어떤 연결 고리를 갖고 있는지 고민한다면, 보다 긴밀한 연대를 향해 나아갈 수 있으리라 믿습니다.",
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
