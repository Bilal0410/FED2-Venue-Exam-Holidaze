# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Report

FED2 Exam Report

- Introduction

This website is built using Vite and React with JavaScript. Vite is a fast build tool for web development, offering quick start-up times and efficient builds. React is used for creating dynamic user interfaces. To get started, make sure you have Vite installed, and explore the JavaScript-written React components for a responsive web experience.

For this exam the brief was to develop a modern website for Holidaze, an accommodation booking site. The project involved creating both a customer-facing and an admin-facing interface, focusing on a seamless user experience and adhering to specified technical and design guidelines.

- Planning and Preparation

For project management and task tracking, I used Trello, which allowed for organized planning and efficient workflow management. Figma was utilized for designing the user interface and user experience, ensuring a visually appealing and user-friendly design. The Holidaze API documentation was referenced extensively to understand the endpoints and data structures needed for integration.

- Tools and Technologies

I used React as the JavaScript framework due to its components-based architecture and robust ecosystem. Tailwind CSS was used as the CSS framework for its utility-first approach, which facilitated rapid and responsive design. The application was deployed on Netlify. Figma was used for prototyping and designing the user interface, while Trello was employed for organizing tasks and managing the project workflow.

- Code Explanation

For the Home page a component called `Homefetching` was made to utilize React´s ´useState´ and ´useEffect´ hooks to manage state and handle side effects, respectively. The component begins by initializing state variables for storing the list of venues (´venues´) and the search query (´searchQuery´). The ´useEffect´ hook fetches data from the Holidaze API, which is then parsed and stored in the ´venues´ state. I implemented a search functionality that filters the list of venues based on the users input. The rendered output includes an input field for searching venues and a grid layout that displays each venues details. Each venue card contains the venues name, description, price, maximum guests, rating and available metadata like Wifi and parking. If the venue has image, the first image is displayed; otherwise, a placeholder is shown. The venue cards also include address details and a “View More” button that links to a detailed venue page.

For the Profile page a component named `ProfilePageVenues` was made where I developed a comprehensive profile management page for the Holidaze application. The component maintains state variables for venues, bookings, filtered bookings, loading statuts, user details, selected item for update, and a flag indicating if the user is a venue manager. On component mount, `useEffect` retrieves the stored username, avatar, and venue manager status from local storage, setting the state accordingly. Another `useEffect` is used to fetch data from the API based on whether the user is a venue manager or a regular customer. For venue managers, venue and booking data is fetched, while for regular customers, only booking data is retrieved. The fetched data is stored in the respective state variables and filtered accordingly.
Additional `useEffect` monitors changes in venues, bookings, and venue manager status to filter bookings based on the users venues. The component provides functionality for updating the users avatar through an API call, and includes handlers for updating and deleting items (venues or bookings) based on user interaction. When an item is selected for update, the `selectedItem` state is set, and the appropriate form component (`UpdateVenueForm` or `UpdateReservationForm`) is rendered for updating the selected item. The user interface includes sections for displaying user profile information, a grid layout for listing venues or bookings, and interactive elements for updating or deleting items.

For the Venue page a component named `CreateVenueForm` was developed as a form interface for users to input details necessary for creating a new venue. The component maintains state for various form fields including the venues name, description, price, maximum guests, and features like wifi, parking, breakfast and pets. The component verifies the users authorization status through `localStorage` upon mounting, and upon form submission, it constructs a request payload with the provided data and sends it to the designated API endpoint using `fetch`. Error handling is implemented to manage potential errors during the API request, while success messages are displayed upon successful venue creation. The form interface includes input fields, checkboxes, and buttons for user interaction, with conditional rendering used to display error and success messages dynamically. Additionally, PropTypes are utilized for prop validation, ensuring that the `onAddVenue` prop, if provided, is a function. Overall, the component encapsulates the logic for creating a venue, facilitating a seamless user experience withing the application.

The component for the Login page named `LoginForm` is responsible for rendering a user interface that allows users to log in to their accounts. It maintains state using React´s `useState` hook for tracking loading status, errors, data returned from the server, and whether the login attempt was successful. Upon form submission, the component sends a POST request to the specified API endpoint with the users email and password. If the request is successful, the users access token, name, avatar, and venue manager status are stored in the browsers local storage. Error handling is implemented to manage various scenarios such as invalid credentials or unexpected errors. Additionally, the component includes conditional rendering to display success or error messages based on the outcome of the login attempt, and it automatically redirects the user to the home page after a successful login.

For the Register page, the `RegisterForm` component is responsible for rendering a user interface that allows users to register for a new account. Similar to the login form, it maintains state using Reacts `useState` hook for tracking loading status, errors, and whether the registration was successful. The component includes form fields for users to input their name, email, password, avatar url, and a checkbox to indicate whether the user is a venue manager. It implements client-side validation for the input fields, checking for valid email addresses, password length, and ensuring that the name does not contain certain symbols. Upon form submission, the component sends a POST request to the specified API endpoint with the users registration data. If the registration is successful, the user is redirected to the login page after a brief delay. Error handling is also implemented to manage scenarios such as invalid input data or unexpected errors returned from the server.

- User Stories Implementation

The development process began with implementing a page displaying a list of venues fetched from the API. I then added search functionality to filter venues based on user input. Detailed pages for each venue created, showing information and available dates, and a calendar component was integrated to display booking availability. Registration functionality was implemented for both customers and venue managers using `stud.noroff.no` email validation. Registered customers are enabled to create bookings for venues and view their upcoming bookings on a user dashboard. Venue managers are provided with the ability to create update, delete, and view bookings for their venues. Lastly, I implemented user authentication functionalities, including login, logout, and avatar update.

- Technical Implementation

React components were created for different parts of the application, such as venue list, venue detail, and reservation form, to promote reusability. The context API was used for managing global state and handling user authentication. Tailwind CSS ensured the application was mobile-friendly, providing a consistent experience across devices.

- Conclusion

The development of the Holidaze front-end application was a comprehensive project that showcased the application of skills learned over the past two years. The final product is a robust, user friendly booking site that meets the clients requirements and adheres to professional standards. This project highlights the importance of through planning, effective use of modern tools and frameworks, and continous testing and iteration, providing invaluable experience in preparing for real-world front-end development challenges.

Sources and links:

Noroff API documentation - https://docs.noroff.dev/docs/v2

Github repository - https://github.com/Bilal0410/FED2-Venue-Exam-Holidaze

Figma link - https://www.figma.com/design/X6EzeTwyqfDOQVNkoiMq3R/FED2-Venue-Exam-Holidaze?node-id=2-519&t=vpppMlpyy2QAQWFF-1

Netlify link - https://celebrated-khapse-4da48a.netlify.app/

Trello link - https://trello.com/invite/b/hu6jVsWn/ATTI19025dd16354503709c2161ceb8ed0c13A5C197D/fed2-venue-exam-holidaze
