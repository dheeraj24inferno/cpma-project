var fare = document.getElementById("fare");
fare.addEventListener("click",displayfare);
var row=1;
var table = document.getElementById("table");
              var newrow = table.insertRow(row);
              var cell1 = newrow.insertCell(0);
              var cell2 = newrow.insertCell(1);
              var cell3 = newrow.insertCell(2);
function displayfare()
{ 
    console.log("start");
    var src = document.getElementById("from").value;
    var dst = document.getElementById("to").value;
    
    if(!src || !dst)
        {
            console.log("came here");
        alert("Enter both the station");
        }
 
    if(src =='Attiguppe')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Baiyappanahalli')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=55+" Rs";
                 cell2.innerHTML=46.75+" Rs";
                 cell3.innerHTML=49.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=58+" Rs";
                 cell2.innerHTML=49.3+" Rs";
                 cell3.innerHTML=52.2+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Balagangadharanatha Swamiji Stn.,Hosahalli')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Banashankari')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=55+" Rs";
                 cell2.innerHTML=46.75+" Rs";
                 cell3.innerHTML=49.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";   
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Chickpete')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=8+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='City Railway Station')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=36+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Cubbon Park')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=30 +" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Dasarahalli')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=55+" Rs";
                 cell2.innerHTML=46.75+" Rs";
                 cell3.innerHTML=49.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=55+" Rs";
                 cell2.innerHTML=46.75+" Rs";
                 cell3.innerHTML=49.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=58+" Rs";
                 cell2.innerHTML=49.3+" Rs";
                 cell3.innerHTML=52.2+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Deepanjali Nagar')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Dr.B.R.Ambedkar Station, Vidhana Soudha')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Goraguntepalya')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Halasuru')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Indiranagar')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Jalahalli')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=39+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=55+" Rs";
                 cell2.innerHTML=46.75+" Rs";
                 cell3.innerHTML=49.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Jaya Prakash Nagar')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=55+" Rs";
                 cell2.innerHTML=46.75+" Rs";
                 cell3.innerHTML=49.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=58+" Rs";
                 cell2.innerHTML=49.3+" Rs";
                 cell3.innerHTML=52.2+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Jayanagar')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Krishna Rajendra Market')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Lalbagh')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=22.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Magadi Road')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Mahakavi Kuvempu road')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Mahalakshmi')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Mahathma Gandhi Road')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Mysore Road')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.21+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Nadaprabhu Kempegowda Station,Majestic')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Nagasandra')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=58+" Rs";
                 cell2.innerHTML=49.3+" Rs";
                 cell3.innerHTML=52.2+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=55+" Rs";
                 cell2.innerHTML=46.75+" Rs";
                 cell3.innerHTML=49.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=58+" Rs";
                 cell2.innerHTML=49.3+" Rs";
                 cell3.innerHTML=52.2+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=55+" Rs";
                 cell2.innerHTML=46.75+" Rs";
                 cell3.innerHTML=49.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=60+" Rs";
                 cell2.innerHTML=51+" Rs";
                 cell3.innerHTML=54+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='National College')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Peenya')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Peenya Industry')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Rajajinagar')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Rashtreeya Vidyalaya Road')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Sampige Road')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Sandal Soap Factory')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Sir M. Visveshwarya Station,Central College')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='South End Circle')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Srirampura')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Swami Vivekananda Road')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.75+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=55+" Rs";
                 cell2.innerHTML=46.75+" Rs";
                 cell3.innerHTML=49.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Trinity')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Vijaynagar')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.75+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Yelachenahalli')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=58+" Rs";
                 cell2.innerHTML=49.3+" Rs";
                 cell3.innerHTML=52.2+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=55+" Rs";
                 cell2.innerHTML=46.75+" Rs";
                 cell3.innerHTML=49.5+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=60+" Rs";
                 cell2.innerHTML=51+" Rs";
                 cell3.innerHTML=54+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=52+" Rs";
                 cell2.innerHTML=44.2+" Rs";
                 cell3.innerHTML=46.8+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=50+" Rs";
                 cell2.innerHTML=42.5+" Rs";
                 cell3.innerHTML=45+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
  if(src =='Yeshwantpur')
     {
         if(dst == 'Attiguppe')
             {
                 cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";
             }
         else if(dst == 'Baiyappanahalli')
             {
                 cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";   
             }
         else if(dst == 'Balagangadharanatha Swamiji Stn.,Hosahalli')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Banashankari')
             {
                 cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs"; 
             }
         else if(dst == 'Chickpete')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";   
             }
         else if(dst == 'City Railway Station')
             {
                 cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs"; 
             }
         else if(dst == 'Cubbon Park')
             {
                 cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs"; 
             }
         else if(dst == 'Dasarahalli')
             {
                 cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs"; 
             }
         else if(dst == 'Deepanjali Nagar')
             {
                 cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Dr.B.R.Ambedkar Station, Vidhana Soudha')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Goraguntepalya')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Halasuru')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Indiranagar')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Jalahalli')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Jaya Prakash Nagar')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Jayanagar')
             {
                cell1.innerHTML=38+" Rs";
                 cell2.innerHTML=32.3+" Rs";
                 cell3.innerHTML=34.2+" Rs";  
             }
         else if(dst == 'Krishna Rajendra Market')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Lalbagh')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Magadi Road')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Mahakavi Kuvempu road')
             {
                cell1.innerHTML=18+" Rs";
                 cell2.innerHTML=15.3+" Rs";
                 cell3.innerHTML=16.2+" Rs";  
             }
         else if(dst == 'Mahalakshmi')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Mahathma Gandhi Road')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Mysore Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         
         else if(dst == 'Nadaprabhu Kempegowda Station,Majestic')
             {
                cell1.innerHTML=25+" Rs";
                 cell2.innerHTML=21.25+" Rs";
                 cell3.innerHTML=22.5+" Rs";  
             }
         else if(dst == 'Nagasandra')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'National College')
             {
                cell1.innerHTML=30+" Rs";
                 cell2.innerHTML=25.5+" Rs";
                 cell3.innerHTML=27+" Rs";  
             }
         else if(dst == 'Peenya')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Peenya Industry')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Rajajinagar')
             {
                cell1.innerHTML=15+" Rs";
                 cell2.innerHTML=12.75+" Rs";
                 cell3.innerHTML=13.5+" Rs";  
             }
         else if(dst == 'Rashtreeya Vidyalaya Road')
             {
                cell1.innerHTML=40+" Rs";
                 cell2.innerHTML=34+" Rs";
                 cell3.innerHTML=36+" Rs";  
             }
         else if(dst == 'Sampige Road')
             {
                cell1.innerHTML=22+" Rs";
                 cell2.innerHTML=18.7+" Rs";
                 cell3.innerHTML=19.8+" Rs";  
             }
         else if(dst == 'Sandal Soap Factory')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else if(dst == 'Sir M. Visveshwarya Station,Central College')
             {
                cell1.innerHTML=28+" Rs";
                 cell2.innerHTML=23.8+" Rs";
                 cell3.innerHTML=25.2+" Rs";  
             }
         else if(dst == 'South End Circle')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Srirampura')
             {
                cell1.innerHTML=20+" Rs";
                 cell2.innerHTML=17+" Rs";
                 cell3.innerHTML=18+" Rs";  
             }
         else if(dst == 'Swami Vivekananda Road')
             {
                cell1.innerHTML=42+" Rs";
                 cell2.innerHTML=35.7+" Rs";
                 cell3.innerHTML=37.8+" Rs";  
             }
         else if(dst == 'Trinity')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Vijaynagar')
             {
                cell1.innerHTML=35+" Rs";
                 cell2.innerHTML=29.75+" Rs";
                 cell3.innerHTML=31.5+" Rs";  
             }
         else if(dst == 'Yelachenahalli')
             {
                cell1.innerHTML=45+" Rs";
                 cell2.innerHTML=38.25+" Rs";
                 cell3.innerHTML=40.5+" Rs";  
             }
         else if(dst == 'Yeshwantpur')
             {
                cell1.innerHTML=10+" Rs";
                 cell2.innerHTML=8.5+" Rs";
                 cell3.innerHTML=9+" Rs";  
             }
         else 
             {
                cell1.innerHTML="Error";
                 cell2.innerHTML="Error";
                 cell3.innerHTML="Error";  
             }
     }
}