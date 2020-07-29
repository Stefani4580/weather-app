import React, { Component } from 'react'
import axios from "axios";
import DisplayDayData from "./DisplayDayData";

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            day1: [],
            day1HighLow: [],
            day2: [],
            day2HighLow: [],
            day3: [],
            day3HighLow: [],
            day4: [],
            day4HighLow: [],
            day5: [],
            day5HighLow: [],
        }
    }

    // Pseudocode
//      1 day 8 records
//      5 days 40 records

// 
//      let list = response.data.list returns 40 objects.
//          // get first day
//          for (let j = 0; j < 8; j++) {

//              const element = 8[j];
             
//          }
//          // get day 2
//          for (let i = 8; i < 17; i++){
//              const element = array[i];
//           
//          }
//          // get day 3
//          for (let i = 17; i < 25; i++){
//              const element = array[i];
//           
//          }
//          // get day 4

//         for (let i = 25; i < 33; i++) {
//             const element = array[i];
            
//         } 
//          // get day 5

//         for (let i = 33; i < 41; i++) {
//             const element = array[i];
            
//         } 

// class DayForecast {
//     constructor(day){
//         this.day = day;
//         this.temps = [];
//     }

// }


// There is a lot of repeating functionality in this code.  I did it because I do not completely understand when I see this code running more than once.  I kept the data individually instead of in an array to combat the seemingly randomness of the multiple calls.  I know refactoring would be MUCH better, but I have no time to experiment.  I just have to get it done.
async getWeather(){
      try {
          console.log("Here we are");
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=30135&units=imperial&APPID=d7217786f668d3f39157b1932db33830`);
      const weatherData = response.data;


    //Parse to get data for each date
      let day1 = weatherData.list.slice(0,8);
      let day2 = weatherData.list.slice(8,16);
      let day3 = weatherData.list.slice(16,24);
      let day4 = weatherData.list.slice(24,32);
      let day5 = weatherData.list.slice(32,41);

    // Psuedocode
    // Do this for each day to get the High and the Low
    // let alltemps =[];
    // for (let i = 0; i < day1.length; i++) {
    //     add temp to alltemps
    // }
    // Sort alltemps  positiveArray.sort(function(a, b){return a-b});
    // Set this.state.day1HighLow to [high, low]

    // Get Day1 High and Low
    let alltemps = [];
    for (let i = 0; i < day1.length; i++) {
        const hourlyRecord = day1[i];
        alltemps.push(hourlyRecord.main.temp);
    }
    alltemps.sort(function(a,b){return a-b})
    let hiLow = [];
    hiLow.push(alltemps.pop());
    hiLow.push(alltemps[0]);
    this.setState((state)=>{
        state.day1HighLow = hiLow;
    })
    

      this.setState((state)=>{
        state.day1 = day1;
        state.day2 = day2;
        state.day3 = day3;
        state.day4 = day4;
        state.day5 = day5;
          return state;
        
      })


      console.log("This is weatherData:", weatherData);
      console.log("This is state:", this.state);

  
 
      } catch (error) {
        console.log("error: ", error)
      }
    }
  

    componentDidMount = () =>{
        this.getWeather();
        // const days = this.state.fiveDay[0].map((day)=>{
        //     return (
        //         day.map((d) => {
        //             return (<div>
        //                 <h1> {day[0].main.temp} </h1>
        //                 </div>
        //             )
        //         })
        //     )
        // })

    }

    render() {
        const fiveDays = [];
        fiveDays.push(this.state.day1);
        fiveDays.push(this.state.day2);
        fiveDays.push(this.state.day3);
        fiveDays.push(this.state.day4);
        fiveDays.push(this.state.day5);
    
        const listOfDays = this.state.day1.map((day)=>{
            console.log(day);
            return ( 
                <div>
            <h1>{day.dt_txt}</h1>  
            <h2>{day.main.temp}</h2>
                </div>
                )

       })
   

        return (
            <div>
                <h1>Day1 High:  {this.state.day1HighLow[0]}</h1>
                <h1>Day1 Low:   {this.state.day1HighLow[1]}</h1>
                <DisplayDayData dayData={this.state.day1} />
                <DisplayDayData dayData={this.state.day2} />
                <DisplayDayData dayData={this.state.day3} />
                <DisplayDayData dayData={this.state.day4} />
                <DisplayDayData dayData={this.state.day5} />
            </div>
        )
    }
}
