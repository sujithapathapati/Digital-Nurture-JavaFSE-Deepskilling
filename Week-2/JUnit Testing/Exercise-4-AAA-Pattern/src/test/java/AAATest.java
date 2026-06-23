import org.junit.After;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class AAATest {

    private int number;

    @Before
    public void setUp() {
        number = 10;
        System.out.println("Setup executed");
    }

    @Test
    public void testAddition() {

        // Arrange
        int value = number;

        // Act
        int result = value + 5;

        // Assert
        assertEquals(15, result);
    }

    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }
}