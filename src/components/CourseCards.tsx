import React, { useCallback } from 'react';
import styled from 'styled-components';
import { BarChartOutlined, LaptopOutlined, CalendarOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CoursesEntity } from '../types/types';

type CourseCardsProps = {
  numCourse: number;
  courses: CoursesEntity[];
};
const NumContainer = styled.div`
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  border-bottom: 1px solid rgb(225, 226, 228);
`;
const NumDiv = styled.div`
  font-size: 0.75rem;
  color: #222;
  display: inline-block;
  font-weight: 700;
`;
const CourseSpace = styled.div`
  display: block;
  width: 0px;
  height: 0px;
  margin: 0px 0px 0.75rem;
  padding: 0px;
`;
const CardsOuterContainer = styled.div`
  max-width: 100%;
`;
const CardsInnerContainer = styled.div`
  margin: -8px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;
const CardOuterFrame = styled.div`
  width: calc(25% - 16px);
  margin: 8px;
`;
const CardInnerFrame = styled.div`
  min-width: auto;
  border: none;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
`;
const CardBody = styled.div`
  padding: 1.75rem 1.5rem 1.5rem;
`;
const CardHeaderContainer = styled.div``;
const CardPriceContainer = styled.div``;
const CardPriceBox = styled.div`
  margin-bottom: 0.5rem;
  height: 1.125rem;
`;
const CardPrice = styled.div`
  -webkit-line-clamp: 1;
  max-height: 1.6em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  color: #524fa1;
  font-weight: 700;
`;
const CardTitleContainer = styled.div``;
const CardTitleBox = styled.div`
  margin-bottom: 0.5rem;
  height: 3.5rem;
`;
const CardTitle = styled.div`
  -webkit-line-clamp: 2;
  max-height: 3.2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.125rem;
  color: #222;
  font-weight: 700;
`;
const CardDesContainer = styled.div``;
const CardDesBox = styled.div`
  height: 2.5rem;
`;
const CardDes = styled.div`
  -webkit-line-clamp: 2;
  max-height: 3.2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  color: #5e5f61;
`;
const HeaderSpace = styled.div`
  display: block;
  width: 0px;
  height: 0px;
  margin: 0px 0px 1.5rem;
  padding: 0px;
`;
const CardInfoContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const CardLeftInfoContainer = styled.div`
  white-space: nowrap;
  min-width: 0px;
`;
const CardLeftInfoTopBox = styled.div`
  height: 1.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const CardLeftInfoBox = styled.div`
  height: 1.5rem;
  margin-top: 0.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const CardLeftInfoTitle = styled.div`
  font-size: 0.75rem;
  color: #7d7e80;
  display: inline-block;
`;
const CardLeftInfoCmt = styled.div`
  padding-left: 0.25rem;
  font-size: 0.75rem;
  color: #7d7e80;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CardRightLogo = styled.img`
  display: inline-block;
  width: 3.25rem;
  min-width: 3.25rem;
  height: 3.25rem;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const PagenationContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
const PageBtnContainer = styled.div`
  display: flex;
  height: 1.5rem;
  line-height: 1.5rem;
`;
const PageBtn = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  font-size: 0.875rem;
  color: #999;
  margin: 0 0.375rem;
  &:hover {
    color: #524fa1;
    background-color: #efeff6;
    font-weight: 700;
  }
`;
const PageSelectedBtn = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  font-size: 0.875rem;
  color: #fff;
  margin: 0 0.375rem;
  background-color: #524fa1;
  transition: background-color 0.5s ease;
  &:hover {
    color: #524fa1;
    background-color: #efeff6;
    font-weight: 700;
  }
`;

function CourseCards({ numCourse, courses }: CourseCardsProps) {
  console.log(courses);
  const renderCard = useCallback((course: CoursesEntity, idx: number) => {
    // const price = course.enroll_type === 4 ? '구독' : course.is_free ? '무료' : '유료';
    let price;
    if (course.enroll_type === 4) {
      price = '구독';
    } else if (course.is_free) {
      price = '무료';
    } else {
      price = '유료';
    }
    return (
      <CardOuterFrame>
        <CardInnerFrame>
          <CardBody>
            <CardHeaderContainer>
              <CardPriceContainer>
                <CardPriceBox>
                  <CardPrice>{price}</CardPrice>
                </CardPriceBox>
              </CardPriceContainer>
              <CardTitleContainer>
                <CardTitleBox>
                  <CardTitle>{course.title}</CardTitle>
                </CardTitleBox>
              </CardTitleContainer>
              <CardDesContainer>
                <CardDesBox>
                  <CardDes>{course.short_description}</CardDes>
                </CardDesBox>
              </CardDesContainer>
            </CardHeaderContainer>
            <HeaderSpace />
            <CardInfoContainer>
              <CardLeftInfoContainer>
                <CardLeftInfoTopBox>
                  <BarChartOutlined style={{ fontSize: '14px', marginRight: '8px' }} />
                  <CardLeftInfoTitle>난이도 :</CardLeftInfoTitle>
                  <CardLeftInfoCmt>미설정</CardLeftInfoCmt>
                </CardLeftInfoTopBox>
                <CardLeftInfoBox>
                  <LaptopOutlined style={{ fontSize: '14px', marginRight: '8px' }} />
                  <CardLeftInfoTitle>수업 :</CardLeftInfoTitle>
                  <CardLeftInfoCmt>온라인</CardLeftInfoCmt>
                </CardLeftInfoBox>
                <CardLeftInfoBox>
                  <CalendarOutlined style={{ fontSize: '14px', marginRight: '8px' }} />
                  <CardLeftInfoTitle>기간 :</CardLeftInfoTitle>
                  <CardLeftInfoCmt>무제한</CardLeftInfoCmt>
                </CardLeftInfoBox>
              </CardLeftInfoContainer>
              <CardRightLogo src={course.logo_file_url ? course.logo_file_url : ''} />
            </CardInfoContainer>
          </CardBody>
        </CardInnerFrame>
      </CardOuterFrame>
    );
  }, []);
  return (
    <div>
      <NumContainer>
        <NumDiv>전체 {numCourse}개</NumDiv>
      </NumContainer>
      <CourseSpace />
      <CardsOuterContainer>
        <CardsInnerContainer>{courses.map((course, idx) => renderCard(course, idx))}</CardsInnerContainer>
      </CardsOuterContainer>
      <PagenationContainer>
        <LeftOutlined />
        <PageBtnContainer>
          <PageSelectedBtn>1</PageSelectedBtn>
          <PageBtn>2</PageBtn>
          <PageBtn>3</PageBtn>
          <PageBtn>4</PageBtn>
          <PageBtn>5</PageBtn>
        </PageBtnContainer>
        <RightOutlined />
      </PagenationContainer>
    </div>
  );
}

export default CourseCards;
