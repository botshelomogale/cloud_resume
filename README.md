Cloud Resume

A personal resume website built and deployed using AWS cloud services. This project is based on the Cloud Resume Challenge and demonstrates my experience with cloud infrastructure, serverless services, CI/CD, and frontend development.

 Live Website

Resume:
https://d3o3pybnksf80e.cloudfront.net

 Technologies Used
Frontend
HTML
CSS
JavaScript
AWS
Amazon S3 — Stores the website files
Amazon CloudFront — Delivers the website securely over HTTPS
Amazon API Gateway — Provides the visitor counter API
AWS Lambda — Processes visitor count requests
Amazon DynamoDB — Stores the visitor count
AWS IAM — Manages permissions and access
GitHub Actions + AWS OIDC — Automates deployment
                  
 Project Features
 
Responsive personal resume website
Hosted using Amazon S3
Delivered through Amazon CloudFront
HTTPS-enabled website delivery
Automated deployment through GitHub Actions
AWS authentication using GitHub OIDC
Serverless visitor counter
Visitor count stored in DynamoDB
API endpoint created using API Gateway
Lambda function updates the visitor count

 Visitor Counter

The website includes a serverless visitor counter.

When someone visits the website:

JavaScript sends a request to the API.
API Gateway receives the request.
API Gateway invokes the Lambda function.
Lambda updates the visitor count in DynamoDB.
The updated count is returned to the website.
JavaScript displays the count on the page.
 CI/CD

The project uses GitHub Actions to automatically deploy changes whenever code is pushed to the main branch.

The workflow:

Checks out the repository.
Authenticates with AWS using OIDC.
Syncs the website files to Amazon S3.
Invalidates the CloudFront cache.
Makes the updated website available through CloudFront.

This means changes can be pushed to GitHub without manually uploading the website files to AWS.

 Security

The project uses AWS IAM and GitHub's OIDC integration instead of storing long-lived AWS access keys in GitHub.

CloudFront uses an Origin Access Control (OAC) to securely access the private S3 bucket.

What I Learned

Through this project, I gained practical experience with:

Deploying a website using AWS
Working with Amazon S3 and CloudFront
Creating serverless applications
Connecting API Gateway, Lambda, and DynamoDB
Managing AWS IAM permissions
Setting up GitHub Actions
Using OIDC for secure AWS authentication
Working with APIs from JavaScript
Debugging cloud deployment issues

Your verification code:

WTC-C2PDT5JF

