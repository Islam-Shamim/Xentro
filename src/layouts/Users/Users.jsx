import User from "./User";
import { useLoaderData } from "react-router-dom";

export default function Users() {
    const users = useLoaderData();
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    )
}
