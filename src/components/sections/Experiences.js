import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "청년 토론 모임 SRT",
    years: "2021.11 - 현재",
    content:
      "청년 토론 모임 'SRT(Songpa Revolution in Table)' 활동을 통해 청년들의 정치적 표현 욕구 확인.",
  },
  {
    id: 2,
    title: "청년 정치 키트",
    years: "2022.05 - 2022.08",
    content:
      "'서울청년공간 무중력지대 대방'의 프로젝트 사업에 선정. 정치 콘텐츠의 상업화 가능성 확인.",
  },
  {
    id: 3,
    title: "단짠단짠 정치살롱",
    years: "2022.04 - 2022.08",
    content:
      "'서울청년센터 광진오랑'의 모임 운영 사업에 선정. 정치를 주제로 한 놀이 및 활동의 호응도 확인.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "프리폴리 팀 활동",
    years: "2022.09 - 현재",
    content: [
      "기획자 1명, 지원 1명. 현재 구성원 2명.",
      " ",
      "프로젝트 구체화 및 사업 지원 단계.",]
  },
  {
    id: 2,
    title: "마이 폴리 스테이션",
    years: "2022.08 - 2022.09",
    content:
      "청년들이 정치를 주제로 놀이와 활동을 할 수 있도록 오프라인 모임과 워크숍 기획.",
  },
  {
    id: 3,
    title: "마이 폴리 키트",
    years: "2022.08 - 2022.09",
    content:
      "청년들이 스스로 정치적 자아 탐색을 할 수 있도록 키트 형태의 아이템 제작 기획.",
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
