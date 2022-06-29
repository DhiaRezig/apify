# apify
  This is a nodejs project. You can simply clone it and run 'npm i' to install it on your local machine. <br />
  You can find the function containing the algorithm, which will make sure all products are scrapped and accumulate all products, in '/service/product' <br />
The algorithm is simple: apply the dichotomous search until the total number of products equals the number of products returned by the imaginary API, then continue the search to find the next point until the total price range is covered. <br />
  For testing purposes, I created the file '/service/data' to simulate the imaginary API: I generated a "mock.json" file containing a list of 1000 products and then created a function that reads this file and filters all objects by minimum and maximum price and only sends 10 products at a time (the site I'm using to generate random data only creates 1000 objects, hence the use of 10/1000 to simulate the 1000/100000 in the exercise).<br />
  To test the algorithm, you can find the tests in '/test/product.test' where I used Jest to write a simple code that tests the result of the range (0,5000) which is a random range. <br />
  To apply the test you can simply use the command npm test. <br />
  I hope everything is clear, don't hesitate to contact me for more explanations.
