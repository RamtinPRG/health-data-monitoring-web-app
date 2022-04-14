import { Link } from "react-router-dom";

function SidebarLink({ title, icon, href, onClick, ...props }) {
  return (
    <div {...props}>
      <Link to={href} onClick={onClick}>
        <i className={icon}></i>
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default SidebarLink;
