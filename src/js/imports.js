
var serverAdd = "http://localhost:8080";


const firebaseConfig = {
  apiKey: "AIzaSyCrF8inVYouF8kVC_3RdoKspuyAziwFLvw",
  authDomain: "connect-n-help.firebaseapp.com",
  databaseURL: "https://connect-n-help-default-rtdb.firebaseio.com",
  projectId: "connect-n-help",
  storageBucket: "connect-n-help.appspot.com",
  messagingSenderId: "817666187076",
  appId: "1:817666187076:web:596b75e60bde36aa314111",
  measurementId: "G-RCZ956D5TT"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


function importElements() {
  let nav = document.getElementById("importNav");
  let foot = document.getElementById("importFooter");
  let contact = document.getElementById("contact");
  nav.innerHTML = `<header id="header" class="header fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="/" class="logo d-flex align-items-center zoom-out">
        <span>  <span class="ml1">
          <img class="logo" width="30%" src="img/logo2.png"/>
        
        </span></span>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="/">Home</a></li>

          <li><a href="/searchngo.html">Search NGOs</a></li>
          <li><a href="/searchevents.html"> Search Events</a></li>
          <li><a href="/donation.html"> Search Donations</a></li>
          <li><a class="nav-link scrollto" href="#contactus">Contact Us</a></li>
      
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
`;
contact.innerHTML = `<section id="contactus" class="contact">

<div class="container" data-aos="fade-up">

    <header class="section-header">
        <h2>Contact</h2>
        <p>Contact Us</p>
    </header>

    <div class="row gy-4">

        <div class="col-lg-6">

            <div class="row gy-4">
                <div class="col-md-6" onclick="window.location.href = 'https://maps.app.goo.gl/6mx5KW38opYHs7TG6'">
                    <div class="info-box">
                        <i class="bi bi-geo-alt"></i>
                        <h3>BVP DET Navi Mumbai</h3>
                        <p>Kharghar<br>Navi Mumbai, NM 410210</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="info-box">
                        <i class="bi bi-telephone"></i>
                        <h3>Call Us</h3>
                        <p>+91 9082948358</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="info-box">
                        <i class="bi bi-envelope"></i>
                        <h3>Email Us</h3>
                        <p> amaans751@gmail.com</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="info-box">
                        <i class="bi bi-clock"></i>
                        <h3>Open Hours</h3>
                        <p>Monday - Friday<br>9:00AM - 05:00PM</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="col-lg-6">
            <form action="" method="post" class="php-email-form">
                <div class="row gy-4">

                    <div class="col-md-6">
                        <input type="text" name="name" class="form-control" placeholder="Your Name" required>
                    </div>

                    <div class="col-md-6 ">
                        <input type="email" class="form-control" name="email" placeholder="Your Email" required>
                    </div>

                    <div class="col-md-12">
                        <input type="text" class="form-control" name="subject" placeholder="Subject" required>
                    </div>

                    <div class="col-md-12">
                        <textarea class="form-control" name="message" rows="6" placeholder="Message"
                            required></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>

                        <button type="submit">Send Message</button>
                    </div>

                </div>
            </form>

        </div>

    </div>

</div>

</section><!-- End Contact Section -->`;

foot.innerHTML = `

<footer id="footer" class="footer">
<div class="footer-newsletter">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12 text-center">
        <h4>Our Newsletter</h4>
        <p>Enter your email to subscribe to our weekly Sustainability Newsletter, keeping you up-to-date with Mother Earth.</p>
      </div>
      <div class="col-lg-6">
        <form action="" method="post">
          <input type="email" name="email"><input type="submit" value="Subscribe">
        </form>
      </div>
    </div>
  </div>
</div>

<div class="footer-top">
  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-4 col-md-12 footer-info">
        <a href="index.html" class="logo d-flex align-items-center">
          <img src="img/logo2.png" alt="">
        </a>
        <p> ConnectNHelp™ is a platform made to connect potential donors like you, who want to give back to the community, with the right resources to facilitate that. </p>
        <div class="social-links mt-3">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="/searchngo.html">Search NGO</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="/searchevents.html">Search Events</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="#">Carbon Calculator</a></li>

          <li><i class="bi bi-chevron-right"></i> <a href="#">About Us</a></li>

        </ul>
      </div>


      <div class="col-lg-4 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>
        BVP DET Navi Mumbai <br>
          Navi Mumbai, 410210<br>
          Maharashtra <br><br>
          <strong>Phone:</strong> +91 9082948358<br>
          <strong>Email:</strong> amaans751@gmail.com<br>
        </p>

      </div>

    </div>
  </div>
</div>

<div class="container">
  <div class="copyright">
    &copy; Copyright <strong><span> ConnectNHelp™</span></strong>. All Rights Reserved
  </div>

</div>
</footer>`;
}

function scrollto(el) {
  console.log(el);
  const selectHeader = document.querySelector('#header');
  let offset = 0;

  if (selectHeader.classList.contains('sticked')) {
  offset = document.querySelector('#header.sticked').offsetHeight;
  } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
  offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
  }
  window.scrollTo({
  top: document.querySelector(el).offsetTop - offset,
  behavior: 'smooth'
  });
}



const getNGOs = async (ct, sc, nm,cm) => {
  let json = {success:true}
  let spin = document.getElementById("loaders");
  let spin2 = document.getElementById("loaders2");

  if(ct || sc || nm || cm) spin.style.display = "block";
  if(ct || sc || nm || cm) spin2.style.display = "block";

  const dbRefObject =  firebase.database().ref("ngos");
  console.log("test1")

dbRefObject.on('value', snap => {

	json.data = snap.val();
  json.success = true;
  console.log(json.data);

  if (json.success) {
    console.log("test")
    let bd = document.getElementById("ngoTB");
    if (ct) document.getElementById("resultsFor").innerHTML += ct;
    if (sc) document.getElementById("resultsFor").innerHTML += sc;
    if (nm) document.getElementById("resultsFor").innerHTML = nm;
    if (nm && nm.length < 1) bd.innerHTML = "";

    if(window.location.hash == "Mumbai") {
ct = "Mumbai";
    }

    if (ct || sc || nm || cm) {
      bd.innerHTML = "";
      let results = 0;

      let len = 100;
      let st = 0;
      while (results < 50 && len < 19000) {

        for (let i = st; i < len; i++) {
          let a = json.data[i];
          if (a == null || !a.city) continue;
          if (ct && ct.trim().toLowerCase() == a.city.toLowerCase().trim()) {
            bd.innerHTML += `    <tr onclick='getNGO(${i})'>
            <td> ${a.ngoname}</td>
            <td>${a.registeredwith + ", " + a.registrationnumber}</td>
            <td>${a.address}</td>
            <td>${a.city}</td>
      
          </tr>`;
            results++;
          }

          if (ct && ct.toLowerCase().trim() == "all") {
            bd.innerHTML += `    <tr onclick='getNGO(${i})'>
            <td> ${a.ngoname}</td>
            <td>${a.registeredwith + ", " + a.registrationnumber}</td>
            <td>${a.address}</td>
            <td>${a.city}</td>
      
          </tr>`;
            results++;
          }

          if (nm && nm.trim().toLowerCase().startsWith(a.ngoname.toLowerCase().trim().slice(0, nm.length))) {
            bd.innerHTML += `    <tr onclick='getNGO(${i})'>
            <td> ${a.ngoname}</td>
            <td>${a.registeredwith}</td>
            <td>${a.address}</td>
            <td>${a.city}</td>
      
          </tr>`;
            results++;
          }

          if (cm && cm.trim().toLowerCase().startsWith(a.city.toLowerCase().trim().slice(0, cm.length))) {
            bd.innerHTML += `    <tr onclick='getNGO(${i})'>
            <td> ${a.ngoname}</td>
            <td>${a.registeredwith}</td>
            <td>${a.address}</td>
            <td>${a.city}</td>
      
          </tr>`;
            results++;
          }
        }
        len = len + 100;
        st = st + 100;
      }

      if(results) { 
        scrollto(".resScroll");
       spin.style.display = "none";
       spin2.style.display = "none";

       
      }


    }
  

  } 
  else {
    alert("Something went wrong!");
  //  history.push("/");
  }

}, function(error) {
  // The fetch failed.
  console.error(error);
});
  document.getElementById("resultsFor").innerHTML = "";

 
};

