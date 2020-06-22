export interface TestType {
  test?: string;
}

export type StringType = string;

export interface initialStateProps {
  searches: number;
  isFetching: boolean;
  items: object[];
  err?: string;
}
