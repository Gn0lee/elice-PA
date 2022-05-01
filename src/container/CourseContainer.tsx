import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getCourseList } from '../api/getCourseList';
import SearchArea from '../components/SearchArea';
import CourseCards from '../components/CourseCards';

const CourseContainerStyle = styled.div`
  width: calc(100vw - 48px);
  @media screen and (min-width: 1281px) {
    width: 1232px;
    margin: auto;
  }
`;

function CourseContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [numCourse, setNumCourse] = useState(0);
  const [courses, setCourses] = useState<any>([]);
  const [title, setTitle] = useState('');
  const [priceList, setPriceList] = useState<any>([]);
  const PRICE = 'price';
  const TITLE = 'title';

  useEffect(() => {
    const firstTitle = searchParams.get(TITLE);
    if (firstTitle !== null) {
      setTitle(firstTitle.slice(1, -1));
    }

    getCourseList(title, priceList)
      .then((res) => {
        setNumCourse(res.courses);
        setCourses(res.courses);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
    <CourseContainerStyle>
      <SearchArea title={title} setTitle={setTitle} handleTitleParams={handleTitleParams} />
      <CourseCards />
    </CourseContainerStyle>
  );
}

export default CourseContainer;
