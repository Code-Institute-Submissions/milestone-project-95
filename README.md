# My Memory and Me
The objective of this website is to provide an informative website for those who are worried they may be suffering from dementia or for individuals who suspect a family member/friend is suffering from dementia. 
The website provides a brief insight into what dementia is, what can cause dementia, how dementia is diagnosed and possible dementia treatments available. The main funciton of the site is designed towards 
individuals worried they might have dementia and be strugggling with short memory issues. The site has 2 games desinged to test memory and an alogrithm that gives you a feedback on your short-term memory
based on these games. Hence the main aim of this site is:

- To inform others about dementia
- To help with early diagnosis of dementia using memory games
- To provide information of the available support for dementia sufferer

The site is intented to have a simple easy to navigate design as the target audience will be the older members of the population as they are much more likely to suffer from dementia.

A live demo of the site can be found [here](https://johngc1510.github.io/milestone-project-2/)

### **Business Goals**
- To accurately inform others about dementia 
- To have a platform which can help spot early signs of dementia
- To imporve peoples awareness of the different types of support available to those suffering from dementia

### **Customer Goals**
- To obtain information about dementia
- To test their short term memory 
- To find local support/suport options if currently suffering from dementia
## UX
---
### **Ideal User**
- Anyone who is worried they may be suffering from dementia
- Anyone suffering from dementia
- Anyone who has a loved one/friend they are worried are showing sings of dementia  

### **User Stories**
1. As a new visitor I want the purpose of the website to be immediately clear
2. As a new vistor I want to know what dementia is
3. As a new visitor I want to be able to test my memory
4. As a new vistor I want to know support available to me
5. As a new visitor I want to know what causes dementia
6. As a new visitor I want to be able to enjoy the games
7. As a new visitor I want the games to be easy to play
8. As a new visitor I want to easily navigate the site
9. As a new visitor I want the results of my test to be clear and obvious.

### **Design Choices**

#### **Font**
 I used Montserrat for the headings and Roboto for the body as I beleive this looked professional and was clear and easy to read.

#### **Icons**
I used Font Awesome icons for my social media links and for my download icon as it gives a intuitive way for users to access the sites social media. I also used Font Awesome icons to make my drop down and mute buttons 
more intuitive to users. 

#### **Colors**
The color scheme was light grey - blue. This is based on the blue color of the logo which has a strong association with the alzheimers society. I wanted everything to be clear and easy to read so I kept 
the colour scheme simple. Choosing grey and blue as the colours complement each other well. 

#### **Hero Image**
I wanted the hero image to fit the theme of the site and believe it does lead you to think about mind/memory when you view it. Over the hero image is text and a call to action button to take the memory tests which
is the sites primary focus. 

#### **About Dementia section**
I wanted the site to be informative as well as providing a simple way to test your memory. I used drop down boxes to contain the infomration as it keeps the site looking neat and does not overwhelm with the volume of text.
There is a lot of information available within the drop-down boxes and by having it contained within the boxes I beleive it to be more user friendly and less intimidating than scrolling down and seeing 6 large blocks of text.

#### **Memory Tests Page**
I wanted the design of this page to be simple, giving easy access to both games and to your combined results. I wanted each games header and image to represent the game so the user would already have an idea how to play 
before navigating to the games page and reading the instructions.

#### **Game One**
I wanted the design of the game to be simple with clear instructions. I wanted it to be intutive to play with clear buttons to start, reset the board and mute the music if you wish. 

#### **Game Two**
I wanted game 2 to have a clear and obvious flash when the game was playing to make the game easy to play. I also wanted the cicrcles to have basic 3d effects to look more like buttons you would press to increase intuitivety.  

#### **Support Page**
The support page designed to not overwhelm the users with information and allow them to access it at their own page. Alongisde the information boxes is a map which shows locations where the different types of support could be found
in the major cities in the UK.

### **Wireframes**
#### Index Wireframe

<img src="assets/images/index-wireframe.PNG" alt="wireframe of index page" width="1500px" style="margin-left:20px;">

#### Memory Games Wireframe

<img src="assets/images/memory-games-wireframe.PNG" alt="wireframe of index page" width="1500px" style="margin-left:20px;">

#### Support Wireframe

<img src="assets/images/support-wireframe.PNG" alt="wireframe of index page" width="1500px" style="margin-left:20px;">


## Features
---
### **Existing Feautres**
- The website is responsive on all device sizes.
- Both game 1 and 2 are fully functional and allow you to mute sound if wanted.
- Fixed navigation bar on mobile for easy navigation.
- Results button gives feedback for both game 1 and game 2.

### **Differences from wireframes**
- I initially wanted to have both games embedded on the memory games page but on desktop it meant the games had to be too small and could have lead to issues with users clicking between games so made both the games on 
a seperate page and just linked to them from the memory games page.
- I swapped the map and the support information on the support page as it is more intutive to have information about support then lcoations you can receive support. 

### **Features left to implement**
- To add better 3-d effects to my buttons in game 2 and add a flattening animation when you click on the button to give a feeling of actually pressing a button. 
- Add functionality for users to create a account on the site and then keep track of their scores over weeks to give a indication if memory is improving with regular practice. 

## Technologies Used
---
This project used the languages HTML5, javascript and CSS3.

- [jQuery](https://jquery.com/) - The jQuery library was used on all pages.
- [GitPod](https://gitpod.io/workspaces/) - The entire website was developed in GitPod
- [GitHub](https://github.com/) - GitHub was used to store the project and to deploy it using the master branch on the github site
- [Bootstrap](https://getbootstrap.com/) - The grid structure was used to structure the website and make it responsive and some default items in bootstrap were used as a starting point
- [FontAwesome](https://fontawesome.com/) - Font Awesome was used for the social media icons




## Testing
---
### **Code Validation**
- All pages have been put through the [HTML validator](https://validator.w3.org/) and the [CSS validator](https://jigsaw.w3.org/css-validator/) to ensure no syntax errors. 
- With CSS validator discovered missing } causing an error.
- Using HTML5 validator on index.html I had nested a button inside an anchor - I fixed this issue by removing the button and styling the anchor as a button.
### **User Story Testing**


### **Manual Testing**   



## Deployment
---
The site is hosted usig GitHub and has been deployed directly from the master branch. The master branch was the only branch used for this website. I deployed the site by:
1. On GitHuB navigating to my sites repositroy.
2. Whilst in the first-milestone-project repositroy click on settings.
3. Scroll down until you come to the "source" drop-down menu and select master branch as the publishing source.

## Credits
---
### **Code**
- [Bootstrap 4](https://getbootstrap.com/): Bootstrap library used throughout main project - used the cards template, the grid system, modals and the default slider with custom css.
- [Embedded Google Map](https://mdbootstrap.com/docs/jquery/javascript/google-maps/): Copied the code from this link to embedd the google map on my about-us page.
- [Dulled Slider Image](https://stackoverflow.com/questions/44463690/darkening-a-background-image-on-a-bootstrap-carousel) Used this thread to find the solution of how to add a transparent background to my slider for text contrast.
- The code institue mini projects for the resume and the whiksey project were also referenced on occasions

### **Media**
- All background images taken from [unsplash](https://unsplash.com/s/photos/gym)
- Images of celebreties and people taken from respective wikipedia pages
- Gym logo used taken from [Gold's Gym](https://www.goldsgym.com/) - I own no rights to this image. 

### **Acknowledgements**
- My mentor Anthony Montaro for his fantastic support and assistance
- The slack community for their continued support