import java.util.Scanner;

public class SmallMonster extends Monster {

    private String image = "\uD83E\uDDCC";

    SmallMonster(int sizeBoard) {
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
        System.out.println("Решите задачу:");
        int trueAnswer = difficultGame + difficultGame;
        System.out.println("Реши пример: " + difficultGame + " + " + difficultGame + " = ?");
        Scanner sc = new Scanner(System.in);
        int ans = sc.nextInt();
        if (trueAnswer == ans) {
            System.out.println("Верно! Ты победил монстра");
            return true;
        } else {
            System.out.println("Ты проиграл эту битву!");
            return false;
        }
    }
}
