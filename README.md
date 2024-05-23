# JS-Gacha-System
A Gacha-like (lootbox) system using JS

Took some of Frieren: Beyond Journey's End character in a list in no particual order to generate a list of available "heroes" (RIP some of the Mages in the Common area).

I've always been curious with how the Gacha system would work in some of the games I've played before, so decided to try implementing my own. Nothing too fancy and I bet it can be improved a lot, but for my purposes this is enough.

Everything is JS, so you can just paste them into the Developer's Console in your browser and test. Feel free to change the hero list too, just beware of the necessary properties for the algorythm to be able to run.

## Usage

If you're not a developer and stubled here by accident, here's how to run things:
Make any changes (if any) to the Heroes array. Just be sure that every hero still has the `rarity`, `name` and `ratio` properties. All other functions will make use of those keys, so if they're absent it will break.
Go into the Developer's Console (F12, or right click -> inspect element -> console) and paste the contents of the `getRandomWeighted.js` file.
Now there are two things you can do: run the `getRandomWeighted` function once, or run it 100 times to test out the spread of heroes you'll get with the `run100times` function. 

To run once: invoke the `getRandomWeighted(heroes)` in the console and press enteer.
To run 100 times: `run100times()` in the console and press enter.

Have fun on your casino!
