public class EmployeeTest {

    public static void main(String[] args) {

        EmployeeArray employeeArray = new EmployeeArray(10);

        employeeArray.addEmployee(new Employee(101, "Sujitha", "Developer", 50000));
        employeeArray.addEmployee(new Employee(102, "Rahul", "Tester", 40000));

        System.out.println("Employees:");
        employeeArray.displayEmployees();

        System.out.println("\nSearch Result:");
        System.out.println(employeeArray.searchEmployee(101));

        employeeArray.deleteEmployee(102);

        System.out.println("\nAfter Deletion:");
        employeeArray.displayEmployees();
    }
}