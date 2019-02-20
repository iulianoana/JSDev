import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger; // use debugger keyword to add a breakpoint.
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
