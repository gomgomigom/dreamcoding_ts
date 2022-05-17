{
  /**
   * Intersection Types: &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Employee = {
    employeeId: number;
    work: () => {};
  };

  function internWork(person: Student & Employee) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork();
}
