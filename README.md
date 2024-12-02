
---

# Vue.js 2 Application

This is a Vue.js 2 application that includes features like API integration, routing, and state management. The project uses Vuetify for UI components, Vuex for state management, and environment variables for secure configuration.

## Features

- Dynamic routes with Vue Router
- State management with Vuex
- Responsive UI with Vuetify
- Environment variable support for sensitive data like API keys
- Built-in support for deployment to GitHub Pages

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your system:
- Node.js (>= 18.x)
- npm (>= 10.x)

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sahstiva/map.git
   cd map
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

### Running the Application

Start the development server:

```bash
npm run serve
```

The app will be available at `http://localhost:8080`.

---

### Build for Production

To build the app for production:

```bash
npm run build
```

The output files will be in the `dist/` directory.

---

### Deployment

#### GitHub Pages

1. Update the `publicPath` in `vue.config.js`:

   ```javascript
   module.exports = {
     publicPath: '/map/'
   };
   ```

2. Deploy the `dist/` folder:

   ```bash
   npm run deploy
   ```

---

## Environment Variables

Create a `.env` file in the root of the project to configure environment variables:

```env
VUE_APP_API_KEY=your_api_key_here
```

> **Note:** All environment variables must start with `VUE_APP_`.

---

## Technologies Used

- **Vue.js 2**: The core JavaScript framework.
- **Vuetify**: UI component library for Vue.js.
- **Vuex**: State management library for Vue.js.
- **Fetch**: Native HTTP client for API requests.
- **GitHub Pages**: Deployment platform for static sites.

---

## Troubleshooting

### Common Issues

1. **Blank Page After Deployment**:
    - Ensure the `publicPath` in `vue.config.js` matches the deployment path.
    - Rebuild the app after updating configuration.

2. **Environment Variables Not Working**:
    - Ensure variables are prefixed with `VUE_APP_`.
    - Restart the server after making changes to `.env`.

---

## Contributing

Feel free to submit issues or pull requests to improve this project.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Author

- **Alexander Vitshas**
- GitHub: [Sahstiva](https://github.com/Sahstiva)
- Email: avitshas@gmail.com
```
