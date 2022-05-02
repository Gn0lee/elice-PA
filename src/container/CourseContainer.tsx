import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCourseList } from '../api/getCourseList';
import SearchArea from '../components/SearchArea';
import CourseCards from '../components/CourseCards';
import { CoursesEntity, $orEntity, priceInfo, PRICE, TITLE, FREE, PAY, SUBSCRIBE } from '../types/types';
import * as Styled from './CourseContainer.styled';

function CourseContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const firstTitles = searchParams.get(TITLE);
  const prices = searchParams.getAll(PRICE);
  const firstTitle = firstTitles ? firstTitles.slice(1, -1) : '';
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
  const [title, setTitle] = useState(firstTitle);
  const [priceList, setPriceList] = useState<$orEntity[]>(firstPriceList);
  const [offset, setOffset] = useState(1);
  const [filterList, setFilterList] = useState<string[]>(prices);

  useEffect(() => {
    getCourseList(title, priceList, offset - 1)
      .then((res) => {
        setNumCourse(res.course_count);
        setCourses(res.courses);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [offset, title, priceList]);

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

  const handleTitleParams = (value: string) => {
    const params = searchParams.get(TITLE);
    if (params) {
      searchParams.set(TITLE, `%${value}%`);

      setSearchParams(searchParams);
    } else {
      searchParams.append(TITLE, `%${value}%`);
      setSearchParams(searchParams);
    }
  };

  return (
    <Styled.CourseContainerStyle>
      <SearchArea
        title={title}
        setTitle={setTitle}
        handleTitleParams={handleTitleParams}
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
