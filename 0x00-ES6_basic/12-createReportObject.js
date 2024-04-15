export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      const departments = Object.keys(this.employeesList).length;
      return departments;
    },
  };
  return obj;
}
