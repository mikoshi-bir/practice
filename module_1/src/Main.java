import java.util.Random;
import java.util.Scanner;


public class Main {

    public static void main(String[] args) {

        String castle = "\uD83C\uDFF0";

        int step = 0;
        int sizeBoard = 5;

        Person person = new Person(sizeBoard);

        Random random = new Random();
        int castleX = random.nextInt(sizeBoard);
        int castleY = 0;

        String[][] board = new String[sizeBoard][sizeBoard];
        //строим сетку игрового поля
        for (int y = 0; y < sizeBoard; y++) {
            for (int x = 0; x < sizeBoard; x++) {
                board[y][x] = "  ";
            }
        }
        //обозначаем кол монстров
        int count_monster = sizeBoard * sizeBoard - sizeBoard - 5;

        //расставляем монстров
        Monster[] arrMonster = new Monster[count_monster + 1];
        int count = 0;
        boolean bossPlaced = false;

        while (count <= count_monster){
            Monster test;
            if (!bossPlaced && count == count_monster) {
                test = new SuperMonster(sizeBoard);
                bossPlaced = true;
            } else {
                int t = random.nextInt(3);
                if (t == 0) {
                    test = new Monster(sizeBoard);
                } else if (t == 1) {
                    test = new BigMonster(sizeBoard);
                } else {
                    test = new SmallMonster(sizeBoard);
                }

            }
            if (board[test.getY()][test.getX()].equals("  ")) {
                board[test.getY()][test.getX()] = test.getImage();
                arrMonster[count] = test;
                count++;
            }

        }

        board[castleY][castleX] = castle;

        System.out.println("Привет! Ты готов начать играть в игру? (Напиши: ДА или НЕТ)");

        Scanner scanner = new Scanner(System.in);
        String answer = scanner.nextLine();
        System.out.println("Ваш ответ:\t" + answer);

        switch (answer) {
            case "ДА", "Да", "да" -> {
                System.out.println("Начнем игру!");
                System.out.println("Выбери сложность игры(от 1 до 5):");
                int difficultGame = scanner.nextInt();
                System.out.println("Выбранная сложность:\t" + difficultGame);
                while (true) {
                    board[person.getY() - 1][person.getX() - 1] = person.getImage();
                    outputBoard(board, person.getLive());

                    System.out.println("Введите куда будет ходить персонаж(ход возможен только по вертикали и горизонтали на одну клетку;" +
                            "\nКоординаты персонажа - (x: " + person.getX() + ", y: " + person.getY() + "))");
                    int x = scanner.nextInt();
                    int y = scanner.nextInt();

                    // проверка возможности хода
                    if (person.isMoveCorrect(x, y)) {
                        String next = board[y-1][x-1];

                        if (next.equals("  ")) {
                            board[person.getY() - 1][person.getX() - 1] = "  ";
                            person.move(x, y);
                            step++;
                            System.out.println("Ход корректный; Новые координаты: " + person.getX() + ", " + person.getY() +
                                    "\nХод номер: " + step);
                        } else if (next.equals(castle)) {
                            System.out.println("Вы прошли игру!");
                            break;
                            //после должен быть блок задания монстра
                        } else {
                            for (Monster monster : arrMonster) {
                                if (monster.conflict(x, y)) {
                                    if (monster.taskMonster(difficultGame)) {
                                        board[person.getY()-1][person.getX()-1] = "  ";
                                        person.move(x,y);
                                    } else {
                                        person.downLife();
                                    }
                                    break;
                                }
                            }

                        }
                    } else {
                        System.out.println("Неккоректный ход");
                    }
                }
                if (person.getLive() <= 0) {
                    System.out.println("Закончились жизни. Итог: ...");
                    break;
                }

            }
            case "НЕТ" -> System.out.println("Жаль, приходи еще!");
            default -> System.out.println("Данные введены некорректно");
        }


    }
    //метод отрисовки игрового поля
    static void outputBoard(String[][] board, int live) {
        String leftBlock = "| ";
        String rightBlock = "|";
        String wall = "+ —— + —— + —— + —— + —— +";

        for (String[] raw : board) {
            System.out.println(wall);
            for (String col : raw) {
                System.out.print(leftBlock + col + "  ");
            }
            System.out.println(rightBlock);
        }
        System.out.println(wall);

        System.out.println("Количество жизней:\t" + live + "\n");
    }
}