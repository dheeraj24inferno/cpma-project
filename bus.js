var search=document.getElementById("search");
search.addEventListener("click",disproute);
var row = 1;
var table=document.getElementById("table");
  var newrow=table.insertRow(row);
   var cell1=newrow.insertCell(0);
   var cell2=newrow.insertCell(1);
function disproute()
{
    var src=document.getElementById("from").value;
    var dst=document.getElementById("to").value;
    if(!src || !dst)
        {
            console.log("came here");
            alert("Enter your Destination and Starting Bus Stand");
            
        }
    if(src == 'Kempegowda Bus Station(Majestic)')
        {
            switch(dst)
                {
                    case 'J. P. Nagar 6th Phase':{
                             cell1.innerHTML="2";
                             cell2.innerHTML="Corporation. Lalbaugh West Gate. Southend Circle. Jayanagar 5th Block";
                            }
                            break;
                        case 'YESHWANTHPUR RAILWAY STATION':{
                             cell1.innerHTML="78E";
                             cell2.innerHTML="SUJATHA, ISKON TEMPLE";
                            }
                            break;
                    case 'Vijayanagar':{
                             cell1.innerHTML="61";
                             cell2.innerHTML="Okalipuram. Magadi Road. Prasanna Talkies. Manuvana. Maruthi Mandir";
                            }
                            break;
                     case 'Yeshwantpur':{
                             cell1.innerHTML="82C";
                             cell2.innerHTML="Malleshwaram 8th Cross. Devaiah Park. Gayathri Nagar. Subramanya Nagar. Government Soap Factory";
                            }
                            break;
                      case 'Chowdeshwari Bus Stand JP Park':{
                             cell1.innerHTML="99B";
                             cell2.innerHTML="Central. Malleshwaram 8th Cross. Malleshwaram 18th Cross. Yeshwantpur. Mathikere";
                            }
                            break;
                       case 'Kaval Byrasandra':{
                             cell1.innerHTML="111C";
                             cell2.innerHTML="Maharani College . Vasanth Nagar . J C Nagar . R. T. Nagar . HMT Layout . Pushpanjali Talkies Sulthanpalya . Ganganagar";
                            }
                            break;
                        case 'Jeevanbheemanagar':{
                             cell1.innerHTML="138";
                             cell2.innerHTML="Corporation . Richmond Circle . Mayo Hall . Halasur . Indiranagar Police Station . Tippasandra";
                            }
                            break;
                         case 'Rose Garden':{
                             cell1.innerHTML="145A";
                             cell2.innerHTML="Corporation . Subbaiah Circle . Elgin Floor Mill . Austin Town . Neelasandra";
                            }
                            break;
                          case 'Koramangala':{
                             cell1.innerHTML="171";
                             cell2.innerHTML="Corporation . Shanthinagar Bus Station . Wilson Garden . NIMHANS . Christ College . Bangalore Dairy Circle . Koramangala Kalyana Mantapa . Koramangala Water Tank";
                            }
                            break;
                          case 'Ejipura':{
                             cell1.innerHTML="167";
                             cell2.innerHTML="Corporation . Subbaiah Circle . Wilson Garden Police Station . Bangalore Dairy . Koramangala Kalyana Mantapa . Koramangala Sony World . Srinivagilu Cross";
                            }
                            break;
                           case 'ISRO Layout':{
                             cell1.innerHTML="210A";
                             cell2.innerHTML="Corporation . K. R. Market . Makkala Koota . Basavanagudi Police Station . Monotype . Yarab Nagar . Kumaraswamy Layout";
                            }
                            break;
                            case 'Bidadi':{
                             cell1.innerHTML="226N";
                             cell2.innerHTML="Cottonpet . Sirsi Circle . Bapuji Nagar . Nayandahalli . RV College . Kengeri . Basavanagar . Kumbalagodu . Kanminike . Hejjala Cross . Manchanayakanahalli . Vajrahalli . KHB Colony";
                            }
                            break;
                            case 'Rajanukunte':{
                             cell1.innerHTML="251B";
                             cell2.innerHTML="Malleshwaram 8th Cross . Malleshwaram 18th Cross . Yeshwantpur . Jalahalli Cross . Bagalagunte . Janapriya Apartments . Chikkabanavara . Soladevanahalli . Huruli Chikkanahalli . Hesaraghatta TB Cross . Muthkur Cross . Linganahalli . Seetha Kempanahalli . Dibbur Cross . Itakalapura Cross";
                            }
                            break;
                            case 'Kempegowda Bus Station':{
                             cell1.innerHTML="264A";
                             cell2.innerHTML="Central . Malleshwaram 8th Cross . Malleshwaram 18th Cross . Yeshwantpur . Mathikere . BEL Circle . HMT Auditorium . Jalahalli Cross . Rajagopal Nagar . Kanteerava Studio . Mahalakshmi Layout . Rajajinagar 1st Block . Navarang Talkies . Rajajinagar ESI Hospital . Sujatha Talkies. Okalipuram";
                            }
                            break;
                            case 'Billamaranahalli':{
                             cell1.innerHTML="282D";
                             cell2.innerHTML="Shivananda Stores . RM Guttahalli . Mekhri Circle . Ganga Nagar . Hebbal . Byatarayana Pura . Allalasandra Gate . Yelahanka . Venkatala . IAF . Hunasemarenahalli . Bettahalasuru Cross";
                            }
                            break;
                            case 'Thambuchetty Palya':{
                             cell1.innerHTML="301F";
                             cell2.innerHTML="Vidhana Soudha . Indian Express . FORTIS Hospital . Cantonment Railway Station . Coles Park . ITC . Maruthi Seva Nagar . Banaswadi . Channasandra Bridge . Koudenahalli Cross . Akshay Nagar";
                            }
                            break;
                            case 'Gunjooru':{
                             cell1.innerHTML="327D";
                             cell2.innerHTML="Corporation . Richmond Circle . Mayohall . Domlur . Manipal Hospital . HAL . Marathahalli . Kundalahalli Gate . Siddapura . Varthuru Kodi . Varthuru . Vinayaka Nagar";
                            }
                            break;
                            case 'Handenahalli':{
                             cell1.innerHTML="351J";
                             cell2.innerHTML="Corporation . Shantinagar Bus Station . Lakkasandra . Dairy Circle . St John Hospital . Krupanidhi College . Madiwala Market . Silk Board . Bommanahalli . Kudlu Gate . Singasandra . Hosa Road . Konnappana Agrahara . Electronic City . Huskur . Hebbagodi . Narayana Hrudayalaya . Chandapura . Ramasagara . Narayana Ghatta . Mutthanallur . Sammenahalli";
                            }
                            break;
                            case 'Attibele':{
                             cell1.innerHTML="360K";
                             cell2.innerHTML="Corporation . Shantinagar Bus Station . Lakkasandra . Dairy Circle . St John Hospital . Krupanidhi College . Madiwala Market . Silk Board . Bommanahalli . Kudlu Gate . Singasandra . Hosa Road . Konnappana Agrahara . Electronic City . Hebbagodi . Narayana Hrudayalaya . Chandapura . Thirumagondanahalli Cross . Guddatti Gate . Yadavanahalli Gate";
                            }
                            break;
                            case 'Makanahalli':{
                             cell1.innerHTML="383D";
                             cell2.innerHTML="Corporation . Richmond Circle . Mayo Hall . Ulsoor . Binnamangala . NGEF . Benniganahalli . Tin Factory . K R Puram . Bhattarahalli . Medahalli . Avalahalli . Budigere Cross . Hosakote . Kannurahalli . Jinnagara . Vaghata";
                            }
                            break;
                           case 'Atturu':{
                             cell1.innerHTML="402C";
                             cell2.innerHTML="Corporation . Majestic . Shivananda Stores . RM Guttahalli . Mekhri Circle . Hebbal . Byatarayanapura . Allalasandra . Yelahanka NES Office . Yelahanka Satellite Town . Atturu Layout";
                            }
                            break;
                          case 'Anjanapura':{
                             cell1.innerHTML="443A";
                             cell2.innerHTML="Corporation . K R Market . Chamarajpet . Ashrama . Hanumantha Nagar . Bank Colony . Hosakerehalli Cross . Chikkalasandra . Uttarahalli . Vasanthapura . Konanakunte Cross . Kothnuru Cross";
                            }
                            break;
                           case 'V Nagenahalli':{
                             cell1.innerHTML="415A";
                             cell2.innerHTML="Vidhana Soudha . Indian Express . Vasantha Nagar . Jayamahal Extension . TV Tower . Rahmath Nagar . RT Nagar . Sulthanpalya . Kanaka Nagar";
                            }
                            break;
                            case 'Nelamangala':{
                             cell1.innerHTML="406";
                             cell2.innerHTML="Corporation . Shivananda Stores . RM Guttahalli . Mekhri Circle . Hebbal . Byatarayanapura . Allalasandra . Yelahanka NES Office . Puttenahalli . Nagenahalli . Singanayakanahalli . Rajanukunte . Dibbur Cross . Kakolu . Sonnenahalli . Kamakshipura . Byatha . Kumbalagunte Cross . Madhure . Guttepalya . Hyadalu . Mylanahalli";
                            }
                            break;
                            case 'Amarajyothi Layout':{
                             cell1.innerHTML="415H";
                             cell2.innerHTML="Shivananda Circle . RM Guttahalli . Mekhri Circle . Hebbal . Veerannapalya . Nagavara Junction . Thanisandra";
                            }
                            break;
                }
        }
    
    if(src == 'Shivajinagar')
        {
            switch(dst)
                {
                    
                    case 'Banashankari':{
                         cell1.innerHTML="13";
                         cell2.innerHTML="Indian Express. Richmond Circle. Shanthinagar Bus Station. Wilson Garden. Ashoka Pillar. Jayanagar 4th Block. Sangam Circle";
                         }
                         break;
                    case 'Bhyrasandra':{
                         cell1.innerHTML="22A";
                         cell2.innerHTML="Indian Express. Richmond Circle. Shanthinagar Bus Station. Wilson Garden. Ashoka Pillar. Madhavan Park";
                         }
                         break;
                     case 'Hampinagar':{
                         cell1.innerHTML="63E";
                         cell2.innerHTML="Indian Express. Raj Bhavan. Shivananda Stores. Sheshadripuram. Malleshwaram Circle. Navarang Talkies. Rajajinagar ESI Hospital. Rajajinagar 6th Block. Prasanna Talkies. Manuvana. Vijayanagar";
                         }
                         break;
                     case 'Yeshwantpur':{
                         cell1.innerHTML="94";
                         cell2.innerHTML="Indian Express. Vidhana Soudha. Shivananda Stores. Sheshadripuram. Malleshwaram 8th Cross. Malleshwaram 18th Cross";
                         }
                         break;
                     case 'Kaval Byrasandra':{
                         cell1.innerHTML="112";
                         cell2.innerHTML="Indian Express . Vasanth Nagar . J C Nagar . R. T. Nagar . HMT Layout . Pushpanjali Talkies Sulthanpalya . Ganganagar";
                         }
                         break;
                      case 'Jeevanahalli':{
                         cell1.innerHTML="127";
                         cell2.innerHTML="Commercial Street . Lavanya Talkies . Sindhi Colony . Coxtown";
                         }
                         break;
                      case 'Koramangala':{
                         cell1.innerHTML="141K";
                         cell2.innerHTML="Mayo Hall . D'Souza Circle . Austin Town . Vannarapete . Viveka Nagar . Rajendra Nagar . Sony Circle";
                         }
                         break;
                       case 'Jagajeevanaram Nagar':{
                         cell1.innerHTML="155";
                         cell2.innerHTML="Indian Express . Kasthurba Road . M. G. Road . Corporation . K. R. Market . Sirsi Circle . Maramma Temple";
                         }
                         break;
                       case 'Chandra Layout':{
                         cell1.innerHTML="195";
                         cell2.innerHTML="Indian Express . K. R. Circle . Kempegowda Bus Station . Okalipuram . Sujatha Talkies . Magadi Road . Vijayanagar . Income Tax Layout";
                         }
                         break;
                       case 'Uttarahalli':{
                         cell1.innerHTML="210F";
                         cell2.innerHTML="Indian Express . Richmond Circle . Shantinagar Bus Station . Wilson Garden Police Station . Ashoka Pillar . Jayanagar 4th Block . Sangam Circle . Banashankari . Monotype . Kadirenahalli . Chikkalasandra";
                         }
                         break;
                        case 'Bettana Palya':{
                         cell1.innerHTML="230BSBS";
                         cell2.innerHTML="Vidhana Soudha . Corporation . Sirsi Circle . Bapuji Nagar . Nayandahalli . RV College . Kengeri . Basavanagar . Anche Palya . Hosapalya";
                         }
                         break;
                     case 'Annapoorneshwari Nagar':{
                         cell1.innerHTML="246A";
                         cell2.innerHTML="Raj Bhavan . Shivananda Stores . Malleshwaram Circle . Harischandra Ghat . Navarang Circle . Rajajinagar ESI Hospital . Basaveshwaranagar . KHB Colony . Kamakshipalya . Kottigepalya . Sunkada Katte";
                         }
                         break;
                      case 'Laggere':{
                         cell1.innerHTML="267B";
                         cell2.innerHTML="Fortis Hospital . Munireddy Palya . Mekhri Circle . CPRI . Yeshwantpur . Goraguntepalya . Jalahalli Cross . Rajagopalanagar . Laggere Bridge";
                         }
                         break;
                      case 'Yelahanka':{
                         cell1.innerHTML="290E";
                         cell2.innerHTML="FORTIS Hospital . Coles Park . Periyar Nagar Circle . Kadugondanahalli . Nagavara . Thanisandra . Ramakrishna Hegde Nagar . Ittige Factory . Kogilu . Maruthi Nagar";
                         }
                         break;
                      case 'Om Shakti Temple':{
                         cell1.innerHTML="303G";
                         cell2.innerHTML="Cunningham Road . Indian Express . FORTIS Hospital . Cantonment Railway Station . Coles Park . ITC . Maruthi Seva Nagar . Banasawadi . Horamavu . Jayanthi Nagar";
                         }
                         break;
                       case 'Muthsandra':{
                         cell1.innerHTML="329D";
                         cell2.innerHTML="Manipal Center . Domlur . Manipal Hospital . HAL . Marathahalli . Kundalahalli Gate . Siddapura . Varthuru Kodi . Varthuru . Madhura Nagar . Vallepura Gate";
                         }
                         break;
                    case 'Central Jail':{
                              cell1.innerHTML="347G";
                              cell2.innerHTML="Mayo Hall . Johnson Market . Adugodi . St John Hospital . Krupanidhi College . Madiwala Market . Silk Board . Bommanahalli . Kudlu Gate . Singasandra . Hosa Road";
                            }
                            break;
                  case 'Beguru':{
                              cell1.innerHTML="362C";
                              cell2.innerHTML="M G Road . Mayo Hall . Audugodi . St. John Hospital . Koramangala Water Tank . Madiwala Market . Silk Board . Bommanahalli . Virat Nagar . Vijaya Bank";
                            }
                            break;
                   case 'Yelenahalli':{
                              cell1.innerHTML="368H";
                              cell2.innerHTML="M G Statue . Richmond Circle . Shantinagar Bus Stand . Wilson Garden . Bangalore Dairy Circle . Gurappanapalya . Jayadeva Hospital . JP Nagar 3rd Phase . Bilekahalli . Hulimavu Gate . Hulimavu";
                            }
                            break;
                   case 'Atturu':{
                              cell1.innerHTML="404C";
                              cell2.innerHTML="Cantonment Railway Station . JC Nagar . Rahmat Nagar . RT Nagar . Ganganagar . Hebbal . Byatarayanapura . Allalasandra . Yelahanka NES Office . Yelahanka Satellite Town . Atturu Layout";
                            }
                            break;
                   case 'V Nagenahalli	':{
                              cell1.innerHTML="415";
                              cell2.innerHTML="Indian Express . Vasantha Nagar . Jayamahal Extension . TV Tower . Rahmath Nagar . RT Nagar . Sulthanpalya . Kanaka Nagar";
                            }
                            break;
                    case 'Chamundi Nagar':{
                             cell1.innerHTML="415J";
                             cell2.innerHTML="Indian Express . Vasantha Nagar . Jayamahal Extension . TV Tower . Rahmath Nagar . RT Nagar . HMT Layout . Dinnur . Sulthanpalya";
                            }
                            break;
                    case 'Yelahanka Satellite Town 5th Stage':{
                              cell1.innerHTML="404E";
                               cell2.innerHTML="Cantonment Railway Station . JC Nagar . Rahmat Nagar . RT Nagar . Ganganagar . Hebbal . Byatarayanapura . Allalasandra . Yelahanka NES Office . Yelahanka Satellite Town . Atturu Layout";
                            }
                            break;
                }
        }
    
    if(src == 'Yelahanka')
        {
           switch(dst)
            {
                    case 'Yeshwantpur': { cell1.innerHTML= "401";
                                          cell2.innerHTML= "NES Office . Yelahanka Satellite Town . Atturu Layout . Chikkabettahalli . MS Palya . Jalahalli East . Gangamma Circle . BEL Circle . Mathikere . Divanarapalya";
                                        }
                                        break;
                    case 'Peenya 2nd Stage':{ cell1.innerHTML="401A";
                                          cell2.innerHTML="NES Office . Yelahanka Satellite Town . Atturu Layout . Chikkabettahalli . MS Palya . Jalahalli East . Gangamma Circle . kg Halli Bridge . Jalahalli Cross . NTTF . Rajagopalanagar";
                    
                                         }
                                         break;
                case 'Yelahanka':{ cell1.innerHTML="407B";
                                   cell2.innerHTML="Yelahanka NES Office . Atturu . Chikkabettahalli . MS Palya . Lakshmipura Cross . Dodda Byalarkere . Shivakote . Muthkur . Hesaraghatta . Byatha . Sonnenahalli . Kakolu . Dibbur Cross . Rajanukunte . Thimmasandra . Bettahalasuru . Hunasemaranahalli . IAF . Kogilu Cross	"  ;  
                                }
                                break;
                case 'Chikkalasandra':{
                         cell1.innerHTML="401BA";
                         cell2.innerHTML="NES Office . Yelahanka Satellite Town . Atturu Layout . Chikkabettahalli . Vidyaranyapura . Nanjappa Circle . Nagaland Circle . BEL Circle . Mathikere . Divanarapalya . Yeshwantpur . Government Soap Factory . ISKCON . Rajajinagar 1st Block . Navarang Circle . Rajajinagar Industrial Area . Toll Gate . Vijayanagar . Maruthi Mandir . Attiguppe . Nayandahalli . PES College . Banashankari 3rd Stage . Padmanabha Nagar . Gowdana Palya";
                         }
                        break;
                     case 'Basaveshwaranagar':{
                         cell1.innerHTML="401BC";
                         cell2.innerHTML="NES Office . Yelahanka Satellite Town . Atturu Layout . Chikkabettahalli . Vidyaranyapura . Nanjappa Circle . Nagaland Circle . BEL Circle . Mathikere . Divanarapalya . Yeshwantpur . Government Soap Factory . ISKCON . Rajajinagar 1st Block . Navarang Circle . Modi Hospital . Shankar Mutt . Kamalanagar Water Tank . Basaveshwaranagar Circle	";
                         }
                        break;
                     case 'Chandra Layout':{
                         cell1.innerHTML="401E";
                         cell2.innerHTML="NES Office . Yelahanka Satellite Town . Atturu Layout . Chikkabettahalli . Vidyaranyapura . Nanjappa Circle . Nagaland Circle . BEL Circle . Mathikere . Divanarapalya . Yeshwantpur . Government Soap Factory . ISKCON . Rajajinagar 1st Block . Navarang Circle . Rajajinagar Industrial Area . Toll Gate . Vijayanagar . Maruthi Mandir . Income Tax Layout	";
                         }
                        break;
                       case 'Hampi Nagar':{
                         cell1.innerHTML="401H";
                         cell2.innerHTML="NES Office . Yelahanka Satellite Town . Atturu Layout . Chikkabettahalli . Vidyaranyapura . Nanjappa Circle . Nagaland Circle . BEL Circle . Mathikere . Divanarapalya . Yeshwantpur . Government Soap Factory . ISKCON . Rajajinagar 1st Block . Navarang Circle . Rajajinagar Industrial Area . Toll Gate . Vijayanagar . Maruthi Mandir";
                         }
                        break;
                        case 'Kengeri':{
                         cell1.innerHTML="401K";
                         cell2.innerHTML="NES Office . Yelahanka Satellite Town . Atturu Layout . Chikkabettahalli . Vidyaranyapura . Nanjappa Circle . BEL Circle . Mathikere . Divanarapalya . Yeshwantpur . Rajajinagar 1st Block . Rajajinagar ESI . Rajajinagar Industrial Area . Toll Gate . Vijayanagar . Moodalpalya . Nagarabhavi Circle . Mallathahalli Cross . Mariyappana Palya . Shirke KHB Quarters . Kengeri Satellite Town . Kommaghatta Road";
                         }
                        break;
                case 'Nelamangala' :{
                                       cell1.innerHTML="407F";
                                       cell2.innerHTML="Yelahanka NES Office . Atturu . Chikkabettahalli . MS Palya . Lakshmipura Cross . Dodda Byalarkere . Shivakote . Muthkur . Hesaraghatta . Guddadahalli . Kanakanagara Gate . Railway Gollahalli. Hyadalu . Mylanahalli	";
                                    } 
                                    break;
            }
        }
if(src == 'K R Market')
    {
        switch(dst)
            {
                case 'BTM Layout':{
                          cell1.innerHTML="1F";
                          cell2.innerHTML="Chamarajapet. Gandhi Bazar. Southend    Circle. Jayanagar 4th Block. Jayanagar East End";
                         }
                         break;
                    case 'Banashankari':{
                          cell1.innerHTML="11";
                          cell2.innerHTML="Basavanagudi Police Station. Nagasandra Circle.South End Circle. Sangam Circle";
                         }
                         break;
                 case 'Bhuvaneshwari Nagar':{
                          cell1.innerHTML="45A";
                          cell2.innerHTML="Chamarajapet. Ramakrishna Ashrama. Hanumantha Nagar. Srinivasa Nagar. Bank Colony. Kathriguppe";
                         }
                         break;
                 case 'Lakshmidevi Nagar':{
                          cell1.innerHTML="77A";
                          cell2.innerHTML="Chamarajapet. Sirsi Circle. Binny Mill. Magadi Road. Prasanna Talkies. Rajajinagar 6th Block. Rajajinagar ESI Hospital. Navarang Talkies. Rajajinagar 1st Block. Mahalakshmi Layout. Krishnananda Nagar. Kanteerava Nagar";
                         }
                         break;
                 case 'Kaval Byrasandra':{
                          cell1.innerHTML="111";
                          cell2.innerHTML="Corporation . Vasanth Nagar . J C Nagar . R. T. Nagar . HMT Layout . Pushpanjali Talkies Sulthanpalya . Ganganagar";
                         }
                         break;
                case 'Jeevanahalli':{
                          cell1.innerHTML="126A";
                          cell2.innerHTML="Corporation . Maharani College . Vidhana Soudha . Indian Express . Shivajinagar . Commercial Street . Lavanya Talkies . Coxtown Circle";
                         }
                         break;
                case 'Viveka Nagar':{
                          cell1.innerHTML="140";
                          cell2.innerHTML="Corporation . Subbaiah Circle . Elgin Floor Mill . Austin Town . Vannarapete";
                         }
                         break;
                 case 'Shivajinagar':{
                          cell1.innerHTML="150";
                          cell2.innerHTML="Corporation . Kasthurba Road . M. G. Road . Indian Express";
                         }
                         break;
                case 'Koramangala':{
                          cell1.innerHTML="163A";
                          cell2.innerHTML="Makkala Koota . Minerva Circle . Wilson Garden Police Station . Bangalore Dairy Circle . Audugodi . Koramangala Kalyana Mantapa . Koramangala Water Tank";
                         }
                         break;
                case 'Karishma Hills':{
                          cell1.innerHTML="210C";
                          cell2.innerHTML="Makkala Koota . Basavanagudi Police Station . South End Circle . Yediyur . Banashankari . Sarakki . Jaraganahalli Cross . Konanakunte Cross . Gubbalala";
                                     }
                         break;
                case 'Kempadyapana Halli':{
                          cell1.innerHTML="231G";
                          cell2.innerHTML="Sirsi Circle . Bapuji Nagar . Nayandahalli . RV College . Kengeri . Basavanagar . Anche Palya . Kumbalagudu . Kanminike . Hejjala . Dodderi Colony . Bethanagere Cross";
                         }
                         break;
                 case 'Kadabagere':{
                          cell1.innerHTML="245C";
                          cell2.innerHTML="Sirsi Circle . Magadi Road . Tollgate . KHB Colony . Kamakshipalya . Kottigepalya . Sunkada Katte . Byadarahalli . Gollarahatti . Kadabagere Gate";
                         }
                         break;
                case 'Ramadevanahalli':{
                          cell1.innerHTML="258S";
                          cell2.innerHTML="Corporation.Kempegowda Bus Station . Malleshwaram 8th Cross . Malleshwaram 18th Cross . Yeshwantpur . Jalahalli Cross . Chikka Bidarakallu . Anchepalya . Madanayakanahalli . Makali . Dasanapura . Arishinakunte . Binnamangala . Nelamangala . Basavanahalli . Mylanahalli Cross . Hyadalu . Railway Gollahalli . Kannamangala Gate";
                         }
                         break;
                case 'Dodda Gubbi':{
                          cell1.innerHTML="295";
                          cell2.innerHTML="Corporation . Indian Express . FORTIS Hospital . Bamboo Bazar . Coles Park . Lingarajapuram . Kacharakanahalli . Hennur Cross . Geddalahalli . Byrathi";
                         }
                         break;
                case 'Chalkere':{
                          cell1.innerHTML="302E";
                          cell2.innerHTML="Corporation . Vidhana Soudha . Indian Express . FORTIS Hospital . Cantonment Railway Station . Coles Park . ITC . Maruthi Seva Nagar . Indian Oil . Kammanahalli . Kalyan Nagar";
                         }
                         break;
                case 'Nekkundi Dommasandra':{
                          cell1.innerHTML="323H";
                          cell2.innerHTML="Corporation . Richmond Circle . Mayohall . Domlur . Manipal Hospital . HAL . Marathahalli . Kundalahalli Gate . Siddapura . Varthuru Kodi . Varthur";
                         }
                         break;
                case 'Subhash Nagar':{
                          cell1.innerHTML="347M";
                          cell2.innerHTML="Lalbaugh . Lakkasandra . Dairy Circle . St John Hospital . Krupanidhi College . Madiwala Market . Silk Board . Bommanahalli . Kudlu Gate . Singasandra . Hosa Road";
                         }
                         break;
                case 'Attibele':{
                         cell1.innerHTML="360A";
                         cell2.innerHTML="Lalbaugh . Lakkasandra . Dairy Circle . St John Hospital . Krupanidhi College . Madiwala Market . Silk Board . Bommanahalli . Kudlu Gate . Singasandra . Hosa Road . Konnappana Agrahara . Electronic City . Huskur . Hebbagodi . Narayana Hrudayalaya . Chandapura . Thirumagondanahalli Cross . Guddatti Gate . Yadavanahalli Gate";
                         }
                         break;
                    case 'Kadajakkanahalli':{
                         cell1.innerHTML="372G";
                         cell2.innerHTML="Minerva Circle . Lalbaugh . Wilson Garden . Lakkasandra . Bangalore Dairy Circle . Gurappanapalya . Jayadeva Hospital . JP Nagar 3rd Phase . Bilekahalli . Hulimavu Gate . Gottigere . Basavanapura Gate . Kalkere . Bannerghatta Circle . Mantapa Cross . Koppa Gate . Jigani . Konasandra Cross . Nosenoor Cross";
                         }
                         break;
                    case 'Amarajyothi Layout':{
                         cell1.innerHTML="415G";
                         cell2.innerHTML="Corporation . Majestic . Shivananda Circle . RM Guttahalli . Mekhri Circle . Hebbal . Veerannapalya . Nagavara Junction . Thanisandra";
                         }
                         break;
                    case 'Yelahanka Satellite Town 5th Stage':{
                         cell1.innerHTML="402";
                         cell2.innerHTML="Corporation . Majestic . Shivananda Stores . RM Guttahalli . Mekhri Circle . Hebbal . Byatarayanapura . Allalasandra . Yelahanka NES Office . Yelahanka Satellite Town . Atturu Layout";
                         }
                         break;
            }
    }
}