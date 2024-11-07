import { Link } from "react-router-dom";
import PreHeader from "./PreHeader";
import '../../assets/css/myStyles.css'

export default function Header() {
  return (
    <>
        <PreHeader></PreHeader>
        <nav class="navbar navbar-expand-lg myNavbar">
        <div class="container">
            <a class="navbar-brand link-light" href="/">Claro</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                <Link class="nav-link link-light" to={"/"}>Home</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link link-light" to={"/about"}>About</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link link-light" to={"/customers"}>Customers</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link link-light" to={"/products"}>Products</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link link-light" to={"/contact"}>Contact</Link>
                </li>

                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle link-light" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/">Action</a></li>
                    <li><a class="dropdown-item" href="/">Another action</a></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </>
  );
}