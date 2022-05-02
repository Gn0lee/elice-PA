import React, { useCallback } from 'react';
import { BarChartOutlined, LaptopOutlined, CalendarOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CoursesEntity, CourseCardsProps } from '../types/types';
import * as Styled from './CourseCards.styled';

function CourseCards({ numCourse, courses, offset, setOffset }: CourseCardsProps) {
  const count = 20;
  const lastOffset = Math.ceil(numCourse / count);
  const offsetList = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  const renderCard = useCallback((course: CoursesEntity, idx: number) => {
    let price;
    if (course.enroll_type === 4) {
      price = '구독';
    } else if (course.is_free) {
      price = '무료';
    } else {
      price = '유료';
    }
    return (
      <Styled.CardOuterFrame key={`${idx}-cardouterframe`}>
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
                src={
                  course.logo_file_url
                    ? course.logo_file_url
                    : 'data:image/png;base64,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'
                }
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
        <Styled.PageBtn selected={elem === offset} id={`${String(elem)}-pgbtn}`} key={`${String(elem)}-pgbtn}`}>
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
        <Styled.NumDiv>전체 {numCourse}개</Styled.NumDiv>
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
        />
      </Styled.PagenationContainer>
    </div>
  );
}

export default CourseCards;
