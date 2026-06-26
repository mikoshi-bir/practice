package com.mygdx.game.characters;

import static com.mygdx.game.MyGdxGame.SCR_HEIGHT;
import static com.mygdx.game.MyGdxGame.SCR_WIDTH;

import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.Batch;

import java.util.Random;

public class Tube {

    Random r = new Random();

    Texture textureUpperTube;
    Texture textureDownTube;
    final int width = 200;
    final int height = 700;
    int gapHeight = 400;
    int padding = 100;
    int x;
    int distanceBetweenTubes;
    int speed = 10;
    int gapY;
    boolean isPointReceived;


    public Tube(int tubeCount, int tubeIdx) {
        gapY = gapHeight / 2 + r.nextInt(SCR_HEIGHT - 2 * (padding + gapHeight / 2));
        distanceBetweenTubes = (SCR_WIDTH + width) / (tubeCount - 1);
        x = distanceBetweenTubes * tubeIdx + SCR_WIDTH;

        textureUpperTube = new Texture("tubes/tube_flipped.png");
        textureDownTube = new Texture("tubes/tube.png");
        isPointReceived = false;
    }

    public void draw(Batch batch) {
        batch.draw(textureUpperTube, x, gapY + gapHeight / 2, width, height);
        batch.draw(textureDownTube, x, gapY - gapHeight / 2 - height, width, height);
    }

    public void move() {
        x -= speed;
        if (x < -width) {
            isPointReceived = false;
            x = SCR_WIDTH + distanceBetweenTubes;
            gapY = gapHeight / 2 + padding + r.nextInt(SCR_HEIGHT - 2 * (padding + gapHeight / 2));
        }
    }

    public boolean isHit (Bird bird) {
        if (bird.x + bird.width >= x && bird.x == x + width && bird.y <= gapY - gapHeight / 2) {
            return true;
        }
        if (bird.y + bird.height >= gapY + gapHeight / 2 && bird.x + bird.width >= x && bird.x <= x)
            return true;
        return false;
    }

    public boolean needAddPoint(Bird bird) {
        return bird.x > x + width && !isPointReceived;
    }
    public void setPointReceived() {
        isPointReceived = true;
    }

    public void dispose() {
        textureUpperTube.dispose();
        textureDownTube.dispose();
    }
}
