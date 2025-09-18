# Assignment 2 - Advanced React User Profiles

A responsive React application built with Ant Design that displays user profiles with advanced features like editing, liking, and deleting users.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Ant Design Components**: Modern UI library with beautiful components
- **User Management**: View, edit, like, and delete user profiles
- **Modal Editing**: Edit user details in a modal form with validation
- **State Management**: Proper state lifting and management
- **Loading States**: Beautiful loading indicators
- **Error Handling**: Graceful error handling with user feedback

## Technologies Used

- React 19.1.1
- Ant Design 5.21.0
- Parcel (for bundling)
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd Assignment2
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5174`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally

## Project Structure

```
Assignment2/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserCard.js
│   │   └── EditUserModal.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Key Features Demonstrated

### 1. Responsive Grid Layout
- Uses Ant Design's `Row` and `Col` components
- Responsive breakpoints: xs={24}, sm={12}, md={8}, lg={6}, xl={4}

### 2. State Management
- User data management in parent component
- Modal state management
- Like/unlike functionality
- Edit and delete operations

### 3. Form Handling
- Ant Design Form component with validation
- Controlled inputs with proper state management
- Form submission with error handling

### 4. User Interactions
- Like/unlike users with visual feedback
- Edit user details in modal
- Delete users with confirmation
- Copy email addresses

### 5. UI/UX Features
- Beautiful gradient backgrounds
- Hover effects and animations
- Loading states with spinners
- Success/error messages
- Responsive design for all screen sizes

## API Integration

The app fetches user data from:
- **Users API**: `https://jsonplaceholder.typicode.com/users`
- **Avatar API**: `https://avatars.dicebear.com/v2/avataaars/{username}.svg`

## Deployment

### Using Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

## Assignment Requirements Met

✅ All skills from Assignment 1  
✅ Ant Design implementation  
✅ Responsive layout with Grid system  
✅ User event handling (clicks, forms)  
✅ Modal with form for editing  
✅ State lifting (parent manages child state)  
✅ Modern React patterns and hooks  

## License

This project is created for educational purposes as part of the Samplyfi Softech assignment.
