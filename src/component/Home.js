import React, { Component } from 'react'
import axios from "axios";
import DisplayDayData from "./DisplayDayData";

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            day1: [],
            day2: [],
            day3: [],
            day4: [],
            day5: []
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
// 8            
//          }
//          // get day 3
//          for (let i = 17; i < 25; i++){
//              const element = array[i];
// 17            
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

async getWeather(){
      try {
          console.log("Here we are");
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=30135&units=imperial&APPID=d7217786f668d3f39157b1932db33830`);
      const weatherData = response.data;


    //Parse to get data for each dat
      let day1 = weatherData.list.slice(0,8);
      let day2 = weatherData.list.slice(8,16);
      let day3 = weatherData.list.slice(16,24);
      let day4 = weatherData.list.slice(24,32);
      let day5 = weatherData.list.slice(32,41);

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
                <DisplayDayData dayData={this.state.day1} />
            </div>
        )
    }
}
