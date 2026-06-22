public class SearchTest {
    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Keyboard", "Electronics"),
                new Product(102, "Laptop", "Electronics"),
                new Product(103, "Mouse", "Electronics"),
                new Product(104, "Phone", "Electronics")
        };

        Product result1 = SearchOperations.linearSearch(products, "Mouse");

        System.out.println("Linear Search Result:");
        System.out.println(result1);

        Product result2 = SearchOperations.binarySearch(products, "Mouse");

        System.out.println("\nBinary Search Result:");
        System.out.println(result2);
    }
}