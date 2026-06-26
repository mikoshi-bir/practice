package com.mygdx.game.screens;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.math.Vector3;
import com.badlogic.gdx.utils.ScreenUtils;
import com.mygdx.game.MyGdxGame;
import com.mygdx.game.components.MovingBackground;
import com.mygdx.game.components.TextButton;

public class ScreenMenu implements Screen {
    MyGdxGame myGdxGame;
    MovingBackground background;
    TextButton buttonStart, buttonExit;

    public ScreenMenu(MyGdxGame myGdxGame) {
        this.myGdxGame = myGdxGame;
        background = new MovingBackground("backgrounds/restart_bg.png");
        buttonStart = new TextButton(100, 400, "START");
        buttonExit = new TextButton(700, 400, "EXIT");
    }

    @Override
    public void show() {

    }

    @Override
    public void render(float delta) {
        ScreenUtils.clear(0, 0, 0, 1);

        myGdxGame.camera.update();
        myGdxGame.batch.setProjectionMatrix(myGdxGame.camera.combined);
        myGdxGame.batch.begin();

        background.draw(myGdxGame.batch);
        buttonStart.draw(myGdxGame.batch);
        buttonExit.draw(myGdxGame.batch);

        myGdxGame.batch.end();

        handleInput();
    }

    public void handleInput() {
        if (Gdx.input.justTouched()) {
            Vector3 touch = myGdxGame.camera.unproject(
                    new Vector3(Gdx.input.getX(), Gdx.input.getY(), 0)
            );
            if (buttonStart.isHit((int) touch.x, (int) touch.y)) {
                myGdxGame.setScreen(myGdxGame.screenGame);
                return;
            }
            if (buttonExit.isHit((int) touch.x, (int) touch.y)) {
                Gdx.app.exit();
            }
        }
    }

    @Override
    public void resize(int i, int i1) {

    }

    @Override
    public void pause() {

    }

    @Override
    public void resume() {

    }

    @Override
    public void hide() {

    }

    @Override
    public void dispose() {
        background.dispose();
        buttonStart.dispose();
        buttonExit.dispose();
    }
}