const getEvents = async (ct,dt,nm) => {
  let json = {success:true}
  const dbRefObject =  firebase.database().ref("events");
dbRefObject.on('value', snap => {

	json.data = snap.val();
  console.log(json.data)
  json.success = true;
  document.getElementById("resultsFor").innerHTML = "";
  let cityf = document.getElementById("cities").value;
  let sdate = document.getElementById("date").value;



  if (json.success) {
    let bd = document.getElementById("eventsTB");
    if (ct) document.getElementById("resultsFor").innerHTML += ct;
    //if(sc) document.getElementById("resultsFor").innerHTML += sc;
    if (nm) document.getElementById("resultsFor").innerHTML += nm;
    if (nm && nm.length < 1) bd.innerHTML = "";


    if (1) {
      
      bd.innerHTML = "";
      let results = 0;
      let len = 100;
      let st = 0;
      console.log(json.data)
      let found = false;
      while (results < 50 && len < json.data.length) {

        for (let i = st; i < len; i++) {
          let a = json.data[i];
          console.log(ct && !dt && cityf.trim().toLowerCase() == a.location.toLowerCase().trim())

          if (ct && dt && !sdate.includes("dd") && cityf != "All" && sdate.trim().replace("-", "/").replace("-", "/").replace("-", "/") == a.startDate.trim() && cityf.trim().toLowerCase() == a.location.toLowerCase().trim()) {
            bd.innerHTML += `    <tr>
            <td> <a href="${a.link}"> ${a.name} </a></td>
            <td>${a.startDate}</td>
            <td>${a.endDate}</td>
            <td>${a.location}</td>
            <td>${a.details}</td>

      
          </tr>`;
            results++;
            document.getElementById("resultsFor").innerHTML = `${cityf} on ${sdate}`;

            found = true;
          }
else if (!ct && dt && !sdate.includes("dd")  && sdate.trim().replace("-", "/").replace("-", "/").replace("-", "/") == a.startDate.trim()) {
  bd.innerHTML += `    <tr>
  <td> <a href="${a.link}"> ${a.name} </a></td>
  <td>${a.startDate}</td>
  <td>${a.endDate}</td>
  <td>${a.location}</td>
  <td>${a.details}</td>


</tr>`;
document.getElementById("resultsFor").innerHTML = `${sdate}`;

  results++;
  found = true;
} else if (ct && !dt && cityf.trim().toLowerCase() == a.location.toLowerCase().trim()) {
  bd.innerHTML += `    <tr>
  <td> <a href="${a.link}"> ${a.name} </a></td>
  <td>${a.startDate}</td>
  <td>${a.endDate}</td>
  <td>${a.location}</td>
  <td>${a.details}</td>


</tr>`;
  results++;
  found = true;
} else {
           
              results++;

            }
          }

          if (nm && nm.trim().toLowerCase().startsWith(a.name.toLowerCase().trim().slice(0, nm.length))) {
            bd.innerHTML += `    <tr>
         
            <td> <a href="${a.link}"> ${a.name} </a></td>
            <td>${a.startDate}</td>
            <td>${a.endDate}</td>
            <td>${a.location}</td>
            <td>${a.details}</td>
      
          </tr>`;
            results++;
            found = true;

          }
        }
        len = len + 100;
        st = st + 100;
        document.getElementById("noresults").innerHTML = "Results (" + results + ")";
        if(found) scrollto(".eventScroll");

        if (!found) document.getElementById("noresults").innerHTML = "No results found";
  
  
      }
    

    }

  else {
    alert("Something went wrong!");
    history.push("/");
  }
})
}



const getDonations = async (ct,dt,nm) => {
  let json = {success:true}
  const dbRefObject =  firebase.database().ref("donations");
dbRefObject.on('value', snap => {

	json.data = snap.val();
  console.log(json.data)
  json.success = true;
 
  if (json.success) {
  
    let data = json.data[ct.toLowerCase().trim().replace(" ","")];
    console.log(ct.toLowerCase().trim().replace(" ",""))
let ele = document.getElementById("donations");
ele.innerHTML = "";
    data.forEach((a) => {
ele.innerHTML += `
<div class="col-lg-6 col-md-6">
    <div class="count-box">
        <div>
            <span data-purecounter-start="0" data-purecounter-end="232"
                data-purecounter-duration="1" class="purecounter"></span>
            <h4 class="h4">${a.city}</h4>

            <h3 class="h3">${a.title}</h3> 
            ${a.cperson ? '<p> <i class="bi bi-person" style="font-size:20px;margin-left:1px;"></i>' + a.cperson +'</p>' : ""}
            ${a.phone ? '<p> <i class="bi bi-telephone" class="mx-2" style="font-size:20px;"></i>' + a.phone + '</p>' : ""}
            ${a.addr ? '<p> <i class="bi bi-house" class="mx-2" style="font-size:20px;"></i>' + a.addr + '</p>' : ""}
            ${a.email ? '<p> <i class="bi bi-envelope" class="mx-2" style="font-size:20px;"></i>' + a.email + '</p>' : ""}
            ${a.web ? '<p> <i class="bi bi-link" class="mx-2" style="font-size:20px;"></i><a href="http://' + a.web + '"> WebSite</a></p>' : ""}
            ${a.desc ? '<p> <i class="bi bi-info" class="mx-2" style="font-size:17px;border:1px solid blue;border-radius:50%;"></i>' + a.desc + '</p>' : ""}

            
           
     </div>
    </div>
</div>  `;






    })
    }

  else {
    alert("Something went wrong!");
    history.push("/");
  }
});
};




const getNGO = async(id) => {

  let json = {success:true}
  const dbRefObject =  firebase.database().ref("ngos");
dbRefObject.on('value', snap => {

	json.data = snap.val()[id];
  console.log(json.data)
  json.success = true;

  if(json.success) {
    let a = json.data;
  ngoInfo(a.ngoname,a.president,a.registeredwith,a.typeofngo,a.registrationnumber,a.telephone,a.address,a.email,a.website,a.keyissues,a[""]);
  }
  else {
    alert("Something went wrong!");
  }
});
}

const importArticles = async () => {

  let json = {success:true}
  const dbRefObject =  firebase.database().ref("articles");
dbRefObject.on('value', snap => {

	json.data = snap.val();
  console.log(json.data)
  json.success = true;
  let section = document.getElementById("articles");
  if (json.success) {
    let articles = json.data;
    let rand4 = [];

    while (rand4.length < 6) {
      let article = articles[Math.floor((Math.random() * articles.length))];
      if (!rand4.includes(article)) rand4.push(article);
    }

    let i = 0;
    rand4.forEach((a) => {

      let div = `
    <div class="col-lg-4 my-2">
      <div class="post-box">
        <div class="post-img"><img src="${a.img_link}" class="img-fluid" alt=""></div>
        <span class="post-date">Tue, September 15</span>
        <h3 class="post-title" >${a.art_name}</h3>
        <a href="${a.art_link}" class="readmore stretched-link mt-auto"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
      </div>
    </div>`;
      section.innerHTML += div;
      i++;

      if (i == 3) section.innerHTML += "<br>"
    })

  }
});


}

function ngoInfo(a,b,c,d,e,f,g,h,j,k,l,m) {
  let call = document.getElementById("modalcall");
  let ele = document.getElementById("modalbody");
ele.innerHTML ="";

  ele.innerHTML += `<strong> Name : </strong> ${a} <br>`;
  ele.innerHTML += `<strong> President : </strong> ${b} <br>`;
  ele.innerHTML += `<strong> Registered With : </strong> ${c} <br>`;
  ele.innerHTML += `<strong> Type Of NGO : </strong> ${d} <br>`;
  ele.innerHTML += `<strong> Registration Number : </strong> ${e} <br> <hr/>`;
  ele.innerHTML += `<strong> Telephone : </strong> ${f} <br>`;
  ele.innerHTML += `<strong> Address : </strong> ${g} <br>`;
  ele.innerHTML += `<strong> Email : </strong> ${h.replace("(at)","@").replace("[dot]",".")} <br>`;
  ele.innerHTML += `<strong> WebSite : </strong> ${j} <br>`;
  ele.innerHTML += `<strong> Key Issues : </strong> ${k} <br></hr>`;
  ele.innerHTML += `${l} <br>`;
  console.log("test")
  call.click();

}

