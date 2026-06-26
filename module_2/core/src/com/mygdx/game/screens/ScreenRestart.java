package com.mygdx.game.screens;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.math.Vector3;
import com.badlogic.gdx.utils.ScreenUtils;
import com.mygdx.game.MyGdxGame;
import com.mygdx.game.components.MovingBackground;
import com.mygdx.game.components.PointCounter;
import com.mygdx.game.components.TextButton;

public class ScreenRestart implements Screen {
    MyGdxGame myGdxGame;
    MovingBackground background;
    TextButton buttonRestart;
    TextButton buttonExit;
    PointCounter pointCounter;
    int gamePoints;

    public ScreenRestart (MyGdxGame myGdxGame) {
        this.myGdxGame = myGdxGame;
        background = new MovingBackground("backgrounds/restart_bg.png");
        buttonRestart = new TextButton(100, 450, "Restart");
        buttonExit = new TextButton(100, 200, "Exit");
        pointCounter = new PointCounter(750, 530);
    }

    @Override
    public void show() { }

    @Override
    public void render(float delta) {
        ScreenUtils.clear(1, 0,0,1);
        myGdxGame.camera.update();
        myGdxGame.batch.setProjectionMatrix(myGdxGame.camera.combined);
        myGdxGame.batch.begin();

        background.draw(myGdxGame.batch);
        buttonRestart.draw(myGdxGame.batch);
        buttonExit.draw(myGdxGame.batch);
        pointCounter.draw(myGdxGame.batch, gamePoints);

        myGdxGame.batch.end();

        if (Gdx.input.justTouched()) {
            Vector3 touch = myGdxGame.camera.unproject(
                    new Vector3(Gdx.input.getX(), Gdx.input.getY(), 0)
            );
            if (buttonRestart.isHit((int) touch.x, (int) touch.y)) {
                System.out.println("HIT RESTART BUTTON");
                myGdxGame.setScreen(myGdxGame.screenGame);
            }
            if (buttonExit.isHit((int) touch.x, (int) touch.y)) {
                Gdx.app.exit();
            }
        }
    }

    @Override
    public void resize(int width, int height) { }

    @Override
    public void pause() { }

    @Override
    public void resume() { }

    @Override
    public void hide() { }

    @Override
    public void dispose() {
        background.dispose();
        buttonRestart.dispose();
    }
}

