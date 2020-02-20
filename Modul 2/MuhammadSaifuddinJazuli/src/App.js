import React from 'react';
import logo from './logo.svg';
import myImages from './myImages.jpeg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Biodata = () => {
  return (
    <div className="Biodata">
      <header className="Biodata-header">
        <div class="jumbotron">
          <div class="col-md-12">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col" class="center" colspan="2">Biodata Mahasiswa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nama Mahasiswa : </td>
                  <td>Muhammad Saifuddin Jazuli</td>
                </tr>
                <tr>
                  <td>Alamat Mahasiswa : </td>
                  <td>Perum. Saptoraya Blok. TT.12 Kec.Pakis, Kab. Malang</td>
                </tr>
                <tr>
                  <td>TTL Mahasiswa : </td>
                  <td><b>Malang</b>, 27 Juni 1998</td>
                </tr>
                <tr>
                  <td>Instansi Mahasiswa : </td>
                  <td>Politeknik Negeri Malang</td>
                </tr><tr>
                  <td>Hobby Mahasiswa : </td>
                  <td>
                    <ul>
                      <li>Coding</li>
                      <li>Sepak Bola</li>
                      <li>Futsal</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Foto Mahasiswa : </td>
                  <td><img src={myImages} className="Biodata-logo" alt="logo" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </header>
    </div >
  )
}

export default Biodata;
            // export default App;
