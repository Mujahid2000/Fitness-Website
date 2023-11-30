import React from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
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
        loader: ({ params }) => fetch(`http://localhost:5050/trainer/${params.id}`),
      },
      {
        path: '/trainerApply',
        element: <TrainerApply></TrainerApply>
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
        element: <AllSubscriber></AllSubscriber>
      },
      {
        path: 'allTrainers',
        element: <AllTrainers></AllTrainers>
      },
      {
        path: '/dashboard/payment/:_id/:salary',
        element: <PaymentForm></PaymentForm>
      },
      {
        path: 'appliedTrainers',
        element: <AppliedTrainer></AppliedTrainer>
      },
      {
        path: 'balance',
        element: <Balance></Balance>
      },
      // Trainer path
      {
        path: 'manageSlots',
        element: <ManageSlots></ManageSlots>
      },
      {
        path: 'manageMember',
        element: <ManageMember></ManageMember>
      },
      // user path
      {
        path: 'activityLog',
        element: <ActivityLog></ActivityLog>
      },
      {
        path: 'recommendedClass',
        element: <Recomended></Recomended>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      }
    ]
  } 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-[1870px] mx-auto'>
  <React.StrictMode>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
</div>
)
