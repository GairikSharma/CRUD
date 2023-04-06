import { useState, useEffect } from "react";
import "./service.css";

export default function Service() {
  const [services, setServices] = useState([]);
  // useEffect(()=> {
  //   const response =  axios.get('http://localhost:8000/service')
  //   const jsonData= response.json()
  //   setServices(jsonData)
  //   // console.log(response.rows);
  // } )

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:8000/service");
      const jsonData = await response.json();
      setServices(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      <div className="service-section position-relative">
        <div className="spin-hand">
          <img
            src="../../../src/assets/images/hand-with-cog.png"
            alt=""
            className="img-fluid img-cog"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 24 24"
          >
            <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
          </svg>
        </div>
        <h2>OUR SERVICES</h2>
        <p className="sub-heading mb-0">What we do for you</p>
        <div className="container">
          <div className="row">
            {services.map((data) => (
              <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
                <div className="service-box mt-md-3">
                  <div className="service-content">
                    <img
                      src={data.file_name}
                      alt="No image"
                      className="img-fluid"
                    />
                    <div className="service-text">
                      <h2 className="ms-3 mb-1">{data.service_header}</h2>
                      <p className="ms-3 mb-1 lh-base">
                        Directorate of Boilers(Govt of W.B.)
                      </p>
                      <button className="btn btn-secondary">Apply now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
              <div className="service-box mt-md-3">
                <div className="service-content">
                  <img src="../../../src/assets/images/service_icon_2.png" alt="" className="img-fluid"/>
                  <div className="service-text">
                    <h2 className="ms-3 mb-1">Renewal / Erection</h2>
                    <p className="ms-3 mb-1 lh-base">Directorate of Boilers(Govt of W.B.)</p>
                    <button className="btn btn-secondary">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
              <div className="service-box mt-md-3">
                <div className="service-content">
                  <img src="../../../src/assets/images/service_icon_3.png" alt="" className="img-fluid"/>
                  <div className="service-text">
                    <h2 className="ms-3 mb-1">Manufacturing</h2>
                    <p className="ms-3 mb-1 lh-base">Directorate of Boilers(Govt of W.B.)</p>
                    <button className="btn btn-secondary">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
              <div className="service-box mt-xl-3">
                <div className="service-content">
                  <img src="../../../src/assets/images/service_icon_4.png" alt="" className="img-fluid"/>
                  <div className="service-text">
                    <h2 className="ms-3 mb-1">Drawing Examination</h2>
                    <p className="ms-3 mb-1 lh-base">Directorate of Boilers(Govt of W.B.)</p>
                    <button className="btn btn-secondary">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
              <div className="service-box">
                <div className="service-content">
                  <img src="../../../src/assets/images/service_icon_5.png" alt="" className="img-fluid"/>
                  <div className="service-text">
                    <h2 className="ms-3 mb-1">Approval/ Renewal/ Endorsement/ Erector/ Repairer</h2>
                    <button className="btn btn-secondary">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
              <div className="service-box">
                <div className="service-content">
                  <img src="../../../src/assets/images/service_icon_6.png" alt="" className="img-fluid"/>
                  <div className="service-text">
                    <h2 className="ms-3 mb-md-3">Approval/ Renewal of Manufacturer</h2>
                    <button className="btn btn-secondary">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
              <div className="service-box">
                <div className="service-content">
                  <img src="../../../src/assets/images/service_icon_7.png" alt="" className="img-fluid"/>
                  <div className="service-text">
                    <h2 className="ms-3 mb-1">Form IIIA for Pipelines</h2>
                    <p className="ms-3 mb-1 lh-base">Directorate of Boilers(Govt of W.B.)</p>
                    <button className="btn btn-secondary">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 mt-4">
              <div className="service-box">
                <div className="service-content">
                  <img src="../../../src/assets/images/service_icon_8.png" alt="" className="img-fluid"/>
                  <div className="service-text">
                    <h2 className="ms-3 mb-1">Transfer of Ownership</h2>
                    <p className="ms-3 mb-1 lh-base">Directorate of Boilers(Govt of W.B.)</p>
                    <button className="btn btn-secondary">Apply now</button>
                  </div>
                </div>
              </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
