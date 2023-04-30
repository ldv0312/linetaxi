// {
//   /* <GoogleMap /> */
// }

// import React from "react";

// const Contacts = () => {
//   return (
//     <main>
//       <div class="main__container">
//         <div class="contact__main">
//           <h1 class="item-woid">Контакты</h1>
//           <div class="action__contact">
//             <div class="contact__text">
//               <h1>Социальные сети</h1>
//               <h1>Позвоните нам!</h1>
//               <h1>Напишите нам!</h1>
//             </div>
//             <div class="contact__link">
//               <div class="social__flex">
//                 <div>
//                   <a href="#">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
//                       <circle cx="14.87" cy="5.26" r="1.09"></circle>
//                       <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
//                     </svg>
//                   </a>
//                 </div>
//                 <div>
//                   <a href="">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
//                     </svg>
//                   </a>
//                 </div>
//                 <div></div>
//               </div>
//               <div class="contact__link-text">
//                 <h1>
//                   <a href="#">+996 507 777 555</a>
//                 </h1>
//                 <h1>
//                   <a href="#">driver.info@yandex.kg</a>
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="map__main">
//           <div class="map-text">
//             <h1>Посмотреть наши офисы на карте</h1>
//           </div>
//           <div class="map__div"></div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contacts;
import React from "react";
import "./tax.css";
import GoogleMap from "./GoogleMap";

const Contacts = () => {
  return (
    <main>
      <div class="main__container">
        <div class="contact__main">
          <h1 class="item-woid">Контакты</h1>
          <div class="action__contact">
            <div class="contact__text">
              <h1>Социальные сети</h1>
              <h1>Позвоните нам!</h1>
              <h1>Напишите нам!</h1>
            </div>
            <div class="contact__link">
              <div class="social__flex">
                <div>
                  <a href="#">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                      <circle cx="14.87" cy="5.26" r="1.09"></circle>
                      <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                    </svg>
                  </a>
                </div>
                <div></div>
              </div>
              <div class="contact__link-text">
                <h1>
                  <a href="#">+996 507 777 555</a>
                </h1>
                <h1>
                  <a href="#">driver.info@yandex.kg</a>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="map__main">
          <div class="map-text">
            <h1>Посмотреть наши офисы на карте</h1>
          </div>
          {/* <div class="map__div"></div> */}
          <GoogleMap />
        </div>
      </div>
    </main>
  );
};

export default Contacts;
