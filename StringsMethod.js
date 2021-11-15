/*
PROPERTIES : LENGTH
METHODS :  str.SPLIT("" OR " "), str.REVERSE(), str.JOIN("" OR " "),
        or str.split("").reverse().join("") we can do this also
str.charAt(STRING INDEX), 
str.charCodeAt( STRING INDEX), STRING.fromCharCode(NUMBER), 
str.includes('WORD OR CHARCETER'),
 str1.concat(str2) , 
 
 str1.endwith("word") return true or false 
 str1.startwith("word") return true or fasle

str.indexOf("word") , str.lasIndexOf("word")

str.match(//g) use fo regex

str.repeat(no of time to repeat str)

str.replace("new value" ,"old value")

str.serach("word") //it is similar to indexOf but here we can also pass regex expression

str.slice(start index , end index) end index is exculded while making and return a new  sub string without modifin orignal
str.substr(startindex, endindex) it returen a portion of  string and it includes end index also
str.substring(startindex, end index) simlar to slice 

str.tolowerCase() , str.toUperCase()

str.trim() it reomves start and ending all white space but not form inbetwwedn
str.trimRight() remove whitespace from end 
str.tirmLeft() remove whitespace from start

*/



//all functions in details..........................below.......................

//REVERSING A STRING USING SPLIT , REVERSE AND JOIN
//str.split() , str.join() , str.reverse()

//METHOD TO REVERSE ULTI STRING TO SIDHI STRING BELOW
/*
 var str = "i evol tpircsavaj";
 console.log( str.split("").reverse().join("").split(" ").reverse().join(" "));
 */

//CHARAT TELLS WHICH CHARCTER AT GIVEN INDEX. INDEX START FROM 0
//CHARCODEAT TELLS INTGER VALUE OF THAT INDEX LIKE A HAVE 65
/*
    var str = "aK rishna";
    if (str.charAt(2) == "") {
         console.log("hello");
        } else console.log(str.charCodeAt(1));
*/

//CONCAT JORDA HAI 2 STRINGS NU
//ENDSWITH CHECK KRDA HAI KI JO WORD PASS KITI ODE NAL HI END HORI STRING YA NHI
/*
str1 = "hare krishna hare krishna krishna krishna hare hare krishna";
str2 = " hare raam hare raam raam raam hare hare"

console.log(str1.concat(str2));
console.log(str1.endsWith('krishna'));

*/

//STRING.FROMCHARCODE(114 OR ANY NUBMER) USED TO CREATE CHARCTER USING NUMBER
/* 

         console.log(String.fromCharCode(98));
         
         */

//INCLUDES TELLS THAT IT INCLUDE OR NOT RESULT TO TRUE OR FALSE
/*    
                var str = "krishna is with me";
                console.log(str.includes('r')) 
                console.log(str.includes("is"));
                console.log(str.includes('r',1)) 
                  
              */




            




//INDEXOF FIND INDEX OF PARTICULAR WORD FROM START AND LASTINDEXOF DOES THE SAME BUT FOROM END
    /*  
    var str = "hello end is the end";
    console.log(str.indexOf("end"));  //reverse of charAt here we give string in char we give index
    console.log(str.lastIndexOf("end")); // it is revrse of indexOf it find word form last and indexof find word from start
    
    */





    //REPEAT REPEATS THE SRING MAKE NUMBER OF DUPLICATE COPIES. AND REPLACE USE TO REPLACE THE SPECFIC WORD OR STRING WITH NEW VALUE
 /* 
    var str = " hello this is krishna";
    console.log(str.repeat(5))
    console.log(str.replace("hello" ,"krishna"))
    console.log(str.replace("hello this","radha").repeat(5));
        
 */


    


    // SERACH IS RETURN INDEX OR ALSO CHEK WETERH A PARTICULAR REGEX EXPESSION IS THERE OR NOT
    // SLICE IS USED TO GET SUB STRING BY GIVING START AND ENDING INDEX
    
   /*
   
   const str = "         THisrsi is sourabh   ";

    const newstr = str.search("is");  // looks similar to indexOf. rturn index where word is present but it can also serch using regex expressions
    console.log(newstr);

    console.log(str.slice(7)) // slcie return a new string wihtou effection orignal
    console.log(str)
    console.log(str.slice( 1,5 )); // create a sub string here 7 is not inclued it will be from 4 to 6
    console.log(str.substring(1,5));
    console.log(str.substr(1,5));
    console.log(str.toLowerCase());
    console.log(str.toUpperCase());

    console.log(str.trim()); // remove extra white spacess from both ends not in between

    */


   // _____________________________________________extra fn______________________________//


   var str = "hello this"
   console.log(str.padEnd(25,'a')) // string 25 words di hovegi but agar shoti hougi ta baki jga 'a' nal pri jaogi
   console.log(str.padEnd(25,'.'))// string 25 words di hovegi but agar shoti hougi ta baki jga '.' nal pri jaogi
   console.log(str.padStart(15,'.')) 