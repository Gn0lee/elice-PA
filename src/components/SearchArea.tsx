import React, { useCallback } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import debounce from 'lodash.debounce';
import * as Styled from './SearchArea.styled';
import { SearchAreaProps, FREE, PAY, SUBSCRIBE, priceInfo } from '../types/types';

function SearchArea({
  keyword,
  setKeyword,
  handleKeywordParams,
  handlePriceParams,
  filterList,
  setFilterList,
  priceList,
  setPriceList,
}: SearchAreaProps) {
  const filterNameList = [
    ['유형', '과목', '챌린지', '테스트'],
    ['진행 방식', '자유 선택형', '순차 완료형'],
    ['분야', '프로그래밍 기초', '데이터 분석', '웹', '인공지능', '알고리즘'],
    ['난이도', '입문', '초급', '중급', '고급'],
    ['언어', 'C', 'C++', '자바', '파이썬', '자바스크립트', 'R', 'HTML/CSS', 'SQL', '아두이노', '스크래치'],
    ['가격', '무료', '유료', '구독'],
  ];
  const renderFilterBtn = useCallback(
    (item: string) => {
      return (
        <Styled.FilterBtn
          key={`${item}btn`}
          id={`${item}-btn`}
          selected={filterList.find((f) => f === item) !== undefined}
        >
          <Styled.FilterBtnSpan key={`${item}span`}>{item}</Styled.FilterBtnSpan>
        </Styled.FilterBtn>
      );
    },
    [filterList],
  );

  const renderFilterBox = useCallback(
    (item: string[], last: boolean) => {
      const category = item.shift();

      return (
        <div key={`${category}div`}>
          {last ? (
            <Styled.SearchFilterLastBox key={`${category}filterlastbox`}>
              <Styled.FilterCategoryBox key={`${category}categorybox1`}>
                <Styled.CategoryName key={`${category}categoryname1`}>{category}</Styled.CategoryName>
              </Styled.FilterCategoryBox>
              <Styled.FilterBtnBox key={`${category}btnbox1`}>
                {item.map((elem) => renderFilterBtn(elem))}
              </Styled.FilterBtnBox>
            </Styled.SearchFilterLastBox>
          ) : (
            <Styled.SearchFilterBox key={`${category}filterbox`}>
              <Styled.FilterCategoryBox key={`${category}categorybox2`}>
                <Styled.CategoryName key={`${category}categoryname2`}>{category}</Styled.CategoryName>
              </Styled.FilterCategoryBox>
              <Styled.FilterBtnBox key={`${category}btnbox2`}>
                {item.map((elem) => renderFilterBtn(elem))}
              </Styled.FilterBtnBox>
            </Styled.SearchFilterBox>
          )}
        </div>
      );
    },
    [filterList],
  );

  const handleFilterClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    let clickedFilterName = '';
    if ((e.target as Element).tagName === 'BUTTON') {
      [clickedFilterName] = (e.target as Element).id.split('-');
    } else if ((e.target as Element).tagName === 'SPAN') {
      const parentElem = (e.target as Element).parentElement;
      if (parentElem) {
        [clickedFilterName] = parentElem.id.split('-');
      }
    }
    switch (clickedFilterName) {
      case FREE:
      case PAY:
      case SUBSCRIBE:
        handlePriceParams(clickedFilterName);
        if (filterList.find((f) => f === clickedFilterName) !== undefined) {
          setFilterList(filterList.filter((f) => f !== clickedFilterName));
          if (clickedFilterName === FREE) {
            setPriceList(priceList.filter((p) => p !== priceInfo[FREE]));
          } else if (clickedFilterName === PAY) {
            setPriceList(priceList.filter((p) => p !== priceInfo[PAY]));
          } else {
            setPriceList(priceList.filter((p) => p !== priceInfo[SUBSCRIBE]));
          }
        } else {
          setFilterList([...filterList, clickedFilterName]);
          if (clickedFilterName === FREE) {
            setPriceList([...priceList, priceInfo[FREE]]);
          } else if (clickedFilterName === PAY) {
            setPriceList([...priceList, priceInfo[PAY]]);
          } else {
            setPriceList([...priceList, priceInfo[SUBSCRIBE]]);
          }
        }
        break;
      case '':
        break;
      default:
        if (filterList.find((f) => f === clickedFilterName) !== undefined) {
          setFilterList(filterList.filter((f) => f !== clickedFilterName));
        } else {
          setFilterList([...filterList, clickedFilterName]);
        }
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    handleKeywordParams(e.target.value);
  };

  const debouncedHandleChange = useCallback(debounce(handleChange, 300), [keyword]);

  return (
    <Styled.SearchHeader>
      <Styled.SearchIConInputContainer>
        <Styled.SearchIConInputInnerContainer>
          <Styled.SearchIconContainer>
            <SearchOutlined />
          </Styled.SearchIconContainer>
          <Styled.SearchInputContainer>
            <Styled.SearchInput
              placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
              type="text"
              defaultValue={keyword || ''}
              onChange={debouncedHandleChange}
            />
          </Styled.SearchInputContainer>
          <Styled.SearchMarginBox />
        </Styled.SearchIConInputInnerContainer>
      </Styled.SearchIConInputContainer>
      <Styled.SearchFilterContainer onClick={handleFilterClick}>
        {filterNameList.map((filter, index) => renderFilterBox(filter, index === filterNameList.length - 1))}
      </Styled.SearchFilterContainer>
      <Styled.SearchSpace key="space2" />
    </Styled.SearchHeader>
  );
}

export default SearchArea;
