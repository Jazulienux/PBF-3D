import React from 'react';
import logo from './logo.svg';
import cart_logo from './images/cart_logo.png';
import './App.css';
import './css/style.css'
import { useTable } from 'react-table'
import ItemPost from './ItemPost/ItemPost'
import AboutStateless from './statelessComponent/AboutStateless'
import ItemCart from './ItemCart/ItemCart';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function uts_cart() {
  return (
    <Router>
      <div className="wrapper">
        <div className="top_navbar">
          <div className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="top_menu">
            <div className="logo">Shoping Cart</div>
            <ul>
              <li>
                <Link to="/"><i className="fa fa-sign-in"></i></Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar">
          <ul>
            <li>
              <Link to="/" className="active">
                <span className="icon"><i className="fa fa-home" /></span>
                <span className="title">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/list_item">
                <span className="icon"><i className="fa fa-cart-plus" /></span>
                <span className="title">List Produk</span>
              </Link>
            </li>
            <li>
              <Link to="/cart_item">
                <span className="icon"><i className="fa fa-shopping-cart" /></span>
                <span className="title">Keranjang</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="icon"><i className="fa fa-address-card" /></span>
                <span className="title">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list_item">
          <ListItem />
        </Route>
        <Route exact path="/cart_item">
          <CartItem />
        </Route>
        <Route exact path="/about">
          <AboutStateless />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="wrapper">
      <div className="main_container">
        <div className="item">
          <b style={{ fontSize: 25 }}>Selamat Datang di Website Shoping Cart Created By Jazulienux</b>
          <br />
          <br />
          &emsp;Jadi anda dapat membeli setrika dengan merek terbaik di Indonesia, dimana produku produk yang ditawarkan di produksi
          dari produk lokal berkualiatas dari sabang sampai merauke, jadi sebagai rakyat Indonesia yang baik, maka cintailah produk
          Indonesia ini jadikan local pride kita mendunia. jadikan kekurangan kita jadi keunikan tersendiri dan jadikan sebuat gagasan
          baru di sektor perdagangan untuk meningkatkan produktifitas benefit terhadap Negara.
          <br />
          <br />
          <b>Jadilah Warga Negara yang baik dalah memilih produk,karena dampak yang terjadi akan berpengaruh bagi NEGARA</b>
          <br />
          <br />
          <b>Pesan Sekarang untuk Membanggakan Local Pride Indonesia ..... LETS DO IT ...</b>
        </div>
      </div>
    </div>
  )
}

function ListItem() {
  return (
    <ItemPost />
  )
}

function CartItem() {
  return (
    <ItemCart />
  )
}
