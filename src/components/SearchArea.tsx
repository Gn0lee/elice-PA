import React, { useCallback } from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

type SearchAreaProps = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleTitleParams: (value: string) => void;
};

const SearchHeader = styled.div``;
const SearchIConInputContainer = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 100%;
`;
const SearchIConInputInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 0.25rem;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
`;
const SearchIconContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
`;
const SearchInput = styled.input`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  border: none;
  background: transparent;
  line-height: 1.5;
  font-family: inherit;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const SearchMarginBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 0px;
`;
const SearchSpace = styled.div`
  display: block;
  width: 0px;
  height: 0px;
  margin: 0px 0px 0.625rem;
  padding: 0px;
`;
const SearchFilterContainer = styled.div`
  border: 1px solid rgb(225, 226, 228);
`;
const SearchFilterBox = styled.div`
  border-bottom: 1px solid rgb(225, 226, 228);
  background-color: rgb(255, 255, 255);
  display: flex;
  box-sizing: border-box;
`;
const SearchFilterLastBox = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  box-sizing: border-box;
`;
const FilterCategoryBox = styled.div`
  width: 6px;
  display: flex;
  min-width: 6rem;
  padding: 0.875rem 1rem;
  background-color: rgb(249, 250, 252);
  border-right: 1px solid rgb(225, 226, 228);
  box-sizing: border-box;
`;
const CategoryName = styled.div`
  line-height: 1.5;
  user-select: auto;
  font-size: 0.75rem;
  color: #5e5f61;
  font-weight: 700;
  display: inline-block;
`;
const FilterBtnBox = styled.div`
  padding: 0px 0.5rem;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
`;
const FilterBtn = styled.button`
  margin: 0.5rem;
  color: rgb(94, 95, 97);
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid rgb(240, 241, 243);
  font-weight: normal;
  transition: all 150ms ease-in-out 0s;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  min-width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  font-size: 0.875rem;
  background: rgb(240, 241, 243);
  &:hover {
    color: rgb(0, 0, 0);
    background: rgb(225, 226, 228);
    border-color: rgb(225, 226, 228);
  }
`;
const FilterBtnSpan = styled.span`
  line-height: 1.5;
`;

function SearchArea({ title, setTitle, handleTitleParams }: SearchAreaProps) {
  const filterList = [
    ['유형', '과목', '챌린지', '테스트'],
    ['진행 방식', '자유 선택형', '순차 완료형'],
    ['분야', '프로그래밍 기초', '데이터 분석', '웹', '인공지능', '알고리즘'],
    ['난이도', '입문', '초급', '중급', '고급'],
    ['언어', 'C', 'C++', '자바', '파이썬', '자바스크립트', 'R', 'HTML/CSS', 'SQL', '아두이노', '스크래치'],
    ['가격', '무료', '유료', '구독'],
  ];
  const renderFilterBtn = useCallback((item: string) => {
    return (
      <FilterBtn key={`${item}btn`}>
        <FilterBtnSpan key={`${item}span`}>{item}</FilterBtnSpan>
      </FilterBtn>
    );
  }, []);

  const renderFilterBox = useCallback((item: string[], last: boolean) => {
    const category = item.shift();

    return (
      <div key={`${category}div`}>
        {last ? (
          <SearchFilterLastBox key={`${category}filterlastbox`}>
            <FilterCategoryBox key={`${category}categorybox1`}>
              <CategoryName key={`${category}categoryname1`}>{category}</CategoryName>
            </FilterCategoryBox>
            <FilterBtnBox key={`${category}btnbox1`}>{item.map((elem) => renderFilterBtn(elem))}</FilterBtnBox>
          </SearchFilterLastBox>
        ) : (
          <SearchFilterBox key={`${category}filterbox`}>
            <FilterCategoryBox key={`${category}categorybox2`}>
              <CategoryName key={`${category}categoryname2`}>{category}</CategoryName>
            </FilterCategoryBox>
            <FilterBtnBox key={`${category}btnbox2`}>{item.map((elem) => renderFilterBtn(elem))}</FilterBtnBox>
          </SearchFilterBox>
        )}
      </div>
    );
  }, []);

  return (
    <SearchHeader>
      <SearchIConInputContainer>
        <SearchIConInputInnerContainer>
          <SearchIconContainer>
            <SearchOutlined />
          </SearchIconContainer>
          <SearchInputContainer>
            <SearchInput placeholder="배우고 싶은 언어, 기술을 검색해 보세요" type="text" value={title} />
          </SearchInputContainer>
          <SearchMarginBox />
        </SearchIConInputInnerContainer>
      </SearchIConInputContainer>
      <SearchSpace key="space1" />
      <SearchFilterContainer>
        {filterList.map((filter, index) => renderFilterBox(filter, index === filterList.length - 1))}
      </SearchFilterContainer>
      <SearchSpace key="space2" />
    </SearchHeader>
  );
}

export default SearchArea;
