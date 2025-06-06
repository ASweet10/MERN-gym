# EliteFitness gym site
## Tech
- React
- TailwindCSS
- Express/Node.js
- MongoDB
- AWS S3, CloudFront
- JWT & bcrypt for secure user auth

## Demo
[EliteFitness](https://mern-gym-frontend.vercel.app)

# Notes
1. localhost:3000/api/signup 404 (not found) when trying to login/signup
- Also shows '<' '<!DOCTYPE>...' is invalid JSON error
- Add "proxy": "http://localhost:5000", to package.json to proxy to express server port
- Changed proxy to site url for backend deployment
