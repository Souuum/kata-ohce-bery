import Greeter from './greeter';
import UI from './ui';

const main = () => {
  const greeter = new Greeter();
  const greetings = greeter.greet();
  console.log(greetings);

  const ui = new UI();
  ui.mainLoop();
}

main();