let cities = ["All", "Navi Mumbai","Murbad", "Malegaon", "Ambernath",
"New Delhi",
"Roorkee",
"Guwahati",
"Ludhiana",
"Lonavala",
"Goa",
"Varanasi",
"Mysuru",
"Pune",
"Solapur",
"Jabalpur",
"Madurai",
"Kolhapur",
"Puducherry",
"Panjim",
"Tirupati",
"Tirunelveli",
"Chennai",
"Mumbai",
"Kodaikanal",
"Kochi",
"Raysan",
"Guntur",
"Hyderabad",
"Kanchipuram",
"Kolkata",
"Coimbatore",
"Ambala Cantt",
"Faridabad",
"Nashik",
"Bhubaneswar",
"Gandhinagar",
"Hubballi",
"Puri",
"Brahmapur",
"Chittoor",
"Nagpur",
"Kapurthala",
"Jhansi",
"Rourkela",
"Kota",
"Bhawanipatna",
"Jaipur",
"Bhilai",
"Udupi",
"Thiruvananthapuram",
"Bengaluru",
"Greater Noida",
"Visakhapatnam",
"Allahabad",
"Lucknow"
].sort(function(a, b){
  if(a < b) { return -1; }
  if(a > b) { return 1; }
  return 0;
});;
let citiesn = [
  "Aalandi",
  "Aamali",
  "Aambegaon",
  "Aashti",
  "Achalpur",
  "Adas",
  "Adha",
  "Adul",
  "Agar Saygaon",
  "Agegaon",
  "Ahmednagar",
  "Ahemadpur",
  "Aheri",
  "Ahmedpur",
  "Airoli",
  "Ajansonda Khurd",
  "Ajanthagaon",
  "Akluj",
  "Akkalkot",
  "Akkalkuwa",
  "Akola",
  "Akole",
  "Akot",
  "Alandi",
  "Alandi Devachi",
  "Alibag",
  "Allapalli",
  "Almala",
  "Aloor",
  "Alsunde Karmala",
  "Amalner",
  "Amravati",
  "Ambad",
  "Ambajogai",
  "Ambernath",
  "Ambetakli",
  "Ambulga",
  "Amgaon",
  "Amgaon Khurd",
  "Amla",
  "Amoda",
  "Anandgaon",
  "Anandwadi",
  "Andarsul",
  "Andheri",
  "Andhori",
  "Andur",
  "Andura",
  "Anjandoh",
  "Anjangaon",
  "Ansing",
  "Antrolikar Nagar",
  "Parbhani",
  "Arattondi",
  "Ardhapur",
  "Arjuni Morgaon",
  "Arjunwad",
  "Armori",
  "Arni",
  "Arvi",
  "Arwat",
  "Asdfsadf",
  "Ashta",
  "Ashti",
  "Ashvi Kd",
  "Asnoli",
  "Asola",
  "At Bhaler Nandurbar",
  "Atharwadi",
  "Atpadi",
  "Aundha",
  "Aundha Nagnath",
  "Aurad Shahajani",
  "Aural",
  "Aurangabad",
  "Ausa",
  "Babi",
  "Bacheri",
  "Badlapur",
  "Badnapur",
  "Badnera",
  "Bahandara",
  "Bajar Vahegaon",
  "Bajar Wahegaon",
  "Balapur",
  "Ballarpur",
  "Banapur",
  "Banda Sawantwadi",
  "Banegaon",
  "Bangalore",
  "Bansarola",
  "Baradkinhi",
  "Baramati",
  "Barshi",
  "Barshitakli",
  "Barsi",
  "Barwha",
  "Basmat",
  "Basmat Nagar",
  "Basmath",
  "Basmath Nagar",
  "Basmatnagar",
  "Beed",
  "Belgaon",
  "Benoda",
  "Bhadgaon",
  "Bhadnara",
  "Bhadravati",
  "Bhadrawati",
  "Bhagur",
  "Bhalawani",
  "Bhalod",
  "Bhanadara",
  "Bhandara",
  "Bhandgaon",
  "Bhandra",
  "Bhatsawangi",
  "Bhayandar",
  "Bhiwandi",
  "Bhiwapur",
  "Bhiwpur",
  "Bhogaon",
  "Bhokar",
  "Bhokardan",
  "Bhoom",
  "Bhoom City",
  "Bhor",
  "Bhor Pune",
  "Bhosari",
  "Bhulegaon",
  "Bhum",
  "Bhusawal",
  "Bid",
  "Bidal",
  "Biloli",
  "Bodhegaon Bk",
  "Bodwad",
  "Bokud Jalgaon",
  "Bolegaon",
  "Borgaon",
  "Borgaon Budruk",
  "Borgaon Nadri",
  "Borivali",
  "Borkanhar",
  "Bramhapuri",
  "Bramhi",
  "Bubnal",
  "Budh",
  "Buldana",
  "Buldhana",
  "Buldhana Shegaon",
  "Butibori",
  "Chaharadi",
  "Chakan",
  "Chaklamba",
  "Chakur",
  "Chalisagon",
  "Chalisgaon",
  "Chamerga",
  "Chamorshi",
  "chandrapur",
  "Chandivali Mumbai",
  "Chandola",
  "Chandur Bazar",
  "Chandur Bazar Dist A",
  "Chandur Biswa",
  "Chandur Railway Dist",
  "Chandur Rly",
  "chandur biswa",
  "Chandwad",
  "Charrhatha",
  "Chatari Umarkhed",
  "Chatori",
  "Chawarda",
  "Chehel",
  "Chicholi",
  "Chikhaldara",
  "Chikhali",
  "Chikhli",
  "Chimur",
  "Chinchole Male",
  "Chincholi",
  "Chincholi Pk",
  "Chincholi Tal Sangol",
  "Chinchwad",
  "Chiplun",
  "Chirmodi",
  "Chiwali",
  "Chnadurbazar",
  "Chondi",
  "Chopada",
  "Chopda",
  "Chorakhali",
  "Chorjawala",
  "Chulhad",
  "Cidco Nanded",
  "Dabha",
  "Dadar",
  "Dahanu",
  "Dahendri",
  "Dahigaon",
  "Dahisar E",
  "Dahivel",
  "Dahiwadi",
  "Daithana",
  "Daithane Gunjal",
  "Dapka",
  "Dapoli",
  "Daregaon",
  "Daroda",
  "Darwaha",
  "Darwha",
  "Daryapur",
  "Daskhed",
  "Datala",
  "Daud",
  "Daund",
  "Davangaon",
  "Debhegaon",
  "Degioor",
  "Degloor",
  "Deogaon",
  "Deola",
  "Deolali Pravara",
  "Deolgaon Raja",
  "Deoli",
  "Deoni",
  "Deori",
  "Deoulgaon Raja",
  "Desaiganj",
  "Desaiganj Wadsa",
  "Deulgaon Mahi",
  "Deulgaon Raja",
  "Deulgaonraja Buldhan",
  "Deulghat",
  "Devarjan",
  "Devdhaba Tal Malkapu",
  "Devgad",
  "Devmurti",
  "Devrukh",
  "Devshinga",
  "Devtala",
  "Devulwadi",
  "Dhad",
  "Dhadgaon",
  "Dhamangaon",
  "Dhamangaon Badhe",
  "Dhamangaon Rly",
  "Dhanegaon",
  "Dhanoli",
  "Dhanora",
  "Dharmabad",
  "Dharni",
  "Dharur",
  "Dhaulgaon",
  "Dhawada",
  "Dhawda",
  "Dhekanmoha",
  "Dhoki",
  "Dhorkin",
  "Dhudhodi",
  "Dhule",
  "Dhundi",
  "Dhwada",
  "Digaon",
  "Digol",
  "Digoldeshmukh",
  "Digras",
  "Digras Dist Yavatmal",
  "Dindori",
  "Dindrud",
  "Diondaicha",
  "Divale",
  "Divegaon",
  "Djslfjlsa Fdjsalkfj",
  "Dombivli East",
  "Doka",
  "Dombivali",
  "Dombivli",
  "Dombivli District T",
  "Dombivli Thane",
  "Dondaicha",
  "Dongaon",
  "Dongaon Taluka Mehka",
  "Dongarkada",
  "Dughala",
  "Dusarbid",
  "Dyane",
  "Ekdara",
  "Ekurga",
  "Erandol",
  "Etapalli",
  "Fulumari",
  "Gadchiroli",
  "Gadchroli",
  "Gadhi",
  "Gadhinglaj",
  "Gaganpur",
  "Ganeshwadi",
  "Gangakhed",
  "Gangapur",
  "Ganoja Devi",
  "Ganoja Devi Bhatkuli",
  "Gargoti",
  "Gartad",
  "Gautada",
  "Gavase",
  "Georai",
  "Ghaigaon",
  "Ghanewadi",
  "Ghansawangi",
  "Ghatanji",
  "Ghatkopar",
  "Ghatnandur",
  "Ghodegaon",
  "Gholvad",
  "Ghot",
  "Ghoti Karmala",
  "Ghugus",
  "Girdharwadi",
  "Godhala",
  "Gokunda",
  "Gondia",
  "Gondiya",
  "Gondpipri",
  "Goregaon",
  "Gplohara",
  "Guhagar",
  "Guir",
  "Gurudeo Nagar",
  "Gurukunj Ashram",
  "Gurukunj Ashram Moza",
  "Gurukunj Ashram Mozr",
  "Gurukunj Mozari",
  "Hadga",
  "Hadgaon",
  "Hadgaon Devde",
  "Haladgaon",
  "Halda",
  "Hanumantakli",
  "Haratkheda",
  "Harbal",
  "Harsul",
  "Hatkanangale",
  "Hatni Chikhli",
  "Higna Karegaon",
  "Himayatnagar",
  "Hingangaon",
  "Hinganghat",
  "Hingna",
  "Hingoli",
  "Hiwara Ashram",
  "Hiwarkhed",
  "Holnanthe",
  "Hussa",
  "Ichalkaranji",
  "Ieet",
  "Ijani Dharmapuri",
  "Ijjatgaon",
  "Indapur",
  "Ingali",
  "Isapur",
  "Islampur",
  "Itkur",
  "Jafrabad",
  "Jaipur",
  "Jaisingh Pura",
  "Jalana",
  "Jalgao Jamod",
  "Jalgaon",
  "Jalgaon Jamod",
  "Jalgoan",
  "Jalkot",
  "Jalna",
  "Jamb Bk",
  "Jambhala",
  "Jambhulghat",
  "Jamkhed",
  "Jamkhurd",
  "Jamner",
  "Jamthi",
  "Jategaon",
  "Jath",
  "Jawala Panchal",
  "Jawhar",
  "Jaysingpur",
  "Jejuri",
  "Jeur",
  "Jintur",
  "Jiwati",
  "Jogeshwari",
  "Junnar",
  "Junnar Pune",
  "Kada",
  "Kadegaon",
  "Kadepur",
  "Kagal",
  "Kaij",
  "Kaij Beed",
  "kalamb",
  "kalambb",
  "kalambkonda Bk",
  "kalambnuri",
  "Kalanri Borgaon",
  "kalamb Dist Osmanaba",
  "Kallur",
  "Kalmbeshar",
  "Kalmeshwar",
  "Kalwan",
  "Kalyan",
  "kalyan west",
  "kalyan westest",
  "Kamargaon",
  "Kameri",
  "Kamothe",
  "Kamptee",
  "Kandhar",
  "Kandri",
  "Kanhalgaon",
  "Kaniyadol",
  "Kankavli",
  "Kannad",
  "Kapshi",
  "Kapustalni",
  "Karad",
  "Karajgaon",
  "Karanja Ghadge",
  "Karanja Lad",
  "Karanjalad",
  "Karanjgaon",
  "Karegaon",
  "Karhewadgaon",
  "Kari",
  "Karjat",
  "Karla",
  "Karmad",
  "Karmala",
  "Kasabe Tadwale",
  "Kasal",
  "Kasaral",
  "Kasari",
  "Kasarshirsi",
  "Kashti",
  "Katgaon",
  "Katol",
  "Kautha",
  "Kavathe Mahankal",
  "Kavthali",
  "Kawjawala",
  "Kelod",
  "Kem",
  "Kendhali",
  "Kesapur",
  "Khadakdeola Kh",
  "Khadavali",
  "Khadka",
  "Khadki",
  "Khalapur",
  "Khambegaon",
  "Khamgaon",
  "Khanapur",
  "Khandala",
  "Khandavi",
  "Khandbara",
  "Kharab Khandgaon",
  "Kharghar",
  "Kharshing",
  "Khasgaon",
  "Khed",
  "Khergaon",
  "Khilarwadi",
  "Khuldabad",
  "Khumgaon Burti",
  "Killari",
  "killari",
  "Kinwat",
  "Kirlos",
  "Kiwla",
  "Kodoli",
  "kol",
  "Kol",
  "Kolgaon",
  "Kolhapur",
  "kohlapur",
  "Kolsa",
  "Kolsar",
  "Kondha Kosra",
  "Kondhala",
  "Kopargaon",
  "Koparkhairne",
  "kopargaon",
  "Kora",
  "Koregaon",
  "Korochi",
  "Kosara",
  "Kostagaon",
  "Kothara",
  "Kothrud",
  "Kotij",
  "Kotul",
  "Kudal",
  "Kudus",
  "Kuhi",
  "Kumbhar Pimpalgaon",
  "Kumbhephal",
  "Kuncheli",
  "Kundal",
  "Kundalwadi",
  "Kupwad",
  "Kurdu",
  "Kurduvadi",
  "Kurkheda",
  "Kurundwadi",
  "Kurundwadii",
  "Kuruswade",
  "Kuslamb",
  "Ladka",
  "Ladki Bk",
  "Lakhani",
  "Lakhanwada",
  "Lakhanwada Bk",
  "Lalbaug",
  "Lanja",
  "Lasalgaon",
  "Laslgaon",
  "Latur",
  "Latur Dist Latur",
  "Lawada Village",
  "Lingdari",
  "Loha",
  "Lohara",
  "Lonand",
  "Lonar",
  "Lonavala",
  "Lonavla",
  "Loni",
  "Loni Bk",
  "Loni Khurd",
  "Machindranath Chinch",
  "Madha",
  "Mahabaleshwar",
  "Mahableshwar",
  "Mahad",
  "Maharashtra",
  "Mahashtra",
  "Mahim",
  "Mahisgaon",
  "Mahuli",
  "Mahuli Chor",
  "Mahurkuda",
  "Maindwadi",
  "Majalgaon",
  "Makodi",
  "Malad",
  "Malegaon",
  "Malegaon Camp Nashik",
  "Malgaon",
  "Maliwadgaon",
  "Malkapur",
  "Malkapur Akola",
  "Malpur",
  "Malshiras",
  "Malvan",
  "Mamdabad",
  "Mana",
  "Manav",
  "Manchar",
  "Manchar Pune",
  "Mandka",
  "Mangalawedha",
  "Mangalwedha",
  "Mangangaon",
  "Mangrul Chavala",
  "Mangrul Dastgir",
  "Mangrulpir",
  "Mankhed",
  "Manmad",
  "Manora",
  "Mantha",
  "Manwat",
  "Mardi",
  "Marlegaon",
  "Marsul",
  "Martala",
  "Marul",
  "Marul Tal Yawal",
  "Masla",
  "Massa Khandeshware",
  "Matawali",
  "Mathpimpalgaon",
  "Matkuli",
  "Mayani",
  "Medha",
  "Mehakar",
  "Mehkar",
  "Met Hirji",
  "Mhaisal",
  "Mharugdewadi",
  "Mhasawad",
  "Mhasla Khurd",
  "Mhaswad",
  "Mira Bhayandar",
  "Mira Road",
  "Mira Road E",
  "Mirabhayandar",
  "Miraj",
  "Miraroad",
  "Moghan",
  "Moha",
  "Mohadi",
  "Moharale",
  "Mohnal",
  "Mohol",
  "Mokhada",
  "Molagi",
  "Morshi",
  "Motaraga Tq Mukhed",
  "Mouje Tasgaon",
  "Mubai",
  "Mudalwadi",
  "Mudgal",
  "Mudkhed",
  "Mugat",
  "Mukati",
  "Mukhed",
  "Muktainagar",
  "Mul",
  "Mulaj",
  "Mulawa",
  "Mulchira",
  "Mulund West",
  "Mumabi",
  "Mumbai",
  "Mumbai Ce",
  "Mumbai Centrai",
  "Mumbai Suburban",
  "Mumbra",
  "Mumewadi Distt Kolha",
  "Murbad",
  "Murgud",
  "Murtijapur",
  "Murtizapur",
  "Murud",
  "Murud Janjira",
  "Murum",
  "Na",
  "Nachangaon",
  "Nagad",
  "Nagar",
  "Nagbhid",
  "Nagpur",
  "Nagpur V",
  "Nagput",
  "Nagzeri",
  "Naigaon",
  "Nalasopara",
  "Nalasopara W",
  "Naldurg",
  "Nalegaon",
  "Nallasopara",
  "Nampur",
  "Nanded",
  "Nanded Tal Dharangoa",
  "Nandgaon",
  "Nandgaon Khandeshwar",
  "Nandkheda",
  "Nandra",
  "Nandura",
  "Nandurbar",
  "Nandurbar Maharashtra",
  "Nandurghat",
  "Nandurnimbadaitya",
  "Narangal",
  "Narasobawadi",
  "Narayangaon",
  "Narewadi",
  "Narodi",
  "Narsi Tq Naigaon",
  "Nashik",
  "Nashik Road",
  "Nashiki",
  "Nasik",
  "Navapur",
  "Navegaon bandh",
  "Navegoan Bandh",
  "Navi Mumbai",
  "Nawargaon",
  "Neknampur Buldhana",
  "Neknoor",
  "Nelwad",
  "Ner",
  "Ner Parsopant",
  "Neral",
  "Neri",
  "Nerparsopant",
  "Nerul",
  "Nesari",
  "Nevasa",
  "New Majri Colliery",
  "New Panvel",
  "New Panvel East",
  "Newasa",
  "Newasaphata",
  "Nhavara",
  "Nhavara Pune",
  "Nigdi Pradhikaran",
  "Nijampur",
  "Nilanga",
  "Nimkheda Budruk",
  "Niphad",
  "Nira",
  "Nira Gulunche",
  "Nirala",
  "Nirgudi Patoda Beed",
  "Nivali",
  "Nmumbai",
  "Not Available",
  "Omarga",
  "Omerga",
  "Oros",
  "Osamabad",
  "Osmanabad",
  "Osmanpur",
  "Paarbhani",
  "Pachod",
  "Pachora",
  "Padali",
  "Padalse",
  "Pahur",
  "Paithan",
  "Pal",
  "Palam",
  "Paldhi",
  "Palghar",
  "Palsap Osmanabad",
  "Panchagani",
  "Panchgani",
  "Panchwad",
  "Pandharkawada",
  "Pandharkwada",
  "Pandharpur",
  "Pandhrakwada",
  "Pangaon",
  "Pangare",
  "Pangari",
  "Pangri Gosavi",
  "Panvel",
  "Paranda",
  "Paratwada",
  "Parbahni",
  "Parbhanui",
  "Parbhnai",
  "Parbhni",
  "Pardi",
  "Pargaon",
  "Parhani",
  "Parli Vaijanath",
  "Parli Vaijnath",
  "Parli Vaijynath",
  "Parner",
  "Parola",
  "Parseoni",
  "Partur",
  "Patan",
  "Pate",
  "Pathardi",
  "Pathri",
  "Patkul",
  "Patoda",
  "Patoda G",
  "Patsara",
  "Patur",
  "Pauni",
  "Pavani",
  "Pen",
  "Pesegoa",
  "Peth",
  "Peth Vadgaon",
  "Petrol Pump Thane",
  "Phaltan",
  "Phulambri",
  "Pimpaldari",
  "Pimpalgaon",
  "Pimpalgaon Baswant",
  "Pimpalgaon Kale",
  "Pimpalgaon Kohali",
  "Pimpalkhuta",
  "Pimpalner",
  "Pimpalwadi",
  "Pimpari Chinchwad",
  "Pimparkhed",
  "Pimpode Bk",
  "Pimpode Budruk",
  "Pimpri Chinchwad",
  "Pimpri Turk",
  "Pimpriraja",
  "Pipari Meghe Wardha",
  "Pohegaon",
  "Pokharni",
  "Poundul",
  "Pouni",
  "Pradhikaran",
  "Pulgaon",
  "Puluj",
  "Pune",
  "Pune City",
  "Pune Maharashtra",
  "Puntamba",
  "Purandar",
  "Purna",
  "Pusad",
  "Pusda",
  "Pusegaon",
  "Puyni",
  "Radhanagari",
  "Rahata",
  "Rahata Shrirampur",
  "Rahimatpur",
  "Rahuri",
  "Raigad",
  "Raimoha Beed",
  "Raipatan",
  "Rajapur",
  "Rajgurunagar",
  "Rajur",
  "Rajura",
  "Ralegan Siddhi",
  "Ralegaon",
  "Ramnagar",
  "Ramtek",
  "Ramtek Nagpur",
  "Rani Savargaon",
  "Ranisawargoan",
  "Ranjani",
  "Rasayani",
  "Rashin",
  "Ratnagiri",
  "Ratoli",
  "Ravangaon",
  "Raver",
  "Renapur",
  "Renavi",
  "Revgaon",
  "Risod",
  "Roha",
  "Rohanwadi",
  "Rohinkhed",
  "Ropale Khurd",
  "Roshangaon",
  "Sadak Arjuni",
  "Sagroli",
  "Sailu",
  "Sakali",
  "Sakegaon",
  "Sakharale",
  "Sakhra Digras",
  "Sakli",
  "Sakoli",
  "Sakri",
  "Sakri Dist Dhule",
  "Salekasa",
  "Salse",
  "Salshinfi",
  "Samudrapur",
  "Sanagamner",
  "Sangamner",
  "Sangarul",
  "Sangli",
  "Sangola",
  "Sangrampur",
  "Saoli",
  "Saoner",
  "Saori",
  "Sarangpur",
  "Sarawade",
  "Sarkali",
  "Sarni",
  "Sarsam Bk",
  "Sastur",
  "Saswad",
  "Satana",
  "Satana Nasik",
  "Satara",
  "Satara Koregaon",
  "Satona Budruk",
  "Satsang Chouk Hiwark",
  "Savda",
  "Savedi Ahmednagar",
  "Sawana Tanda",
  "Sawantwadi",
  "Sawarde",
  "Sawargaon R",
  "Sawkheda",
  "Sawri",
  "Seloo",
  "Selu",
  "Selu Tqselu Dist Par",
  "Sendre",
  "Sengaon",
  "Sevegram",
  "Shahada",
  "Shahagad",
  "Shahapur",
  "Shambhusavargaon",
  "Shegaon",
  "Shelgaon Gauri",
  "Shelkewadi",
  "Shellal",
  "Shelu Bazar",
  "Shetphale",
  "Shevga",
  "Shevgaon",
  "Shindewadi",
  "Shindgavhan",
  "Shindkhed Raja",
  "Shindkheda",
  "Shinkheda",
  "Shirad Shahapur",
  "Shirala",
  "Shirdhon",
  "Shirol",
  "Shiroli",
  "Shirpur",
  "Shirshi Ta Sonpeth",
  "Shirur",
  "Shirur Anantpal",
  "Shirur Kasar",
  "Shirur Tajband",
  "Shivajinagar",
  "Shivani",
  "Shivani Bk",
  "Shivni",
  "Shivoor",
  "Shiwangaon",
  "Shrigonda",
  "Shrigonda Factory",
  "Shripur",
  "Shrirampur",
  "Shrishivajinagar",
  "Siddatek Berdi",
  "Sidhnerli",
  "Sillod",
  "Sindewahi",
  "Sindhudurga",
  "Sindhudurgnagri",
  "Sindi Maghe",
  "Sindkhed Raja",
  "Sindkheda",
  "Sindkhedraja",
  "Sinkhedraja",
  "Sinnar",
  "Siporabazar",
  "Sirsala",
  "Sitekasa Khapa",
  "Soalpur",
  "Soegaon",
  "Solaapur",
  "Solapur",
  "Someshwarnagar",
  "Somnathpur",
  "Sompeth",
  "Sonai",
  "Sonala",
  "Sonkhed",
  "Sonpeth",
  "Soundad",
  "South Solapur",
  "Sukali Khurda",
  "Sullali",
  "Surajkheda",
  "Surgana Nashik",
  "Ta Deulgaon Raja",
  "Ta Palam",
  "Tadgaon",
  "Takali Bhima",
  "Takali Haji",
  "Takarwan Tq Majalgaon Dist Bid",
  "Takli Kumbhakarna",
  "Tal Akole",
  "Tal Dapoli Dist Rat",
  "Tal Partur Dist Jaln",
  "Talai",
  "Talani",
  "Talasari",
  "Talegaon",
  "Talegaon Dabhade",
  "Talegaon Dashasar",
  "Talegaon Sp",
  "Talere",
  "Taloda",
  "Taltondi",
  "Taluka kalambnuri",
  "Talwel",
  "Tambale",
  "Tandulwadi",
  "Tarasawnga",
  "Taroda K",
  "Taroda Khurd",
  "Taroda Khurd Nanded",
  "Tasgaon",
  "Tekabedar",
  "Telhara",
  "Tembhu",
  "Tembhurni",
  "Teur",
  "Thakurpimpalgaon",
  "Thane",
  "Thane City",
  "Thane West",
  "Thane Westest",
  "Tintarwani",
  "Tirora",
  "Tiruka",
  "Titwala",
  "Tondapur",
  "Tondchir",
  "Tonglabad Tq Daryapu",
  "Tq Ashti Dist Beed",
  "Tq Umarkhed Dist Yav",
  "Tuljapur",
  "Tumsar",
  "Tumser",
  "Tungi",
  "Tuppa",
  "Udgir",
  "Udgir Latur",
  "Ulhasnagar",
  "Umapur",
  "Umarkhed",
  "Umbre Rahuri",
  "Umred Dist Nagpur",
  "Umrer",
  "Umri",
  "Umri Jahangir",
  "Undangaon",
  "Upali",
  "Uran",
  "Uttur Kolhapur",
  "Vadangali",
  "Vaduj",
  "Vagdari",
  "Vaijapur",
  "Vairag",
  "Vambori",
  "Vasagade",
  "Vasai",
  "Vasai Road",
  "Vasai Thane",
  "Vasai Virar Mahanaga",
  "Vasarni",
  "Vashi",
  "Vashi Navi Mumbai",
  "Vasmat",
  "Vazirabad",
  "Vengurla",
  "Vikramgad",
  "Vile Parle",
  "Village Belli Khurd",
  "Village Pangare",
  "Village Taroda Khurd",
  "Village Waki",
  "Virar",
  "Virdel",
  "Vita",
  "Vyad",
  "Wada",
  "Wadala",
  "Wadgaon Sarhadd",
  "Wadhiwra",
  "Wadki",
  "Wadkshivale",
  "Wadner Bholji",
  "Wadod Tangda",
  "Wadoda",
  "Wadwani",
  "Waghali",
  "Wagholi",
  "Wai",
  "Wajirkheda",
  "Wakala",
  "Waki",
  "Walsawangi",
  "Waluj",
  "Walva",
  "Wani",
  "Warana",
  "Warana Kodoli",
  "Warananagar",
  "Wardha",
  "Warora",
  "Warthi",
  "Warud",
  "Warud Tq Pusad",
  "Wasadi",
  "Washi",
  "Washim",
  "Watfali",
  "Wathar",
  "Watwada",
  "Wazar Budruk",
  "Wazur",
  "Weltura",
  "Worli",
  "Worli Mumbai",
  "Yavatamal",
  "Yavatmal",
  "Yavatmal Maharahtra",
  "Yavtmal",
  "Yawal",
  "Yawal Dist Jalgaon",
  "Yawatmal",
  "Yelamb Bramhanad",
  "Yeldari",
  "Yeola",
  "Yeotmal",
  "Yerandi",
  "Yermala",
  "Zari"
].sort(function(a, b){
  if(a < b) { return -1; }
  if(a > b) { return 1; }
  return 0;
});

