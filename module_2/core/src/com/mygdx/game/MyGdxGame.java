package com.mygdx.game;

import com.badlogic.gdx.Game;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.mygdx.game.screens.ScreenGame;
import com.mygdx.game.screens.ScreenMenu;
import com.mygdx.game.screens.ScreenRestart;

public class MyGdxGame extends Game {
	public SpriteBatch batch;
	public ScreenGame screenGame;
	public ScreenRestart screenRestart;
	public ScreenMenu screenMenu;

	public static final int SCR_WIDTH = 1280;
	public static final int SCR_HEIGHT = 720;
	public OrthographicCamera camera;


	
	@Override
	public void create () {
		batch = new SpriteBatch();
		camera = new OrthographicCamera();
		camera.setToOrtho(false, SCR_WIDTH, SCR_HEIGHT);

		screenMenu = new ScreenMenu(this);
		screenGame = new ScreenGame(this);
		screenRestart = new ScreenRestart(this);
		setScreen(screenMenu);
	}

	@Override
	public void render() {
		super.render();
	}


	
	@Override
	public void dispose () {
		batch.dispose();
	}
}
