# Assignment submission

## Challenges and workarounds

- I have a windows 8.1 machine and because of that it does not qualify minimum requirements for docker for windows and had to work with docker toolbox.
- Had to go for docker because in windows machine even with node 13 the server code was not compiling while running `yarn start` or `npm start` in the server folder (some issue with isolate module).
- The yarn lock file had links for the local artifact repository, which was unreachable so had to delete that to be able to fetch the dependencies from global repo.
- This is the first time I used websocket.

## Demo

![](demo.gif)
