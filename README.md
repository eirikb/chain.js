chain.js
-

This is a simple hack to make any object chainable.  
Every function that returns undefined can be chained.  
The original object is aggregated.

Example
--

  chain(ctx).fillRect(10, 10, 10, 10).fillRect(30, 30, 10, 10); 
