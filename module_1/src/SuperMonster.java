import java.util.Random;
import java.util.Scanner;

public class SuperMonster extends Monster {
    private String image = "👹";
    SuperMonster(int sizeBoard) {
        super(sizeBoard);
    }

    @Override
        public String getImage() {
        return image;
    }
    @Override
    public void setImage(String image) {
        this.image = image;
    }
    @Override
    public boolean taskMonster(int difficultGame) {
        return bossFight(difficultGame);
    }

    public boolean bossFight(int difficultGame) {
        System.out.println("Ты встретил БОССА! У тебя особое испытание!");

        int maxNumber = difficultGame * 10;
        int secret = new Random().nextInt(maxNumber) + 1;
        int attempts = 3;

        System.out.println("БОСС загадал число от 1 до " + maxNumber + ". Ты должен отгадать число. У тебя " + attempts + "попытки.");

        while (attempts > 0) {
            System.out.print("Твоя догадка: ");
            Scanner sc = new Scanner(System.in);
            int guess = sc.nextInt();
            if (guess == secret) {
                System.out.println("Молодец! Ты отгадал число!");
                return true;
            } else if (guess > secret) {
                System.out.println("Загаданное число меньше.");
            } else {
                System.out.println("Загаданное число больше.");
            }
            attempts--;
        }
        System.out.println("Ты не угадал число. Босс победил тебя.");
        return false;
    }
}
