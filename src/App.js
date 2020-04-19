import React from 'react';
import './App.css';
import 'moment/locale/fr'  // without this line it didn't work

var moment = require('moment');
moment.locale('fr');         // fr

var startOfWeek = moment().startOf('isoweek').format("YYYY-MM-DD");
var endOfWeek   = moment().endOf('isoweek').format("YYYY-MM-DD");


class List extends React.Component{ //display list of events from props.data
    render() {
        return (
            <ul className="list-group">
                {this.props.data.map(entry => <li key={entry.id} className="list-group-item">
                    <h6>Date : {moment.parseZone(entry.date_start).format("dddd à  kk:mm").toString()}</h6>
                    <small>Durée en minute : {entry.duration_minute}</small>
                    <br></br>
                    <small>Coach : {entry.coach}</small><small> | Activité : {entry.activity}</small><small> |
                    Établissement : {entry.establishment}</small>

                </li>)}
            </ul>
        );
    }
}
class Filter extends React.Component{ //Filter button for a certain day

    render() {

        if(this.props.day === -1){
            return <button type="button" className="btn btn-outline-danger"  onClick={() => this.props.onClick()}>{this.props.value}</button>;
        }
        else   {
            return <button type="button" className="btn btn-outline-primary"  onClick={() => this.props.onClick()}>{this.props.value}</button>;

        }

    }
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[],
        isdataSet : false,
        filter : -1,
    }
  }
  componentDidMount() {
      fetch("https://back.staging.bsport.io/api/v1/offer/?company=6&min_date="+startOfWeek + "&max_date="+endOfWeek)
          .then(res => res.json())
          .then(
              (result) => {
                  var res = [];
                  result["results"].forEach((item) => res.push(item));
                  this.setState({"data": res, "isdataSet":true});
              });
  }

    filter(i){
      this.setState({filter: i});
  }
   render() {
       if(this.state.isdataSet){
           var res = [];
           if(this.state.filter >= 0){
               this.state.data.forEach((item) => {
                   if(moment(item.date_start).weekday() === this.state.filter) res.push(item);
               });
           }
           else res = this.state.data;
           return (
               <div className="container">
                   <div className="row justify-content-md-center">
                       <div className="col-7">
                           <h2>Séléctionnez un jour pour voir les séances correspondantes</h2>
                           <h6>Le calendrier montre les séances de la semaine actuelle</h6>
                           <br></br>
                           <div className="text-center">
                           <Filter onClick={() => this.filter(0)} value={"Lundi"} ></Filter>
                           <Filter onClick={() => this.filter(1)} value={"Mardi"} ></Filter>
                           <Filter onClick={() => this.filter(2)} value={"Mercredi"} ></Filter>
                           <Filter onClick={() =>this.filter(3)} value={"Jeudi"} ></Filter>
                           <Filter onClick={() => this.filter(4)} value={"Venredi"} ></Filter>
                           <Filter onClick={() => this.filter(5)} value={"Samedi"} k></Filter>
                               <Filter onClick={() => this.filter(6)} value={"Dimanche"} ></Filter><br></br>
                           <Filter onClick={() => this.filter(-1)} value={"Désactiver le filtre"} day={-1} ></Filter>
                           </div>
                       </div>
                       <div className="col-4">
                           <List data={res}/>
                       </div>

                   </div>
               </div>
           );
      }
       else return "Loading...";

  }

}


export default Calendar;