let citiesd = ["Mumbai","Bangalore","Chennai","Delhi NCR","Hyderabad","Other Cities"];



function importUpcommingEvents() {
  const dbRefObject =  firebase.database().ref("eventsN");
  dbRefObject.on('value', snap => {
  let json = {}
    json.data = snap.val();
    json.success = true;
    let evs = json.data;
let i = 1;
  let doc = document.getElementById("upevs");
  evs.forEach((e) => {
    if(e.startDate != null) {
      if(new Date(e.startDate).getTime() > new Date().getTime() && i < 7) {
      let d = e.startDate.split("/");
      let y = d[0];
     
      var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      m = mS[d[1] - 1];
          let ht = ` <li>
    <a href="${e.link}">
      <span class="number">${i}</span>
      <h3>${e.name}</h3>
      <span class="author">${d[2] + " " + m + " " + y}, ${e.location}</span>
    </a>
  </li>`;
  i++;
  doc.innerHTML += ht
      }
    }
  })
})


}

function importTop3() {
  const dbRefObject =  firebase.database().ref("top3");
  dbRefObject.on('value', snap => {
  let json = {}
    json.data = snap.val();
    json.success = true;
    if(json.success) {
      console.log(json.data)
      let i = 1;
      let doc = document.getElementById("top3");
      json.data.forEach((a) => {
let ht = `  <div class="col-lg-4 border p-2 mx">
<div class="post-entry-1 ">
  <a href="${a.ngo_link}"><img src="${a.image_link}" alt="" class="img-fluid"></a>
  <div class="post-meta"><span class="date">${a.tag}</span> </div>
  <h2><a href="${a.ngo_link}">${a.ngo_name}</a></h2>
       
</div>

</div>`;
doc.innerHTML += ht;
      })
    }
  });
}

