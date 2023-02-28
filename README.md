# ANABADA

[Korean README](https://github.com/dgd03146/anabada-frontEnd/blob/develop/README-KOR.md)

<img width="500" alt="스크린샷 2022-11-14 오후 9 39 20" src="https://user-images.githubusercontent.com/108744804/201662715-33f3cb60-eebd-4f3e-be7e-cb3fd032ea0f.png">


## 📢 Project Introduction

> I'm interested in surfing, but are you afraid to do it for the first time?
> Or do you want to find people to enjoy surfing with?
> Do you want to share your surfing places with people?
> Do you have any?
> Everyone's surfing community for those people **<span style="background-color:rgba(0,0,0,0.2);padding:0.2rem;font-size:1rem;border-radius:5px">Anabada</span>**!
> Find friends to enjoy surfing together through Anabada!
> With Anabada, you can share many surfing 🍯 tips
> You can easily find surfing attractions all over the country!
> Don't worry about surfing alone now!!

[Project Link](https://ohanabada.com)


# 🎬 Demonstration video

[Live Demo](https://youtu.be/yqPqLyo_uOw)


## 📅 Project Duration

August 5, 2022 to September 15, 2022


## **🔨 Technology and Library**

|                                                   React-Query                                                   |                                                    FireStore                                                    |                                                     React                                                      |                                  Redux-toolkit                                  |                             Stomp.js                              |                                                    Websocket                                                    |                                                           Github                                                            |                                                           Notion                                                           |                                                           S3                                                            |
| :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :---------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://velog.velcdn.com/images/hyunjoong/post/c534bf30-87d9-4f5d-a600-71e3a09e3b75/image.png"></img> | <img src="https://velog.velcdn.com/images/chdb57/post/308a60cf-b46d-46b7-9b6e-cbb43c647bbc/firebase.png"></img> | <img  src="https://images.velog.io/images/jini_eun/post/107f5cfb-e97c-4c4c-b997-06098062e5b3/image.png"></img> | <img src="https://miro.medium.com/max/800/1*x2Y1VlQTzujsU48Lz9g2wg.jpeg"></img> | <img src="https://stomp.github.io/images/project-logo.png"></img> | <img src="https://velog.velcdn.com/images/wnduf8922/post/b3f23e4b-def8-45b7-a52a-31aab2daef76/image.png"></img> | <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"></img> | <img src="https://play-lh.googleusercontent.com/MwWEBBjTzLiqWbiItGk49Yae_4dmGHHIq0iYfOjFmegIirZk5waqG4ufff24pfuUvA"></img> | <img src="https://velog.velcdn.com/images%2Ftastestar%2Fpost%2F6e43d84c-09ae-40f6-a306-10688f28975e%2Fimage.png"></img> |


## ✨ Role

### GeoJungIm - Team Leader

| Features | Remarks |
| :------------: | :-----------------------------------------------: |
| Open Meeting CRUD | Create Open Meeting Delete Modify |
| Search and categorization | Search meeting posts and categorize by region |
| Real-time Chat | Real-time Chat with websocket and stomp |
| Introduction Page | Use the swiper to provide convenience to users |

👨‍👨‍ Frontend 3 | Backend 3 | Designer 1

<br/>

## 💡 Core Features

### 🗺️ **Surfing Spot**

- You can check the weather information of the beach through Kakao Map!
- You can easily and quickly find a beach where you can surf by searching!

### 📝 **POSTING**

- You can upload images and introduce surfing-related information through posts!
- You can collect posts through the Like function!

### 🧑🤝🧑 **Open Meeting**

- You can use the Open Meeting tab to open and participate in meetings!
- You can specify a date for the meeting to take place on a specific date!
- You can set the number of people to participate in the meeting, and you can also specify how long you want to recruit the meeting!
- You can check the list and the number of people who participated in the meeting!
- You can collect and check the popular groups selected based on the number of views!

### 💬 **One-on-one chat**

- You can send a 1:1 chat right away by clicking on the other person's nickname!
- When you enter the chat room, you can exchange conversations with the other person in real time!

### 🔔 **Real-time notifications**

- I like what I wroteWow, if you add comments, you can check it out with a real-time notification!
- You can distinguish between read and unread alerts!

<br/>

## 🗣 User Feedback

### 1) Intro page
- I think it would be nice to have an introduction tab on the homepage introduction tab.
- It would be nice to produce a separate home screen and present the functions along with the service description.
- When I used it on my mobile, I was embarrassed because only the map came out alone at the beginning. I think it would be nice to add a way to use it.

👉🏻 Reflect feedback
- Create an intro page consisting of service introduction, map usage, and chat buttons, and provide convenience to users using swiper.

---

### 2) Use the map
- I felt that too many clicks were needed in the process of searching for surfing spots on the main page.
- I wish I could search for the area or the beach.
- I want to print out various surfing spots in the area with a click on the map. I think I can feel tired because I press a lot of buttons.

👉🏻 Reflect feedback
- A search function including an automatic completion function is added to make it easier for users to search the beach.

---

### 3) Cross Browsing-Safari
- When you use it on Safari, you cannot scroll down, raise it back to the top, log in, and click on membership.

👉🏻 Reflect feedback
- By writing the defense code, the phenomenon of not being able to click on membership is prevented.

---

### 4) Other UI
- I think it would be good to change the function of the main screen to a more intuitive name.
- It took a long time to find the ability to chat to users even after reading Google Forms and recognizing that there is a chat function. I think it'll be easy to find if the button size is a little bigger.

👉🏻 Reflect feedback
- Change the name of the main screen to Surfing Spot so that you can intuitively.
- Add a description of the chat function to the intro page, and increase the size of the button to make it easier to find.

<br/>

## 💫Trouble Shooting

### 1) Reactive header according to scroll direction

- Attempt to implement reactive headers where the headers rise and fall according to the direction of the scroll

- Throttling is implemented with setTimeout to control many scroll events. Set the setTime to 50ms for smooth header movement

### ❓Problem status

- When a large amount of scrolling occurs for a short time, the movement of the header stops (chrome, safari, whale, edge occurs the same)

### ✏️Troubleshooting

- Since the problem has not been solved by using the loadash internal throttle, there is no problem with the existing logic.
- Oriented to the problem in the call stack, and measured the call stack capacity of approximately 14,000 based on the chrome 93 version. If there are many scrolls at once, it is judged that there can be a problem in the call stack.
- Throttling logic is completely removed.
- After that, there was a problem with the bounce scroll phenomenon in safari, but it was additionally solved through the defense code.

---

### 2) Add Kakao Map Marker in React

- Marker rendering failed on Kakao map

### ❓Problem status

- Kakao Map is a method of injecting pre-written markers with html tags through a function to add markers to the cluster. In this way, the markers are not rendered in React.

### ✏️Troubleshooting

- To prevent XSS, eact sets Symbol("react.element") to a value in the $$typeof entry of all jsx objects, and refuses to generate an element without this value.Marker element rejected because this part is a problem.
- Using react kakao sdk, third-party packages refactored with react components create markers in the same way as regular components to solve the problem

---

### 3) Unlimited scrolling of chat messages

- In the process of scrolling the previous message indefinitely, all messages are received at once

### ❓Problem status

- When the inview is exposed to the screen, the data is requested, but the previous message has a tag above that observes the inview because it has to scroll up. In this case, the view is constantly exposed on the screen, so it continues to request data, so it receives all data at once.

### ✏️Troubleshooting

- Through the useEffect syntax, the inviw is exposed to the screen and requests only when there is a message.
- Because the view continues to be exposed even if there is a message, scroll adjustment prevents the view from being exposed to the screen whenever there is a message.
- Resolve the problem by keeping the scroll position where the last chat was before loading new data whenever a message was changed.

---

### 4) Client socket issues

- The phenomenon of client creation per rendering and socket connection

### ❓Problem status

- When connecting sockets, two connections were found, and client was declared as a variable and repeatedly created client every rendering.

### ✏️Troubleshooting

- I didn't want to keep the value even if it was re-rendering, and I didn't want to make re-rendering happen even if the stompClient was given a value. Since the connection is made with the client you created, I think the client should be maintained to maintain the connection.
- Resolve stompClient by managing it as useRef.

---

### 5) Query mutation problem

- Problems that cannot be reflected immediately when changing server data

### ❓Problem status

- When there is a correction of the data received by the query, the validation was made using mutation, but the invalidation was not working properly. Determined to be a problem with the user experience.

### ✏️Troubleshooting

- I think it is not recognized as the same query key, so I manage the query key separately and use the same query key.
- The callback of mutation.mutate does not work normally when the component is unmounted.
- The invalidte operation was performed using the return statement and async wait, but some problems did not work.
- Modify the value of the refreshType option in invalidteQueries to 'all' to validate all of the same query keys.

---

### 6) Problems with using cache data during prefetching

- Network requests will be made without cache data from the cache

### ❓Problem status

- I received data from reaction query to prefetch in advance and stored it in cache, but I made a network request without using the data in the cache.

### ✏️Troubleshooting

- The styleTime received in useQuery has default of 0, so I made a request to receive new data without using the data in the existing cache.

## **Other**

[Notion Link](https://www.notion.so/503e00648f9d4e148496fb244b05be26)
