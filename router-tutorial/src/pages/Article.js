import { NavLink, Outlet } from "react-router-dom";

const Article = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />
      <li>
        <NavLink
          to="/articles/1"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          게시글1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/articles/2"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          게시글2
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/articles/3"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          게시글3
        </NavLink>
      </li>
    </div>
  );
};
export default Article;
