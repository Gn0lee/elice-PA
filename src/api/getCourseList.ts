import axios from 'axios';
import { Response, $orEntity, FilterConditions } from '../types/types';

export async function getCourseList(title: string, price: $orEntity[]) {
  const filterConditions: FilterConditions = {
    $and: [{ title: `%${title}%` }, { $or: price }],
  };

  const filterConditionsJSON = JSON.stringify(filterConditions);

  const response = await axios.get<Response>(`https://api-rest.elice.io/org/academy/course/list/`, {
    params: {
      filter_conditions: filterConditionsJSON,
      offset: 0,
      count: 20,
    },
  });
  return response.data;
}
