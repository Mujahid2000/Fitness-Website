import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// Create a client
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login'
import Dashboard from './Pages/DashBoard/Dashboard';
import Error from './Layouts/Error';
import Gallery from './Pages/Gallery/Gallery';
import Trainer from './Pages/Trainer/Trainer';
import TrainerDetails from './Pages/Trainer/TrainerDetails';
import TrainerApply from './Pages/Trainer/TrainerApply';

import SignUp from './Pages/Home/SignUp';
import AuthProvider from './Provider/AuthProvider';
import AdminRoute from './Provider/AdminRoute';
import TrainerBooked from './Pages/Trainer/TrainerBooked';
import Community from './Pages/Community/Community';
import AllSubscriber from './Pages/DashBoardRoute/AllSubscriber';
import AllTrainers from './Pages/DashBoardRoute/AllTrainers';
import PaymentForm from './Pages/DashBoardRoute/PaymentForm';
import AppliedTrainer from './Pages/DashBoardRoute/AppliedTrainer';
import Balance from './Pages/DashBoardRoute/Balance';
import ManageSlots from './Pages/TrainerDashboard/ManageSlots';
import ManageMember from './Pages/TrainerDashboard/ManageMember';
import GymSchedule from './Pages/Class/GymSchedule';
import Profile from './Pages/UserDashBoard/Profile';
import PrivateRoute from './Provider/PrivateRoute';
import ActivityLog from './Pages/UserDashBoard/ActivityLog';
import Recomended from './Pages/UserDashBoard/Recomended';
import AllUsers from './Pages/DashBoardRoute/AllUsers';
import SimpleMap from './Pages/Contact/Contact';
import DashBoardScreen from './Pages/DashBoard/DashBoardScreen';
import AddForum from './Pages/TrainerDashboard/AddForum';
import AddClass from './Pages/TrainerDashboard/AddClass';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/class',
        element: <GymSchedule></GymSchedule>
      },
      {
        path: '/trainer',
        element: <Trainer></Trainer>,
      },
      {
        path: '/trainerDetail/:id',
        element: <PrivateRoute><TrainerDetails></TrainerDetails> </PrivateRoute> ,
        loader: ({ params }) => fetch(`https://gym-server-orpin.vercel.app/trainer/${params.id}`),
      },
      {
        path: '/trainerApply',
        element: <PrivateRoute> <TrainerApply></TrainerApply> </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/trainerBooked/:slot/:name',
        element: <PrivateRoute><TrainerBooked></TrainerBooked> </PrivateRoute> ,
      },
      {
        path: '/community',
        element: <PrivateRoute><Community></Community></PrivateRoute>
      },
      {
        path: '/contact',
        element: <SimpleMap></SimpleMap>
      }     
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // admin path
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'allSubscriber',
        element: <AdminRoute> <AllSubscriber></AllSubscriber> </AdminRoute>
      },
      {
        path: 'allTrainers',
        element: <AdminRoute><AllTrainers></AllTrainers> </AdminRoute>
      },
      {
        path: '/dashboard/payment/:_id/:salary',
        element: <AdminRoute><PaymentForm></PaymentForm> </AdminRoute>
      },
      {
        path: 'appliedTrainers',
        element: <AdminRoute><AppliedTrainer></AppliedTrainer> </AdminRoute>
      },
      {
        path: 'balance',
        element: <AdminRoute><Balance></Balance> </AdminRoute>
      },
      // Trainer path
      {
        path: 'manageSlots',
        element: <PrivateRoute><ManageSlots></ManageSlots> </PrivateRoute>
      },
      {
        path: 'manageMember',
        element: <PrivateRoute> <ManageMember></ManageMember> </PrivateRoute>
      },
      {
        path: 'addForum',
        element: <PrivateRoute> <AddForum></AddForum> </PrivateRoute>
      },
      {
        path: 'addNewForum',
        element: <PrivateRoute> <AddForum></AddForum> </PrivateRoute>
      },
      {
        path: 'addClass',
        element: <PrivateRoute> <AddClass></AddClass> </PrivateRoute>
      },
      // user path
      {
        path: 'activityLog',
        element: <PrivateRoute><ActivityLog></ActivityLog> </PrivateRoute>
      },
      {
        path: 'recommendedClass',
        element: <PrivateRoute> <Recomended></Recomended></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile> </PrivateRoute>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><DashBoardScreen></DashBoardScreen> </PrivateRoute>
      }
    ]
  } 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-full mx-auto '>
  <React.StrictMode>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider  router={router} />
      </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
</div>
)
