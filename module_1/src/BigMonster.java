import java.util.Scanner;


public class BigMonster extends Monster {

    private String image = "\uD83E\uDDCC";

    @Override
            public String getImage() {
        return image;
    }
    @Override
            public void setImage(String image) {
        this.image = image;
    }
    BigMonster(int sizeBoard) {
        super(sizeBoard);
    }

    @Override
    public boolean taskMonster(int difficultGame) {
        System.out.println("Решите задачу:");
        if (difficultGame == 1) {
            return taskMonster();
        } else {
            int x = r.nextInt(10 * (difficultGame-1), 10 * difficultGame);
            int y = r.nextInt(10 * (difficultGame-1), 10 * difficultGame);
            int z = r.nextInt(100 * (difficultGame-1), 100 * difficultGame);
            int trueAnsw = x*y-z;
            System.out.println("Решите пример: " + x + " * " + y + " - " + z + " = ?");
            Scanner sc = new Scanner(System.in);
            int answ = sc.nextInt();
            if (trueAnsw == answ) {
                System.out.println("Верно! Ты победил монстра!");
                return true;
            } else {
                System.out.println("Неверно! Ты проиграл эту битву(");
                return false;
            }
        }

    };
    public boolean taskMonster() {
        return super.taskMonster(0);
    }
}
