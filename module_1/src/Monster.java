import java.util.Random;
import java.util.Scanner;

public class Monster {
    private final int x, y;
    private String image = "\uD83E\uDDCC";
    Random r = new Random();

    Monster (int sizeBoard) {
        this.x = r.nextInt(sizeBoard);
        this.y = r.nextInt(sizeBoard - 1);
    }
    public String getImage() {
        return image;
    }
    public int getX() {
        return x;
    }
    public int getY() {
        return y;
    }
    public boolean conflict(int perX, int perY) {
        return perY-1 == this.y && perX-1 == this.x;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean taskMonster(int difficultGame) {
        System.out.println("Решите задачу:");
        int a = r.nextInt(100);
        int b = r.nextInt(100);
        int trueAnswer = a + b;
        System.out.println("Задача: " + a + " + " + b + " = ?");
        Scanner sc = new Scanner(System.in);
        int answer = sc.nextInt();
        if (trueAnswer == answer) {
            System.out.println("Верно! Ты победил монстра.");
            return true;
        } else {
            System.out.println("Неверно( Ты проиграл эту битву.");
            return false;
        }
    }
}