function importSusInnov() {
  let data = [
    {"title":"Machine Learning Manufacturing�","inventor":"Arjun Chandar, Founder and CEO, IndustrialML","paragraph":"<br>Manufacturing, logistics, and building materials�essentially the summation of the supply chain�are collectively some of the leading producers of greenhouse gas emissions. In fact, according to�McKinsey, most of the environmental impact associated with the consumer sector is embedded in supply chains, accounting for more than 80% of greenhouse-gas emissions and more than 90% of the impact on air, land, water, biodiversity, and geological resources.� We live in a consumer culture, and oftentimes in factories, products are overproduced or overstocked�ultimately wasting resources through the actual production of items but also leading to increased emissions from the toll on shipping and storage. There is a technological solution for this consumeristic bad habit of waste, thanks to company�IndustrialML. Machine learning is a capacity that Artificial Intelligence possesses and helps it to continue to learn and improve itself over the course of time as more data is input. IndustryML wields the power of machine learning to make factories smarter so that they can use less raw material for production and eliminate waste in their processes, allowing manufacturers to increase their capacity while minimizing their impact on the environment. This sustainable-tech advancement will help to refine manufacturing processes, which leads to improved efficiency, less energy consumption, and reduced emissions.<br>"}
    ,
    {"title":"Making Plastic out of Wood","inventor":"Ossian Aschan, established the central lab for research at the VTT","paragraph":"<br>Researchers now estimate that more than 8.3 billion tons of plastic have been produced since the early 1950s, with�60% of that plastic�ending up in either a landfill or the natural environment. Unfortunately, single-use plastic isn�t a new environmental problem for the world, and its functionality and purpose within our society is deep-seated.� The best solution to our overuse of plastics is to find a viable replacement for them, and that is exactly what the�VTT Technical Research Centre of Finland�has done by creating a compostable multi-layer material from agricultural and forestry byproducts that mimics the utility of plastics. Their proprietary material can be used for all stand-up food pouches for products such as muesli, nuts, dried fruit, or rice. These wood byproducts contain cellulose, the most abundant renewable polymer on the planet, making this novel material an environmentally benign alternative to fossil fuel-based, multi-layered plastic packaging.<br>"}
    ,
    {"title":"Floating Solar Panels","inventor":"B�rge Bj�rneklett, CEO, Ocean Sun","paragraph":"<br>Solar energy is one of the most abundant and�cheapest types of energy�that exists. Unfortunately, the biggest hindrance in fully adapting to more sun-powered energy lies in the fact that solar panels tend to take up a lot of space. This in turn has spurred much debate about how much land should be given up for solar farms.� A promising solution can be found in floating solar panels, which instead sit on top of large bodies of water. These panels can be placed on the surface of lakes or reservoirs, where they can absorb energy even more efficiently than land-based solar panels thanks to the cooling effect of the water. What�s more, these panels have even been found to help protect lakes from some of the harmful effects of climate change. Norwegian startup�Ocean Sun�has created an efficient, low cost and durable solution for floating solar power generation. Their proprietary non-permeable membranes quickly and securely attach to the floater solar panel unit using a unique fixation mechanism. As a result, their modules enable improved thermal contact with the body of water and could turn the tide for solar panels becoming a primary resource for the world�s electricity needs.�<br>"}
    ,
    {"title":"AI to Help Replace Meat and Synthetic Additives in Our Food","inventor":"Priyanka Srinivas, CEO and Founder, The Live Green Co","paragraph":"<br>A major new study has found that the global production of food is responsible for a third of all planet-heating gases emitted by human activity, with the use of animals for meat�causing twice the pollution�of plant-based foods�with meat accounting for nearly 60% of all greenhouse gases emitted by food production. The Live Green Co, a sustainable food tech company that aims to accelerate the world�s transition to healthy and sustainable food, has thankfully manifested a solution. Charaka, their AI-powered recommendation platform, blends ancestral wisdoms of plant nutrition with biotech and machine learning to prescribe plant-only replacements for the animal, synthetic and ultra-processed additives in food products.� This recommendation engine aims to replace the tastes of many of these foods, but with more sustainable, healthy, all-plant� alternatives�serving as a major agent of change towards sustainability for the worldwide food industry.� The company has said that it is spearheading the next phase of the plant revolution, moving beyond plant-based products, which still contain harmful artificial ingredients, to an all-plant diet.�<br>"}
    ,
    {"title":"Indoor Vertical Gardens","inventor":"Matt Barnard, CEO, Plenty Farms","paragraph":"<br>In 2019, the�EPA reported�that 12% of the US�s greenhouse gas emissions came from land-use including farming, forestry, and peatland. So, in order to�get to net zero, we�re going to need to seriously rethink how farming works and how we utilize mother earth�s soils.� Vertical farms are a growing (literally) solution for this. Vertical farms are indoor structures that stack plants on top of each other so that lots can be grown in a relatively small space.� California-based start-up�Plenty, for instance, has recently prototyped a 2-acre farm that can produce 720 acres� worth of food. Their method utilizes machine learning and AI to make sure the plants are getting all the light and water they need, ensuring that any type of fruit or vegetable can be grown all year round. Plenty�s farms are designed to increase the yield of crops over 350x relative to traditional farming�a seriously promising technological solution for reducing greenhouse gas emissions while also feeding our growing population!<br>"}
    ,
    {"title":"Leveraging AI to Tell Sustainable Stories","inventor":"Anand S., CEO, Gramener","paragraph":"<br>In 2021, in the US alone, there were�18 extreme climate-related disasters�with monetary losses related to each incident exceeding $1 billion each. It is clear that if societies continue to do nothing, dire circumstances loom near on the horizon for humanity.� Sustainable solutions on a broader spectrum, such as in the context of business, societal, and socioeconomic problems are never simple, however. They often take complex analytics that are nearly impossible to comprehend without the help of Artificial Intelligence (AI) and interactive data visualizations.�Gramener�is a design-led data science company that employs all of these techniques to help solve complex business problems with compelling data stories using insights and a low-code analytics platform.� Using a wide spectrum of techniques, Gramener can help solve some of the most pressing societal sustainability disparities through collaborations with public health professionals, enterprises, local governments, communities, nonprofits, and technology partners. Helping to create a cross-sector of intervention where technology is democratized, this company works to rectify sustainability solutions for wide-scale infrastructures.�<br>"}
    ,
    {"title":"Reducing Pollutants Caused by Electronic Devices","inventor":"Eva Gouwens, CEO, Fairphone","paragraph":"<br>Globally, we generated�an estimated 57.4 million tonnes of electronic waste, or e-waste, in 2021 alone. It is estimated that it will constitute 15% of global emissions by 2040, which is equivalent to�half of the entire world�s transportation sector�emissions.� Fairphone�introduced a special design for their new Fairphone3 in 2020 to reduce its greenhouse gas emissions. Their proprietary design can extend a phone�s lifetime from an average of 2.7 years to about five years, which leads to a significant 30% reduction of greenhouse gas emissions per year of use, across the entire life cycle of the phone.� The company has also increased the number of fair materials integrated into the supply chain for their new phones. Each Fairphone 3+ is made with 41% post-consumer recycled plastics � a jump from the 9% for the original Fairphone 3.� In 2020, Fairphone also successfully refurbished about 40% of the smartphones that were collected, and what couldn�t be reused were safely recycled. What�s more, through the company�s European takeback program, Fairphone compensated 18% for collecting old devices�making it one of the leading sustainable tech companies in the world.�<br>"}
    ,
    {"title":"Delivery Robots to Reduce CO2 Emissions","inventor":"Felipe Ch�vez, CEO, Kiwibot","paragraph":"<br>Kiwibot�is an innovative company changing the way food is delivered, and better yet their solution could considerably cut down on emissions. This is vital because if changes aren�t made, it�s projected that�carbon emissions from food delivery will rise 32%�by 2022, equating to around 6 million tons. Much like last-mile delivery apps like DoorDash or UberEats, Kiwibot enables customers to order food from participating restaurants in their local area, but rather than dispatching a delivery person, the food is delivered by a Kiwibot�an autonomous robot on wheels.� Kiwibot�s 400 robots have made over 150,000 deliveries, making them the number one robot delivery platform globally since their induction in 2017. Since then, the company has been making big strides, striking partnerships with industry giants and expanding across the globe from Medell�n, Colombia, to California, USA, to Taipei, Taiwan. According to Forbes, the startup has recently�signed a collaboration�with�Careem, a subsidiary application of Uber operating in the Middle East, to launch 1,200 delivery robots in Dubai, UAE.�<br>"}
    ,
    {"title":"Sustainable City Planning","inventor":"Dan Doctoroff, CEO, Sidewalk Labs�","paragraph":"<br>In just a few decades, the planet could eventually warm to levels it hasn�t reached in at least�34 million years, leading to more melting glaciers and floods than ever before�this will cause significant changes in urban areas such as heatwaves, higher rents, and dwindling resources. Sidewalk Labs�is a startup that aims to transform urban spaces into sustainable and affordable communities, partnering with city organizations and corporations to create new models for city planning.� Sidewalks Labs� multidisciplinary team of engineers, technicians, and city planners design technologies and spaces with affordability and sustainability in mind. Using generative design services leverage the power of AI and machine learning to help city planners design spaces that meet everyone�s needs, they will help to ensure that cityscapes can adapt to the changing times.�<br>"}
    ,
    {"title":"Mitigating Food Waste in The Supply Chain","inventor":"James Rogers, CEO and Founder, Apeel Sciences","paragraph":"<br>According to�McKinsey, most of the environmental impact associated with the consumer sector is embedded in supply chains, accounting for more than 80% of greenhouse-gas emissions and more than 90% of the impact on air, land, water, biodiversity, and geological resources. Furthermore, a good portion of the waste contributing to global food waste also occurs during the shipping and transport stages in the food supply chain from food spoiling before it reaches its final destination.� Apeel Sciences�is lending a hand in solving the food waste crisis by helping to extend the longevity of perishable foods, developing edible, plant-based sealants that can help maintain moisture and freshness levels for produce. Their patented technologies lock in water and slow oxidation, making fruits and vegetables last for longer periods of time. This shows great potential in helping to eliminate food waste and mitigate the overall resource wasting that occurs in the supply chain, creating a more sustainable food industry for tomorrow.<br>"}
    ,
    {"title":"Efficiency as a Service","inventor":"Arvin Vohra, CEO, Redaptive","paragraph":"<br>Putting the world on a path to achieve net-zero emissions by 2050�requires a substantial increase�of capital-intensive clean energy assets � such as wind, solar PV, electric vehicles, and hydrogen electrolyzers � which have relatively high upfront investment costs and lower operating and fuel expenditures over time.� This can make it seem daunting to companies that either rent or own their office spaces to transition their pre-existing environments to cleaner power. Redaptive�lends a hand by helping companies deploy energy-efficient solutions across all their properties. The company markets their services as EaaS (Efficiency-as-a-Service), helping guide its clients through the processes of planning and installing clean energy solutions, and helping companies maximize their savings by only charging for energy usage with a monthly utility bill. Redaptive�s team of business and technology experts deliver a groundbreaking platform that accelerates energy efficiency and sustainable energy adoption. Helping C-suite executives, sustainability directors, and facility managers at Fortune 500 companies around the world overcome capital and contractual barriers to lower energy costs and reduce emissions.�<br>"}
    ,
    {"title":"Displacing Wasted Energy in Boat Storage�","inventor":"Josh Bremmerer, CEO, Komodo Covers","paragraph":"<br>One of the SDG goals is�to double the global rate�of improvement in energy efficiency by 2030. This begs the question of how we can truly become energy efficient while many not only own unnecessarily large living spaces but also several other storage units for their excess material items. One of which is storing boats for the winter�using energy in the forms of heat and electricity for months. Komodo Covers�are designed to be impervious to the elements, protecting your boat from anything mother nature can throw at it. An �intelligent boat cover�, the design embodies usability, durability, and versatility while keeping boats dry no matter the conditions. Its name is inspired by the scaly skin and expanding rib cage of the Komodo Dragon. Combining key features like expanding beams that act like a rib cage, and a control unit that keeps the cover taut and the interior dry with integrated heat and dehumidification. This makes the boat cover not only beneficial for daily use, allowing boats to dry out overnight, but also allow for effective, long-term outdoor storage. All this at less than half the cost of heated boat storage for one winter.<br>"}
    ,
    {"title":"Eliminating Styrofoam For Good","inventor":"Nils Bachmann, Sophia Scherer, Henning Tschunt and Lisa Antonie Scherer","paragraph":"<br>It is no secret that Styrofoam is bad for the environment,� seeing that it isn�t biodegradable.� In fact, styrofoam products alone fill up 30% of our landfill space, and landfills are fast becoming full. Despite the fact that styrofoam cannot be recycled, it still remains in wide circulation.� Company�Proservation�in Germany has developed a natural alternative using grain husks. The company says it has all of the same shock-absorbing, insulating and lightweight credentials, while being 100% biodegradable. The packaging has individual shaping, high functionality, and an appealing design. By making the switch, landfills can lose 1/3rd of their weight.�<br>"}
    ,
    {"title":"Electric Planes","inventor":"Michael Cervenka, President,�Vertical Aerospace","paragraph":"<br>If electric cars are a thing, why not electric planes? At the moment, there are around 170 different projects worldwide, all working on developing viable electric aircraft.� This electrifying race for the skies has probably been spurred by the fact that aviation is responsible for�12% of CO2 emissions�from all transport sources. Although this percentage wanes in comparison to the 74% from road transport, the more that globalization grows, the more this percentage is bound to grow as well.� Rolls Royce recently successfully�pulled off a 15-minute maiden flight�in their first 100%-electric aircraft in the UK. This maiden voyage was spearheaded by�Vertical Aerospace, a British company owned by OVO founder Stephen Fitzpatrick, who has the vision of decarbonizing air travel using the best technology from the aviation, energy, and automotive industries. With several partnerships already underway and pre-orders for up to 1,350 aircraft from Amajor airlines across the board estimated at $5.4bn, it seems as though electric airlines aren�t such a high-flying fantasy after all.�<br>"}
    ,
    {"title":"Repurposing Debris in the Ocean","inventor":"Julen Rodriguez, Co-CEO and Co-Founder, Gravity Wave","paragraph":"<br>An estimated�8 million tons of plastic�enter our oceans every year, a sad statistic considering what a vital part of our ecosystem the ocean is.� Thankfully, Spanish social enterprise�Gravity Wave�has come up with a solution. By partnering with Mediterranean fishermen to collect plastic from the seabed, the company then turns that waste into sustainable products, such as mobile phone cases and filament for 3D printers.� The social enterprise also helps companies become �plastic neutral� by collecting the equivalent amount of plastic that their employees generate�a sure-fire way to help businesses reach net-zero.<br>"}
    ,
    {"title":"Returnable Takeaway Containers","inventor":"Viktoria Berger, CEO and Founder, And-less","paragraph":"<br>While the average American generates�234 pounds of plastic waste every year,�no more than 9 percent�is typically recycled. Although we haven�t quantified exactly how much plastic waste comes from takeaway specifically,� in the US packaging as a whole�for food, beverages, cosmetics, and medications�accounts for�30 % of municipal solid waste. In 2017, this amounted to 80.1 million tons. And-less�is the work of creative minds, clever engineers and dedicated restaurateurs, all pursuing one goal: to free our environment from pointless disposable waste. Founder and Austrian designer Viktoria Berger has been developing sustainable packaging since she won a City of Linz innovation award in 2019, and when Covid-19 hit, she focused her attention on creating reusable takeaway containers.� She ran a successful pilot phase with the reusable containers in Vienna, Linz, and Graz, and now the scheme is now being rolled out to more restaurants. Customers register via an app, scan the QR code on top of the lid, and return the containers to the original restaurant within 14 days, with reward vouchers as an incentive.<br>"}
    ,
    {"title":"Biotech Fashion","inventor":"Dr. Fabiola Polli, PhD � CEO & Founder, BioFashionTech","paragraph":"<br>Unfortunately, a whopping�87% of used clothing�ends up in landfills or incinerators.� On a mission to recover all these resources for use in greener supply chains, Dutch startup�BioFashionTech�has developed a cost-effective, low-energy, circular recycling process that turns textile waste into new materials. Using their own innovative process, they are turning unused textile waste streams into new raw materials, while also upcycling plastics fibers and dyes that are usually blended in the textile themselves. Through this process, they save textiles from incinerations and replace the need for new raw materials, plastics, and dyes at the same time. What is more, their process also extracts plastic fibers and dyes that can then be sold to create a closed-loop solution. This will help to transform complex waste streams into a circular and profitable flow and change the current bad cycle of perpetuating material waste.<br>"}
    ,
    {"title":"Growing Packaging","inventor":"Josh Brito, Co-Founder, MakeGrowLab","paragraph":"<br>New food trends and an escalating population will require a�70% increase in food production,�according to the Food and Agriculture Organization of the United Nations. This will cause societies all over to start rethinking how they produce and package their food and create a need to start working smarter, not harder.� Taking recycled packaging a step further is our final innovative contribution,�MakeGrowLab.� A high performing solution which is durable, 100% free of plastic and home compostable, this company based in Poland has invented a material that can be grown from food waste in just a couple of days. It�s approved for food contact, is resistant to oxygen and water, and is 100% compostable. We would definitely count that as working smarter.<br>"}
    
    ]
let doc = document.getElementById("innovS");
    data.forEach((a) => {
      let ht = `  <div class="swiper-slide">
      <div class="testimonial-item">
       <center>
        <h2>${a.title} </h2>
        <h4>${a.inventor}</h4>
      </center>
        <p>
        
        ${a.paragraph}    </p>
      </div>
    </div>`;
    doc.innerHTML += ht;
    })

}


function moreInMumbai() {
  window.location.href = "/searchngo.html#Mumbai";
  document.defCity = "Mumbai";
}


function importSearchFilters() {


  let ct = document.getElementById("datalistOptionsE");
  let ct2 = document.getElementById("datalistOptions");
  let ct3 = document.getElementById("cities3");


  // let sc = document.getElementById("sectors");

  if(ct) document.getElementById("totalCts").innerHTML = `(${cities.length})`;
  if(ct2) document.getElementById("totalCts2").innerHTML = `(${citiesn.length})`;
  if(ct3) document.getElementById("totalCts").innerHTML = `(${citiesd.length})`;


  //document.getElementById("totalScs").innerHTML = `(${sectors.length})`;


 if(ct) cities.forEach((a) => {
    ct.innerHTML += `<option>${a}</option>`;
  })
  if(ct2) citiesn.forEach((a) => {
    ct2.innerHTML += `<option>${a}</option>`;
  })

  if(ct3) citiesd.forEach((a) => {
    ct3.innerHTML += `<option>${a}</option>`;
  })
  /*  sectors.forEach((a) => {
      sc.innerHTML += `<option>${a}</option>`;
    })*/
}


importElements();
importUpcommingEvents();
importSusInnov();
