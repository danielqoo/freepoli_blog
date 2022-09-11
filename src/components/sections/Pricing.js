import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Pricebox from "../elements/Pricebox";

const priceboxData = [
  {
    id: 1,
    title: "자유롭게 춤춰요",
    icon: "images/dancing-girl.svg",
    content: [
      {
        id: 0,
        text: "부정적인 생각들과 다른 사람들의 시선으로부터 해방되어, 내 능력을 믿고 완전한 자유를 느껴요.",
      },
      {
        id: 1,
        text: "각자의 개성을 살리면서, 진행 상황을 몸으로 기억하며, 동선과 안무의 조화를 이루어요. ",
      },
    ],
    price: 40,
    best: false,
    badge: false,
  },
  {
    id: 2,
    title: "근거를 제시해요",
    icon: "images/bar-chart-emoji.svg",
    content: [
      {
        id: 0,
        text: "숫자에는 무엇에 대해서, 어떤 과정을 거쳐서, 어떻게 생각하고 있느냐가 함축되어 있어요.",
      },
      {
        id: 1,
        text: "데이터를 요구하고, 숫자를 의심하고, 최소한의 분석적 지식을 바탕으로 함께 의사 결정을 해요.",
      },
    ],
    price: 30,
    best: false,
    badge: false,
  },
  {
    id: 3,
    title: "경청하고 공감해요",
    icon: "images/people-hugging-emoji.svg",
    content: [
      { 
        id: 0, 
        text: "어깨에 힘을 빼고 스르르, 정서적으로 안정된 팀원들끼리 서로를 경청하는 분위기를 만들어요." 
      },
      { 
        id: 1, 
        text: "함께 나누고, 많이 웃고, 남을 돕는 문화 속에서 모두가 쉽게 공감할 수 있도록 도와주는 모더레이터가 되어요." 
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
        <Pagetitle title="프리폴리 팀이 일하는 방식" />
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
