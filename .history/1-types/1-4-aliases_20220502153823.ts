{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'ellie';
  type Student = { name: string; age: number };
  const student: Student = {
    name: 'hi',
    age: 11,
  };

  // String Literal Types
  type Name = 'name';
  let gomName: Name;
  gomName = 'name';
  type JSON = 'json';
}
