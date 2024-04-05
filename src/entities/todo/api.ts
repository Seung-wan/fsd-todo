import { httpClient } from '../../shared/apis';

export async function getTodos() {
  const { data } = await httpClient('/todos');

  return data;
}
