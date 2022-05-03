import React, { useCallback } from 'react';
import { BarChartOutlined, LaptopOutlined, CalendarOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CoursesEntity, CourseCardsProps, SUBSCRIBE, PAY, FREE, NO_IMG_URL } from '../types/types';
import * as Styled from './CourseCards.styled';

function CourseCards({ numCourse, courses, offset, setOffset }: CourseCardsProps) {
  const count = 20;
  const lastOffset = Math.ceil(numCourse / count);
  const offsetList = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const renderCard = useCallback((course: CoursesEntity, idx: number) => {
    let price;
    if (course.enroll_type === 4) {
      price = SUBSCRIBE;
    } else if (course.is_free) {
      price = FREE;
    } else {
      price = PAY;
    }
    return (
      <Styled.CardOuterFrame key={`${idx}-cardouterframe`} data-testid="card">
        <Styled.CardInnerFrame key={`${idx}-cardinnerframe`}>
          <Styled.CardBody>
            <Styled.CardHeaderContainer key={`${idx}-cardheadercontainer`}>
              <Styled.CardPriceContainer key={`${idx}-cardpricecontainer`}>
                <Styled.CardPriceBox key={`${idx}-cardpricebox`}>
                  <Styled.CardPrice key={`${idx}-cardprice`}>{price}</Styled.CardPrice>
                </Styled.CardPriceBox>
              </Styled.CardPriceContainer>
              <Styled.CardTitleContainer key={`${idx}-cardtitlecontainer`}>
                <Styled.CardTitleBox key={`${idx}-cardtitlebox`}>
                  <Styled.CardTitle key={`${idx}-cardtitle`}>{course.title}</Styled.CardTitle>
                </Styled.CardTitleBox>
              </Styled.CardTitleContainer>
              <Styled.CardDesContainer key={`${idx}-carddescontainer`}>
                <Styled.CardDesBox key={`${idx}-carddesbox`}>
                  <Styled.CardDes key={`${idx}-carddes`}>{course.short_description}</Styled.CardDes>
                </Styled.CardDesBox>
              </Styled.CardDesContainer>
            </Styled.CardHeaderContainer>
            <Styled.HeaderSpace key={`${idx}-cardheaderspace`} />
            <Styled.CardInfoContainer key={`${idx}-cardinfocontainer1`}>
              <Styled.CardLeftInfoContainer key={`${idx}-cardleftinfocontainer1`}>
                <Styled.CardLeftInfoTopBox key={`${idx}-cardleftinfobox1`}>
                  <BarChartOutlined
                    style={{
                      fontSize: '24px',
                      width: '24px',
                      height: '24px',
                      marginRight: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    key={`${idx}-barchart`}
                  />
                  <Styled.CardLeftInfoTitle key={`${idx}-cardleftinfotitle1`}>난이도 :</Styled.CardLeftInfoTitle>
                  <Styled.CardLeftInfoCmt key={`${idx}-cardleftinfocmt1`}>미설정</Styled.CardLeftInfoCmt>
                </Styled.CardLeftInfoTopBox>
                <Styled.CardLeftInfoBox key={`${idx}-cardleftinfobox2`}>
                  <LaptopOutlined
                    style={{
                      fontSize: '24px',
                      width: '24px',
                      height: '24px',
                      marginRight: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    key={`${idx}-labtop`}
                  />
                  <Styled.CardLeftInfoTitle key={`${idx}-cardleftinfotitle2`}>수업 :</Styled.CardLeftInfoTitle>
                  <Styled.CardLeftInfoCmt key={`${idx}-cardleftinfocmt2`}>온라인</Styled.CardLeftInfoCmt>
                </Styled.CardLeftInfoBox>
                <Styled.CardLeftInfoBox key={`${idx}-cardleftinfobox3`}>
                  <CalendarOutlined
                    style={{
                      fontSize: '24px',
                      width: '24px',
                      height: '24px',
                      marginRight: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    key={`${idx}-calendar`}
                  />
                  <Styled.CardLeftInfoTitle key={`${idx}-cardleftinfobox3`}>기간 :</Styled.CardLeftInfoTitle>
                  <Styled.CardLeftInfoCmt key={`${idx}-cardleftinfocmt3`}>무제한</Styled.CardLeftInfoCmt>
                </Styled.CardLeftInfoBox>
              </Styled.CardLeftInfoContainer>
              <Styled.CardRightLogo
                src={course.logo_file_url ? course.logo_file_url : NO_IMG_URL}
                key={`${idx}-cardrightlogo`}
              />
            </Styled.CardInfoContainer>
          </Styled.CardBody>
        </Styled.CardInnerFrame>
      </Styled.CardOuterFrame>
    );
  }, []);
  const renderPageBtn = useCallback(
    (elem: number) => {
      return (
        <Styled.PageBtn
          selected={elem === offset}
          id={`${String(elem)}-pgbtn}`}
          key={`${String(elem)}-pgbtn}`}
          data-testid="page-btn"
        >
          {elem}
        </Styled.PageBtn>
      );
    },
    [offset],
  );
  const handleLeftClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (offset !== 1) {
      setOffset(offset - 1);
    }
  };
  const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (offset !== lastOffset) {
      setOffset(offset + 1);
    }
  };
  const handlePageBtnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const clickedOffset = parseInt((e.target as Element).id.split('-')[0], 10);
    if (!Number.isNaN(clickedOffset)) {
      setOffset(clickedOffset);
    }
  };
  return (
    <div>
      <Styled.NumContainer>
        <Styled.NumDiv data-testid="num-course">전체 {numCourse}개</Styled.NumDiv>
      </Styled.NumContainer>
      <Styled.CourseSpace />
      <Styled.CardsOuterContainer>
        <Styled.CardsInnerContainer>{courses.map((course, idx) => renderCard(course, idx))}</Styled.CardsInnerContainer>
      </Styled.CardsOuterContainer>
      <Styled.PagenationContainer>
        <LeftOutlined
          style={{
            color: offset === 1 ? `#ccc` : `#222`,
            cursor: offset === 1 ? `not-allowed` : `pointer`,
          }}
          onClick={handleLeftClick}
          data-testid="left-arrow"
        />
        <Styled.PageBtnContainer onClick={handlePageBtnClick}>
          {offsetList.map((value) => {
            if (value + offset < 1 || value + offset > lastOffset) {
              return null;
            }
            return renderPageBtn(value + offset);
          })}
        </Styled.PageBtnContainer>
        <RightOutlined
          style={{
            color: offset === lastOffset ? `#ccc` : `#222`,
            cursor: offset === lastOffset ? `not-allowed` : `pointer`,
          }}
          onClick={handleRightClick}
          data-testid="right-arrow"
        />
      </Styled.PagenationContainer>
    </div>
  );
}

export default CourseCards;
