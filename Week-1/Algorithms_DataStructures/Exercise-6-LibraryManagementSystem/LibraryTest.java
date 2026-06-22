public class LibraryTest {

    public static void main(String[] args) {

        Book[] books = {
                new Book(1, "C Programming", "Dennis Ritchie"),
                new Book(2, "Data Structures", "Mark Allen"),
                new Book(3, "Java Programming", "James Gosling"),
                new Book(4, "Python Basics", "Guido")
        };

        System.out.println("Linear Search:");
        System.out.println(
                LibrarySearch.linearSearch(books, "Java Programming")
        );

        System.out.println("\nBinary Search:");
        System.out.println(
                LibrarySearch.binarySearch(books, "Java Programming")
        );
    }
}