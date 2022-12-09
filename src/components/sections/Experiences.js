import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "청년 토론 모임 SRT",
    years: "2021.11 - 현재",
    content:
      "청년 토론 모임 'SRT(Songpa Revolution in Table)' 활동을 통해 청년들의 표현 욕구 확인.",
  },
  {
    id: 2,
    title: "청년 정치·시사 키트",
    years: "2022.05 - 2022.08",
    content:
      "'서울청년공간 무중력지대 대방'의 프로젝트 사업에 선정.",
  },
  {
    id: 3,
    title: "단짠단짠 정치살롱",
    years: "2022.04 - 2022.08",
    content:
      "'서울청년센터 광진오랑'의 모임 운영 사업에 선정. 정치·시사를 주제로 한 놀이 및 활동의 호응도 확인.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "프리폴리 팀 활동",
    years: "2022.09 - 현재",
    content: [
      "기획자 1명, 개발자 1명. 현재 구성원 2명.",
      " ",
      "프로젝트 구체화 및 사업 지원 단계.",]
  },
  {
    id: 2,
    title: "쓰면서 즐기는 마음체조",
    years: "2022.10 - 2022.11",
    content:
      "'서울청년센터 관악오랑' 클래쓰랑 사업에 선정. 청년 대상 마음건강 글쓰기 수업 기획 및 진행.",
  },
  {
    id: 3,
    title: "신개념 커뮤니티 플랫폼 AEDO(애도)",
    years: "2022.12 - 현재",
    content:
      "초기 개발·설계 단계 / 앱 서비스, 자조 모임 커뮤니티, 키트 및 제작 및 판매",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="팀 빌딩 과정" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
