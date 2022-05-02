import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCourseList } from '../api/getCourseList';
import SearchArea from '../components/SearchArea';
import CourseCards from '../components/CourseCards';
import { CoursesEntity, $orEntity, priceInfo, PRICE, KEYWORD, FREE, PAY, SUBSCRIBE } from '../types/types';
import * as Styled from './CourseContainer.styled';

function CourseContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const firstKeywords = searchParams.get(KEYWORD);
  const prices = searchParams.getAll(PRICE);
  const firstKeyword = firstKeywords ? firstKeywords.slice(1, -1) : '';
  const firstPriceList = prices.length
    ? prices.map((price) => {
        if (price === FREE) {
          return priceInfo[FREE];
        }
        if (price === PAY) {
          return priceInfo[PAY];
        }
        return priceInfo[SUBSCRIBE];
      })
    : [];

  const [numCourse, setNumCourse] = useState(0);
  const [courses, setCourses] = useState<CoursesEntity[]>([]);
  const [keyword, setKeyword] = useState(firstKeyword);
  const [priceList, setPriceList] = useState<$orEntity[]>(firstPriceList);
  const [offset, setOffset] = useState(1);
  const [filterList, setFilterList] = useState<string[]>(prices);

  useEffect(() => {
    getCourseList(keyword, priceList, offset - 1)
      .then((res) => {
        setNumCourse(res.course_count);
        setCourses(res.courses);
      })
      .catch((e) => {
        // eslint-disable-next-line
        console.log(e);
      });
  }, [offset, keyword, priceList]);

  const handlePriceParams = (value: string) => {
    const params = searchParams.getAll(PRICE);
    if (params.find((elem) => elem === value)) {
      searchParams.delete(PRICE);
      params.forEach((elem) => {
        if (elem !== value) {
          searchParams.append(PRICE, elem);
        }
      });
      setSearchParams(searchParams);
    } else {
      searchParams.append(PRICE, value);
      setSearchParams(searchParams);
    }
  };

  const handleKeywordParams = (value: string) => {
    const params = searchParams.get(KEYWORD);
    if (params) {
      if (value === '') {
        searchParams.delete(KEYWORD);
      } else {
        searchParams.set(KEYWORD, `%${value}%`);
      }
      setSearchParams(searchParams);
    } else if (value !== '') {
      searchParams.append(KEYWORD, `%${value}%`);
      setSearchParams(searchParams);
    }
  };

  return (
    <Styled.CourseContainerStyle>
      <SearchArea
        keyword={keyword}
        setKeyword={setKeyword}
        handleKeywordParams={handleKeywordParams}
        handlePriceParams={handlePriceParams}
        filterList={filterList}
        setFilterList={setFilterList}
        priceList={priceList}
        setPriceList={setPriceList}
      />
      {courses.length ? (
        <CourseCards numCourse={numCourse} courses={courses} offset={offset} setOffset={setOffset} />
      ) : (
        <Styled.NoCourseContainer>
          <Styled.NoCourseUpperSpace />
          <Styled.NoCourseImg />
          <Styled.NoCourseLowerSpace />
          <Styled.NoCourseComment>검색 결과가 없습니다.</Styled.NoCourseComment>
        </Styled.NoCourseContainer>
      )}
    </Styled.CourseContainerStyle>
  );
}

export default CourseContainer;
