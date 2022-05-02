import styled from 'styled-components';

export const NumContainer = styled.div`
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  border-bottom: 1px solid rgb(225, 226, 228);
`;
export const NumDiv = styled.div`
  font-size: 0.75rem;
  color: #222;
  display: inline-block;
  font-weight: 700;
`;
export const CourseSpace = styled.div`
  display: block;
  width: 0px;
  height: 0px;
  margin: 0px 0px 0.75rem;
  padding: 0px;
`;
export const CardsOuterContainer = styled.div`
  max-width: 100%;
`;
export const CardsInnerContainer = styled.div`
  margin: -8px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;
export const CardOuterFrame = styled.div`
  width: 296px;
  height: 338px;
  margin: 8px;
`;
export const CardInnerFrame = styled.div`
  border: none;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
`;
export const CardBody = styled.div`
  padding: 1.75rem 1.5rem 1.5rem;
`;
export const CardHeaderContainer = styled.div``;
export const CardPriceContainer = styled.div``;
export const CardPriceBox = styled.div`
  margin-bottom: 0.5rem;
  height: 1.125rem;
`;
export const CardPrice = styled.div`
  -webkit-line-clamp: 1;
  max-height: 1.6em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  color: #524fa1;
  font-weight: 700;
`;
export const CardTitleContainer = styled.div``;
export const CardTitleBox = styled.div`
  margin-bottom: 0.5rem;
  height: 3.5rem;
`;
export const CardTitle = styled.div`
  -webkit-line-clamp: 2;
  max-height: 3.2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  color: #222;
  font-weight: 700;
`;
export const CardDesContainer = styled.div``;
export const CardDesBox = styled.div`
  height: 2.5rem;
`;
export const CardDes = styled.div`
  -webkit-line-clamp: 2;
  max-height: 3.2em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  position: relative;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #5e5f61;
`;
export const HeaderSpace = styled.div`
  display: block;
  width: 0px;
  height: 0px;
  margin: 0px 0px 1.5rem;
  padding: 0px;
`;
export const CardInfoContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
export const CardLeftInfoContainer = styled.div`
  white-space: nowrap;
  min-width: 0px;
`;
export const CardLeftInfoTopBox = styled.div`
  height: 1.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
export const CardLeftInfoBox = styled.div`
  height: 1.5rem;
  margin-top: 0.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
export const CardLeftInfoTitle = styled.div`
  font-size: 12px;
  color: #7d7e80;
  display: inline-block;
`;
export const CardLeftInfoCmt = styled.div`
  padding-left: 0.25rem;
  font-size: 12px;
  color: #7d7e80;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CardRightLogo = styled.div<{ src: string }>`
  width: 52px;
  height: 52px;
  background-image: url(${(props) => props.src});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const PagenationContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
export const PageBtnContainer = styled.div`
  display: flex;
  height: 1.5rem;
  line-height: 1.5rem;
`;
export const PageBtn = styled.div<{ selected: boolean }>`
  width: 24px;
  height: 24px;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  font-size: 0.875rem;
  ${(props) => (props.selected ? `color: white; background-color: #524fa1;` : `color: #999;`)}
  margin: 0 0.375rem;
  &:hover {
    color: #524fa1;
    background-color: #efeff6;
    font-weight: 700;
  }
`;
