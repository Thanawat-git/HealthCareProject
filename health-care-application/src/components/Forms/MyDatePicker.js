import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function MyDatePicker(props) {
  const [years, setYears] = useState([]);
  const [days, setDays] = useState([]);
  const [cy, setCY] = useState(true);

  const [yea, setYea] = useState();
  const [mon, setMon] = useState();
  const [day, setDay] = useState();
  const [cd, setCD] = useState(true);

  const getyear = (e) => {
    var i = 60;
    var ny = new Date();
    var y = ny.getFullYear();
    const xxx = (s) => {
      return y - s + 543;
    };
    if (cy) {
      setCY(false);
      while (i < 150) {
        const r = xxx(i);
        setYears((years) => [...years, r.toString()]);
        i++;
        // console.log(years)
      }
    }
    setYea(e.target.value);
    // console.log(yea)
    // console.log(mon)
  };

  // (yea != ' ' && yea != undefined) && (mon != ' ' && mon != undefined)
  const getday = () => {
    console.log(yea);
    console.log(mon);
    // console.log(a)
    if (mon != undefined) {
      console.log(2);
      console.log(typeof mon);
      console.log(mon);
      if (mon === "กุมภาพันธ์") {
        console.log(5);
        if (yea === undefined) {
          console.log(3);
          loopDays(28);
        } else {
          console.log(4);
          var a = parseInt(yea) - 543;
          if (
            (a % 4 == 0 && a % 100 != 0) ||
            (a % 4 == 0 && a % 100 == 0 && a % 400 == 0)
          ) {
            console.log(5.1);
            loopDays(29);
          } else {
            console.log(5.2);
            loopDays(28);
          }
        }
      } else if (
        mon === "เมษายน" ||
        mon === "มิถุนายน" ||
        mon === "กันยายน" ||
        mon === "พฤศจิกายน"
      ) {
        console.log(6);
        // setDays([])
        loopDays(30);
      } else {
        console.log(7);
        loopDays(31);
      }
    }
  };

  const loopDays = (d) => {
    // setDays([])
    var x = 0;
    const countDay = (s) => {
      return s + 1;
    };
    console.log(`mon ${mon}`);
    console.log(`d ${d}`);
    console.log(`length day ${days.length}`);
    // days.length!=d || days === undefined ? setCD(true) : setCD(false)
    if (days.length != d || days === undefined || days.length / 2 != d) {
      setCD(true);
      setDays([]);
    } else {
      setCD(false);
    }

    if (cd) {
      // setCD(false)
      while (x < d) {
        const dd = countDay(x);
        setDays((days) => [...days, dd.toString()]);
        x++;
      }
    }
  };

  function handleInputMonthChange(event, value) {
    setMon(value)
    
  }
  function handleInputYearChange(event, value) {
    setYea(value)
  }
  function handleInputDayChange(event, value) {
    setDay(value)
  }

//   function show() {
//     console.log(yea);
//     console.log(mon);
//     console.log(day);
//   }

  return (
    <div className="row">
      <div className="col-12 col-xl-4 mb-15">
        <Autocomplete
          id="year"
          options={years}
          getOptionLabel={(option) => option}
          disableClearable={true}
          //   style={{ width: 300 }}
          onInputChange={handleInputYearChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="ปี พ.ศ."
              variant="outlined"
              value={yea}
              onClick={getyear}
            />
          )}
        />
      </div>
      <div className="col-12 col-xl-4 mb-15">
        <Autocomplete
          id="month"
          options={Months}
          getOptionLabel={(option) => option}
          disableClearable={true}
          //   style={{ width: 300 }}
        //   value={mon}
          onInputChange={handleInputMonthChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="เดือน"
              variant="outlined"
            //   onClick={(e) => setMon(e.target.value)}
            />
          )}
        />
      </div>
      <div className="col-12 col-xl-4">
        <Autocomplete
          id="day"
          options={days}
          getOptionLabel={(option) => option}
          disableClearable={true}
          //   style={{ width: 300 }}
          onInputChange={handleInputDayChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="วัน"
              variant="outlined"
              onClick={getday}
            />
          )}
        />
      </div>
      {/* <button type="button" onClick={show} >show</button> */}
    </div>
  );
}

const Months = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];
// const Months = [
//     {name: 'มกราคม', num: 1},
//     {name: 'กุมภาพันธ์', num: 2},
//     {name: 'มีนาคม', num: 3},
//     {name: 'เมษายน', num: 4},
//     {name: 'พฤษภาคม', num: 5},
//     {name: 'มิถุนายน', num: 6},
//     {name: 'กรกฎาคม', num: 7},
//     {name: 'สิงหาคม', num: 8},
//     {name: 'กันยายน', num: 9},
//     {name: 'ตุลาคม', num: 10},
//     {name: 'พฤศจิกายน', num: 11},
//     {name: 'ธันวาคม', num: 12}
// ]
