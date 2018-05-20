# HelpER
Helping injured people get help faster by directing them to the most suitable emergency room.

Winner of the design award at [Gothenburg Startup Hack](http://www.gbgstartuphack.com/) 2018

## Approach
HelpEr guides patients to the most suitable emergency room with respect to the current number of people waiting, the specific injury, historical data and current location. By combining all these factors, patiens can be guided to the right emergency room and get help faster while at the same time minimizing the workload of the staff.

## Techniques
The frontend is built with React and sass for styling. Communication with the API is done over HTTP with a Node.js/Express backend. The historical data is used as input to a neural network which was trained and built with Python and this network is used to provide accurate recommendations and predict waiting time for different ERs. All this is tied together in a microservice fashion and deployed on a virtual private server at DigitalOcean.

## Try it out
HelpER can be tried out at [helper.lejonkulan.ninja](https://helper.lejonkulan.ninja). Mobile only.

## Team
* [Johan Angséus](https://github.com/angseus)
* [Simon Takman](https://github.com/SimonTakman)
* [Tim Kerschbaumer](https://github.com/timkersch)
* [Marcus Hultman](https://github.com/marcushultman)
* [Axel Niklasson](https://github.com/axelniklasson)
