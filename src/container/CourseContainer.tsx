import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCourseList } from '../api/getCourseList';
import SearchArea from '../components/SearchArea';
import CourseCards from '../components/CourseCards';
import { CoursesEntity, $orEntity } from '../types/types';
import * as Styled from './CourseContainer.styled';

function CourseContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [numCourse, setNumCourse] = useState(0);
  const [courses, setCourses] = useState<CoursesEntity[]>([]);
  const [title, setTitle] = useState('');
  const [priceList, setPriceList] = useState<$orEntity[]>([]);
  const [offset, setOffset] = useState(1);
  const PRICE = 'price';
  const TITLE = 'title';

  useEffect(() => {
    const firstTitle = searchParams.get(TITLE);
    if (firstTitle !== null) {
      setTitle(firstTitle.slice(1, -1));
    }

    getCourseList(title, priceList, offset - 1)
      .then((res) => {
        setNumCourse(res.course_count);
        setCourses(res.courses);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [offset]);

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
      searchParams.set(TITLE, `%${title}%`);

      setSearchParams(searchParams);
    } else {
      searchParams.append(TITLE, `%${title}%`);
      setSearchParams(searchParams);
    }
  };

  return (
    <Styled.CourseContainerStyle>
      <SearchArea title={title} setTitle={setTitle} handleTitleParams={handleTitleParams} />
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
