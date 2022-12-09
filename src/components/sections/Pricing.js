import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Pricebox from "../elements/Pricebox";

const priceboxData = [
  {
    id: 1,
    title: "마음의 건강과 안녕",
    icon: "images/wind-chime.svg",
    content: [
      {
        id: 0,
        text: "부정적인 감정을 글로써 표현하고 해소하며 성숙한 통찰과 내면의 힘을 기릅니다.",
      },
      {
        id: 1,
        text: "죽음, 상실, 이별, 실패 등을 터부시하지 않고 삶의 일부로 긍정하는 인식을 개발합니다.",
      },
    ],
    price: 40,
    best: false,
    badge: false,
  },
  {
    id: 2,
    title: "새로운 삶의 서사",
    icon: "images/open-book-emoji.svg",
    content: [
      {
        id: 0,
        text: "비슷한 경험을 공유한 이들과의 연대감 형성 및 더 나은 삶을 모색하는 기회룰 제공합니다.",
      },
      {
        id: 1,
        text: "애도를 주제로 한 공적인 대화의 장을 마련합니다.",
      },
    ],
    price: 30,
    best: false,
    badge: false,
  },
  {
    id: 3,
    title: "소셜벤처로의 성장",
    icon: "images/rainbow-emoji.svg",
    content: [
      { 
        id: 0, 
        text: "자유롭고 편안하게 표현하는 애도 문화를 형성합니다." 
      },
      { 
        id: 1, 
        text: "공동체 회복으로 사회 통합에 기여합니다." 
      },
    ],
    price: 30,
    best: false,
    badge: false,
  },
];

function Pricing() {
  return (
    <section id="prices">
      <div className="container">
        <Pagetitle title="프리폴리가 달성하려는 사회적 가치" />
        <div className="row align-items-center">
          {priceboxData.map((pricebox) => (
            <div key={pricebox.id} className="col-md-4">
              <Pricebox priceboxItem={pricebox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
