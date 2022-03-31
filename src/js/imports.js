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
          <li><a class="nav-link scrollto" href="/login.html">About Us</a></li>


          <li class="dropdown"><a href="#"><span>Links</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#recent-blog-posts">Articles</a></li>
              
                  <li><a href="/searchngo.html">Search NGOs</a></li>
                  <li><a href="/searchevents.html"> Search Events</a></li>
                  <li><a href="/carbon.html"> Carbon Calculator</a></li>

             
                
            </ul>
          </li>    
          <li><a class="nav-link scrollto" href="#contactus">Contact Us</a></li>
      
          <li><form class="d-flex mx-4">
            <input class="form-control mx-2" type="search" placeholder="Search" style="border-radius:50px;" aria-label="Search">
            <button class="btn btn-outline-success" style="border-radius:50%;margin-left:-50px;border:none;" type="submit"><i class="fa fa-search"></i></button>
          </form></li>
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



const getNGOs = async (ct, sc, nm,cm) => {
  let json = {success:true}
  const dbRefObject =  firebase.database().ref("ngos");
dbRefObject.on('value', snap => {

	json.data = snap.val();
  json.success = true;
  console.log(json.data);

  if (json.success) {
    let bd = document.getElementById("ngoTB");
    if (ct) document.getElementById("resultsFor").innerHTML += ct;
    if (sc) document.getElementById("resultsFor").innerHTML += sc;
    if (nm) document.getElementById("resultsFor").innerHTML += nm;
    if (nm && nm.length < 1) bd.innerHTML = "";


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
  " Daithana ",
  " Navi Mumbai ",
  " Sangli ",
  " Mumbai ",
  " Parbhani ",
  " Wai ",
  " Latur ",
  " Malegaon ",
  " Nagpur ",
  " Nashik ",
  " Khamgaon ",
  " Osmanabad ",
  " Aurangabad ",
  " Vasagade ",
  " Deogaon ",
  " Mardi ",
  " Bhandara ",
  " Basmath ",
  " Wardha ",
  " Jintur ",
  " Jawhar ",
  " Virar ",
  " Buldana ",
  " Akola ",
  " Peth ",
  " Solapur ",
  " Ahmednagar ",
  " Pune ",
  " Gangakhed ",
  " Shripur ",
  " Sangamner ",
  " Nandurbar ",
  " Basmat Nagar ",
  " Amravti ",
  " Majalgaon ",
  " Dhule ",
  " Dongarkada ",
  " Sangrampur ",
  " Pusad ",
  " Amravati ",
  " Kopergaon ",
  " Taluka Kalamnuri ",
  " Jalna ",
  " Padalse ",
  " Shahapur ",
  " Hingoli ",
  " Hinganghat ",
  " Dondaicha ",
  " Yavatmal ",
  " Mumabi ",
  " Alibaug ",
  " Ratnagiri ",
  " Abcdefgh ",
  " Sillod ",
  " Almala ",
  " Buldhana ",
  " Washim ",
  " Tumsar ",
  " Sitekasa Khapa ",
  " Gadchiroli ",
  " Pulgaon ",
  " Nanded ",
  " Karmala ",
  " Satara ",
  " Yawal ",
  " Wani ",
  " Jalgaon ",
  " Kalyan ",
  " Paratwada ",
  " Sirsala ",
  " Kolhapur ",
  " Thane ",
  " Nachangaon ",
  " Pimpalgaon Baswant ",
  " Chiplun ",
  " Aurangbad ",
  " Kaij ",
  " Partur ",
  " Amalner ",
  " Gondia ",
  " Mahabaleshwar ",
  " Anandgaon ",
  " Asola ",
  " Kalamb ",
  " Mohadi ",
  " Purna ",
  " Kora ",
  " Morshi ",
  " Phaltan ",
  " Mumewadi Distt Kolha ",
  " Ashti ",
  " Chandrapur ",
  " Rajur ",
  " Beed ",
  " Hatkanangale ",
  " Palam ",
  " Murud ",
  " Shirpur ",
  " Patur ",
  " Shrirampur ",
  " Mangrul Chavala ",
  " Palghar ",
  " Marul ",
  " Junnar ",
  " Dahanu ",
  " Sadak Arjuni ",
  " Chandur Bazar ",
  " Miraj ",
  " Nerparsopant ",
  " Ner ",
  " Mirabhayandar ",
  " Baramati ",
  " Pandharpur ",
  " Atharwadi ",
  " Barwha ",
  " Sakali ",
  " Airoli Navimumbai ",
  " Purandar ",
  " Washi ",
  " Barshi ",
  " Shevgaon ",
  " Aprbhani ",
  " Akole ",
  " Chikhli ",
  " Gadhinglaj ",
  " Mumbra ",
  " Bhokardan ",
  " Balapur ",
  " Tal Partur Dist Jaln ",
  " Pangaon ",
  " Jalgaon Jamod ",
  " Deulghat ",
  " Bhum ",
  " Chopda ",
  " Risod ",
  " Karanja Lad ",
  " Gurukunj Mozari ",
  " Kasabe Tadwale ",
  " Rahuri ",
  " Mumbai Subarban ",
  " Kalamnuri ",
  " Nandura ",
  " Dhanegaon ",
  " Gaganpur ",
  " Selu ",
  " Pimpaldari ",
  " Vaijapur ",
  " Hadgaon ",
  " Sailu ",
  " Bhayander ",
  " Jaisingh Pura ",
  " Sakoli ",
  " Badnapur ",
  " Bhagur ",
  " Amravari ",
  " Marul Tal Yawal ",
  " Murud Janjira ",
  " Madha ",
  " Dhoki ",
  " Daryapur ",
  " Mahim ",
  " Ulhasnagar ",
  " Digras ",
  " Satana ",
  " Ambajogai Beed ",
  " Shahada ",
  " Ambajogai ",
  " Sonkhed ",
  " Karad ",
  " Parner ",
  " Anjangao ",
  " Aurad Shahajani ",
  " Nandgaon Khandeshwar ",
  " Kada ",
  " Vairag ",
  " Wazur ",
  " Kallamb ",
  " Arjunwad ",
  " Udgir ",
  " Mehakar ",
  " Ichalkaranji ",
  " Pathri ",
  " Newasa ",
  " Pathardi ",
  " Ghatkopar ",
  " Mhasla Khurd ",
  " Walva ",
  " Nashik Road ",
  " Aurngabad ",
  " Ausa ",
  " Wagholi ",
  " Bhalod ",
  " Manchar ",
  " Thane City ",
  " Kalyan West ",
  " Allapalli ",
  " Navi Mumabi ",
  " Shegaon ",
  " Sonala ",
  " Mubai ",
  " Asnoli ",
  " Gadchroli ",
  " Deulgaon Mahi ",
  " Mulund West ",
  " Kurduwadi ",
  " Talwel ",
  " Dhaulgaon ",
  " Bhadgaon ",
  " Arjuni Mor ",
  " Chandur Railway Dist ",
  " Pauni ",
  " Mukhed ",
  " Chikhali ",
  " Umri ",
  " Vasai ",
  " Yeola ",
  " Saoner ",
  " Basmath Nagar ",
  " Gholvad ",
  " Watwada ",
  " Bansarola ",
  " Bodhegaon Bk ",
  " Murgud ",
  " Maharashtra ",
  " Mangrulpir ",
  " Anjandoh ",
  " Neknampur Buldhana ",
  " Fulumari ",
  " Taroda Khurd ",
  " Basmatnagar ",
  " Degloor ",
  " Panchgani ",
  " Parbhni ",
  " Bhadrawati ",
  " Dongaon Taluka Mehka ",
  " Padali ",
  " Yavatamal ",
  " Loni Khurd ",
  " Malkapur ",
  " Masla ",
  " Bhalawani ",
  " Paranda ",
  " Karjat ",
  " Kagal ",
  " Murum ",
  " Kallam ",
  " Tadgaon ",
  " Aurnagabad ",
  " Radhanagari ",
  " Kandhar ",
  " Vita ",
  " Auranagabad ",
  " Desaiganj ",
  " Kundalwadi ",
  " Ambad ",
  " Pipari Meghe Wardha ",
  " Tuljapur ",
  " Yeotmal ",
  " Bokud Jalgaon ",
  " Patsara ",
  " Sinnar ",
  " Malad ",
  " Bhulegaon ",
  " Village Belli Khurd ",
  " Kannad ",
  " Mumbai Sauth Centrai ",
  " Mul ",
  " Kudal ",
  " Devshinga ",
  " Pimpriraja ",
  " Achalpur ",
  " Rajura ",
  " Parbhnai ",
  " Ambarnath Thane ",
  " Mira Road E ",
  " Thane West ",
  " Pen ",
  " Siddatek Berdi ",
  " Haladgaon ",
  " Tembhu ",
  " Basmat ",
  " Tarasawnga ",
  " Akluj ",
  " Lonar ",
  " Pimpode Budruk ",
  " Adul ",
  " Aural ",
  " Wadod Tangda ",
  " Dabha ",
  " Chincholi Pk ",
  " Ghanewadi ",
  " Rohanwadi ",
  " Kapshi ",
  " Sangola ",
  " Pimpode Bk ",
  " Hanumantakli ",
  " Waghali ",
  " Shahagad ",
  " Nashiki ",
  " Deola ",
  " Anjangaon Surji ",
  " Jamkhed ",
  " Ghatanji ",
  " Vasarni ",
  " Titwala ",
  " Ballarpur ",
  " Kodoli ",
  " Nilanga ",
  " Dapoli ",
  " Aundha Nagnath ",
  " Dharni ",
  " Malpur ",
  " Nira Gulunche ",
  " Deulgaon Raja ",
  " Akkalkura ",
  " Sarni ",
  " Lohara ",
  " Osmanabd ",
  " Chopada ",
  " Mehkar ",
  " Loha ",
  " Jategaon ",
  " Kurkheda ",
  " Vadangali ",
  " Murtizapur ",
  " Kankavli ",
  " Dharur ",
  " Satara Koregaon ",
  " Pardi ",
  " Katol ",
  " Arjuni Morgaon ",
  " Shirur Kasar ",
  " Digaon ",
  " Roshangaon ",
  " Hadgaon Devde ",
  " Shevga ",
  " Ambajigai ",
  " Telhara ",
  " Vagdari ",
  " Ahmedbagar ",
  " Wadner Bholji ",
  " Taltondi ",
  " Devmurti ",
  " Moharale ",
  " Kari ",
  " Parli Vaijnath ",
  " Datala ",
  " Chalisgaon ",
  " Karegaon ",
  " Narewadi ",
  " Kasal ",
  " Nasik ",
  " Pusegaon ",
  " Ashvi Kd ",
  " Arni ",
  " Dombivali ",
  " Kandri ",
  " Vasmat ",
  " Wadgaon Sarhadd ",
  " Machindranath Chinch ",
  " Nandra ",
  " Dahendri ",
  " Gurukunj Ashram Moza ",
  " Akkalkot ",
  " Puluj ",
  " Nalasopara W ",
  " Ladki Bk ",
  " Osmanbad ",
  " Umri Jahangir ",
  " Nagbhid ",
  " Dombivli ",
  " Kasarshirsi ",
  " Dongaon ",
  " Digras Dist Yavatmal ",
  " Yelamb Bramhanad ",
  " Surgana Nashik ",
  " Dombivali East ",
  " Bhusawal ",
  " Akot ",
  " Banda Sawantwadi ",
  " Hingna ",
  " Vasai Virar Mahanaga ",
  " Jamkhurd ",
  " Wadala ",
  " Sarkali ",
  " Bolegaon ",
  " Ganoja Devi ",
  " Ganoja Devi Bhatkuli ",
  " Ghaigaon ",
  " Babi ",
  " Chondi ",
  " Taroda Khurd Nanded ",
  " Dhekanmoha ",
  " Yawal Dist Jalgaon ",
  " Loni ",
  " Kinwat ",
  " Oshmanabad ",
  " Kalamkonda Bk ",
  " Kurundwad ",
  " Mohnal ",
  " Renavi ",
  " Wada ",
  " Omerga ",
  " Chamorshi ",
  " Vikramgad ",
  " Parola ",
  " Dhadgaon ",
  " Teur ",
  " Isapur ",
  " Sindi Maghe ",
  " Chorakhali ",
  " Chamerga ",
  " Neri ",
  " Chulhad ",
  " Pimparkhed ",
  " Massa Khandeshware ",
  " Manmad ",
  " Bhayandar ",
  " Amgaon ",
  " Dombivli East ",
  " Mudkhed ",
  " Pargaon ",
  " Malegaon Camp Nashik ",
  " Khed ",
  " Matawali ",
  " Borkanhar ",
  " Manora ",
  " Bhiwandi ",
  " Dhad ",
  " Patan ",
  " Kille Dhrur ",
  " Sengaon ",
  " Barshitakli ",
  " Lakhanwada Bk ",
  " Neknoor ",
  " Mira Bhayander ",
  " Rahimatpur ",
  " Chirmodi ",
  " Ballarpu ",
  " Chandur Bazar Dist A ",
  " Mahad ",
  " Bangalore ",
  " Dombivli District T ",
  " Pachora ",
  " Muktainagar ",
  " Mumbai City ",
  " Sakli ",
  " Shirad Shahapur ",
  " Kothrud ",
  " Panvel ",
  " Mumbaiieee ",
  " Karajgaon ",
  " Ambernath ",
  " Darwha ",
  " Na ",
  " Pimpalgaon Kohali ",
  " Narangal ",
  " Khalapur ",
  " Kapustalni ",
  " Lakhanwada ",
  " Karanjalad ",
  " Arwat ",
  " Navimumbai ",
  " Nalegaon ",
  " Sonai ",
  " Mantha ",
  " Higna Karegaon ",
  " Gargoti ",
  " Wasadi ",
  " Banegaon ",
  " Ramtek ",
  " Goregaon ",
  " Parbahni ",
  " Gadhi ",
  " Tekabedar ",
  " Ghansawangi ",
  " Ravangaon ",
  " Arvi ",
  " Akkalkuwa ",
  " Jamb Bk ",
  " Killari Latur ",
  " Kuhi ",
  " Alibag ",
  " Parhani ",
  " Pandharkawada ",
  " Jath ",
  " Yermala ",
  " Kolgaon ",
  " Deoni ",
  " Jalkot ",
  " Salekasa ",
  " Umbre Rahuri ",
  " Devulwadi ",
  " Sonpeth ",
  " Badlapur ",
  " Khandbara ",
  " Sullali ",
  " Sakharale ",
  " Nijampur ",
  " Devdhaba Tal Malkapu ",
  " Sawkheda ",
  " Kurdu ",
  " Sendre ",
  " Uran ",
  " Chandrpur ",
  " Waki ",
  " Bhoom ",
  " Georai ",
  " Ahmedpur ",
  " Borivali ",
  " Andheri ",
  " Kavthali ",
  " Paithan ",
  " Sawri ",
  " Yeldari ",
  " Omarga ",
  " Ambetakli Tq Khamg ",
  " Tq Umarkhed Dist Yav ",
  " Digol ",
  " Warora ",
  " Harsul ",
  " Kondhala ",
  " Pachod ",
  " Moha ",
  " Anandwadi ",
  " Nampur ",
  " Alandi ",
  " Ahmadpur ",
  " Sawantwadi ",
  " Ajansonda Khurd ",
  " Kallur ",
  " Ropale Khurd ",
  " Palsap Osmanabad ",
  " Narsi Tq Naigaon ",
  " Newasaphata ",
  " Lonavla ",
  " Dombivli Thane ",
  " Tal Akole ",
  " Bhandgaon ",
  " Ahmed Nagar ",
  " Kamptee ",
  " Revgaon ",
  " Chandrpaur ",
  " Sarsam Bk ",
  " Rasayani ",
  " Sanagamner ",
  " Kharshing ",
  " Sindhudurga ",
  " Islampur ",
  " Hiwarkhed ",
  " Dapka ",
  " Mathpimpalgaon ",
  " Hadga ",
  " Nagad ",
  " Bubnal ",
  " Ekdara ",
  " Chincholi Tal Sangol ",
  " Savda ",
  " Aurangabd ",
  " Puntamba ",
  " Kotul ",
  " Bajar Wahegaon ",
  " Pate ",
  " Chicholi ",
  " Shambhusavargaon ",
  " Gurukunj Ashram ",
  " Kosara ",
  " Akaluj ",
  " Jalgao Jamod ",
  " Bramhi ",
  " Mangrul Dastgir ",
  " Talegaon ",
  " Tintarwani ",
  " Amoda Shivpur Dhule ",
  " Takli Kumbhakarna ",
  " Bhatsawangi ",
  " Lingdari ",
  " Umarkhed ",
  " Nawargaon ",
  " Petrol Pump Thane ",
  " Shelu Bazar ",
  " Aundha ",
  " Godhala ",
  " Kille Dharur ",
  " Chakur ",
  " Dhamangaon ",
  " Jamner ",
  " Armori ",
  " Mira Road ",
  " Chandola ",
  " Shivoor ",
  " Kopargaon ",
  " Renapur ",
  " Manav ",
  " Kundal ",
  " Agar Saygaon ",
  " Kolhpur ",
  " Guhagar ",
  " Junnar Pune ",
  " Malgaon ",
  " Kautha ",
  " Biloli ",
  " Kannad Aurangabad ",
  " Mangalwedha ",
  " Chandur Biswa ",
  " Pimpalgaon ",
  " Medha ",
  " Kanhalgaon ",
  " Bhogaon ",
  " Khergaon ",
  " Naigaon ",
  " Ratoli ",
  " Dindori ",
  " Osmanpur ",
  " Ramtek Nagpur ",
  " Bhivandi ",
  " Kharabkhandgaon ",
  " Gavase ",
  " Kudus ",
  " Djslfjlsa Fdjsalkfj ",
  " Sevegram ",
  " Ghansavangi ",
  " Navegoan Bandh ",
  " Amrawati ",
  " Ambulga ",
  " Kamargaon ",
  " Selu Tqselu Dist Par ",
  " Mangalawedha ",
  " Makodi ",
  " Kuruswade ",
  " Zari ",
  " Maindwadi ",
  " Vyad ",
  " Shelgaon Gauri ",
  " Nhavara ",
  " Kaij Beed ",
  " Tondapur ",
  " Parli Vaijanath ",
  " Ambejogai ",
  " Anjangaon ",
  " Waluj ",
  " Ahemdnagar ",
  " Dmobivali East ",
  " Raver ",
  " Pokharni ",
  " Aalandi ",
  " Talere ",
  " Saori ",
  " Bramhapuri ",
  " Chandurbiswa ",
  " Tq Ashti Dist Beed ",
  " Khandala ",
  " Shirdhon ",
  " Narayangaon ",
  " Nelwad ",
  " Bhiwapur ",
  " Dhamangaon Badhe ",
  " Vile Parle ",
  " Pandhrakwada ",
  " Jalana ",
  " Akot Akola ",
  " Motaraga Tq Mukhed ",
  " Pimpalwadi ",
  " Bodwad ",
  " Mana ",
  " Sindkhedraja ",
  " Shiroli ",
  " Shirur ",
  " Nandurnimbadaitya ",
  " Raipatan ",
  " Gondpipri ",
  " Wadkshivale ",
  " Samudrapur ",
  " Borgaon ",
  " Gautada ",
  " Jeur ",
  " Mayani ",
  " Buldhana Shegaon ",
  " Tembhurni ",
  " Erandol ",
  " Khuldabad ",
  " Nesari ",
  " Tondchir ",
  " Ekurga ",
  " Pimpalkhuta ",
  " Rahata Shrirampur ",
  " Kalwan ",
  " Kalam ",
  " Nagar ",
  " Mahableshwar ",
  " Alsunde Karmala ",
  " Dhanora ",
  " Paldhi ",
  " Gokunda ",
  " Pradhikaran ",
  " Nigdi Pradhikaran ",
  " Ghodegaon ",
  " Shirur Tajband ",
  " Tirora ",
  " Nagzeri ",
  " Sompeth ",
  " Taloda ",
  " Dusarbid ",
  " Kelod ",
  " Wazar Budruk ",
  " Kostagaon ",
  " Bhoom City ",
  " Harbal ",
  " Vaduj ",
  " Dhwada ",
  " Rahata ",
  " Karanjgaon ",
  " Jambhala ",
  " Talani ",
  " Airoli ",
  " Umrer ",
  " Manwat ",
  " Kharghar ",
  " Tasgaon ",
  " Ralegan Siddhi ",
  " Shrigonda Factory ",
  " Ner Parsopant ",
  " Kalmbeshar ",
  " Wadwani ",
  " Loni Bk ",
  " Tumser ",
  " Kupwad ",
  " Ralegaon ",
  " Sastur ",
  " Sawarde ",
  " Koregaon ",
  " Kem ",
  " Amaravati ",
  " Warud ",
  " Raimoha Beed ",
  " Kadepur ",
  " Kavathe Mahankal ",
  " Saswad ",
  " Auranagbad ",
  " Shindewadi ",
  " Kolsar ",
  " New Panvel East ",
  " Khilarwadi ",
  " Satsang Chouk Hiwark ",
  " Martala ",
  " Katgaon ",
  " Dughala ",
  " Patoda ",
  " Salse ",
  " Dhudhodi ",
  " Gangapur ",
  " Jafrabad ",
  " Sukali Khurda ",
  " Shirol ",
  " Mudgal ",
  " Ramnagar ",
  " Gplohara ",
  " Chalisagon ",
  " Mugat ",
  " Kallam Dist Osmanaba ",
  " Warana ",
  " Deoli ",
  " Pimpalgaon Kale ",
  " Mumbai 400 004 ",
  " Oros ",
  " Bhor ",
  " Ghugus ",
  " Ta Deulgaon Raja ",
  " Puyni ",
  " Dyane ",
  " Gurudeo Nagar ",
  " Shrigonda ",
  " Navegaonbandh ",
  " Ahmadnager ",
  " Rohinkhed ",
  " Chikhaldara ",
  " Mohol ",
  " Girdharwadi ",
  " New Panvel ",
  " Cidco Nanded ",
  " Nagput ",
  " Shiwangaon ",
  " Chandwad ",
  " Ajanthagaon ",
  " Andur ",
  " Bahandara ",
  " Nivali ",
  " Diondaicha ",
  " Mouje Tasgaon ",
  " Kasari ",
  " Rajgurunagar ",
  " Niphad ",
  " Pangari ",
  " Vasai Road ",
  " Thane W ",
  " Naldurg ",
  " Divale ",
  " Tungi ",
  " Kumbhar Pimpalgaon ",
  " Ahmadnagar ",
  " Tiruka ",
  " Sindkhed Raja ",
  " Kuslamb ",
  " Chandarapur ",
  " Lawada Village ",
  " Shivani ",
  " Khambegaon ",
  " Aambegaon ",
  " Manchar Pune ",
  " Indapur ",
  " Kumbhephal ",
  " Digoldeshmukh ",
  " Dhawda ",
  " Mumbai Nanded ",
  " Bhandra ",
  " Dadar ",
  " Khasgaon ",
  " Shindkhed Raja ",
  " Mahurkuda ",
  " Ashta ",
  " Sangarul ",
  " Shirshi Ta Sonpeth ",
  " Mokhada ",
  " Sakri ",
  " Udgir Latur ",
  " Etapalli ",
  " Peth Vadgaon ",
  " Sagroli ",
  " Taroda K ",
  " Pesegoa ",
  " Borgaon Budruk ",
  " Vasai Thane ",
  " Dhorkin ",
  " Mudalwadi ",
  " Adha ",
  " Gurukunj Ashram Mozr ",
  " Sindewahi ",
  " Borgaon Nadri ",
  " Doka ",
  " Jalgoan ",
  " Shelkewadi ",
  " Kiwla ",
  " Undangaon ",
  " Chorjawala ",
  " Sakri Dist Dhule ",
  " Dharmabad ",
  " Haratkheda ",
  " Ghatnandur ",
  " Shrishivajinagar ",
  " Kolsa ",
  " Khanapur ",
  " Atpadi ",
  " Wathar ",
  " Raigad ",
  " Itkur ",
  " Barsi ",
  " Adas ",
  " Mandka ",
  " Akoal ",
  " Pal ",
  " Kalyan W ",
  " Ahemadpur ",
  " Chnadurbazar ",
  " Koparkhairne ",
  " Bhokar ",
  " Ladka ",
  " Kurudwadi ",
  " Chincholi ",
  " Somnathpur ",
  " Nandurghat ",
  " Hingangaon ",
  " Chinchole Male ",
  " Tal Dapoli Dist Rat ",
  " Banapur ",
  " Bacheri ",
  " Dhanoli ",
  " Desaiganj Wadsa ",
  " Khadka ",
  " Ansing ",
  " Sidhnerli ",
  " Amgaon Khurd ",
  " Soalpur ",
  " Kendhali ",
  " Deori ",
  " Jaysingpur ",
  " Benoda ",
  " Vashi Navi Mumbai ",
  " Bidal ",
  " Kotij ",
  " Ingali ",
  " Warthi ",
  " Lasalgaon ",
  " Pimpari Chinchwad ",
  " Pavani ",
  " Daskhed ",
  " Nimkheda Budruk ",
  " Ardhapur ",
  " Molagi ",
  " Jawala Panchal ",
  " Dindrud ",
  " Pangare ",
  " Village Pangare ",
  " Rashin ",
  " Mahuli Chor ",
  " Shivajinagar ",
  " Pangri Gosavi ",
  " Bhiwpur ",
  " Mangangaon ",
  " Chiwali ",
  " Kuncheli ",
  " Phulambri ",
  " Paarbhani ",
  " Divegaon ",
  " Talegaon Dabhade ",
  " South Solapur ",
  " Shirala ",
  " Narasobawadi ",
  " Amla ",
  " Chatori ",
  " Satana Nasik ",
  " Kurundwadi ",
  " Kesapur ",
  " Daud ",
  " Surajkheda ",
  " Dahigaon ",
  " Pimpri Turk ",
  " Malvan ",
  " Khumgaon Burti ",
  " Chaklamba ",
  " Shivni ",
  " Patkul ",
  " Ranisawargoan ",
  " Mhasawad ",
  " Parseoni ",
  " Moghan ",
  " Nandgaon ",
  " Karla ",
  " Wajirkheda ",
  " Ahmednager ",
  " Belgaon ",
  " Kadegaon ",
  " Debhegaon ",
  " Dahiwadi ",
  " Andura ",
  " Hatni Chikhli ",
  " Walsawangi ",
  " Arjunimorgaon ",
  " Kawjawala ",
  " At Bhaler Nandurbar ",
  " Bhadravati ",
  " Daithane Gunjal ",
  " Charrhatha ",
  " Marsul ",
  " Laslgaon ",
  " Mhaisal ",
  " Ahemednagar ",
  " Village Taroda Khurd ",
  " Degioor ",
  " Himayatnagar ",
  " Shirur Anantpal ",
  " Butibori ",
  " Solaapur ",
  " Saoli ",
  " Jiwati ",
  " Deoulgaon Raja ",
  " Salshinfi ",
  " Jamthi ",
  " Lonand ",
  " Khadakdeola Kh ",
  " Gartad ",
  " Pandharkwada ",
  " Chandur Rly ",
  " Soegaon ",
  " Sakegaon ",
  " Uttur Kolhapur ",
  " Warud Tq Pusad ",
  " Warana Kodoli ",
  " Marlegaon ",
  " Satona Budruk ",
  " New Majri Colliery ",
  " Nirala ",
  " Tuppa ",
  " Ahmedangar ",
  " Murtijapur ",
  " Aheri ",
  " Ta Palam ",
  " Deulgaonraja Buldhan ",
  " Someshwarnagar ",
  " Lanja ",
  " Nira ",
  " Nanded Tal Dharangoa ",
  " Vashi ",
  " Parbhanui ",
  " Tonglabad Tq Daryapu ",
  " Ghoti Karmala ",
  " Jambhulghat ",
  " Kaniyadol ",
  " Kalmeshwar ",
  " Korochi ",
  " Rani Savargaon ",
  " Ranjani ",
  " Deolali Pravara ",
  " Wadoda ",
  " Yerandi ",
  " Kavathemahankal ",
  " Devarjan ",
  " Wadhiwra ",
  " Soundad ",
  " Airoli Navi Mumbai ",
  " Osnanabad ",
  " Umapur ",
  " Darwaha ",
  " Aurad Sha ",
  " Panchwad ",
  " Andhori Tq Ahmadpur ",
  " Weltura ",
  " Mahashtra ",
  " Shindkheda ",
  " Sindkheda ",
  " Nevasa ",
  " Karhewadgaon ",
  " Nmumbai ",
  " Mumbai City Sauth Ce ",
  " Yavtmal ",
  " Mulawa ",
  " Patoda G ",
  " Navapur ",
  " Upali ",
  " Guir ",
  " Mulaj ",
  " Sakhra Digras ",
  " Rajapur ",
  " Shinkheda ",
  " Aloor ",
  " Siporabazar ",
  " Pouni ",
  " Latur Dist Latur ",
  " Warananagar ",
  " Bhor Pune ",
  " Pimpalner ",
  " Malshiras ",
  " Hiwara Ashram ",
  " Ieet ",
  " Alandi Devachi ",
  " Talegaon Sp ",
  " Vashi Navi Mumabi ",
  " Ambarnath ",
  " Wakala ",
  " Dhamangaon Rly ",
  " Bhadnara ",
  " Killari ",
  " Umred Dist Nagpur ",
  " Chimur ",
  " Nhavara Pune ",
  " Asdfsadf ",
  " Malkapur Akola ",
  " Mahuli ",
  " Kasaral ",
  " Shellal ",
  " Village Waki ",
  " Khargar ",
  " Ijjatgaon ",
  " Kalanri Borgaon ",
  " Khandavi ",
  " Daund ",
  " Auranagabd ",
  " Mukati ",
  " Pusda ",
  " Shindgavhan ",
  " Bid ",
  " Murbad ",
  " Bhosari ",
  " Nalasopara ",
  " Ahamadnagar ",
  " Bhayander  ",
  " Vazirabad ",
  " Kol ",
  " Gondiya ",
  " Worli ",
  " Khadki ",
  " Yawatmal ",
  " Dahivel ",
  " Sawana Tanda ",
  " Wadki ",
  " Sarawade ",
  " Mulchira ",
  " Devrukh ",
  " Roha ",
  " Nerul ",
  " Kirlos ",
  " Lalbaug ",
  " Kothara ",
  " Neral ",
  " Davangaon ",
  " Kondha Kosra ",
  " Kok ",
  " Pune Maharashtra ",
  " Arattondi ",
  " Osamabad ",
  " Daregaon ",
  " Jaipur ",
  " Deolgaon Raja ",
  " Halda ",
  " Talegaon Dashasar ",
  " Dahisar E ",
  " Mamdabad ",
  " Shetphale ",
  " Ballrpur ",
  " Vengurla ",
  " Ambad Tq Ambad Dist Jalna ",
  " Dhawada ",
  " Mumbai Suburban ",
  " Mharugdewadi ",
  " Bajar Vahegaon ",
  " Holnanthe ",
  " Chehel ",
  " Hussa ",
  " Lakhani ",
  " Chakan ",
  " Dhundi ",
  " Shivani Bk ",
  " Talai ",
  " Virdel ",
  " Bhayander West ",
  " Tambale ",
  " Antrolikar Nagar ",
  " Seloo ",
  " Takarwan Tq Majalgaon Dist Bid ",
  " Narodi ",
  " Jejuri ",
  " Bhanadara ",
  " Nirgudi Patoda Beed ",
  " Badnera ",
  " Bhayandar West ",
  " Met Hirji ",
  " Devgad ",
  " Karmad ",
  " Andheri West ",
  " Ganeshwadi ",
  " Baradkinhi ",
  " Sawargaon R ",
  " Ghot ",
  " Sindhudurgnagri ",
  " Pimpri Chinchwad ",
  " Daroda ",
  " Sarangpur ",
  " Matkuli ",
  " Kameri ",
  " Chatari Umarkhed ",
  " Aashti ",
  " Kashti ",
  " Nandurbar Maharashtra ",
  " Yavatmal Maharahtra ",
  " Aurangabad City ",
  " Not Available ",
  " Watfali ",
  " Khultabad ",
  " Devtala ",
  " Thakurpimpalgaon ",
  " Lonavala ",
  " Vambori ",
  " Budh ",
  " Talasari ",
  " Jogeshwari ",
  " Chinchwad ",
  " Worli Mumbai ",
  " Savedi Ahmednagar ",
  " Parli Vaijynath ",
  " Chaharadi ",
  " Andarsul ",
  " Sinkhedraja ",
  " Karanja Ghadge ",
  " Pahur ",
  " Chawarda ",
  " Nandkheda ",
  " Tandulwadi ",
  " Aamali ",
  " Mahisgaon ",
  " Panchagani ",
  " Poundul ",
  " Ijani Dharmapuri ",
  " Mankhed ",
  " Khadavali ",
  " Pohegaon ",
  " Takali Bhima ",
  " Pune City ",
  " Miraroad ",
  " Takali Haji ",
  " Nagpur V ",
  " Kamothe ",
  " Agegaon ",
  " Nallasopara ",
  " Maliwadgaon ",
  " Chandivali Mumbai ",
  " Mhaswad "
].sort(function(a, b){
  if(a < b) { return -1; }
  if(a > b) { return 1; }
  return 0;
});

let citiesd = ["Mumbai","Bangalore","Chennai","Delhi NCR","Hyderabad","Other Cities"];

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
