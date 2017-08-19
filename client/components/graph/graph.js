import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer , linearGradient } from 'recharts';
import moment from 'moment';

export default class Graph extends Component {

  render() {
    console.log("Graph: ", this.props.forecast.data.daily.data);
    let forecast = this.props.forecast.data.daily.data
    let data = [];

    for (var i = 0; i < forecast.length; i++) {
      let obj = {
          name: moment().subtract(i, 'days').format('dddd').split('').slice(0,3).join(''),
          Min_Temp: forecast[i].temperatureMin,
          Max_Temp: forecast[i].temperatureMax
        }
      data.push(obj);
    }

    return (
      <div className='graph container col-md-10 col-md-offset-1'>
        <h3> Let's look at this week </h3>

        <ResponsiveContainer width="100%" height={ 300 } >
          <AreaChart
            data={ data }
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }} >

            <defs>
              <linearGradient id="min" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#85d4f5" stopOpacity={ 0.8 }/>
                <stop offset="95%" stopColor="#85d4f5" stopOpacity={ 0 }/>
              </linearGradient>
              <linearGradient id="max" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f5ce69" stopOpacity={ 0.8 }/>
                <stop offset="95%" stopColor="#f5ce69" stopOpacity={ 0 }/>
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Min_Temp"
              stroke="#85d4f5" fillOpacity={ 1 } fill="url(#min)" />
            <Area type="monotone" dataKey="Max_Temp"
              stroke="#f5ce69" fillOpacity={ 1 } fill="url(#max)"/>
          </AreaChart>
        </ResponsiveContainer>

      </div>
    );
  }
}
