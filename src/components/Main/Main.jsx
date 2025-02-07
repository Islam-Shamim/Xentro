import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
        <p>Welcome here.</p>
      <Outlet></Outlet>
    </div>
  )
}
