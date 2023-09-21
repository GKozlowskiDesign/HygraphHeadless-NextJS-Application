# NextJS CMS Portfolio

The NextJS FullStack Portfolio project was conceived with two primary objectives. First and foremost, it aimed to optimize and create the third version of my portfolio, providing an enhanced showcase of my work and skills. Secondly, this project was not solely about personal presentation; it also served as a valuable learning opportunity. Throughout its development, I delved into a diverse array of cutting-edge technologies. These included libraries and tools such as "@graphcms/rich-text-react-renderer," "@splinetool/react-spline," "graphql," "next," "react," and "tailwindcss," among others. By incorporating these technologies into my portfolio project, I gained practical experience and expertise that enriched my development skills and expanded my toolkit.

# Table of Contents
<ul>
  <li>Featured</li>
  <li>Technologies</li>
  <li>Workflow</li>
  <li>Deployment</li>
  <li>Contributions</li>
  <li>License</li>
  <li>Acknowledgments</li>


</ul>

# Featured

1. Proficient in NextJS for building comprehensive applications, including managing environment variables, implementing SSL, and deploying on Vercel.
2. Successfully integrated Spline 3D objects, suitable for VR headset usage and on-site interaction.
3. Enhanced GraphQL skills for efficient data querying and manipulation.
4. Mastered the use of the headless content management system GraphCMS, now known as Hygraph.

   
# Technologies

- graphcms/rich-text-react-renderer
- splinetool/react-spline
- splinetool/runtime
- autoprefixer
- eslint
- eslint-config-next
- graphql
- graphql-request
- html-react-parser
- moment
- next
- postcss
- react
- react-dom
- react-icons
- react-multi-carousel
- sass
- swr
- tailwindcss


# Workflow
<h4>Downloading Correct Packages for Project:</h4>

- Ensure I downloaded the necessary packages to kickstart your project. 
- These packages are like building blocks that provide essential functionalities.
  
<h4>Downloading Extra Packages for Styling:</h4>

- To enhance styling, I added packages like "graphcms/rich-text-react-render" to customize and format text using Tailwind CSS.
- These packages can also help with creating off-page links for a seamless user experience.
  
<h4>Setting Up Git and GitHub Repo:</h4>

- Established a version control system using Git and create a repository on GitHub. 
- This enables you to track changes, collaborate with others, and sets the foundation for implementing Continuous Integration and Continuous Deployment (CI/CD) processes.

<h4>Setting Up Tailwind CSS:</h4>

- Configured Tailwind CSS to streamline my styling process. 
- Tailwind provided utility classes that make it easier to design and style projects without writing extensive custom CSS.

<h4>Setting Up SCSS:</h4>

- I also set up SCSS (Sass) to take advantage of its powerful features like variables, nesting, and modularization of styles.

<h4>Creating Pages:</h4>

- I began building my project by creating individual pages, which are the different views or sections of your application that users interact with.

<h4>Creating Components:</h4>

- Developed reusable components that encapsulate specific functionalities or UI elements, helping maintain a clean and organized codebase.

<h4>GraphQL Data Fetching:</h4>

- Utilized GraphQL to fetch data from your headless content management system, Hygraph (formerly known as GraphCMS). 
- This enabled me to import dynamic content and features into my components, making my website more versatile and content-rich.

# Deployment 
<h4>Step 1 - Initial Deployment Setup</h4>

- Logged into my Vercel account or create one if you don't have it already.
- Connected my Vercel account to your GitHub repository where my Next.js application code is hosted.

<h4>Step 2 - Project Configuration</h4>

- Select the GitHub repository containing my Next.js project in the Vercel dashboard.
- Configured the deployment settings, including the branch to deploy (usually "main" or "master").
- Defined environment variables if your application requires them, such as API keys or database connection strings.

<h4>Step 3 - Trigger Deployment</h4>

- Trigger the initial deployment by clicking the "Deploy" button. Vercel will automatically build and deploy your application.
- While deploying, Vercel will run tests to ensure everything is working correctly.

<h4>Step 4 - Debugging GraphQL Call</h4>

- After the initial deployment, I encountered issues with your GraphQL calls, and accessed the Vercel dashboard.
- Inspected the build logs and error messages to identify the issue. In my case, I noticed that one of my GraphQL calls stopped working.
- I debugged the GraphQL call by examining my code and the arguments being passed.
- I found that there was an empty argument causing the issue.
- Corrected the empty argument and updated my code.

<h4>Step 5 - Final Deployment</h4>

- Once I fixed the issue and tested it on the Vercel test site (provided during deployment), I confirmed that my GraphQL calls were working correctly.
- Everything looked good on the test site, so I merged my changes to the main branch and triggered another deployment.
- This deployment reflected my fixed GraphQL call and any other improvements I made.
- After successful deployment, my Next.js application was live on the actual domain I configured, and users could access it without issues.

# Contributing
<p>Contributions to the Website are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.</p>

# License
<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

# Acknowledgments
<p>The Website was developed by Gary Kozlowski.</p>
