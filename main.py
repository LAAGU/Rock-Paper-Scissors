import eel
import pygame
import sys
import os
import math

outfile = open("logfile.txt", "wt")
sys.stderr = outfile
sys.stdout = outfile




bundle_dir = getattr(sys, '_MEIPASS', os.path.abspath(os.path.dirname(__file__)))


def get_sfx_data(file_name):
    return os.path.join(bundle_dir, './bin/sfx', file_name)


pygame.init()

@eel.expose
def play_btn_sfx():
 pygame.mixer.music.load(get_sfx_data('btn.mp3'))
 pygame.mixer.music.play(start=0.9)

@eel.expose
def play_slide_sfx():
 sfx = pygame.mixer.Sound(get_sfx_data('slide.flac'))
 sfx.play()

@eel.expose
def play_swipe_sfx():
 sfx = pygame.mixer.Sound(get_sfx_data('swipe.wav'))
 sfx.play() 

@eel.expose
def play_win_sfx():
 sfx = pygame.mixer.Sound(get_sfx_data('win.wav'))
 sfx.set_volume(1.0)
 sfx.play() 

@eel.expose
def play_lose_sfx():
 sfx = pygame.mixer.Sound(get_sfx_data('lose.wav'))
 sfx.set_volume(0.4)
 sfx.play() 

@eel.expose
def play_draw_sfx():
 sfx = pygame.mixer.Sound(get_sfx_data('draw.wav'))
 sfx.play() 





eel.init('gui')





eel.start('index.html', mode='chrome',size=(1300,800),resizable=False)


