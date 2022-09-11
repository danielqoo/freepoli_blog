import React from "react";
// import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/speaker-high-volume.svg",
    title: "정치적 취향 • 나만의 이슈 찾기",
    content:
      "청년들이 자신의 정치적 취향(자기효능감)와 나만의 이슈를 탐색하여 스스로 선택 • 발언(정치적 기술, 비판•심의)할 수 있는 공론장",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/party-popper.svg",
    title: "놀이와 활동 중심의 커뮤니티",
    content:
      "자유로우면서도 안전한 환경에서 편안하게 정치를 이야기하고, 일상에서 놀이와 활동으로 즐길 수 있는 콘텐츠가 있는 정치 살롱",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/add-user-group-woman-man.svg",
    title: "합리적인 가격과 참여가 쉬운 느슨한 연대감",
    content:
      "관심사 기반, 지역 중심의 소규모 모임 활동으로 다양한 정치•사회 이슈들에 대한 담론이 살아있어 청년이 스스로 만들어가는 그룹",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="팀 미션" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
