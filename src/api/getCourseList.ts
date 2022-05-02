import axios from 'axios';
import { Response, $orEntity, FilterConditions } from '../types/types';

export async function getCourseList(title: string, price: $orEntity[], offset: number) {
  const filterConditions: FilterConditions = {
    $and: [{ title: `%${title}%` }, { $or: price }],
  };
  const count = 20;
  const filterConditionsJSON = JSON.stringify(filterConditions);

  const response = await axios.get<Response>(`https://api-rest.elice.io/org/academy/course/list/`, {
    params: {
      filter_conditions: filterConditionsJSON,
      offset: offset * count,
      count,
    },
  });
  return response.data;
}
