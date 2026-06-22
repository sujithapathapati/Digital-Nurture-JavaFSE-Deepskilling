public class SortTest {

    public static void main(String[] args) {

        Order[] orders = {
                new Order(1, "Sujitha", 2500),
                new Order(2, "Rahul", 1000),
                new Order(3, "Anu", 4500),
                new Order(4, "Kiran", 3000)
        };

        System.out.println("Before Sorting:");
        for (Order order : orders) {
            System.out.println(order);
        }

        QuickSort.sort(orders, 0, orders.length - 1);

        System.out.println("\nAfter Quick Sort:");
        for (Order order : orders) {
            System.out.println(order);
        }
    }
}