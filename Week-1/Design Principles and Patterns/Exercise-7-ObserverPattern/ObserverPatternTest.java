public class ObserverPatternTest {

    public static void main(String[] args) {

        StockMarket stock = new StockMarket("TCS");

        Observer mobileUser = new MobileApp("Sujitha");
        Observer webUser = new WebApp("Admin");

        stock.registerObserver(mobileUser);
        stock.registerObserver(webUser);

        stock.setPrice(3850.50);
    }
}