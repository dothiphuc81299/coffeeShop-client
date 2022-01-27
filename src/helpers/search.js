import queryString from "query-string";

export const getQuery = (string) => {
  
  return queryString.parse(string);
}