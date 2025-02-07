import User from "./User";
import './Users.css';
import { useLoaderData } from "react-router-dom";

export default function Users() {
    const users = useLoaderData();
    return (
        <div className="users">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    )
}
