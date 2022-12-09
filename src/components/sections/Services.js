import React from "react";
//import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/speaker-high-volume.svg",
    title: "공동체와 낯선 질문",
    content:
      "경쟁이 아닌 협력을 기반으로, 시장에서의 개인이 아닌 공동체의 구성원으로서, 낯선 질문을 던지고자 합니다.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/add-user-group-woman-man.svg",
    title: "안전하고 느슨한 제 3의 공간",
    content:
      "'내 삶이 왜 이렇지?' '존재의 중심은 무엇이어야 할까?' '우리에게 마음이란 왜 있는걸까?'와 같은 질문을 마음껏 할 수 있는 안전하고도 느슨한 제 3의 공간을 꿈꿉니다.",
    color: "#F97B8B",
    contentColor: "light",
  },
  {
    id: 3,
    icon: "images/party-popper.svg",
    title: "모두를 위한 내밀한 제품과 서비스",
    content:
      "앱 서비스, 자조모임, 워크숍, 출판물 등을 기획합니다.",
    color: "#F9D74C",
    contentColor: "dark",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="팀 소개" />
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
