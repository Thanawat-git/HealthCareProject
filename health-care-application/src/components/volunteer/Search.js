import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import * as search from "../../actions/searchEld.action";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, InputAdornment, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    minWidth: 350,
  },
});
export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState();
  const dispatch = useDispatch()
  const classes = useStyles();

  useEffect(() => {
    Axios.get(`http://localhost:3001/elder/search`)
    .then(res=>{
      setOptions(res.data);
      console.log(res.data)
      dispatch(search.add(res.data))
    })
  }, []);

  var [foundSearch, setfoundSearch] =  React.useState([]) // เก็บ array ของผลลัพธ์ ที่ค้าหาเจอ
  var [selectEld, setselectEld] =  React.useState({}) // เก็บค่าต่างๆของคนที่ถูกเลือก

  const searchArr = (e)=>{
    var searchvalue = e.target.value;
    console.log('searchvalue: '+options)
    // var filterNames = options.filter((v,i)=>{
    //     return(v.ELD_FIRSTNAME.includes(searchvalue));
    // })
    // setfoundSearch(filterNames)
    console.log('foundSearch: '+foundSearch.length)
  }
 useEffect(() => {
  dispatch(search.selectedEld(selectEld.ELD_ID_NUMBER))
 }, [selectEld])
  function handleClickOpen(value){
    setselectEld(value)
    console.log('value: ', value)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const saveSelected = ()=>{
    dispatch(search.selectedEld(selectEld.ELD_ID_NUMBER))
  }
  return (
    <React.Fragment>
      <div className="search-fill">
      <TextField
      label="กรอกชื่อหรือนามสกุล"
      id="standard-start-adornment"
      onKeyUp={(e)=>searchArr(e)}
      InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
      }}
      />
      </div>
    
      <div className="inner-seach2">
        {
          foundSearch.length !=0 && foundSearch.map((value,index)=>{
            return(
                <div>
                  <Paper elevation={3}>
                    <Button onClick={()=>handleClickOpen(value)}>
                    {`${value.ELD_ID_NUMBER}   ${value.ELD_FIRSTNAME} ${value.ELD_LASTNAME}`}
                    </Button>
                  <hr/>
                  </Paper>
                </div>
            )
          })
        }
       
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            className={classes.title} 
          >
            <DialogTitle >หมายเลข {selectEld.ELD_ID_NUMBER}</DialogTitle>
            <DialogContent>
              <DialogContentText>
              {`${selectEld.ELD_FIRSTNAME} ${selectEld.ELD_LASTNAME}`}
              </DialogContentText>
              <DialogContentText>
              ตรวจเยี่ยมครั้งล่าสุด {selectEld.ELD_LAST_VISIT_DATE}
              </DialogContentText>
              <DialogContentText>
              ตรวจโดย {selectEld.ELD_LAST_VISIT_DATE}
              </DialogContentText>
            </DialogContent>
            
            <div className="bt-searchInfo">
            <Link to="/editeld">
              <Button className="bt1" onClick={saveSelected}>
                แก้ไขข้อมูลพื้นฐาน
              </Button>
            </Link>
            <Link to="/mainmenu">
              <Button className="bt2" onClick={saveSelected} >
                เก็บข้อมูลสุขภาพ
              </Button>
            </Link>
          </div>
          </Dialog>
      </div>
    </React.Fragment>
  );
}
