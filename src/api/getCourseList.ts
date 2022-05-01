import axios from 'axios';

export async function getCourseList(title: string, price: []) {
  const filterConditions = {
    $and: [{ title: '%' + title + '%' }, { $or: price }],
  };
  const filterConditionsJSON = JSON.stringify(filterConditions);

  const response = await axios.get(`https://api-rest.elice.io/org/academy/course/list/`, {
    params: {
      filter_conditions: filterConditionsJSON,
      offset: 0,
      count: 20,
    },
  });
  return response.data;
}
