public class MVCPatternTest {

    public static void main(String[] args) {

        Student model =
                new Student("Sujitha", "23NM1A05C7", "A");

        StudentView view = new StudentView();

        StudentController controller =
                new StudentController(model, view);

        controller.updateView();

        System.out.println("\nAfter Update:");

        controller.setStudentGrade("A+");

        controller.updateView();
    }
}