# Retryable Email service

First, I deeply sorry about this assignment. I'd like to tell you that some of the features are not have finished yet.

## Describe the architect
### Backend service
- Use `Typescript` as a mainly to develop.
- Use `MongoDB` to be a storage of mailing history.
- Use `RxJS` (Beginner level) to handle all these logics to have retryable.
- Use `Sendmail and SparkPost` to be the Email providers.
- Use `docker composes` to start the application on the production (TBD) sorry about that.

### Frontend service
- Use `React` to be the mainstream of viewing those UI components.
- Use `Stylus` to adjust the styling.

The problem 

	The modern of email providers are working on REST API and SMTP protocols. If the base of Email provider is going down or failover. The customer won't be happy because they will be lost the newsletter from our product.
 
  So...How to solve it?
  
	We gonna have the MongoDB to keep any of change those items. That's a simple rule. MongoDB is able to queue service. Because It's fast and sustainable to collect every single data (If we had the robust server).
	Ok, the important this is RXJS. Honestly, This is my first time to use it. So You might have a question. Why did you choose the RXJS to be a part of my assignment?
	the answer is..... RXJS can easily explain the system and it reduces writing mistakes of imperative code. It also makes the test easier.

### How to run the assignment
## For Development mode (running on nodemon processor)
- yarn dev
## For Production mode (node processor)
-  OOps. It not have finished yet. Sorry about that

## For starting a Docker (only Backend side)
- docker-compose up
