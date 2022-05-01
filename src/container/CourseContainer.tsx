import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCourseList } from '../api/getCourseList';
import SearchArea from '../components/SearchArea';
import CourseCards from '../components/CourseCards';

function CourseContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [numCourse, setNumCourse] = useState(0);
  const [courses, setCourses] = useState<any>([]);
  const [title, setTitle] = useState('');
  const [priceList, setPriceList] = useState<any>([]);
  const price = 'price';

  useEffect(() => {
    let firstTitle = searchParams.get('title');
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
    const params = searchParams.getAll(price);
    if (params.find((elem) => elem === value)) {
      searchParams.delete(price);
      params.forEach((elem) => {
        if (elem !== value) {
          searchParams.append(price, elem);
        }
      });
      setSearchParams(searchParams);
    } else {
      searchParams.append(price, value);
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      <SearchArea />
      <CourseCards />
    </>
  );
}

export default CourseContainer;
