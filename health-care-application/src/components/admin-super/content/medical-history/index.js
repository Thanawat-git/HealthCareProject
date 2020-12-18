import { FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

export default function MedicalHistory() {
    const classes = useStyles();
    const [state, setState] = useState({
        y1:'',y2:'',m1:'',m2:'',
    })
    const {y1,y2,m1,m2,} = state
    const [reArr, setreArr] = useState(testArr)

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

  const handleChange = (event) => {
    setState({...state,[event.target.name]:event.target.value})
  };


    useEffect(() => {
        let resule = testArr.filter(value=>{
            // return (value.id >= state1 && value.id <= state2)
            return value.id > y1
        })
        console.log('resule ',resule)
        setreArr(resule)
    }, [y1,y2,m1,m2])
  return (
    <React.Fragment>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">ประวัติการตรวจ</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              {/* Filter */}
              <h6>ช่วงเวลา</h6>
              <FormControl className={classes.formControl}>
                <InputLabel>ปี</InputLabel>
                <Select
                open={open1}
                onClose={()=>setOpen1(false)}
                onOpen={()=>setOpen1(true)}
                name="y1"
                value={y1}
                onChange={handleChange}
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={5}>2563</MenuItem>
                <MenuItem value={10}>2562</MenuItem>
                <MenuItem value={10}>2561</MenuItem>
                <MenuItem value={10}>2560</MenuItem>
                {/* <MenuItem value={}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>เดือน</InputLabel>
                <Select
                open={open2}
                onClose={()=>setOpen2(false)}
                onOpen={()=>setOpen2(true)}
                name="m1"
                value={m1}
                onChange={handleChange}
                >
                <MenuItem value=""><em>None</em></MenuItem>
                {Months.map((value,index)=>{
                    return <MenuItem value={index+1}>{value}</MenuItem>
                })}
                </Select>
            </FormControl>
            <strong style={{ fontSize: 50 }}> <span>-</span> </strong>
            <FormControl className={classes.formControl}>
                <InputLabel>ปี</InputLabel>
                <Select
                open={open3}
                onClose={()=>setOpen3(false)}
                onOpen={()=>setOpen3(true)}
                name="y2"
                value={y2}
                onChange={handleChange}
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={5}>2563</MenuItem>
                <MenuItem value={10}>2562</MenuItem>
                <MenuItem value={10}>2561</MenuItem>
                <MenuItem value={10}>2560</MenuItem>
                {/* <MenuItem value={}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>เดือน</InputLabel>
                <Select
                open={open4}
                onClose={()=>setOpen4(false)}
                onOpen={()=>setOpen4(true)}
                name="m2"
                value={m2}
                onChange={handleChange}
                >
                <MenuItem value=""><em>None</em></MenuItem>
                {Months.map((value,index)=>{
                    return <MenuItem value={index+1}>{value}</MenuItem>
                })}
                </Select>
            </FormControl>
            </div>
            <div className="col-4">
                {/* search by name lastname or id */}
            </div>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">id</th>
                  <th style={{ textAlign: "center" }}>ชื่อ - นามสกุล</th>
                  <th scope="col">วันที่</th>
                </tr>
              </thead>

              <tbody>
                {reArr.map((value, index) => {
                //   if(value.id>state1 || value.id<state2){
                    return (
                        <tr>
                          <td> {index + 1} </td>
                          <td> {value.id} </td>
                          <td style={{ textAlign: "center" }}> {value.name} </td>
                          <td> {value.date} </td>
                        </tr>
                      );
                //   }
                    
                })}
                {/* {
                    testArr.filter()
                
                } */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

const testArr = [
  {
    id: 1,
    name: "AA",
    date: "2563-01-01",
  },
  {
    id: 2,
    name: "B",
    date: "2563-01-01",
  },
  {
    id: 3,
    name: "CA",
    date: "2563-01-01",
  },
  {
    id: 4,
    name: "DA",
    date: "2562-01-01",
  },
  {
    id: 5,
    name: "E",
    date: "2562-01-01",
  },
  {
    id: 6,
    name: "F",
    date: "2563-02-01",
  },
  {
    id: 7,
    name: "G",
    date: "2563-02-01",
  },
  {
    id: 8,
    name: "H",
    date: "2562-02-01",
  },
  {
    id: 9,
    name: "I",
    date: "2562-03-01",
  },
  {
    id: 10,
    name: "J",
    date: "2562-04-01",
  },
  {
    id: 11,
    name: "K",
    date: "2560-01-01",
  },
  {
    id: 12,
    name: "P",
    date: "2560-01-01",
  },
];

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