import { Navigate, Outlet, useLocation } from "react-router";
import { useAccount } from "../../lib/hooks/useAccont"
import { Typography } from "@mui/material";

export default function RequireAuth() {
    const { currentUser, loadingUserInfo } = useAccount();
    const location = useLocation();

    if (loadingUserInfo) return <Typography>Loading...</Typography>

    //authenticate fail so do login
    if (!currentUser) return <Navigate to='/login' state={{from: location}}/>

    return (
        <Outlet />
    )
}