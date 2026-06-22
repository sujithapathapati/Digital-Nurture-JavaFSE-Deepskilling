public class TaskTest {

    public static void main(String[] args) {

        SinglyLinkedList taskList = new SinglyLinkedList();

        taskList.addTask(1, "Design UI", "Pending");
        taskList.addTask(2, "Write Code", "In Progress");
        taskList.addTask(3, "Testing", "Pending");

        System.out.println("Tasks:");
        taskList.displayTasks();

        System.out.println("\nSearching Task:");
        taskList.searchTask(2);

        taskList.deleteTask(2);

        System.out.println("\nAfter Deletion:");
        taskList.displayTasks();
    }
}