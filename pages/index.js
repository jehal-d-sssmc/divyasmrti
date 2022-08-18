import React from 'react';
import Head from 'next/head';

export default class Home extends React.Component {
  componentDidMount() {
    let sloader = document.getElementById('loadScripts');
    let ele = [];
    let scripts = [
      'assets/js/jquery-migrate-3.0.0.min.js',
      'assets/js/plugins.js',
      'assets/js/scripts.js',
    ];

    scripts.forEach((x) => {
      let el = document.createElement('script');
      el.setAttribute('src', x);
      ele.push(el);
      // sloader.appendChild(el);
    });

    console.log(ele);
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta
            name="keywords"
            content="Sri Sathya Sai, Divya Smrithi, Divya Smruti"
          />
          <meta
            name="description"
            content="Sri Sathya Sai Divya Smruti - Digital Museum in Brindavan Bangalore"
          />
          <meta name="author" content="" />
          <title>Sri Sathya Sai Divya Smriti</title>
          <link rel="shortcut icon" href="favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
            integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <link rel="stylesheet" href="assets/css/plugins.css" />

          <link rel="stylesheet" href="assets/css/style.css" />

          <script src="assets/js/jquery-3.0.0.min.js"></script>
          <script src="assets/js/jquery-migrate-3.0.0.min.js"></script>
          <script src="assets/js/plugins.js"></script>
          <script src="assets/js/scripts.js"></script>
          
        </Head>

        <div className="loading">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>

        <div id="preloader"></div>

        <div className="progress-wrap cursor-pointer">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>

        <div id="navi" className="topnav">
          <div className="container-fluid">
            <div className="logo">
              <a href="#0">
                <img
                  src="assets/img/logobig.png"
                  alt="Sri Sathya Sai Divya Smriti"
                />
              </a>
            </div>
            <div className="menu-icon">
              <span className="icon">
                <i></i>
                <i></i>
                <i></i>
              </span>
              <span className="text" data-splitting>
                Menu
              </span>
            </div>
          </div>
        </div>

        <div className="hamenu">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-8">
                <div className="menu-links">
                  <ul className="main-menu">
                    <li>
                      <div className="o-hidden">
                        <a href='./'><span className="link">
                          Home
                        </span></a>
                      </div>
                    </li>
                    <li>
                      <div className="o-hidden">
                        <span className="link dmenu">About <i class="fa fa-angle-right"></i></span>
                      </div>
                      <div class="sub-menu">
                          <ul>
                              <li>
                                  <div class="o-hidden">
                                      <span class="sub-link back"><i class="fa fa-angle-left"></i> Go
                                          Back</span>
                                  </div>
                              </li>
                              <li>
                                  <div class="o-hidden">
                                      <a href="#" class="sub-link">Sri Sathya Sai</a>
                                  </div>
                              </li>
                              <li>
                                  <div class="o-hidden">
                                      <a href="#" class="sub-link">Digital Museum</a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                    </li>
                    <li>
                      <div className="o-hidden">
                        <span className="link dmenu">Visit <i class="fa fa-angle-right"></i></span>
                      </div>
                      <div class="sub-menu">
                          <ul>
                              <li>
                                  <div class="o-hidden">
                                      <span class="sub-link back"><i class="fa fa-angle-left"></i> Go
                                          Back</span>
                                  </div>
                              </li>
                              <li>
                                  <div class="o-hidden">
                                      <a href="#" class="sub-link">Getting Here</a>
                                  </div>
                              </li>
                              <li>
                                  <div class="o-hidden">
                                      <a href="#" class="sub-link">General Info</a>
                                  </div>
                              </li>
                              <li>
                                  <div class="o-hidden">
                                      <a href="#" class="sub-link">Online Booking</a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                    </li>
                    <li>
                      <div className="o-hidden">
                        <span className="link dmenu">Gallery <i class="fa fa-angle-right"></i></span> 
                      </div>
                      <div class="sub-menu">
                          <ul>
                              <li>
                                  <div class="o-hidden">
                                      <span class="sub-link back"><i class="fa fa-angle-left"></i> Go
                                          Back</span>
                                  </div>
                              </li>
                              <li>
                                  <div class="o-hidden">
                                      <a href="#" class="sub-link">Photos</a>
                                  </div>
                              </li>
                              <li>
                                  <div class="o-hidden">
                                      <a href="#" class="sub-link">Vidoes</a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="cont-info">
                        <div class="item">
                            <h6>Timings :</h6>
                            <p>09:00 AM to 05:00 PM</p>
                        </div>
                        <div class="item">
                            <h6>Whatsapp :</h6>
                            <p><a href="https://wa.me/919393258258">9393258258</a></p>
                        </div>
                        <div class="item">
                            <h6>Address :</h6>
                            <p>'Brindavan', Kadugodi Post, Kadugodi, Bengaluru, Karnataka 560067</p>
                        </div>
                        <div class="item">
                            <h6>Email :</h6>
                            <p><a href="mailto:info@sssmediacentre.org">info@sssmediacentre.org</a></p>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="slider showcase-full">
          <div className="swiper-container parallax-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="bg-img balign"
                  data-background="assets/img/slides/s4.jpg"
                  data-overlay-dark="4"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="caption">
                          <h1>
                            <a href="#">
                              <div
                                className="stroke"
                                data-swiper-parallax="-2000"
                              >
                                Coming&nbsp;
                                <span data-swiper-parallax="-5000">Soon</span>
                              </div>
                            </a>
                            <div className="bord"></div>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="bg-img balign"
                  data-background="assets/img/slides/s2.png"
                  data-overlay-dark="4"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="caption">
                          <h1>
                            <a href="#">
                              <div
                                className="stroke"
                                data-swiper-parallax="-2000"
                              >
                                Sri Sathya Sai
                              </div>
                              <span data-swiper-parallax="-5000">
                                Divyasmṛti
                              </span>
                            </a>
                            <div className="bord"></div>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="bg-img balign"
                  data-background="assets/img/slides/s3.png"
                  data-overlay-dark="4"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="caption">
                          <h1>
                            <a href="#">
                              <div
                                className="stroke"
                                data-swiper-parallax="-2000"
                              >
                                The Work is
                              </div>
                              <span data-swiper-parallax="-5000">
                                In Progress
                              </span>
                            </a>
                            <div className="bord"></div>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="txt-botm">
              <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                <div>
                  <span>Next Slide</span>
                </div>
                <div>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                <div>
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div>
                  <span>Prev Slide</span>
                </div>
              </div>
            </div>
            <div className="swiper-pagination dots"></div>
          </div>
        </header>
        <div id="loadScripts"></div>
      </div>
    );
  }
}
